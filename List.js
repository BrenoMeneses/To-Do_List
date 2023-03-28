// variaveis

const text = window.document.getElementById("addList")
const formToDO = window.document.getElementById("formToDo")
const toDo = window.document.getElementById("toDo")




// eventos

formToDO.addEventListener("submit", (e) =>{
    e.preventDefault()

    var valorTexto = text.value
    
    if(valorTexto){
        criar(valorTexto)

        text.value = ""
        text.focus()
    }
})

document.addEventListener("click", (e) =>{
    
    const target = e.target
    const div = target.closest(".lista")
    const btnF = target.closest(".btnF")

    if(target.classList.contains("btnF")){

        div.classList.toggle("listafeito")
        if(div.classList.contains("listafeito")){
            btnF.innerText = "desfazer"
        }else{
            btnF.innerText = "feito"
        }
    }


    if(target.classList.contains("btnE")){
        const div = target.closest(".lista").remove()
    }
})



// funções 

const criar = (text) => {
    const div = window.document.createElement("div")
    div.classList.add("lista")
    toDo.appendChild(div)

    const p = window.document.createElement("p")
    p.innerText = text
    div.appendChild(p)

    const div2 = window.document.createElement("div")
    div.appendChild(div2)

    const btnF = window.document.createElement("button")
    btnF.classList.add("btnF")
    btnF.innerText = "feito"
    div2.appendChild(btnF)

    const btnE = window.document.createElement("button")
    btnE.classList.add("btnE")
    btnE.innerText = "excluir"
    div2.appendChild(btnE)
}