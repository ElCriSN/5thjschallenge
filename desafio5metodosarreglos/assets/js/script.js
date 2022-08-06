const toDo = [
    {
        id: 01, name: "Be Happy =DDD!!"
    },
    {
        id: 02, name: "Be Kind =D!"
    },
    {
        id: 03, name: "Be Positive =DDD!!"
    },   
];
let toDoInput = document.querySelector("#inputToDo")
let toDoButton = document.querySelector("#buttonToDo")
let toDoList = document.querySelector("#toDoList")
let toDoCount = document.querySelector("#toDoCount")
function renderToDo(){
    let html = ""
    for (let toDoElement of toDo) {
        html += `<li>  ${toDoElement.name} <input id="checkedInput" type="checkbox"> <button onclick="erase(${toDoElement.id})"> Erase To Do =D!! </button> </li>`
    }
    toDoList.innerHTML = html
    toDoCount.innerHTML = toDo.length
}

toDoButton.addEventListener("click", () => {
    const newToDo = {
        id: Date.now(), name: toDoInput.value
    }
    // const checkedToDo = checkedInput.value
    // const toDoFilter = toDo.filter((toDo) => toDo.checkedToDo === true);
    toDo.push(newToDo)
    toDoInput.value = ""
    renderToDo(/*checkedToDo*/)
})

function erase(id){
    const index = toDo.findIndex((ele) => ele.id == id)
    toDo.splice(index, 1)
    renderToDo()
}