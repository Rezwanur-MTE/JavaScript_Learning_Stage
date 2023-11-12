// local storage store data as key value pair and must have to contain string 
// setItem(key, vaule)    , local storage already built in "window"

localStorage.setItem("userName", "Rezwanur Rahman");
localStorage.setItem("password","01521521324");
localStorage.setItem("Team name", " The Bois");

// how to get data

const userName= localStorage.getItem("userName");
const userPassword= localStorage.getItem("password");
const userTeam= localStorage.getItem("Team name");
console.log(userName, userPassword, userTeam);
//console.log();

//remove Item
localStorage.removeItem("Team name");
//localStorage.removeItem("password");
//localStorage.removeItem("userName");

const countries=["Australia", "Bangladesh", "Nepal"];
localStorage.setItem("countries", JSON.stringify(countries));

// getItem(key)
const countrieslist=JSON.parse(localStorage.getItem("countries"));
console.log(countrieslist);

