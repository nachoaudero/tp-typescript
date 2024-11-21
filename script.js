"use strict";
console.log("Curso de TypeScript");
//Tipo de datos
let nombre = "Ignacio";
let edad = 21;
let estudiejs = true;
if (estudiejs) {
    console.log("Puedo seguir con TypeSript");
}
else {
    console.log("No puedo seguir con TypeScript, primero debo aprender JS");
}
//Ejemplo con juego
//Goles De equipo
let equipo1;
let equipo2;
//FUNCION
//El parametro puede ser o no recibido
function jugarPartido(juegamessi) {
    equipo1 = Math.floor(Math.random() * 5);
    equipo2 = Math.floor(Math.random() * 5);
    console.log(`Equipo 1: ${equipo1} | Equipo 2: ${equipo2}`);
    console.log("RESULTADO:");
    if (juegamessi == true) {
        console.log("Gana el equipo de messi");
    }
    else {
        if (equipo1 > equipo2) {
            console.log("Gana el equipo 1");
        }
        else if (equipo1 == equipo2) {
            console.log("Empatan el partido");
        }
        else {
            console.log("Gana el equipo 2");
        }
    }
}
//Llamada a la funcion
jugarPartido();
//Llamada a la funcion con parametro
jugarPartido(true);
//NO USAR ANY
let cualquierVariable;
cualquierVariable = "string";
console.log("Soy una variable Any de tipo: ", cualquierVariable);
cualquierVariable = true;
console.log("Soy una variable Any de tipo: ", cualquierVariable);
cualquierVariable = 20;
console.log("Soy una variable Any de tipo: ", cualquierVariable);
//ARREGLOS
let arregloNumber = [1, 2, 3.4, 5.12, 11.06];
let arregloString = ["SOY", "UN", "STRING"];
console.log("Arreglo de tipo number metodos: ", arregloNumber[0].toFixed());
console.log("Arreglo de tipo string metodos: ", arregloString[0].charAt(1));
//objeto de tipo programador
let programador = {
    nombre: "Nacho",
    edad: 25,
    habilidades: ["JS", "JAVA", "HTML", "CSS"],
    trabajo: false,
};
console.log("OBJETO PROGRAMADOR: ", programador);
let persona1 = {
    nombre: "Pedro",
    edad: 18,
    trabajo: false
};
function saludar(persona) {
    console.log(`Hola soy ${persona.nombre}`);
}
//CLASES Y POO
class ClassPersona {
    //Constructor
    constructor(nombre, edad, trabajo) {
        this.nombre = nombre;
        this.edad = edad;
        this.trabajo = trabajo;
    }
}
//inicializar
let persona2 = new ClassPersona("Lucas", 21, true);
//GENERICO
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    setNumero(ticket) {
        this.ticket = ticket;
    }
    getNumero() {
        return this.ticket;
    }
    getNombre() {
        return this.nombre;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteo = new Sorteo("Luis");
let sorteo2 = new Sorteo("Marcos");
let random = Math.floor(Math.random() * 1000000) + 1;
console.log("GENERICOS");
sorteo.setNumero(random);
console.log(`Para ${sorteo.getNombre}, el numero es ${sorteo.getNumero}`);
sorteo2.setNumero(random.toString());
console.log(`Para ${sorteo2.getNombre}, el numero es ${sorteo2.getNumero}`);