/**
 * Lấy giá trị chữ cái (A=0, B=1, ..., Z=25)
 * @param {string} char - Ký tự chữ cái in hoa.
 * @returns {number} Giá trị số (0-25).
 */
function charToValue(char) {
    return char.charCodeAt(0) - 'A'.charCodeAt(0);
}

/**
 * Lấy ký tự chữ cái từ giá trị số (0-25)
 * @param {number} value - Giá trị số (0-25).
 * @returns {string} Ký tự chữ cái in hoa.
 */
function valueToChar(value) {
    return String.fromCharCode(value + 'A'.charCodeAt(0));
}

/**
 * Hàm chính thực hiện mã hóa/giải mã Vigenere.
 * @param {string} text - Văn bản gốc hoặc văn bản mã hóa.
 * @param {string} key - Khóa.
 * @param {boolean} isEncrypt - True nếu là mã hóa, False nếu là giải mã.
 * @returns {string} Văn bản kết quả.
 */
function vigenere(text, key, isEncrypt) {
    let result = '';
    let keyIndex = 0;
    
    // Đảm bảo khóa chỉ chứa chữ cái và in hoa
    const cleanKey = key.toUpperCase().replace(/[^A-Z]/g, ''); 
    if (cleanKey.length === 0) {
        alert("Khóa không hợp lệ! Vui lòng chỉ dùng các chữ cái.");
        return text;
    }

    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        
        // Chỉ xử lý các ký tự chữ cái
        if (/[a-zA-Z]/.test(char)) {
            // Xác định base ASCII (A hoặc a) và chuyển char sang in hoa
            const isLowerCase = char === char.toLowerCase();
            const baseChar = isLowerCase ? 'a' : 'A';
            const upperChar = char.toUpperCase();
            
            // Lấy giá trị số của ký tự và khóa (0-25)
            const P_i = charToValue(upperChar);
            const K_i = charToValue(cleanKey[keyIndex % cleanKey.length]);
            
            let C_i;
            
            if (isEncrypt) {
                // Mã hóa: C = (P + K) mod 26
                C_i = (P_i + K_i) % 26;
            } else {
                // Giải mã: P = (C - K + 26) mod 26
                C_i = (P_i - K_i + 26) % 26;
            }
            
            // Chuyển lại thành ký tự ASCII và giữ nguyên chữ hoa/thường
            let newChar = valueToChar(C_i);
            result += isLowerCase ? newChar.toLowerCase() : newChar;
            
            // Di chuyển sang ký tự khóa tiếp theo
            keyIndex++;
        } else {
            // Giữ nguyên ký tự không phải chữ cái (dấu cách, số, ký tự đặc biệt)
            result += char;
        }
    }
    return result;
}

// Hàm gọi từ nút "Mã Hóa"
function processText(mode) {
    const textInput = document.getElementById('text-input').value;
    const keyInput = document.getElementById('key').value;
    const resultOutput = document.getElementById('result-output');
    
	
	let result = "";
    if (mode === 'encrypt') {
        result = vigenere(textInput, keyInput, true);
		
    } 
	else if (mode === 'decrypt') {
        result = vigenere(textInput, keyInput, false);
		
    }
    
    // 3. Hiển thị Kết quả
    resultOutput.value = result;
}