import {text, setText} from './myModule.js'
//import {message} from './myModule.js'

console.log(text);

console.log(setText(" Yo Yo ES6 my man"));

class  student{
    // creating constructor is must for js class

    constructor(id, name){

        this.id=id;
        this.name=name;
    }

    set studentname(name){
      this.name=name;
    }

    get studentInfo(){
        return this.id+" " + this.name+" ";
    }
}

let s1=new student(101, "Jaoyad");

console.log(s1);
console.log(s1.name);

s1.studentname="lalalala";
console.log(s1.name);

console.log(s1.studentInfo);

const taskOne=(callback)=>{
    console.log("Task 1");
    callback();
}

const tasktwo=(callback)=>{
   
    setTimeout(
        ()=>{
            console.log("Task 2, Data loading");
            callback();
        },3000);
           
}
const taskthree=(callback)=>{
    console.log("Task 3");
    callback();
}
const taskfour=(callback)=>{
    console.log("Task 4");
    callback();
}
const taskfive=()=>{
    console.log("Task 5");
}

taskOne(function f1(){    // named function 
    tasktwo(function f2(){
        taskthree( function(){    // annonymous function 
            taskfour(()=>{       // arrow annonymous function 
                taskfive();
            });
        });
    });
});

document.querySelector("#hmm").addEventListener('click',()=>{
    console.log("BUtton is clicked, how is the world going ?");
});
console.log("----------------------");

// creating promise
const promise1=  new Promise((resolve , reject)=>{
             let completedPromise=false;
             if(completedPromise){

                resolve("Completed Promise 1");

             } else {
                reject(" Not completed promise 1");
             }
});

//console.log(promise1);
promise1.then((res)=>{
    console.log(res);
})

.catch((err)=>{
    console.log(err);
});

console.log(" start of the end ");

const Task1=()=>{
    return new Promise((resolve, reject)=>{
        resolve("Second Task 1 is completed.");
    });
}

const Task2=()=>{
    return new Promise((resolve, reject)=>{
       // resolve("Second Task 2 is completed.");
       reject("Second Task 2 is not completed");
    });
}
const Task3=()=>{
    return new Promise((resolve, reject)=>{
        resolve("Second Task 3 is completed.");
    });
}

Task1()
.then((res)=> console.log(res))
.then(Task2)
.then((res)=>{
    console.log(res)
})
.then(Task3)
.then((res)=>{
     console.log(res)
})
.catch((err)=> console.log(err));

const task_1=()=>{
    return new Promise((resolve, reject)=>{
        resolve(" Hello , Async Await test is conducted 1");
    });
}
const task_2=()=>{
    return new Promise((resolve, reject)=>{
        resolve(" Hello , Async Await test is conducted 2");
    });
}
const task_3=()=>{
    return new Promise((resolve, reject)=>{
        reject(" Hello , Async Await test is Rejected");
    });
}

async function callAllTask(){
 try{
    const t1 = await task_1();
    console.log(t1);
    const t2 = await task_2();
    console.log(t2);
    const t3 = await task_3();
    console.log(t3);

 } catch(e){
    console.log(e);

 }
}
callAllTask();


// async function through ES6 methods
/*const  callAllTask= async()=>{
    const t1 = await task_1();
    console.log(t1);
    const t2 = await task_2();
    console.log(t2);
    const t3 = await task_3();
    console.log(t3);
  }
  callAllTask();*/


