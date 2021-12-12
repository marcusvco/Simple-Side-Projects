#include <iostream>
#include <fstream>

using namespace std;

void menu(){
    int b = 0;
    cout << "1 - Registrar" << endl;
    cout << "2 - Login" << endl;
    cout << "3 - Sair" << endl;
    cout << "Digite um numero: ";
}

void registrar(){
    string username, password;
    cout << "Digite o nome: "; cin >> username;
    cout << "Digite a senha: "; cin >> password;

    ofstream file;
    file.open("data\\" + username + ".txt");
    file << username << endl << password;
    file.close();
}

void login(){
    string username, password, un, pw;
    cout << "Digite o nome: "; cin >> username;
    cout << "Digite a senha: "; cin >> password;

    ifstream read("data\\" + username + ".txt");
    getline(read, un);
    getline(read, pw);

    if(un == username && pw == password){
        cout << "Login realizado com sucesso!" << endl;
    }else{
        cout << "Login errado!" << endl;
    }
}

int main(int argc, char const *argv[]){
    int option = 0;

    do{
        menu();
        cin >> option;
        switch (option){
        case 1:
            registrar();
            break;
        case 2:
            login();
            break;
        case 3:
            cout << "Saindo..." << endl;
            break;
        default:
            cout << "Digite um numero valido" << endl;
            break;
        }
    }while(option != 3);

    return 0;
}