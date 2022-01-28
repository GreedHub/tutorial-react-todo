window.addEventListener("load", ()=>{

})

const borrarElemento = (event)=>{
    const btn = event.target;
    btn.parentElement.remove();
}

const tacharTexto = (event)=>{
    const cb = event.target; //<------
    const siblings = cb.parentElement.childNodes;
    let label;

    for(k in siblings){        
        if(siblings[k].nodeName === "LABEL"){
            label = siblings[k]
            break;
        }
    }
    
    if(cb.checked){
        label.classList.add("tachado");
    }else{
        label.classList.remove("tachado");
    }

}

const agregarTodo = ()=>{
    const todo = document.getElementById('nuevoTodo').value;
    const lista = document.getElementById('todo');

    /* Crear LI */
    const li = document.createElement("li")

    /* Crear Checkbox */
    const checkbox = document.createElement("input")
    checkbox.setAttribute("type",`checkbox`)
    checkbox.setAttribute("name",`checkbox${lista.childNodes.length}`)
    checkbox.addEventListener('change',event=>tacharTexto(event))

    /* Crear Label */
    const label = document.createElement("label");
    label.innerHTML = todo;
    label.setAttribute("for",`checkbox${lista.childNodes.length}`)
    
    /* Crear Boton */
    const button = document.createElement("button");
    button.setAttribute("id",`borrar`)
    button.addEventListener('click',event=>borrarElemento(event))
    button.innerHTML=">:("

    /* Agregar componentes al elemento de lista */
    li.appendChild(checkbox);
    li.appendChild(label)
    li.appendChild(button)

    /* Agregar elemento a la lista */
    lista.appendChild(li)

    /* Vaciar textbox */
    document.getElementById('nuevoTodo').innerHTML = ''

}