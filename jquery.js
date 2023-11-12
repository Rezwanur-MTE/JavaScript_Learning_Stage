console.clear();
//console.log(window);
// ajax = asynchronous javascript and xml

const makemeRequest=async(url, method,data)=>{
   try{
    const result= await $.ajax({
        url: url,
        method: method,
        data: data
    });

    return result;
    //console.log(result);
   } catch(err){

    console.log(err);

   }
}

const getmyData=()=>{
    makemeRequest("https://jsonplaceholder.typicode.com/posts/1","GET")
   .then((res)=>console.log(res));
}

getmyData();

const createmyData=()=>{
    makemeRequest("https://jsonplaceholder.typicode.com/posts","POST",{
        title: "Yo Yo Fahim",
        body :" Long Body dude",
        userId: 12,
    })
   .then((res)=>console.log(res));
}

createmyData();

