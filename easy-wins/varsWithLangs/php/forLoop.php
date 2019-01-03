<?

// php, like JS, only had function scope, so php does too

for ($i = 0; $i<10; $i++){
  print "value of i: ".$i."\n";
}

print "value of i after the loop: ".$i."\n";

function main() {
    if (1) {
        $i = 3;
    }
    echo $i;
}

main();



?>