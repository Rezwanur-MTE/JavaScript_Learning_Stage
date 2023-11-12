/*console.clear();

// events - onload(), onerror()
// property - response, responseText , responseType, responseURL, status, statusText
// function - open(), send(), setRequestHeader()


const makeRequest=(method, URL, data)=>{
    const xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open(method,URL);

    xhr.setRequestHeader('Content-Type','application/json');
    
    xhr.onload=()=>{
        let data= xhr.response;
        console.log(JSON.parse(data));
    }

    xhr.onerror=()=>{
        console.log("Error is here");
    }

    xhr.send(JSON.stringify(data));
}


const getData=()=>{

    makeRequest('GET','https://jsonplaceholder.typicode.com/posts');

}

const sendData=()=>{

    makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
        id: 101,
        title: 'foo',
        body: 'bar',
        userId: 1
    });

}


const updateData=()=>{

    makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
        id: 111,
        title: 'fooMA',
        body: 'barMA',
        userId: 1,
    });

}


updateData();
sendData();
getData();


// fetch()    --------------------------

console.clear();
fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: 'PUT',
    headers: {
       "Content-type":"application/json; charset=UTF-8",
    },
    body: JSON.stringify({
        title:"Foo",
        body: "Bar",
        userId: 1,
        id: 5,
    }),
})
//.then((res)=> res.json()) // it will return another json
.then((res)=>{
    if(!res.ok){
        const message=`Yo boi Error: ${res.status}`
        throw new Error(message);
    }
    return res.json();
})
.then((res)=> console.log(res))
.catch((err)=> console.log(err));*/

// async await with fetch()  playing with api

var makeRequest= async(url, config) =>{
   const response= await fetch(url, config);
   if(!response.ok){

    const message=`Error : ${response.status}`;
    throw new Error(message);

   }
   
   const data= await response.json();
    return data;
}

const sendData=()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts",{
        method: "POST",
        body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));    // .then and .catch is always applicable for promise function .
                                        // In this case fetch() by default return a promise function , so we can do it

}

sendData();



const getData=()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));    // .then and .catch is always applicable for promise function .
                                        // In this case fetch() by default return a promise function , so we can do it

}

getData();

const updateData=()=>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/11",{
        method: "PUT",
        body: JSON.stringify({
            title: "foo",
            body: "bar",
            userId: 1,
            name: "Fahim dude",
        }),
        headers:{
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then((res)=>console.log(res))
    .catch((err)=>console.log(err));    // .then and .catch is always applicable for promise function .
                                        // In this case fetch() by default return a promise function , so we can do it

}

updateData();




