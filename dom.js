//console.log(window);
//console.log(document);

//let element = document.getElementById("demo");
//element.innerText = Google
//console.log(element);

//let ele = document.getElementsByName("test");
//ele.innerText= "<h1>Header</h1>"
//ele.innerHTML = "<h1Header<h1>"
//console.log(ele);

//!
//let ele = document.getElementsByClassName("test");
//console.log(ele);
//console.log(Array.isArray(ele));
//ele[0].innerText="Hello"
//ele[0].style.backgroungColor="tomato"

//!spread operator : it will take out each and every value from the original array
//! and store it inside one more new array(pure array).
//? syntax :- [....variable];

//let x = [...ele];
//console.log(x ,Array.isArray(x));
//x.map(element=>{
    //console.log(element);
    //element.style.backgroundColor="orange"
//})

//!
 //let ele = document.getElementsByTagName("div");
 //console.log(ele);

//let ele = document.getElementsByName("formData");
//console.log(ele);
//[...ele].map(inp=>{
    //console.log(inp.value);

//});
//let ele = document.querySelector("mru");
//console.log(ele);

//let ele = document.querySelector(".test");
//console.log(ele);

//let ele = document.querySelectorAll(".test");
//console.log(ele);

//let btn = document.querySelector("#btn");
//! addEventListner("event" ,()=>{})
    //btn.addEventListener("click",()=>{
        //console.log("button clicked");
        //alert("hi")
        //document.body.style.backgroundColor="tomato"

    //})

    //let btn = document.querySelector("#btn");
    //btn.addEventListener("dbclick",()=>{
        //console.log("double clicked");
    //})
    //let bgColor = document.querySelectorAll(".bgColor");
    //console.log(bgColor);
    //[...bgColor].map((element)=>{
        //console.log(element);
        //element.addEventListener("mouseover",()=>{
            //console.log(element.innerText);
            //element.style.backgroundColor=element.innerText;
        //});
        //element.addEventListener("mouseleave",()=>{
            //console.log(element.innerText);
            //element.style.backgroundColor="transparent";
        //});
    //})


    //let ele = document.createElement("h1");
    //ele.innerText = "Dynamic creation of html element";
    //ele.setAttribute("id", "demo");
    //ele.id = "demo";
    
    //ele.removeAttribute("id")
    //console.log(ele);

    //let image = document.createElement("img");
    //image.src = "./6328 × 4219 jpe";
    //console.log(image);

    //document.body.appendChild(ele);
   // document.body.appendChild(ele);

    let form = document.querySelector("form");
    let username = document.getElementById("uName");
    let mail =  document.getElementById("uName");
    let psw = document.getElementById("uPass");
    
    form.addEventListener("submit",(event)=>{
        event.preventDefault();
        //console.log(event);
        //console.log("form submitted");
        let uname = username.value;
        let uemail = mail.value;
        let upass = psw.value;
        let userDetails={ 
            uname, uemail, upass
        }
        console.log(userDetails);
        localStorage.setItem("userData", JSON.stringify(userDetails))
    })