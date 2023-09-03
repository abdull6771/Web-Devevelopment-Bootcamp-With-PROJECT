var myChoice = prompt("Enter your name")
var myArray  = ["abba","sani","habu"]
myChoice = myChoice.toString()
for (i in myArray){
    if (myArray[i] === myChoice){
        document.querySelector("h1").innerHTML = "Your name in the list"
        break
    }
    else{
        document.querySelector("h1").innerHTML = "Your name is not in the list"
    }
}