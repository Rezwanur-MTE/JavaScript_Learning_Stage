
for(var i=0; i<3; i++){
     document.querySelectorAll(".myButton")[i].addEventListener("click",function(){
        var yotext=this.innerHTML;
        //document.write(text);
        playAnimation(yotext);
     });
    }

    //keypress Event
    document.addEventListener("keypress", function(event){
         var yotext = event.key;
         playAnimation(yotext);

    });

    // Playing Animation 

    function playAnimation(yotext){
        var selectedButton = document.querySelector("."+yotext);
        selectedButton.classList.add("anim");

        setTimeout(function(){
            selectedButton.classList.remove("anim");

        },1000);
    }

    var count=0;
    document.querySelector("textarea").addEventListener("keypress", function(event){
          var text= event.key;
          count++;
          document.querySelector("p").innerHTML="You have pressed : "+count;
    });


    // Change event
      
    console.clear();
    var input = document.querySelector("input[name=name]");
    input.addEventListener("change",changeHandler);

    function changeHandler(e){
        //console.log(e);
       // console.log(e.type);
       // console.log(e.target);
       //console.log(e.target.className);
      // console.log(e.target.id);
      // console.log(e.target.value);
        

    }

    var programs= document.querySelectorAll("input[name=program]");
    console.log(programs);

     var yoyo_arry=Array.from(programs);      // forming an array from checkbox 
     yoyo_arry.map((programKEY)=>{           // taking array's value as key and mapping it to a ' value' of change eventlistener
        programKEY.addEventListener("change", programHandler);
     })

     function programHandler(e){
       
        if(e.target.checked){
            console.log("checked");
            console.log(e.target.value);
        }
     }


     // change eventlistener with select tag

var dept=document.querySelector("#department");
console.log(dept);
dept.addEventListener("change", handleDept);
function handleDept(e){
    console.log("Selected");
    console.log(e.target.value);
}

// OnSubmit eventListener
var form = document.querySelector("form");
var Inputname= form.querySelector("#name");
//console.log(Inputname);
var Inputemail= form.querySelector("#email");
const Inputpass= form.querySelector("#password");

form.addEventListener("submit", formHandler);

function formHandler(e){
    e.preventDefault();
      console.log("submit");
     // console.log(Inputemail.value);
     // console.log(Inputpass.value);

      // when we send data to backEnd , we send it as Object 
// So, Now create an Object 
const userinfo={
    name: Inputname.value,
    email: Inputemail.value,
    password: Inputpass.value,
 };

console.log(userinfo);

}


const Myvideo = document.querySelector("#CarVid");
Myvideo.addEventListener("canplay", function(){
    console.log(" It can Play now.");
});
Myvideo.addEventListener("play", function(){
    console.log(" It is playing now.");
});
Myvideo.addEventListener("pause", function(){
    console.log(" Tui ekta talent");
    var a = parseInt(prompt("Enter a number: "));
    var b = parseInt(prompt("Enter b number: "));
    document.write(a+b)
});

window.addEventListener("resize", function(){
    const width= window.outerWidth;
    const height = window.outerHeight;

    console.log(`height: ${height}, width: ${width}`); // used backtick for printing string letaral
});

const detail= document.querySelector("details");

detail.addEventListener("toggle", function(){
    console.log("Toggled dude");
});

const div1 = document.querySelector("#mouse");
//console.log(div1);

div1.addEventListener("click", function(e){
   // console.log("Dude Clicked");
   console.log(e.target);
   console.log(e.target.id);
   console.log(e.target.className);

});
/*div1.addEventListener("dblclick", function(){
    console.log("Dude double Clicked");
});

div1.addEventListener("mousedown", function(){
    console.log("Dude mouse down");
});

div1.addEventListener("mouseup", function(){
    console.log("Dude mouse up");
});
div1.addEventListener("mouseenter", function(){
    console.log("Dude mouse dhukce");
});
div1.addEventListener("mouseleave", function(){
    console.log("Dude mouse ber hoice");
});
div1.addEventListener("mousemove", function(e){
   // console.log("Dude mouse moving");
    console.log("Client X="+e.clientX+", Client Y="+e.clientY);
});*/

const buttons= document.querySelectorAll(".btn");  
console.log(buttons);

Array.from(buttons).map((button)=>{
    button.addEventListener("click", function(e){
     console.log(" Yo  Yo man Clicked");
     console.log(e.target.innerText);
    });
});

const textarea =document.querySelector("textarea");
textarea.addEventListener("keydown",function(e){
    console.log("The key is down");
    if(e.repeat){
        alert(" You are repeating");
    }
});

textarea.addEventListener("keypress",function(e){
    console.log("The key is pressed");
    console.log(e.key);
    console.log(e.keyCode);
});

textarea.addEventListener("keyup",function(e){
    console.log("The key is up");
    if(e.shiftKey){
     console.log("Shift + "+e.key);
    }
});

var input_yo = document.querySelector("#yoyo");
input_yo.addEventListener("blur", function(e){
    console.log(" It is blur: "+e.target.value);
    input_yo.value= e.target.value.toUpperCase();
});
input_yo.addEventListener("focus", function(){
    //console.log(" It is focus");
    input_yo.style.backgroundColor="orange";
    input_yo.style.padding= "2rem";
});

input_yo.addEventListener("focusin", function(){
    console.log(" It is focusin");
});

input_yo.addEventListener("focusout", function(){
    console.log(" It is focusout");
    input_yo.style.padding= "0rem";
    
});

var clipBoardTEST= document.querySelector("#clipboardtest");

input_yo.addEventListener("copy", function(){
   // console.log(" It is copied");
   // document.write("You copied the text.")
    clipBoardTEST.innerText=" You have copied the text boss.";
    
});


// Drag event
const yo_div = document.querySelector("#dragdude");
const yo_p= document.querySelector("#drag1");
yo_p.addEventListener("dragstart",function(e){
    e.dataTransfer.setData("Text", e.target.id);
});

yo_div.addEventListener("dragover",function(e){
    e.preventDefault();
});

yo_div.addEventListener("drop",function(e){
    let id=e.dataTransfer.getData("Text");
    yo_div.appendChild(document.getElementById(id));
    e.preventDefault();
});


console.log(window.location.href);
console.log(location.hostname);
console.log(location.port);

var locationDiv= document.querySelector(".location-div");
var p1=locationDiv.children[0];
p1.innerText= location.href;

var p2=locationDiv.children[1];
p2.textContent=("It is hosted in "+location.hostname);

var p3=locationDiv.children[2];
p3.innerText= (" This is Fahim's Practice session.");

var blocke= document.querySelector("#visit1");
blocke.addEventListener("click", function(){
    location.assign("https://www.blocke.shop/");
});


var visitBtn= document.querySelector("#visit2");
visitBtn.addEventListener("click", function(){
    location.assign("http://127.0.0.1:5500/JavaScript_Learning_Stage/index.html");
});

/*function deleteSomething (){
   let value= confirm("Do you want to delete all negativity ?");
   if(value){
    console.log(" Item is deleted");
   }
   else {
    console.log(" That is not deleted");
   }
}

deleteSomething();*/

function welcomeMessage(){
    var h1=document.createElement('h1');
    let text; 

    var name= prompt("Enter your name : ");
    if(name== null || name==''){
         text= " No name found";
    }

    else {
        text = name;
    }

    var textNode= document.createTextNode(text);
    h1.appendChild(textNode);
    document.body.appendChild(h1);
}

welcomeMessage();

