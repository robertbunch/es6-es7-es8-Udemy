class Main {
	public static void main(String args[])
	{
		int the_sum = 1;
		System.out.println("(5)Value of x:" + the_sum);
		the_sum = sum_numbers(2, 3);
		System.out.println("(7)Value of x:" + the_sum);
	}

	/** returns the minimum of two numbers */
	public static int sum_numbers(int a, int b) {
		// ERROR!
		// System.out.println("(13)Value of x:" + the_sum);
		int the_sum;
		the_sum = a + b;
		System.out.println("(13)Value of x:" + the_sum);		
		return the_sum; 
	}

}


