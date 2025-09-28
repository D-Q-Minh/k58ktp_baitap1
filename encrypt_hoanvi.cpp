#include <iostream>
#include <string>
#include <vector>
#include <algorithm>
#include <cmath>
#include <numeric>

using namespace std;

// chuan hoa ban ro, bo khoang trang, chu thuong thanh hoa
string normalize_text(const string& text) {
    string kq = "";
    for (char ch : text) {
        if (isalpha(ch)) {
            kq += toupper(ch);
        }
    }
    return kq;
}

// ma hoa
string encryptPermutation(const string& text, const string& key) {
    // 1. Chuẩn hóa bản rõ và khóa
    string clean_text = normalize_text(text);
    int key_len = key.length();

    if (key_len == 0 || clean_text.empty()) {
        return "";
    }

    // 2. Tính kích thước ma trận
    int cols = key_len;
    // Làm tròn lên: ceil(length / cols)
    int rows = ceil((double)clean_text.length() / cols);
    
    // Thêm ký tự đệm nếu cần (ví dụ: 'X')
    int padding_needed = (rows * cols) - clean_text.length();
    string padded_text = clean_text;
    for (int i = 0; i < padding_needed; ++i) {
        padded_text += 'X'; // Ký tự đệm
    }

    // 3. Xây dựng ma trận bản rõ
    vector<vector<char>> matrix(rows, vector<char>(cols));
    int k = 0;
    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            matrix[i][j] = padded_text[k++];
        }
    }

    // 4. Xác định thứ tự hoán vị của các cột
    // Lấy chỉ mục cột ban đầu (0, 1, 2, ...)
    vector<int> col_indices(cols);
    iota(col_indices.begin(), col_indices.end(), 0); // Điền 0, 1, 2, ..., cols-1

    // Sắp xếp các chỉ mục dựa trên các ký tự trong khóa
    // Bằng cách này, chúng ta biết thứ tự cột mới (ví dụ: [1, 3, 0, 2] nếu khóa là "ZEBRA")
    sort(col_indices.begin(), col_indices.end(), [&](int a, int b) {
        return key[a] < key[b];
    });

    // 5. Đọc theo thứ tự hoán vị của các cột để tạo bản mã
    string kq = "";
    for (int col_index : col_indices) {
        for (int i = 0; i < rows; ++i) {
            kq += matrix[i][col_index];
        }
    }

    return kq;
}

// Hàm giải mã Hoán vị Cột
string decryptPermutation(const string& text, const string& key) {
    int key_len = key.length();
    int cols = key_len;

    if (cols == 0 || text.empty()) {
        return "";
    }

    // 1. Tính toán kích thước ma trận và độ dài bản rõ
    int rows = text.length() / cols;
    int cipher_len = text.length();

    // 2. Xác định thứ tự hoán vị của các cột
    vector<int> col_indices(cols);
    iota(col_indices.begin(), col_indices.end(), 0);

    sort(col_indices.begin(), col_indices.end(), [&](int a, int b) {
        return key[a] < key[b];
    });

    // Tạo ánh xạ ngược: Vị trí sau sắp xếp -> Vị trí ban đầu
    // Ví dụ: key="ZEBRA" -> col_indices=[4, 3, 2, 1, 0]
    // Nghĩa là cột 4 (Z) là cột 0 trong bản mã, cột 3 (E) là cột 1, v.v.
    // reverse_map[0] = 4 (cột 0 bản mã là cột 4 ban đầu)
    // reverse_map[1] = 3 (cột 1 bản mã là cột 3 ban đầu)
    // ...
    vector<int> reverse_map(cols);
    for (int i = 0; i < cols; ++i) {
        reverse_map[col_indices[i]] = i;
    }

    // 3. Xây dựng ma trận bản rõ/giải mã
    vector<vector<char>> matrix(rows, vector<char>(cols));

    // Đặt các ký tự bản mã vào ma trận theo thứ tự đã hoán vị
    int k = 0;
    for (int i = 0; i < cols; ++i) { // Duyệt qua các cột bản mã (đã sắp xếp)
        int original_col = col_indices[i];
        for (int j = 0; j < rows; ++j) { // Đặt các ký tự vào vị trí cột tương ứng
            // Thực tế: Cột thứ i trong bản mã chính là cột original_col trong ma trận
            matrix[j][original_col] = text[k++];
        }
    }

    // 4. Đọc ma trận theo hàng ngang để khôi phục bản rõ
    string kq = "";
    for (int i = 0; i < rows; ++i) {
        for (int j = 0; j < cols; ++j) {
            kq += matrix[i][j];
        }
    }
    
    // Loại bỏ ký tự đệm 'X' (tùy chọn)
    // Cần phải có logic phức tạp hơn nếu 'X' là ký tự hợp lệ trong bản rõ
    // Ở đây ta bỏ qua bước này để giữ mã đơn giản.
    return kq;
}

int main() {
    string text, key;
    cout <<"nhap van ban: "; getline(cin, text);
    cout <<"nhap khoa: "; getline(cin, key);

    // Mã hóa
    cout << "ma hoa: " <<encryptPermutation(text, key)<< endl;

    // Giải mã
    cout << "giai ma: " << decryptPermutation(text, key) << endl;

    return 0;
}