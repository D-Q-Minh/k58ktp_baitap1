#include<iostream>
#include<string>
#include<algorithm>
#include<cmath>
using namespace  std;

const int m=26;
//tim nghich dao nhan module  (a^-1 mod m)
//pp vet can
int modinverse(int a) {
    a = a % m;
    for (int x = 1; x < m; x++) {
        if ((a * x) % m == 1) {
            return x;
        }
    }
    return -1;
}

//ma hoa
string encrypt(const string& text, int a, int b){
	string kq="";
	//ktra tinh nguyen to cua a va m
	if (modinverse(a)==-1) return "loi, a va 26 phai nguyen to cung nhau (ucln(a,26)=1)";
	for (char ch:text){
		if (ch>='A' && ch<='Z'){//chu hoa
			//chuyen ki tu thanh gtri so
			int x = ch - 'A';
			//ma hoa
			int y=(a*x+b)%m;
			//chuyen gtri so thanh ki tu
			kq+=(char)(y+'A');
		}
		else if (ch>='a' && ch<='z'){//chu thuong
			char upper_ch = toupper(ch);
			int x = upper_ch - 'A';
			int y = (a*x + b)%m;
			kq+= (char)(y+'A');
		}
		else {
			//cach ki tu khac
			kq+=ch;
		}
	}
	return kq;
}

//giai ma
string decrypt( string& text, int a, int b){
	string kq="";
	//a^-1
	int a_inverse=modinverse(a);
	if (a_inverse==-1) return "loi, khong the giai ma, khong ton tai nghich dao module cua a";
	for (char ch:text){
		int base;//ma ASCII
		if (ch>='A' && ch<='Z'){
			base='A';
		}
		else if (ch>='a'&&ch<='z'){
			base='a';
		}
		else {
			kq+=ch;
			continue;
		}
		int y = ch-base;
		int x=(a_inverse*((y-b)%m+m))%m;
		kq+=(char)(x+base);
	}
	return kq;
}
int main(){
	int a, b;
	string text;
	cout<<"affine"<<endl;
	cout<<"nhap van ban: "; getline(cin, text);
	cout<<"nhap thanh phan cua khoa (a,b): "<<endl; 
	cout<<"a phai la so nguyen so. a= "; cin>>a;
	cout<<"b="; cin>>b;
	
	//ma hoa
	cout<<"ban ma hoa: "<<encrypt(text, a, b)<<endl;
	
	//giai ma
	cout<<"ban giai ma: "<<decrypt(text, a, b);
}