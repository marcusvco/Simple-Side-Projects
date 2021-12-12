#include <bits/stdc++.h>
using namespace std;

int main() {
    int n;
    cin >> n;
    string words[n];
    
    for(int i = 0; i < n; i++){
		cin >> words[i];
		
		if(words[i].size() > 10){
			words[i] = words[i][0] + to_string(words[i].size() - 2) + words[i][words[i].size() - 1];
		}
	}
	
	for(int i = 0; i < n; i++){
		cout << words[i] << "\n";
	}
}
