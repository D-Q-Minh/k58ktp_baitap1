#include<iostream>
#include<string>

using namespace std;

//ma hoa
string encryptcaesar(string text, int key){
	string kq="";
	key=key%26;
	//duyet ky tu trong chuoi
	for (char& ch:text){
		if (isalpha(ch)) {//kiem tra phai chu cai ko
			char base=islower(ch) ? 'a':'A'; //xd chu thuong hay hoa
			//chuyen ky tu ve vtri 0-25 (ch - base)
			//chuyen kq ve lai ASCII (+ base)
			ch=char((ch-base + key) % 26 + base);
		}
		//ko phai chu cai thi giu nguyen
		kq += ch;
	}
	return kq;
}

//giai ma
string decryptcaesar(string text, int key){
	//giai ma=ma hoa khoa am, 26-key
	//key = 0-25 -> giai ma: (26 - (key % 26)) % 26.
    //key giai ma=(26 - (key % 26)) % 26;	
	string kq="";
	key=key%26;
	//duyet ky tu trong chuoi
	for (char& ch:text){
		if (isalpha(ch)) {//kiem tra phai chu cai ko
			char base=islower(ch) ? 'a':'A'; //xd chu thuong hay hoa
			//chuyen ky tu ve vtri 0-25 (ch - base)
			//chuyen kq ve lai ASCII (+ base)
			ch=char((ch-base + ((26 - (key % 26)) % 26)) % 26 + base);
		}
		//ko phai chu cai thi giu nguyen
		kq += ch;
	}
	return kq;
}

int main(){
	string text;
	int key, x;
	cout<<"nhap van ban:";
	getline(cin, text);
	
	cout<<"nhap khoa (key) dich chuyen:";
	cin>>key;
	
	cout<<"ma hoa/giai ma (1/2)";
	cin>>x;
	if (x==1){
	//ma hoa
	string encrypt_text=encryptcaesar(text, key);
	cout<<"ban ma hoa: "<<encrypt_text<<endl;	
	}
	else {
	//gia ma
	string decrypt_text=decryptcaesar(text, key);
	cout<<"ban giai ma: "<<decrypt_text<<endl;
	}
}