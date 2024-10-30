let input = document.querySelector(".form input");
let submit = document.querySelector(".form button");
let result = document.querySelector(".result");
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        add();
    }
});
function add(){
    if(input.value == ""){
        alert("You must write somthing");
    }
    else{
    let li = document.createElement("li");
    li.innerHTML = input.value;
    result.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
}
    input.value = "";
    saveData();
}
result.addEventListener("click",clicked);
function clicked(e){
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}
function saveData(){
    localStorage.setItem("data",result.innerHTML);   
}
function getData(){
    result.innerHTML = localStorage.getItem("data");
}
getData();
