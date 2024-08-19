var randomNumber1=Math.floor(Math.random() * 6) + 1;
var randomNumber2=Math.floor(Math.random() * 6) + 1;
//console.log(randomNumber1);

//DICE 1 IMAGE
var imageName="images/dice"+randomNumber1+".png"
document.querySelector(".img1").setAttribute("src", imageName);

//DICE 2 IMAGE
var imageName2="images/dice"+randomNumber2+".png"
document.querySelector(".img2").setAttribute("src", imageName2);


if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}

else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins";
}

else {
    document.querySelector("h1").innerHTML = "Draw";
}