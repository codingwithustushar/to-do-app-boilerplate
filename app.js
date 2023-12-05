const todolist = document.getElementById("todolist")
const input = document.getElementById("input")
const button = document.getElementById("button")

// initialise an empty array

let arr = [];


button.addEventListener("click", ()=>{
    if(input.value==""){
        alert("Enter value")
    }
    else{
    // add to the array
    arr.push(input.value);
    // console.log(arr);
    input.value = '';

    showList();
    }
})
function showList(){
    // evertime the function runs ,we have to clear the container first 
    //  hof - foreach - append all the list items from the array
    todolist.innerHTML = "";
    arr.forEach((el,i)=>{
        // todolist.innerHTML += "<li>"+el+"<a onclink ='EditList("+i+")'>"+"Edit"+"</a>"+"<a onclink ='DeleteList("+i+")'>"+"Delete"+"</a>"+"</li>";

        let listItem = document.createElement("li")
        let anchor1 = document.createElement("a")
        let anchor2 = document.createElement("a")
        anchor2.style.marginLeft = "10px";

        listItem.innerText =el;
        anchor1.innerText = 'Edit';
        anchor2.innerText = 'Delete';
        anchor1.onclick =()=>{
            EditList(i);
        }
        anchor2.onclick =()=>{
            DeleteList(i);
        }
        listItem .append(anchor2,anchor1);
        // listItem .append(anchor1);
        todolist.append(listItem)

    })

}
function EditList(i){
    // showing a prompt - getting a value
    // replacing the value at the particular index.
    let newValue = prompt("Please enter a new value")

    arr.splice(i,1,newValue);
    showList();
}
function DeleteList(index){
    arr.splice(index,1);
    showList()

}