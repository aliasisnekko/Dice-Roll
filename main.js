var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6
randomNumber1 = Math.floor(randomNumber1) + 1 //shorthand: var randomNumber1 = Math.floor(Math.random()*6) +1;
var randomDiceImage1 = "dice" + randomNumber1 + ".png"

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6
randomNumber2 = Math.floor(randomNumber2) + 1
var randomDiceImage2 = "dice" + randomNumber2 + ".png"

document.querySelector(".img1").setAttribute("src", "images/" + randomDiceImage1);
document.querySelector(".img2").setAttribute("src", "images/" + randomDiceImage2);

{
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🔥 Player 1 Wins!";
    } else { document.querySelector('h1').innerHTML = "Player 2 Wins! 🔥"; }
    if (randomNumber1 == randomNumber2) //used a stricter equal '=' works bc the words to make the var are literally the same
    {
        document.querySelector("h1").innerHTML = "🔥 Oh My! We have a tie 🔥";
        document.querySelector("h1").style.fontSize = '5.5rem';
    }
}