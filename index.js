var n=Math.random();
n=n*6+1;
var randomnumber1=Math.floor(n);
var newName="./images/dice"+randomnumber1+".png";
var imagea=document.querySelector(".img1");
imagea.setAttribute("src",newName);

var m=Math.random();
m=m*6+1;
var randomnumber2=Math.floor(m);
var newName2="./images/dice"+randomnumber2+".png";
var imageb=document.querySelector(".img2");
imageb.setAttribute("src",newName2);


if(randomnumber1>randomnumber2)
{
    var s="Player 1 wins!";
}
else if(randomnumber1<randomnumber2)
{
    var s="Player 2 wins!";
}
else{
    var s="Draw!";
}

var h1=document.querySelector("h1");
h1.innerHTML=s;