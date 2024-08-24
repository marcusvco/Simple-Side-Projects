package main

import (
	"bufio"
	"fmt"
	"math/rand/v2"
	"os"
	"strconv"
	"strings"
)

func main() {
	fmt.Println("**Guessing Game**")
	fmt.Println("Try to guess a sorted number in 10 attempts.")

	attempts := [10]int64{}
	sortedNumber := rand.Int64N(101)
	scanner := bufio.NewScanner(os.Stdin)

	for i := range attempts {
		fmt.Print("Guess a number: ")

		scanner.Scan()
		attempt := scanner.Text()
		attempt = strings.TrimSpace(attempt)

		intAttempt, err := strconv.ParseInt(attempt, 10, 64)

		if err != nil {
			fmt.Println("Input must be an integer.")
		}

		attempts[i] = intAttempt

		if intAttempt < sortedNumber {
			fmt.Println("Miss! Sorted number is greater than guessed number.")
		} else if intAttempt > sortedNumber {
			fmt.Println("Miss! Sorted number is lesser than guessed number.")
		} else {
			fmt.Printf("You win! Sorted number was: %d\n"+
				"Your attempts: %v\n", sortedNumber, attempts[:i+1])
			return
		}
	}

	fmt.Printf("You lose. Sorted number was: %d\n"+
		"Your attempts: %v\n", sortedNumber, attempts)
}
