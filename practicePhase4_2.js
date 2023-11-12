
setTimeout(()=>{
    console.log(" Hi from 3 sec");
},3000);



var savebtn= document.querySelector(".Save-btn");
var msg = document.querySelector(".message");
savebtn.addEventListener("click", saveUser);
function saveUser(){
    msg.textContent="User Registration Successful";
    setTimeout(()=>{
        msg.textContent="";
    }, 3000);
}

setTimeout(display, 4000);
function display(){
    console.log("This is from display function.");

}

savebtn.addEventListener("click", displaycount);

function displaycount(){
    var count=0;
    msg.textContent=count;
    setInterval(()=>{
       count++;
       msg.textContent=count;
    },1500);
}

