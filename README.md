##### Sinh viên: Dương Quang Minh
MSSS: K225480106047
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
##### 1.1 Tên gọi: Phương pháp này được đặt tên theo hoàng đế Julius Caesar, người đã sử dụng nó để gửi thư tín.
##### 1.2 Thuật toán mã hoá: thay thế mỗi chữ cái trong văn bản gốc bằng một chữ cái khác cách nó một số vị trí cố định trong bảng chữ cái. 
######
 Công thức: Ci = (Pi + ki mod m) mod 26
 - Ci: Ký tự mã hóa ở vị trí thứ i trong văn bản mã hóa.)
 - Pi: Ký tự cần mã hóa ở vị trí thứ i trong văn bản gốc.)
 - ki: Khóa hoặc "chìa khóa" sử dụng để mã hóa.)
 - m: Một giá trị hằng số (thường là kích thước của bảng mã hoặc tập hợp các ký tự có thể được mã hóa).
 - mod26 đảm bảo kết quả luôn nằm trong phạm vi từ 0 đến 25 (vì bảng chữ cái tiếng Anh có 26 chữ cái).

Thuật toán giải mã:
Công thức: Pi = (Ci - ki mod m) mod 26

##### 1.3 Không gian khoá: 26 chữ cái, chỉ có 25 khóa dịch chuyển khả thi (khóa 26 tương đương khóa 0, không mã hóa).

##### 1.4 Cách phá mã: 
 - tấn công vét cạn (Brute Force Attack): Kẻ tấn công có thể dễ dàng thử lần lượt tất cả 25 khóa có thể xảy ra và chọn kết quả giải mã có nghĩa
 - Phân tích tần suất (Frequency Analysis): Vì mỗi chữ cái luôn được mã hóa thành cùng một chữ cái mã hóa, kẻ tấn công có thể phân tích tần suất xuất hiện của các chữ cái trong bản mã để suy ra khóa.

##### 1.5 Thuật toán mã hoá và giải mã
##### C++:

##### html+css+javascript:

#### 2. Affine
##### 2.1
##### 2.2 Thuật toán mã hoá:
Công thức: y=E(x)=(a*x+b)modm
 - x: Giá trị số của chữ cái bản rõ.
 - y: Giá trị số của chữ cái bản mã.
 - a,b: Các thành phần của khóa.
 - m: Kích thước bảng chữ cái (26).

##### Thuật toán giải mã:
Công thức: x=D(y)=a^−1*(y−b)modm
###### a ^−1 (a inverse) là nghịch đảo nhân mô-đun của a(modm), tức là số thỏa mãn điều kiện:
a⋅a −1 ≡1(modm)

##### 2.3 Không gian khoá:
Khóa K là một cặp số nguyên K=(a,b), thỏa mãn các điều kiện:
a và m (kích thước bảng chữ cái, m=26 đối với bảng chữ cái tiếng Anh) phải là hai số nguyên tố cùng nhau, tức là ƯCLN(a,m)=1.
b là số nguyên bất kỳ, thường được chọn trong khoảng 0≤b<m.

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
###### + Tính tần suất: Đếm tần suất xuất hiện của từng ký tự trong bản mã.
###### + Phỏng đoán: Dựa vào tần suất chuẩn của ngôn ngữ (ví dụ: trong tiếng Anh, ký tự 'E' là phổ biến nhất), phỏng đoán một hoặc hai cặp ký tự bản rõ-bản mã:
###### + Lập hệ phương trình: Với hai cặp phỏng đoán (x1, y1) và (x2, y2), ta có hệ hai phương trình đồng dư:
######   ax1 + b≡y1 (mod26)
######   ax2 + b≡y2 (mod26)
​###### + Giải hệ phương trình: Trừ hai phương trình để tìm a:
######   a(x1−x2)≡(y1−y2) (mod26)
###### + Kiểm tra: Nếu khóa (a,b) tìm được thỏa mãn ƯCLN(a,26)=1, ta dùng nó để giải mã toàn bộ bản mã. Nếu bản rõ thu được có ý nghĩa, khóa đã tìm được là chính xác.

