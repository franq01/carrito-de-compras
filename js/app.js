// variables para referenciar a objetos del documento
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');


const agregarCurso = (e)=>{
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')){
        console.log("Presionaste el boton");
    }
}


const cargarEventListener = ()=>{
    /// agregar funcion de carga de cursos al carrito 
    listaCursos.addEventListener('clik', agregarCurso);

}
cargarEventListener();
