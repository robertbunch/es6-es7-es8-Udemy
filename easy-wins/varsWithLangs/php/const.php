<?php
//////////////////////////
// Constants
define('AN_ARRAY', [1,2,3,4,5]);
print_r(AN_ARRAY);
//Will error
define("AN_ARRAY", "test");
// Not Allowed
// AN_ARRAY[0] = 3;
// Not Allowed
// array_push(AN_ARRAY, 3);
?>