###### 2.5 Thuật toán mã hoá và giải mã
##### C++:
mã hoá:
giải mã:

##### html+css+javascript:
mã hoá:
giải mã:

#### 3. Hoán vị
###### 3.1
###### Phương pháp mã hoá Hoán vị (Transposition Cipher) là một kỹ thuật mã hoá cổ điển, trong đó các ký tự của bản rõ được giữ nguyên mà chỉ thay đổi vị trí của chúng theo một quy tắc nhất định để tạo thành bản mã.

##### 3.2 Thuật toán:
##### Thuật toán mã hoá:
Công thức: 
 - Viết bản rõ: Viết bản rõ (plaintext) thành các hàng trong một ma trận, với số cột bằng độ dài của từ khóa.
 - Sắp xếp cột: Ghi từ khóa lên trên các cột.
 - Đọc bản mã: Đọc các ký tự theo cột, theo thứ tự số thứ tự của từ khóa (từ nhỏ đến lớn).

##### Thuật toán giải mã:
Công thức:
 - Xác định kích thước ma trận: Tính số hàng của ma trận bằng cách chia độ dài bản mã cho độ dài khóa (L/len(K)).
 - Viết bản mã: Viết bản mã vào ma trận theo cột, theo đúng thứ tự đã đọc (từ 1 đến n).
 - Đọc bản rõ: Đọc lại các ký tự theo hàng (từ trái qua phải, từ trên xuống dưới) theo thứ tự cột ban đầu để khôi phục bản rõ.

##### 3.3 Không gian khoá:
Khóa là một hoán vị của các số cột. Với một từ khóa có độ dài n (tức là n cột), số lượng khóa (hoán vị) có thể là n! (n giai thừa).

##### 3.4 Cách phá mã:
##### Tấn công Vét cạn (Brute-Force Attack) dựa trên việc phỏng đoán độ dài khóa (số cột):
 - Phỏng đoán độ dài khóa (n): Kẻ tấn công thử các độ dài khóa khác nhau (ví dụ: n=3,4,5,…).
 - Tạo ma trận: Với mỗi độ dài khóa n, kẻ tấn công sắp xếp bản mã thành một ma trận n cột.
 - Kiểm tra tất cả hoán vị cột: Đối với mỗi ma trận n cột, kẻ tấn công thử tất cả n! hoán vị cột để đọc bản rõ.
 - Phân tích Bigram/Trigram: Để kiểm tra xem bản rõ có hợp lý không, kẻ tấn công sử dụng Phân tích Tần suất Cặp Ký tự (Bigram) hoặc Bộ ba Ký tự (Trigram). Bản rõ hợp lệ sẽ có tần suất bigram và trigram khớp với thống kê của ngôn ngữ đó (ví dụ: trong tiếng Anh, bigram "TH" và "EN" xuất hiện thường xuyên).

##### 3.5 Thuật toán mã hoá và giải mã
##### C++:
mã hoá:
giải mã:

##### html+css+javascript:
mã hoá:
giải mã:

#### 4. Vigenère
##### 4.1
Mật mã Vigenère là một phương pháp mã hóa thay thế đa bảng chữ (polyalphabetic substitution cipher) cổ điển, mạnh hơn đáng kể so với các mã hóa đơn bảng chữ như Caesar hay Affine vì nó làm lu mờ sự phân bố tần suất ký tự của bản rõ.

##### 4.2 Thuật toán:
Khóa K là một từ khóa (keyword) có độ dài m. Khóa này được lặp lại để có độ dài bằng bản rõ P.
 - P=p1*p2*...*pn (bản rõ)
 - K=k1*k2*...*kn (từ khóa)
 - K(lặp)=k1*k2...km*km+1...kn (Khóa được lặp lại, với ki=ki mod m)

