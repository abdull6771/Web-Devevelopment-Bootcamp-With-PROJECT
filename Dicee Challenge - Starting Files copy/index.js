var randomNumber1 = Math.floor(Math.random()* 6) + 1
var randomNumber2 = Math.floor(Math.random()* 6) + 1

var diceimage1 = "dice"+randomNumber1+".png"
var diceimage2 = "dice"+randomNumber2+".png"

var diceimagesource1 = "./images/"+diceimage1
var diceimagesource2 = "./images/"+diceimage2

document.querySelectorAll("img")[0].setAttribute("src",diceimagesource1)
document.querySelectorAll("img")[1].setAttribute("src",diceimagesource2)

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Win"
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Win"
}
else{
    document.querySelector("h1").innerHTML="Draw"
}
