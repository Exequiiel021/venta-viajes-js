import { barcelona, roma, paris, londres } from "./ciudades.js";

//Obtener elementos del dom

let enlaces = document.querySelectorAll("a");
let tituloElemento = document.getElementById("titulo");
let subTituloElemento = document.getElementById("subtitulo");
let parrafoElemento = document.getElementById("parrafo");

//Agregar un evento "click" y escuchar con addEventListener

enlaces.forEach(function (enlace) {
    enlace.addEventListener("click", function () {
        //REMOVER ACTIVE
        enlaces.forEach(function (enlace) {
            enlace.classList.remove("active") //esta en el css la clase active
        })
        //agregar active
        this.classList.add("active"); //this va a seleccionar el contenido al cual se le hace click para agregarle la clase active

        //Obtener el contenido que corresponda segun el enlace
        let contenido = obtenerContenido(this.textContent);

        //MOSTRAR EN CONTENIDO EN EL DOM
        tituloElemento.innerHTML = contenido.titulo;
        subTituloElemento.innerHTML = contenido.subtitulo;
        parrafoElemento.innerHTML = contenido.parrafo;
    });
});

//Funcion para traer informacion de las ciudades desde el otro archivo js

function obtenerContenido(enlace) {
    let contenido = {
        "Barcelona": barcelona, //primero hace referencia al html y el segundo al objeto
        "Roma": roma,
        "París": paris,
        "Londres": londres
    };
    return contenido[enlace];
};