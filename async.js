//let p2 = new Promise((  resolved , reject) => {
    //resolved("successfull");

//})
//p2.then((response)=> console.log(response))
//p2.catch((error)=> console.log(error))
//p2.finally(()=> console.log("finally for both "))

//! API fetching
//! https://jsonplaceholder.typicode.com/users

//function fetchUsers()
//{
    //let response = fetch("https://jsonplaceholder.typicode.com/users");
    //console.log(response);
    //response.then(result=>{
        //console.log(result.json());
        //return result.json().then(data=>{
            //console.log(data);
            //let store = document.getElementById("store");
            //console.log(store);
            //data.map(user=>{
                //console.log(user);
                //store.innerHTML += `
                //<tr>
                    //<td>${user.id}</td>
                    //<td>${user.name}</td>
                    //<td>${user.email}</td>
                    //<td>${user.company.name}</td>
                //</tr>
                //` 
            //})

        //})
    //})
    //.catch(err=>console.log(err))
//}
//fetchUsers();

//

//function demo()
//{
//console.log("Start");
//console.log(10);
//console.log(20);
//return;
//console.log(30);
//console.log(40);
//console.log("End");
//}
//demo();

let p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("success");
    }, 5000)
})

async function demo(){
    console.log("Start");
    let x = await p;
    console.log(x);
    console.log("End");
};
demo()

async function fetchUsers()
{
    let response =await fetch("https://jsonplaceholder.typicode.com/users");
    let data =  await response.json();
    console.log(data);
}
fetchUsers();