##### Thuật toán mã hoá:
Ký tự bản rõ pi (giá trị số) được mã hóa thành ký tự bản mã ci (giá trị số) bằng cách cộng giá trị của nó với ký tự khóa tương ứng ki theo modulo 26.
Công thức: ci=E(pi,ki)=(pi+ki) mod 26

##### Thuật toán giải mã:
Ký tự bản mã ci (giá trị số) được giải mã thành ký tự bản rõ pi (giá trị số) bằng cách trừ giá trị của nó với ký tự khóa tương ứng ki theo modulo 26
Công thức: pi=D(ci,ki)=(ci−ki) mod26

##### 4.3 Không gian khoá:
Không gian khóa của mã Vigenère phụ thuộc vào độ dài tối đa của từ khóa được cho phép (Lmax).
tổng không gian khóa là tổng số từ có độ dài từ 1 đến Lmax được tạo từ bảng chữ cái 26 ký tự:
 Không gian khóa = Lmax ∑ (m=1) 26^m

##### 4.4 Cách phá mã:
 - Bước 1: Xác định độ dài Khóa (m)
 2 phương pháp chính:
###### Phương pháp Kasiski:
  + Tìm sự lặp lại: Tìm các đoạn ký tự dài (3-4 ký tự) xuất hiện lặp lại trong bản mã.
  + Tính khoảng cách: Tính khoảng cách giữa các lần xuất hiện của các đoạn lặp lại này.
  + Tìm Ước chung lớn nhất (GCD): Độ dài khóa m có khả năng là ước số chung lớn nhất (hoặc ước số của GCD) của các khoảng cách này.
###### Phương pháp Chỉ số Trùng hợp (Index of Coincidence - IoC):
  + IoC là một giá trị đo lường xác suất hai ký tự được chọn ngẫu nhiên trong một đoạn văn bản sẽ trùng nhau.
  + Thử độ dài: Thử từng độ dài khóa m=1,2,3,…
  + Tính IoC: Với một độ dài khóa m giả định, ta chia bản mã thành m chuỗi con. Mỗi chuỗi con là một mã Caesar đơn giản.
  + So sánh: Tính IoC cho mỗi chuỗi con đó.
     Nếu IoC của các chuỗi con gần với IoC của ngôn ngữ bản rõ (ví dụ: IoC tiếng Anh ≈0.067), thì độ dài m đó có khả năng là độ dài khóa chính xác.
     Nếu IoC gần với IoC của phân bố đồng nhất (≈0.038), thì độ dài m là không chính xác.
    
 - Bước 2: Tìm Khóa
   Sau khi xác định m
   1. Tách chuỗi con: Chia bản mã thành m chuỗi con C1,C2,…,Cm.
   2. Phân tích tần suất: Mỗi chuỗi con Cj được mã hóa bằng một phép mã hóa Caesar với khóa dịch chuyển kj (ký tự thứ j của từ khóa).
   3. Tìm khóa từng ký tự: Dùng phương pháp phân tích tần suất cổ điển (ví dụ: tìm ký tự phổ biến nhất trong Cj và giả định nó tương ứng với ký tự phổ biến nhất trong bản rõ, như 'E' → kj) để tìm ra ký tự khóa kj cho từng chuỗi con.
      Thực hiện tất cả m chuỗi con, sẽ tìm được từ khóa hoàn chỉnh K=k1k2…km.
      
###### 4.5 Thuật toán mã hoá và giải mã
##### C++:
mã hoá:
giải mã:

##### html+css+javascript:
mã hoá:
giải mã:

