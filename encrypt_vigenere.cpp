#include<iostream>
#include<string>
#include<algorithm>

using namespace std;

//khoa mo rong
string generateKey(string text, string key) {
    int x = text.size();
    string newKey = key;
    
    //lap khoa bang do dai van ban
    for (int i = 0; ; i++) {
        if (x == i)
            i = 0;
        if (newKey.size() == text.size())
            break;
        newKey.push_back(newKey[i]);
    }
    return newKey;
}
//ma hoa
string encrypt(string text, string key) {
    string kq;
	//chuyen van ban, khoa thanh chu hoa
	transform(text.begin(), text.end(), text.begin(), ::toupper);
    transform(key.begin(), key.end(), key.begin(), ::toupper);
    
    string extendedKey = generateKey(text, key);
    
    for (int i = 0; i < text.size(); i++) {
        if (text[i] >= 'A' && text[i] <= 'Z') {
            //chuyen ki tu ve 0-25
            int char_val = text[i] - 'A';
            int key_val = extendedKey[i] - 'A';
            // ma hoa: (P + K) mod 26
            char x = (char_val + key_val) % 26;            
            //chuyen lai ve ki ty
            x += 'A';
            kq.push_back(x);
        } else {//ko phai ki tu
            kq.push_back(text[i]);
        }
    }
    return kq;
}
//giai ma
string decrypt(string text, string key) {
    string kq;
    
    //chuyen van ban, khoa thanh chu hoa
    transform(text.begin(), text.end(), text.begin(), ::toupper);
    transform(key.begin(), key.end(), key.begin(), ::toupper);
    
    string extendedKey = generateKey(text, key);

    for (int i = 0; i < text.size(); i++) {
        if (text[i] >= 'A' && text[i] <= 'Z') {
            //chuyen ki tu ve 0-25
            int char_val = text[i] - 'A';
            int key_val = extendedKey[i] - 'A';            
            //giai ma: (C - K + 26) mod 26
            char x = (char_val - key_val + 26) % 26;            
            //chuyen lai ve chu
            x += 'A';
            kq.push_back(x);
        } else {//ko phai ki tu
            kq.push_back(text[i]);
        }
    }
    return kq;
}

int main() {
    string text, key;
    cout<<"nhap van ban: "; getline(cin, text);
    cout<<"nhap key: "; getline(cin, key);
	
	//ma hoa
    cout << "ma hoa: " << encrypt(text, key) << endl;

    //giai ma
    cout << "giai ma: " << decrypt(text, key);
    return 0;
}