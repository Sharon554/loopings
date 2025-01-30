const collegeName = "mru"
const marks = 100
 function tasking(){
    console.log("I am learning code now at "+collegeName)
    document.getElementById("hello").innerText="I am learning code now at mru";
}
export {collegeName, tasking};
export default marks;
