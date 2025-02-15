/** 3. Conociendo la edad de varias personas, indicar la edad promedio.
Ej. Edades de las personas es: 15, 14, 19, 20, 16 y 18
La salida requerida presenta el siguiente formato: La edad promedio es 17*/

import Cl_Persona from "./Cl_Personas.js";
import Cl_Programa from "./Cl_Programa.js";

let persona1  = new Cl_Persona(15);
let persona2 = new Cl_Persona(14);
let persona3 = new Cl_Persona(19);
let persona4 = new Cl_Persona(20);
let persona5 = new Cl_Persona(16);
let persona6 = new Cl_Persona(18);

let programa = new Cl_Programa();
programa.procesarPersona(persona1);
programa.procesarPersona(persona2);
programa.procesarPersona(persona3);
programa.procesarPersona(persona4);
programa.procesarPersona(persona5);
programa.procesarPersona(persona6);

let salida = document.getElementById("salida");
salida.innerHTML = `
<br> La edad promedio: ${programa.promedio()}
`;