#### 5. Playfair
##### 5.1
Mã hóa Playfair là mật mã thay thế đa ký tự (polygraphic substitution cipher) đầu tiên, mã hóa các cặp ký tự (digraphs) thay vì các ký tự đơn lẻ.
##### 5.2 Thuật toán
Mã Playfair dựa trên một Khối Khóa (Key Square) 5×5.

 1. Chuẩn bị Khối Khóa (Key Square):
    - Chọn khóa: Chọn một từ khóa
    - Xây dựng lưới 5x5: Điền các ký tự duy nhất của từ khóa vào lưới 5×5 từ trái sang phải, từ trên xuống dưới.
    - Hoàn thành lưới: Điền các ký tự còn lại của bảng chữ cái tiếng Anh theo thứ tự (thường bỏ qua chữ J hoặc xem I và J là một) để chỉ còn 25 ký tự.
 2. Chuẩn bị Bản rõ:
    - Tách cặp: Chia bản rõ thành các cặp ký tự (digraphs).
    - Xử lý chữ kép: Nếu một cặp có hai ký tự giống nhau (ví dụ: LL), chèn một ký tự đệm (thường là X hoặc Z) vào giữa và tạo thành cặp mới (ví dụ: LX LO).
    - Xử lý ký tự lẻ: Nếu bản rõ có số lượng ký tự lẻ, thêm một ký tự đệm vào cuối (ví dụ: A → AZ).
    - Gộp I/J: Thay thế tất cả J bằng I.
##### Thuật toán mã hoá:
 Với từng cặp ký tự (p1,p2) trong lưới khóa:
    - Cùng Hàng: Nếu p1 và p2 nằm trên cùng một hàng, thay thế mỗi ký tự bằng ký tự ngay bên phải nó trong hàng (cuộn về đầu hàng nếu ở cuối).
    - Cùng Cột: Nếu p1 và p2 nằm trên cùng một cột, thay thế mỗi ký tự bằng ký tự ngay bên dưới nó trong cột (cuộn về đầu cột nếu ở cuối).
    - Tạo Hình Chữ Nhật (Khác Hàng, Khác Cột): Thay thế mỗi ký tự bằng ký tự nằm ở góc còn lại của hình chữ nhật, nằm trên cùng hàng với ký tự gốc.
      
##### Thuật toán giải mã:
 - Cùng Hàng: Thay thế mỗi ký tự bằng ký tự ngay bên trái nó.
 - Cùng Cột: Thay thế mỗi ký tự bằng ký tự ngay bên trên nó.
 - Tạo Hình Chữ Nhật: Quy tắc này là tương tự trong mã hóa và giải mã (chỉ hoán đổi các góc đối diện theo hàng).

##### 5.3 Không gian khoá:
Khóa của mã Playfair là hoán vị của 25 ký tự (do I và J được gộp).
 - Số khóa lý thuyết là số hoán vị của 25 ký tự, tức là 25! (khoảng 1.55×10^25).
 - Số khóa duy nhất: Do các phép quay hàng và cột của lưới có thể tạo ra các khóa tương đương về mặt mã hóa, số khóa duy nhất được ước tính là 25!/25≈6.2×10^23.

##### 5.4 Cách phá mã:
 1. Phân tích Tần suất Cặp Ký tự (Digraph Frequency Analysis):
    - Có 25×25=625 cặp ký tự có thể xảy ra.
    - Tính tần suất của 625 cặp ký tự trong bản mã và so sánh với tần suất các cặp ký tự phổ biến trong ngôn ngữ bản rõ.
 2. Điểm Yếu Cấu trúc (Structural Weaknesses):
    - Tính đối xứng ngược: Nếu cặp bản rõ (p1,p2) mã hóa thành (c1,c2), thì cặp (p2,p1) sẽ mã hóa thành (c2,c1).
    - Không thể có cặp trùng lặp: Mã Playfair không bao giờ tạo ra các cặp ký tự trùng lặp trong bản mã (ví dụ: AA, BB, CC). Điều này là do các quy tắc mã hóa (dịch phải/xuống, hoặc góc đối diện) không cho phép một ký tự được mã hóa thành chính nó nếu nó nằm ở vị trí thứ hai trong cặp.

##### 5.5 Thuật toán mã hoá và giải mã
##### C++:
mã hoá:
giải mã:

##### html+css+javascript:
mã hoá:
giải mã:
