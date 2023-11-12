function square(){  // this function returns nothing

    var num=5;
    var result= num*num;
    document.write("Area: "+ result);

}

square();

// parameterized function 
function area(num1, num2){

    var result= num1*num2;
    return result;

}

var x= area(5,6);
document.write(" The area of rectangle: "+ x);