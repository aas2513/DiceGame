var randomNumber1 = Math.floor(Math.random() * 6) + 1; 

var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

var randomImage1 = ("images/" + randomDiceImage); //images/dice1.png - images/dice6.png)

document.querySelector(".img1").setAttribute("src", randomImage1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 =("images/dice" + randomNumber2 + ".png");

document.querySelector(".img2").setAttribute("src", randomImage2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerText=("Player 1 Wins!!");
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerText=("Player 2 Wins!!");
}
else{
    document.querySelector("h1").innerText=("It's a draw!!")
}