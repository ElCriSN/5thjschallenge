const toDo = [
    {
        id: 01, name: "Be Happy =DDD!!", status: false
    },
    {
        id: 02, name: "Be Kindly =D!", status: false
    },
    {
        id: 03, name: "Be Positive =DDD!!", status: false
    },
];
let toDoInput = document.querySelector("#inputToDo")
let toDoButton = document.querySelector("#buttonToDo")
let toDoList = document.querySelector("#toDoList")
let toDoCount = document.querySelector("#toDoCount")
let toDoChecked = document.querySelector("#toDoChecked")

// let html = ""
// for (let toDoElement of toDo) {
//     html += `<li> ${toDoElement.id} ${toDoElement.name} <input
//     onclick="
//             checkedCount(${toDoElement.id})
//     "
//     class="checkedInput" type="checkbox"> <button class="btn btn-danger" onclick="erase(${toDoElement.id})
//     "> Erase To Do =D!! </button> </li>`
// }
// toDoList.innerHTML = html
// toDoCount.innerHTML = toDo.length
renderToDo()
function renderToDo() {
    let html = ""
    for (let toDoElement of toDo) {
        if (toDoElement.status == true) {
            html += `<li> ${toDoElement.id} ${toDoElement.name} <input onclick="
            checkedCount0(${toDoElement.id})
        " class="checkedInput" checked type="checkbox"> <button class="btn btn-danger" onclick="
        erase(${toDoElement.id})
        const arregloDeTrues = toDo.filter(ele1 => ele1.status == true)
        toDoChecked.innerHTML = arregloDeTrues.length
        "> Erase To Do =D!! </button> </li>`
        } else {
            html += `<li> ${toDoElement.id} ${toDoElement.name} <input onclick="
        checkedCount(${toDoElement.id})
        const arregloDeTrues = toDo.filter(ele1 => ele1.status == true)
        toDoChecked.innerHTML = arregloDeTrues.length
        " class="checkedInput" type="checkbox"> <button class="btn btn-danger" onclick="erase(${toDoElement.id})"> Erase To Do =D!! </button> </li>`
        }
    }
    toDoList.innerHTML = html
    toDoCount.innerHTML = toDo.length
}

toDoButton.addEventListener("click", () => {
    const newToDo = {
        id: Date.now(), name: toDoInput.value, status: false
    }
    toDo.push(newToDo)
    toDoInput.value = ""
    renderToDo()
})

function erase(id) {
    const index = toDo.findIndex((ele) => ele.id == id)
    toDo.splice(index, 1)
    renderToDo()
}

function checkedCount(id) {
    const index0 = toDo.findIndex(ele0 => ele0.id == id)
    toDo[index0].status = true
    const arregloDeTrues = toDo.filter(ele1 => ele1.status == true)
    toDoChecked.innerHTML = arregloDeTrues.length
    renderToDo()
    console.log(toDo)
}

function checkedCount0(id) {
    const index0 = toDo.findIndex(ele0 => ele0.id == id)
    toDo[index0].status = false
    const arregloDeTrues = toDo.filter(ele2 => ele2.status == true)
    toDoChecked.innerHTML = arregloDeTrues.length
    renderToDo()
    console.log(toDo)
}

