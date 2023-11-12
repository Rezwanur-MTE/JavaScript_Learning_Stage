document.getElementById("heading").innerHTML="Hello , This is a Webpage";
document.getElementsByClassName("para")[0].innerHTML=" This was developed by Fahim";
document.getElementsByTagName("h4")[0].innerHTML=" I hate corruption";

document.querySelector("#pid").innerHTML=" This is Fahim";
document.querySelector(".yo").innerHTML="This is yo yo Fahim";
document.querySelector(" a").innerHTML= " New Text 1";
document.querySelector("li a").innerHTML="New Text 2 boy ";
document.querySelector(".my-div a").innerHTML= " New Text 3 hmmm";

function myMassage(){
              
    var a= 5, b=10;
    //document.write( a+b);
    alert(" Yo boys, Someone Clicked me   "+(a+b));
}

function mySMS(){
              
   
    alert(" Yo boys, Someone Clicked the paragraph , that is disgusting   ");
    document.querySelector("#paraID").innerHTML=" You have clicked that paragraph </br> do you know about BD . A beautiful country ";
}

function myPic1(){

    document.querySelector("#fahim1").src="img/yo1.JPG";

}

function myPic2(){

    document.querySelector("#fahim2").src="img/yo2.JPG";

}