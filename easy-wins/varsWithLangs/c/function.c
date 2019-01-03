#include <stdio.h>
 
/* function declaration */
int get_sum(int num1, int num2);
// Global sum
int sum = 9;

int main () {

   /* local variable definition */
   int a = 1;
   int b = 2;
   int sum = 100;
 
   /* calling a function to get max value */
   sum = get_sum(a, b);
 
   printf( "The sum is : %d\n", sum );
 
   return 0;

}
 
/* sum function  */
int get_sum(int num1, int num2) {
	
	/* local variable declaration */
	// CANNOT comment this out, because the global doesn't pass automatically
	int sum;
 
 	printf( "Preparing to sum: %d\n", sum );
 	sum = num1 + num2;
  	printf( "Sum is : %d\n", sum );


   return sum; 
}
 
