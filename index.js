
//Even number
for (i = 1; i<= 100; i++){
    if (i %2==!0){
        continue
    }
    console.log(" " + i)
}

//Odd number
for (i = 1; i<= 100; i++){
    if (i %2==!0){
        continue
    }
    console.log(" " + i)
}

//Posative negative number finder js project
var input = Number(prompt("Enter your number"));
var result = input >0 ? "Posative" : "Negative";
document.write(result);