/* Conociendo los resultados de varios juegos de tu equipo de fútbol,
 donde 1 es ganar y 0 es perder, hacer un programa que indique el porcentaje de juegos que ganaste.
Ej. Resultados de 6 juegos: 1, 1, 0, 1, 0, 1

la salida requerida presenta el siguiente formato: 
Ganaste el 66.67% de los juegos 
*/

import cl_Equipo from "./Cl_Equipo.js";
import cl_juegos from "./Cl_Juegos.js";

let juego1 = new cl_juegos(1);
let juego2 = new cl_juegos(1);
let juego3 = new cl_juegos(0);
let juego4 = new cl_juegos(1);
let juego5 = new cl_juegos(0);
let juego6 = new cl_juegos(1);

let equipo = new cl_Equipo();

equipo.procesar(juego1);
equipo.procesar(juego2);
equipo.procesar(juego3);
equipo.procesar(juego4);
equipo.procesar(juego5);
equipo.procesar(juego6);

alert(`Ganaste el: ${equipo.porcentaje()}% de los juegos`)

