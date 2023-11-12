/*var link = document.getElementsByTagName("a")[1];
document.write(link.innerHTML);
link.innerHTML="Visit FAHIM!";
link.style.textDecoration="none"  // it eleminate underline
link.style.color="red"
link.style.fontSize="2rem"
link.href="https://www.facebook.com/fahim.rezwanur/"

var heading3=document.createElement("h1");
var text= document.createTextNode(" Yo What up People");
heading3.appendChild(text);

var myDiv=document.getElementsByClassName("divboi1")[0];
//var mydiv= document.getElementsByClassName("divboi2")[0];
myDiv.appendChild(heading3);
//mydiv.appendChild(heading3);

// image slider 

var photos = ["img/pic1.JPG","img/pic2.JPG","img/pic3.JPG","img/pic4.JPG","img/pic5.JPG"];
var imgTag=document.querySelector("img");
var count=0;
function prev(){
    count--;
    if(count< 0){
        count=0;
        imgTag.src=photos[count];
    }
    else{  imgTag.src=photos[count]; }
  

}

function next(){

    count++;
    if(count>= photos.length){
        count=0;
        imgTag.src=photos[count];
    }
    else{  imgTag.src=photos[count]; }
  

}

function addStyle(){
    var myVar=document.querySelector("p");
    myVar.classList.add("para-style");
}

function removeStyle(){
    var myVar=document.querySelector("p");
    myVar.classList.remove("para-style");
}

// Event Listener 
document.querySelector("#demo1").addEventListener("mouseover",myfunc1);

function myfunc1(){
    //alert("HELLO Bangladesh ");
   document.querySelector("#demo1").classList.add("hover-style");

}
document.querySelector("#demo1").addEventListener("mouseout",myfunc2);

function myfunc2(){
   // alert("HELLO Bangladesh ");
   document.querySelector("#demo1").classList.remove("hover-style");

}

document.querySelector("#demo2").addEventListener("click",function (){   // it is called annonymus function , whice has no name
    alert(" You Clicked yoyo button, are you in party mode ? ");
});

// multiple event listener
/*document.querySelectorAll(".mybutton")[0].addEventListener("click", function (){
    
    var text = this.innerHTML;
    document.querySelector("h3").innerHTML= text +" is clicked";
});

document.querySelectorAll(".mybutton")[1].addEventListener("click", function (){
    
    var text = this.innerHTML;
    document.querySelector("h3").innerHTML= text +" is clicked";
});

document.querySelectorAll(".mybutton")[2].addEventListener("click", function (){
    
    var text = this.innerHTML;
    document.querySelector("h3").innerHTML= text +" is clicked";
});   // this is manual operation

//doing the same using loop

var  len = document.querySelectorAll(".mybutton").length;

for(var i =0; i<=len;i++){
    document.querySelectorAll(".mybutton")[i].addEventListener("click", function (){
    
        var text = this.innerHTML;
        document.querySelector("h3").innerHTML= text +" is clicked";
    });

}  */ 

// Playing sound
for(var i=0; i<3;i++){
    document.querySelectorAll(".myMusic")[i].addEventListener("click", function (){
    
          var text = this.innerHTML;
         // document.write(text);
          switch(text){
            case "A":
                var audio= new Audio("sound/music1.mp3");
                audio.play();
                break;
            case "B":
                var audio= new Audio("sound/music2.mp3");
                audio.play();
                break;
            case "C":
                var audio= new Audio("sound/music3.mp3");
                audio.play();
                break;

          }
    });
}








