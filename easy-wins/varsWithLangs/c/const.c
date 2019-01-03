#include "stdio.h"

int main(void) {
	// Numbers
	const int n = 5;
	printf("value of array : %d", n);
	//Assignment will fail
	// n += 5;
	// printf("value of array : %d", n);
	return 0;
}


#include "stdio.h"
int main(void) {
	// Array
	// Add const and it will break... TRUE constant
	int my_array[5] = {1,3,12,9,5};
	int i;
	for ( i = 0; i < 10; i++ ) {
		my_array[ i ] = i + 100;
		printf("value of array : %d\n", my_array[i]);	
	}  
	return 0;
}
  // const int n[ 10 ]; /* n is an array of 10 integers */
  // int i,j;
 
   /* initialize elements of array n to 0 */         
  // for ( i = 0; i < 10; i++ ) {
  //     n[ i ] = i + 100; /* set element at location i to i + 100 */
  // }  