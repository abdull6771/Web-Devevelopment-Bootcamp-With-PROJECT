var mychoice  = prompt("Enter your name");
var myArray = ["abba","sani","habu"];
mychoice = mychoice.toString()
for (i in myArray){
    if(myArray[i] === mychoice){
        alert("Welcome ");
        break
    }
    else{
        alert("Try Again");
        break
    }
}