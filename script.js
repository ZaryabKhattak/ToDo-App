const inputbox = document.getElementById("input-box");

const listContainer = document.getElementById("list-container");

function addtask() {
    if(inputbox.value === '' ){
        alert("You must add something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputbox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputbox.value = "";
    savedata();
}

function handleEnterKeyPress(event) {
    if (event.key === 'Enter') {
        addtask();
    }
}

inputbox.addEventListener("keypress", handleEnterKeyPress);

listContainer.addEventListener("click", function (e) {
    if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
    else if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
        }
    
    }
, false);

function savedata(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask (){
    listContainer.innerHTML = localStorage.getItem("data");
}

showTask ();