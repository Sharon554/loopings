//let p2 = new Promise((  resolved , reject) => {
    //resolved("successfull");

//})
//p2.then((response)=> console.log(response))
//p2.catch((error)=> console.log(error))
//p2.finally(()=> console.log("finally for both "))

//! API fetching
//! https://jsonplaceholder.typicode.com/users

function fetchUsers()
{
    let response = fetch("https://jsonplaceholder.typicode.com/users");
    console.log(response);
    response.then(result=>{
        console.log(result.json());
        return result.json().then(data=>{
            console.log(data);
            let store = document.getElementById("store");
            console.log(store);
            data.map(user=>{
                console.log(user);
                store.innerHTML += `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.company.name}</td>
                </tr>
                ` 
            })

        })
    })
    .catch(err=>console.log(err))
}
fetchUsers();
