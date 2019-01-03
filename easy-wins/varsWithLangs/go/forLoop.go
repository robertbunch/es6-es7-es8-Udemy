package main

import (
  "fmt"
  "strconv"
)

func main() {
	for i := 0; i < 10; i++ {
	  t := strconv.Itoa(i)
		fmt.Println("value of i: "+t)
	}

	//will error
// 	t := strconv.Itoa(i)
// 	fmt.Println("Value of i after the loop"+t) 
}
