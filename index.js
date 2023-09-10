let randomnumber1=Math.floor(Math.random()*6) + 1;
let randomDiceImage1="dice" + randomnumber1 +".png";
let imageSource1 ="images/"+ randomDiceImage1;

let image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",imageSource1);

//second image

let randomnumber2=Math.floor(Math.random()*6) + 1;
let randomDiceImage2="dice" + randomnumber2+".png";
let imageSource2="images/"+ randomDiceImage2;

let immage2=document.querySelectorAll("img")[1];
immage2.setAttribute("src",imageSource2)

//condition
let title=document.querySelectorAll("h1")[0];
if(randomnumber1>randomnumber2){
    title.innerHTML="Player 1 win"
    document.querySelector(".img1").classList.add("win")
}
else if(randomnumber1===randomnumber2){
    title.innerHTML="Draw!"   
}
else{
    title.innerHTML="Player 2 win"
    document.querySelector(".img2").classList.add("win")
}