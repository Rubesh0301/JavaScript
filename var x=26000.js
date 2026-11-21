var x=26000
console.log(x)
if(x<5000)
    console.log("No discount")
else if(x>=5000 && x<10000)
    console.log("10% discount")
else if(x>=10000 && x<25000)
    console.log("15% discount")
else if(x>=25000 && x<50000)
    console.log("20% discount")
else if(x>=50000)
    console.log("30% discount")
else
    console.log("Invalid input")