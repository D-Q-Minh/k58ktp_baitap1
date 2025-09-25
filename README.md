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
##### 1. Caesar
######
Tên gọi: Phương pháp này được đặt tên theo hoàng đế Julius Caesar, người đã sử dụng nó để gửi thư tín.

Thuật toán mã hoá: thay thế mỗi chữ cái trong văn bản gốc bằng một chữ cái khác cách nó một số vị trí cố định trong bảng chữ cái. 
Công thức: Ci = (Pi + ki mod m) mod 26
Ci: Ký tự mã hóa ở vị trí thứ i trong văn bản mã hóa.)
Pi: Ký tự cần mã hóa ở vị trí thứ i trong văn bản gốc.)
ki: Khóa hoặc "chìa khóa" sử dụng để mã hóa.)
m: Một giá trị hằng số (thường là kích thước của bảng mã hoặc tập hợp các ký tự có thể được mã hóa).

Thuật toán giải mã:
