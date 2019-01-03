<?php

	$sum = 1;

	function sum_numbers($a, $b){
		// ERROR
		// echo $sum;
		// echo $GLOBALS['sum'];
		// OR
		// global $sum;
		$sum = $a + $b;
		echo $sum."\n";
	}

	echo sum_numbers(2,3);
	echo $sum."\n";

?>



