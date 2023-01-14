import re

#Simple hangman game
#While(lives != 0), keep playing
#Search the letter in the word, if found remove letter and dont lose life, else lose life
#Show the word the player is forming at each try

word = "jiboia"
player_word = "______"
lives = 5
alphabet = "abcdefghijklmnopqrstuvwxyz"

def players_word():
    print(f"Your word: {player_word}")
    print(f"Lives: {lives}")

def letter_used_or_not(): #Verify if the letter is used, if so remove letter and return false
    letter_used_or_not.alph = alphabet
    for x in alphabet:
        if(letter == x):
            letter_used_or_not.alph = alphabet.replace(x, '')
            return False
    return True
    
def hit_or_miss(str): #Verify if the characters are present in the target word, return indexes
    hit_or_miss.str = str
    indexes = [m.start() for m in re.finditer(letter, word)]

    for i in indexes: #Assemble string with the characters in place(if there are hits)
        hit_or_miss.str = hit_or_miss.str[:i] + letter + hit_or_miss.str[i+1:]

    return indexes



#Main:
print("=========================")

while lives != 0 and player_word != word:
    players_word()
    letter = input("Input a letter: ")

    if(not letter_used_or_not()): #If letter isnt used see if the letter is in the target word
        alphabet = letter_used_or_not.alph

        if(hit_or_miss(player_word)): #If it is a hit, assemble the string with the letter, else lose life
            player_word = hit_or_miss.str
            print("Hit!")
        else:
            lives -= 1
            print(f"You miss, lives: {lives}")
    else:
        print(f"Already used the letter {letter}")

    print("=========================")

if(player_word == word):
    print(f"You win! Word is {word}")
else:
    print("Game over, try again")