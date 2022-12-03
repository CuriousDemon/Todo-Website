//all variable

const TodoForm = document.querySelector(".first");
const TodoAdd = document.querySelector("#todo");
const ul = document.querySelector(".itemsList");



//add logic



TodoForm.addEventListener("submit", (e) => {
    e.preventDefault()
    const newTextValue =  TodoAdd.value;
    TodoAdd.value = ""
    const newLi = document.createElement("li")
    newLi.innerHTML = `<span>${newTextValue}</span>
    <div>
    <button class="btn done">Done</button>
    <button class=" btn remove">Remove</button>
    </div>
    </li>`
    ul.append(newLi);
    
})


ul.addEventListener("click",(e)=>{
    console.log(e.target)
if(e.target.classList.contains("done")){
    const newSpan = e.target.parentNode.previousElementSibling;
   newSpan.style.textDecoration = "line-through"
}
if(e.target.classList.contains("remove")){
    const removeAct = e.target.parentNode.parentNode;
    removeAct.remove();
}
})


