// basic array declaration
var names= new Array(5);
names[0]= "Fahim";
names[1]= "Naeem";
names[2]= "Jaoyad";
names[3]= "Sagar";
document.write(names[0]+ " </br>");
document.write(names[3]);

// array declaration and assigning both togather 
var names2= ["Fahim", " Mahdi"," Anis", " Lima"];
names2.push(" Sokhina", " Ladi Gaga");
names2.pop();

document.write(names2);

var country1=[" BD", "India"];
var country2=[" U.S.", "U.K."];
var x= country1.concat(country2);
document.write("</br> "+x);

// loop in array 
var num=[10, 20 , 30, 40, 50 ];
var sum=0;
for(var i=0; i<num.length; i++){
    document.write("</br>"+ num[i]);
    sum+=num[i];

}    document.write(" </br> Sum of these are : "+ sum);

// taking user input in array 
var num2= new Array();
for(var i=0; i<5; i++){

    num2[i]= parseFloat(prompt(" Enter number dude: "));
}
var sum1=0;
for(var i=0; i<num2.length;i++){

    document.write("</br>"+num2[i]);
    sum1+= num2[i];

}  document.write(" Sum is : "+ sum1);

var arrayyo=["Sagar","Fahim", "Anis", " Moin", " Jaoyad"];
document.write("</br>"+arrayyo);
arrayyo.shift();  // eleminate element from the begining.
arrayyo.unshift(" Enamul ");
arrayyo.splice(2, 1, " Karim "); // add "Karim " in index 2 and remove 1 item from the end
document.write("</br>"+arrayyo);

/*var newarray = arrayyo.slice(2,3);
document.write("</br>"+newarray);
var new2array = arrayyo.sort();
document.sort("</br>"+new2array);
var x1=arrayyo.reverse();
document.write("</br>"+x1);   */

// One dimensional Array 

function highestScore(arrayX){      // parameterized function
    var max= arrayX[0];

    for (var x=1; x<arrayX.length; x++){
        if(max<arrayX[x]){

            max= arrayX[x];

        }
    }
    return max;
}

var scores=[21, 38, 1, 88, 15];
var maxScores= highestScore(scores);
document.write("</br>"+maxScores);

// 2D array 

function highestRunScrorer(array2X){
    document.write(array2X);

    var highestScorer= array2X[0][0];
    var highestScore= array2X[0][1];
    for (var x=1; x<array2X.length;x++){
         if(highestScore<array2X[x][1]){

            highestScore= array2X[x][1];
            highestScorer=array2X[x][0];

         }
    }

    return highestScorer;
}

var playerInfo= [
                  ["Ashraful", 95],
                  ["Sakib", 25],
                  ["Riad", 105],
                  ["Mushi",35],
                  [" Taskin ", 6],
                  [" Mashrafi ", 12]
                ];

var namePlayer = highestRunScrorer(playerInfo);
document.write("</br> Man of the match is "+ namePlayer);

