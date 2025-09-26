# k58ktp_baitap1
### Bài tập môn: an toàn và bảo mật thông tin
### Bài 1:
#### TÌM HIỂU CÁC PHƯƠNG PHÁP MÃ HOÁ CỔ ĐIỂN
###### 
1. Caesar
2. Affine
3. Hoán vị
4. Vigenère
5. Playfair

Với mỗi phương pháp, hãy tìm hiểu:
1. Tên gọi
2. Thuật toán mã hoá, thuật toán giải mã
3. Không gian khóa
4. Cách phá mã (mà không cần khoá)
5. Cài đặt thuật toán mã hoá và giải mã bằng code C++ và bằng html+css+javascript

#### Bài làm:
#### 1. Caesar
######
1.1 Tên gọi: Phương pháp này được đặt tên theo hoàng đế Julius Caesar, người đã sử dụng nó để gửi thư tín.

###### 1.2 Thuật toán mã hoá: thay thế mỗi chữ cái trong văn bản gốc bằng một chữ cái khác cách nó một số vị trí cố định trong bảng chữ cái. 
###### Công thức: Ci = (Pi + ki mod m) mod 26
###### Ci: Ký tự mã hóa ở vị trí thứ i trong văn bản mã hóa.)
###### Pi: Ký tự cần mã hóa ở vị trí thứ i trong văn bản gốc.)
###### ki: Khóa hoặc "chìa khóa" sử dụng để mã hóa.)
###### m: Một giá trị hằng số (thường là kích thước của bảng mã hoặc tập hợp các ký tự có thể được mã hóa).
###### mod26 đảm bảo kết quả luôn nằm trong phạm vi từ 0 đến 25 (vì bảng chữ cái tiếng Anh có 26 chữ cái).

###### Thuật toán giải mã:
###### Công thức: Pi = (Ci - ki mod m) mod 26
######

###### 1.3 Không gian khoá: 26 chữ cái, chỉ có 25 khóa dịch chuyển khả thi (khóa 26 tương đương khóa 0, không mã hóa).

###### 1.4 Cách phá mã: 
###### - tấn công vét cạn (Brute Force Attack): Kẻ tấn công có thể dễ dàng thử lần lượt tất cả 25 khóa có thể xảy ra và chọn kết quả giải mã có nghĩa
###### - Phân tích tần suất (Frequency Analysis): Vì mỗi chữ cái luôn được mã hóa thành cùng một chữ cái mã hóa, kẻ tấn công có thể phân tích tần suất xuất hiện của các chữ cái trong bản mã để suy ra khóa.

###### 1.5 Thuật toán mã hoá và giải mã
###### C++:
###### mã hoá:
###### giải mã:

###### html+css+javascript:
###### mã hoá:
###### giải mã:

#### 2. Affine
###### 2.1
###### 2.2 Thuật toán mã hoá:
###### Công thức: y=E(x)=(a*x+b)modm
###### x: Giá trị số của chữ cái bản rõ.
###### y: Giá trị số của chữ cái bản mã.
###### a,b: Các thành phần của khóa.
###### m: Kích thước bảng chữ cái (26).

###### Thuật toán giải mã:
###### Công thức: x=D(y)=a^−1*(y−b)modm
###### a ^−1 (a inverse) là nghịch đảo nhân mô-đun của a(modm), tức là số thỏa mãn điều kiện:

a⋅a −1 ≡1(modm)
###### 2.3 Không gian khoá:
###### Không gian khóa là tổng số các khóa hợp lệ K=(a,b). Với m=26:

###### Giá trị a hợp lệ: Các số nguyên tố cùng nhau với 26 và nhỏ hơn 26. Đó là {1,3,5,7,9,11,15,17,19,21,23,25}. Có tổng cộng 12 giá trị a hợp lệ.

###### Giá trị b hợp lệ: Bất kỳ giá trị nào trong khoảng 0≤b<26. Có tổng cộng 26 giá trị b hợp lệ.

###### Tổng số khóa hợp lệ là:
###### số khoá = (số giá trị a) * (số giá trị b)=12×26=312

###### 2.4 Cách phá mã:
###### - Tấn công Vét cạn (Brute-Force Attack):
###### Vì chỉ có 312 khóa có thể, kẻ tấn công có thể thử tất cả các khóa hợp lệ K=(a,b):
###### Thử lần lượt 12 giá trị a hợp lệ và 26 giá trị b hợp lệ.
###### Với mỗi cặp (a,b), sử dụng công thức giải mã để giải mã bản mã.
###### Kiểm tra bản rõ thu được. Bản rõ chính xác là bản rõ có ý nghĩa.

###### - Phân tích Tần suất (Frequency Analysis):


###### 2.5 Thuật toán mã hoá và giải mã
###### C++:
###### mã hoá:
###### giải mã:

###### html+css+javascript:
###### mã hoá:
###### giải mã:

#### 3. Hoán vị
###### 3.1
###### 3.2 Thuật toán mã hoá:
###### Công thức: 
###### Thuật toán giải mã:
###### Công thức:
###### 3.3 Không gian khoá:

###### 3.4 Cách phá mã:

###### 3.5 Thuật toán mã hoá và giải mã
###### C++:
###### mã hoá:
###### giải mã:

###### html+css+javascript:
###### mã hoá:
###### giải mã:

#### 4. Vigenère
###### 4.1
###### 4.2 Thuật toán mã hoá:
###### Công thức: 
###### Thuật toán giải mã:
###### Công thức:
###### 4.3 Không gian khoá:

###### 4.4 Cách phá mã:

###### 4.5 Thuật toán mã hoá và giải mã
###### C++:
###### mã hoá:
###### giải mã:

###### html+css+javascript:
###### mã hoá:
###### giải mã:

#### 5. Playfair
###### 5.1
###### 5.2 Thuật toán mã hoá:
###### Công thức: 
###### Thuật toán giải mã:
###### Công thức:
###### 5.3 Không gian khoá:

###### 5.4 Cách phá mã:

###### 5.5 Thuật toán mã hoá và giải mã
###### C++:
###### mã hoá:
###### giải mã:

###### html+css+javascript:
###### mã hoá:
###### giải mã:

