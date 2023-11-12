// manual object

var student1= {
    name: "Fahim",
    age : 25,
    cgpa: 3.1,
    lang: ["Bangla", " English", "Hindi "]
}

var student2= {
    name: "Enamul",
    age : 24,
    cgpa: 3.9,
    lang: ["Bangla", " English", "Turkey "]
}
document.write(student1.name);
document.write(student2.cgpa);

// by using constructor 

function Student(name, age, cgpa, lang){
      this.name= name; 
      this.age= age ;
      this.cgpa= cgpa ;
      this.lang= lang; 

      this.display = function display(){
        document.write(this.name);
        document.write(this.age);
        document.write(this.cgpa);
        document.write(this.lang);
      }
}

var Kuddus = new Student(" Abu Kuddus",26, 2.0,[" Bangla", " Marathi", " Urdu "]);
var Jaoyad = new Student(" Jaoyad Hasan ", 29, 4, ["Bangla", " English ", " Spanish "]);

Kuddus.display();
Jaoyad.display();


