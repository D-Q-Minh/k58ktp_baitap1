/**
 * Hàm thực hiện Mã hóa hoặc Giải mã Caesar.
 * @param {string} text - Văn bản đầu vào.
 * @param {number} key - Khóa dịch chuyển.
 * @param {string} mode - 'encrypt' (mã hóa) hoặc 'decrypt' (giải mã).
 * @returns {string} - Văn bản kết quả.
 */
function caesarCipher(text, key, mode) {
    let result = '';
    // Đảm bảo key luôn dương và trong phạm vi 0-25
    key = key % 26; 
    if (key < 0) {
        key += 26; // Xử lý key âm
    }
    // Nếu mode là 'decrypt', ta dịch chuyển ngược lại (26 - key)
    if (mode === 'decrypt') {
        key = (26 - key) % 26;
    }

    for (let i = 0; i < text.length; i++) {
        let char = text[i];

        if (char >= 'a' && char <= 'z') { // Xử lý chữ thường
            let offset = char.charCodeAt(0) - 'a'.charCodeAt(0); // Chỉ số 0-25
            let newOffset = (offset + key) % 26;
            result += String.fromCharCode('a'.charCodeAt(0) + newOffset);

        } else if (char >= 'A' && char <= 'Z') { // Xử lý chữ hoa
            let offset = char.charCodeAt(0) - 'A'.charCodeAt(0); // Chỉ số 0-25
            let newOffset = (offset + key) % 26;
            result += String.fromCharCode('A'.charCodeAt(0) + newOffset);

        } else {
            // Giữ nguyên các ký tự không phải chữ cái (dấu cách, số, dấu câu)
            result += char;
        }
    }
    return result;
}

/**
 * Hàm điều khiển, được gọi bởi các nút bấm trong HTML.
 * @param {string} mode - 'encrypt' hoặc 'decrypt'.
 */
function processText(mode) {
    const textInput = document.getElementById('text-input').value;
    const keyInput = parseInt(document.getElementById('key-input').value);
    const resultOutput = document.getElementById('result-output');

    if (isNaN(keyInput) || keyInput < 0) {
        alert("Vui lòng nhập một khóa dịch chuyển hợp lệ (số nguyên dương).");
        return;
    }
    const result = caesarCipher(textInput, keyInput, mode);
    resultOutput.value = result;
}