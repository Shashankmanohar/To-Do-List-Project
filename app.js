let input_task = document.getElementById("taskinput");
let add_btn = document.getElementById("addbtn");
let ul = document.getElementsByClassName("tasklist");

add_btn.addEventListener("click", addtask);

function addtask(){
    let input = input_task.value.trim();
    if(input !== ""){
    let addedtask = document.createElement("li");
    addedtask.className="addedTask";
    addedtask.textContent = input;
    ul[0].appendChild(addedtask); 
    
    let deletebtn = document.createElement("button");
    deletebtn.setAttribute("class","deletebtn");
    deletebtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deletebtn.onclick = function (){
        addedtask.remove()
    }
    addedtask.appendChild(deletebtn);
    input_task.value = "";
    }
}