// variables para referenciar a objetos del documento
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');

let listadoCarrito = [];

const agregarCurso = (e)=>{
    e.preventDefault();
    listadoCarrito = [...listadoCarrito, curso]
    console.log
    if(e.target.classList.contains('agregar-carrito')){
        const curso = e.target.parentElement.parentElement;
        const infoCurso = {
            imagen: curso.querySelector('img').src,
            nombre: curso.querySelector('h4').textContent,
            precio: curso.querySelector('p.precio').textContent,
            id: curso.querySelector('.agregar-carrito').getAttribute('data-id'),    
            cantidad:1
        }
        console.log("e.target.parentElement");
        agregarCarrito(infoCurso);
    }
}


const agregarCarrito = curso =>{
    console.log(listadoCarrito);
}

const cargarEventListener = ()=>{
    /// agregar funcion de carga de cursos al carrito 
    listaCursos.addEventListener('clik', agregarCurso);

}
cargarEventListener();
