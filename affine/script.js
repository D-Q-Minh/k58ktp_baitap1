// Kích thước bảng chữ cái
const M = 26;

// Hàm tìm ƯCLN (Greatest Common Divisor) - Sử dụng thuật toán Euclid
function gcd(a, b) {
    while (b) {
        [a, b] = [b, a % b];
    }
    return a;
}

// Hàm tìm Nghịch đảo nhân Modulo (a^-1 mod M)
// Trả về -1 nếu nghịch đảo không tồn tại (gcd(a, M) != 1)
function modInverse(a) {
    a = a % M;
    // Vét cạn từ 1 đến M-1
    for (let x = 1; x < M; x++) {
        if ((a * x) % M === 1) {
            return x;
        }
    }
    return -1;
}

// Hàm Mã hóa Affine
function encrypt(plaintext, a, b) {
    let ciphertext = "";
    
    for (let i = 0; i < plaintext.length; i++) {
        const char = plaintext[i];
        let base = 0;
        let x = -1; // Giá trị số của ký tự

        if (char >= 'A' && char <= 'Z') {
            base = 'A'.charCodeAt(0);
            x = char.charCodeAt(0) - base;
        } else if (char >= 'a' && char <= 'z') {
            base = 'a'.charCodeAt(0);
            x = char.charCodeAt(0) - base;
        } else {
            // Giữ nguyên các ký tự không phải là chữ cái
            ciphertext += char;
            continue;
        }

        // Áp dụng công thức mã hóa: E(x) = (ax + b) mod M
        let y = (a * x + b) % M;
        
        // Chuyển giá trị số thành ký tự và thêm vào bản mã
        ciphertext += String.fromCharCode(y + base);
    }
    return ciphertext;
}

// Hàm Giải mã Affine
function decrypt(ciphertext, a, b) {
    let plaintext = "";
    
    // Tìm a^-1
    const a_inverse = modInverse(a);

    if (a_inverse === -1) {
        // Lỗi này không nên xảy ra nếu đã kiểm tra ở processText, nhưng vẫn cần đề phòng.
        return "Lỗi: Khóa 'a' không hợp lệ.";
    }
    
    for (let i = 0; i < ciphertext.length; i++) {
        const char = ciphertext[i];
        let base = 0;
        let y = -1; // Giá trị số của ký tự mã hóa

        if (char >= 'A' && char <= 'Z') {
            base = 'A'.charCodeAt(0);
            y = char.charCodeAt(0) - base;
        } else if (char >= 'a' && char <= 'z') {
            base = 'a'.charCodeAt(0);
            y = char.charCodeAt(0) - base;
        } else {
            // Giữ nguyên các ký tự không phải là chữ cái
            plaintext += char;
            continue;
        }

        // Áp dụng công thức giải mã: D(y) = a^-1 (y - b) mod M
        // Math.pow(y - b, 1) thực chất là (y - b). 
        // JavaScript modulo (%) có thể trả về số âm, nên cần (n % M + M) % M để đảm bảo kết quả dương.
        let raw_x = y - b;
        let x = (a_inverse * raw_x);
        
        // Đảm bảo kết quả cuối cùng là dương: (x % M + M) % M
        x = (x % M + M) % M;

        // Chuyển giá trị số thành ký tự và thêm vào bản gốc
        plaintext += String.fromCharCode(x + base);
    }
    return plaintext;
}


// Hàm xử lý chính khi người dùng nhấn nút
function processText(mode) {
    const ioText = document.getElementById('ioText').value;
    const keyA = parseInt(document.getElementById('a').value);
    const keyB = parseInt(document.getElementById('b').value);
    const outputText = document.getElementById('outputText');
    const errorMessage = document.getElementById('errorMessage');
    
    errorMessage.textContent = "";
    
    // 1. Kiểm tra Khóa 'a'
    if (gcd(keyA, M) !== 1) {
        errorMessage.textContent = `LỖI: Khóa A (${keyA}) phải là số nguyên tố cùng nhau với 26. gcd(A, 26) = ${gcd(keyA, M)} ≠ 1.`;
        outputText.value = "";
        return;
    }
    
    // 2. Thực hiện Mã hóa hoặc Giải mã
    let result = "";
    if (mode === 'encrypt') {
        result = encrypt(ioText, keyA, keyB);
    } else if (mode === 'decrypt') {
        result = decrypt(ioText, keyA, keyB);
    }
    
    // 3. Hiển thị Kết quả
    outputText.value = result;
}