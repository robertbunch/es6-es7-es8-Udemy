#include "stdio.h"

int main(void) {
 
	int i;
	for ( i = 0; i < 10; i++ ) {
		printf("value of i : %d\n", i);
	}  
	printf("value of i : %d", i);
	return 0;
}



// Move int into the loop
// Line 23 will fail, unless int is added back to global scope
#include "stdio.h"

int main(void) {
	for ( int i = 0; i < 10; i++ ) {
		printf("value of i : %d\n", i);
	}  
	printf("value of i : %d", i);
	return 0;
}


