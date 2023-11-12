alert("This is a learning project");

// take user input 
var text= prompt(" Write your name: ");
document.write(" Name length is "+ text.length + "</br>"); // length of the string

var mark= parseInt(prompt(" Enter your marks: "));
if(mark>=80) 
document.write("Congrates! You got A+");
else if(mark>=70) 
document.write("ops! You got A");
else if(mark>=60) 
document.write("oh ho! You got A-");
else if(mark>=33) 
document.write("Congrates! Passed");

else
document.write(" Sorry for you, You failed.");

// switch practice 
var word= prompt(" write a vowel ");

switch(word){
    case('a'):
    document.write(" This a website ");
    break;
    case('e'):
    document.write(" I hate boiled egg ");
    break;
    case('i'):
    document.write(" I love you  ");
    break;
    case('o'):
    document.write(" I love chilled orange juice ");
    break;
    case('u'):
    document.write(" What if, you and I under a same umbrella ");
    break;

    default:
        document.write(" That is cosonant");
    
}



