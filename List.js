var text = window.document.getElementById("addList")
var formToDO = window.document.getElementById("formToDo")
var toDo = window.document.getElementById("toDo")


formToDO.addEventListener("submit", (e) =>{
    e.preventDefault()

    var valorTexto = text.value
    
    if(valorTexto){
        ToDo(valorTexto)
    }
})


// funcoes 

const ToDo = (text) => {
    const div = window.document.createElement("div")
    div.classList.add("lista")
    toDo.appendChild(div)

    const p = window.document.createElement("p")
    p.innerText = text
    div.appendChild(p)

    const div2 = window.document.createElement("div")
    div.appendChild(div2)

    const btn1 = window.document.createElement("button")
    btn1.innerText = "feito"
    div2.appendChild(btn1)

    const btn2 = window.document.createElement("button")
    btn2.innerText = "excluir"
    div2.appendChild(btn2)
}