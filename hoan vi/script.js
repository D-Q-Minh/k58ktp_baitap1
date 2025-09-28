// Hàm chuẩn hóa văn bản: loại bỏ khoảng trắng, chuyển thành chữ hoa
function normalizeText(text) {
    return text.toUpperCase().replace(/[^A-Z]/g, '');
}

// Hàm xác định thứ tự sắp xếp của Khóa
function getKeyOrder(key) {
    // Tạo một mảng các đối tượng {char: ký tự, index: chỉ mục ban đầu}
    const keyArray = Array.from(key).map((char, index) => ({ char, index }));
    
    // Sắp xếp mảng dựa trên ký tự (theo thứ tự bảng chữ cái)
    keyArray.sort((a, b) => a.char.localeCompare(b.char));
    
    // Trả về mảng chỉ mục đã được sắp xếp
    return keyArray.map(item => item.index);
}

// -------------------------------------------------------------
// THUẬT TOÁN MÃ HÓA
// -------------------------------------------------------------
function encrypt(plaintext, key) {
    const cleanPlaintext = normalizeText(plaintext);
    const cleanKey = normalizeText(key);

    if (!cleanKey) return "";
    
    const cols = cleanKey.length;
    let rows = Math.ceil(cleanPlaintext.length / cols);
    
    // 1. Thêm ký tự đệm (Padding)
    let paddedText = cleanPlaintext;
    const paddingNeeded = (rows * cols) - cleanPlaintext.length;
    for (let i = 0; i < paddingNeeded; i++) {
        paddedText += 'X'; // Dùng 'X' làm ký tự đệm
    }

    // 2. Xây dựng Ma trận
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
        for (let j = 0; j < cols; j++) {
            matrix[i][j] = paddedText[i * cols + j];
        }
    }

    // 3. Xác định thứ tự cột
    const colOrder = getKeyOrder(cleanKey);

    // 4. Đọc theo thứ tự cột đã hoán vị để tạo Bản mã
    let ciphertext = "";
    for (const colIndex of colOrder) {
        for (let i = 0; i < rows; i++) {
            ciphertext += matrix[i][colIndex];
        }
    }

    return ciphertext;
}

// -------------------------------------------------------------
// THUẬT TOÁN GIẢI MÃ
// -------------------------------------------------------------
function decrypt(ciphertext, key) {
    const cleanCiphertext = normalizeText(ciphertext);
    const cleanKey = normalizeText(key);

    if (!cleanKey || cleanCiphertext.length % cleanKey.length !== 0) {
        return "Lỗi: Bản mã không hợp lệ hoặc không khớp với độ dài khóa.";
    }

    const cols = cleanKey.length;
    const rows = cleanCiphertext.length / cols;
    
    // 1. Xác định thứ tự cột và ánh xạ ngược
    const colOrder = getKeyOrder(cleanKey);
    // Ánh xạ ngược: Vị trí sau sắp xếp -> Vị trí ban đầu
    const reverseMap = new Array(cols);
    for (let i = 0; i < cols; i++) {
        reverseMap[colOrder[i]] = i;
    }

    // 2. Xây dựng Ma trận Giải mã rỗng
    const matrix = Array.from({ length: rows }, () => new Array(cols));

    // 3. Điền Bản mã vào Ma trận theo thứ tự đã hoán vị
    let k = 0;
    for (let i = 0; i < cols; i++) { // Duyệt qua các cột đã sắp xếp (thứ tự đọc bản mã)
        const originalCol = colOrder[i]; // Cột này là cột thứ 'i' trong bản mã
        for (let j = 0; j < rows; j++) {
            matrix[j][originalCol] = cleanCiphertext[k++];
        }
    }

    // 4. Đọc Ma trận theo hàng để khôi phục Bản rõ
    let decryptedtext = "";
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            decryptedtext += matrix[i][j];
        }
    }

    // 5. Loại bỏ ký tự đệm (Chỉ nên loại bỏ 'X' ở cuối chuỗi)
    while (decryptedtext.endsWith('X')) {
        decryptedtext = decryptedtext.slice(0, -1);
    }
    
    return decryptedtext;
}

// -------------------------------------------------------------
// HÀM GIAO TIẾP VỚI HTML
// -------------------------------------------------------------

function encryptText() {
    const plaintext = document.getElementById('text-input').value;
    const key = document.getElementById('key-input').value;
    const errorDisplay = document.getElementById('error_message');

    if (!normalizeText(key)) {
        errorDisplay.textContent = "Khóa không được để trống và phải là chữ cái.";
        return;
    }
    errorDisplay.textContent = "";

    const ciphertext = encrypt(plaintext, key);
    document.getElementById('result').value = ciphertext;
}

function decryptText() {
    const ciphertext = document.getElementById('text-input').value;
    const key = document.getElementById('key-input').value;
    const errorDisplay = document.getElementById('error_message');

    if (!normalizeText(key)) {
        errorDisplay.textContent = "Khóa không được để trống và phải là chữ cái.";
        return;
    }
    
    if (normalizeText(ciphertext).length % normalizeText(key).length !== 0) {
        errorDisplay.textContent = "Lỗi: Bản mã phải chia hết cho độ dài Khóa!";
        document.getElementById('result').value = "";
        return;
    }
    
    errorDisplay.textContent = "";

    const decryptedtext = decrypt(ciphertext, key);
    document.getElementById('result').value = decryptedtext;
}