const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector ("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector('vaciar-carrito');

let listadoCarrito=[];

const agregarCurso = (e) => {
    e.preventDefault();
    if(e.target.classList.contains("agregar-carrito")){
        const curso= e.target.parentElement;
        const infoCurso={
            imagen: curso.querySelector("img").src,
            nombre: curso.querySelector("h4").textContent,
            precio: curso.querySelector("p.precio").textContent,
            id: curso.querySelector(".agregar-carrito").getAttribute("data-id"),
            cantidad: 1
        }
    console.log ("Presionaste en el div");
    agregarCarrito (infoCurso);
    }
}
const agregarCarrito=curso => {
    //console.log("curso a agregar")
    //console.log(curso.id)
    //console.log("Listado de cursos")
    if (listadoCarrito.some(cursoInCarrito => cursoInCarrito.id === curso.id)){
        let carrito = listadoCarrito.map(cursoInCarrito => {
            if(cursoInCarrito.id === curso.id){
                cursoInCarrito.cantidad++;
                return cursoInCarrito;
            } else {
                return cursoInCarrito;
            }
        })
        listadoCarrito = [...carrito];
    } else {
        listadoCarrito = [...listadoCarrito, curso];
    }
    console.log(listadoCarrito);
    generaHTML();

    
}
const generaHTML = () => {
    vaciarCarrito ();
    listadoCarrito.forEach(curso => {
        const row = document.createElement('tr');
        const cursoHTML =`
        <td>
           <img src="${curso.imagen}" width=100>
        </td>
        <td> ${curso.nombre}</td>
        <td> ${curso.precio}</td>
        <td> ${curso.cantidad}</td>
        <td>
           <a href="#" class="borrar-curso" data-id="${curso.id}">x</a>
        </td>
        `;
        row.innerHTML = cursoHTML;
        contenedorCarrito.appendChild(row);
1    })

const eliminarCurso = (e) => {
    e.preventDefault();
    if(e.target.classList.contains('borrar curso')){
        let idCurso = e.getAttribute('data-id')
        carrito = listadoCarrito.filter(cursoInCarrito => cursoInCarrito.id !== idCurso)
        listadoCarrito = [...carrito];
        generaHTML();
       
    }
}
}

    const cargarEventListener = () => {
        /// agregar fiuncion de carga de recursos al carrito 
        listaCursos.addEventListener('clik', agregarCurso);
        listaCursos.addEventListener('clik', eliminarCurso);
        listaCursos.addEventListener('clik', vaciarCarrito);

        
   
    
}

cargarEventListener();

