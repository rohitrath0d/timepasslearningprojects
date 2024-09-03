const inputBox =document.getElementById("input-box");

const listContainer =document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("This field can't be empty");
    } else {
        let li = document.createElement("li")
        li.innerHTML = inputBox.value;

        // Initially set the item to be unchecked
        li.classList.add("unchecked")

        listContainer.appendChild(li)
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span)
    }
    inputBox.value = ""
    SaveData();
}



listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        SaveData()

        // Toggle between checked and unchecked states
        if (e.target.classList.contains("checked")) {
            e.target.classList.remove("unchecked");
            SaveData()
        } else {
            e.target.classList.add("unchecked");
            SaveData()
        }
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        SaveData()
    }
}, false);


// listContainer.addEventListener("click", function(e){

//     if(e.target.tagName === "LI"){
//         e.target.classList.toggle("checked");
//         SaveData();
//     }
//     else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//         SaveData();
//     }
// }, false);

function SaveData(){
    localStorage.setItem("data", listContainer.innerHTML)
}

function showTask(){
    listContainer.innerHTML  = localStorage.getItem("data");

}
showTask(); 