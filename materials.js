const MATERIALS = [

{
id: 1,
nombre: "Bolsa colectora de diuresis",
categoria: "Urología",
imagen: "imagenes/bolsa_diuresis01.jpg",
descripcion: "Bolsa para recogida y medición de diuresis.",
claves: ["bolsa", "diuresis", "orina"]
},

{
id: 2,
nombre: "Cánula de Guedel",
categoria: "Vía aérea",
imagen: "imagenes/canula_guedel_01.jpg",
descripcion: "Cánula orofaríngea para mantener la vía aérea permeable.",
claves: ["guedel", "orofaríngea"]
},

{
id: 3,
nombre: "Cánula de traqueostomía",
categoria: "Vía aérea",
imagen: "imagenes/canula_traqueostomia01.jpg",
descripcion: "Dispositivo para mantener una traqueostomía permeable.",
claves: ["traqueostomía", "cánula"]
},

{
id: 4,
nombre: "Caudalímetro de oxígeno",
categoria: "Oxigenoterapia",
imagen: "imagenes/caudalimetro01.jpg",
descripcion: "Regula el flujo de oxígeno.",
claves: ["caudalímetro", "oxígeno"]
},

{
id: 5,
nombre: "Esfigmomanómetro",
categoria: "Constantes Vitales",
imagen: "imagenes/esfigmomanometro01.jpg",
descripcion: "Medición de presión arterial.",
claves: ["tensión arterial", "presión"]
},

{
id: 6,
nombre: "Fonendoscopio",
categoria: "Constantes Vitales",
imagen: "imagenes/fonendoscopio01.jpg",
descripcion: "Instrumento para auscultación.",
claves: ["fonendo", "auscultación"]
},

{
id: 7,
nombre: "Gafas nasales",
categoria: "Oxigenoterapia",
imagen: "imagenes/gafas_nasales01.jpg",
descripcion: "Administración de oxígeno a bajo flujo.",
claves: ["gafas", "nasales", "oxígeno"]
},

{
id: 8,
nombre: "Humidificador de oxígeno",
categoria: "Oxigenoterapia",
imagen: "imagenes/humidificador_oxigeno01.jpg",
descripcion: "Humidifica el oxígeno administrado.",
claves: ["humidificador", "oxígeno"]
},

{
id: 9,
nombre: "Mascarilla con reservorio",
categoria: "Oxigenoterapia",
imagen: "imagenes/mascarilla_reservorio01.jpg",
descripcion: "Administración de oxígeno a alta concentración.",
claves: ["reservorio", "oxígeno"]
},

{
id: 10,
nombre: "Mascarilla simple",
categoria: "Oxigenoterapia",
imagen: "imagenes/mascarilla_simple01.jpg",
descripcion: "Administración de oxígeno a flujo medio.",
claves: ["mascarilla", "simple"]
},

{
id: 11,
nombre: "Mascarilla Venturi",
categoria: "Oxigenoterapia",
imagen: "imagenes/mascarilla_venturi01.jpg",
descripcion: "Permite administrar FiO₂ controlada.",
claves: ["venturi", "fiO2"]
},

{
id: 12,
nombre: "Pulsioxímetro",
categoria: "Constantes Vitales",
imagen: "imagenes/pulsioximetro01.jpg",
descripcion: "Medición de saturación de oxígeno.",
claves: ["satO2", "oxímetro"]
},

{
id: 13,
nombre: "Resucitador manual AMBU",
categoria: "Reanimación",
imagen: "imagenes/resucitador_ambu.jpg",
descripcion: "Ventilación manual de emergencia.",
claves: ["ambu", "reanimación"]
},

{
id: 14,
nombre: "Sonda Couvelaire",
categoria: "Urología",
imagen: "imagenes/sonda_couvelaire.jpg",
descripcion: "Sonda para hematurias y lavado vesical.",
claves: ["couvelaire", "hematuria"]
},

{
id: 15,
nombre: "Sonda Faucher",
categoria: "Digestivas",
imagen: "imagenes/sonda_faucher.jpg",
descripcion: "Sonda gruesa para lavado gástrico.",
claves: ["faucher", "lavado gástrico"]
},

{
id: 16,
nombre: "Sonda Foley 3 luces",
categoria: "Urología",
imagen: "imagenes/sonda_foley_3_luces_01.jpg",
descripcion: "Sonda vesical permanente de tres luces.",
claves: ["foley", "3 luces"]
},

{
id: 17,
nombre: "Sonda Foley 3 vías",
categoria: "Urología",
imagen: "imagenes/sonda_foley_3_vias.jpg",
descripcion: "Sonda vesical de irrigación continua.",
claves: ["foley", "3 vías"]
},

{
id: 18,
nombre: "Sonda Foley punta Dufour",
categoria: "Urología",
imagen: "imagenes/sonda_foley_3_vias_dufour.jpg",
descripcion: "Sonda Foley de tres vías con punta Dufour.",
claves: ["dufour", "3 vías", "hematuria"]
},

{
id: 19,
nombre: "Sonda Foley punta Tiemann",
categoria: "Urología",
imagen: "imagenes/sonda_foley_tiemann_2_vias.jpg",
descripcion: "Sonda Foley de dos vías con punta Tiemann.",
claves: ["tiemann", "2 vías", "próstata"]
},

{
id: 20,
nombre: "Sonda Levin",
categoria: "Digestivas",
imagen: "imagenes/sonda_levin.jpg",
descripcion: "Sonda digestiva de una luz.",
claves: ["levin", "1 luz"]
},

{
id: 21,
nombre: "Sonda Nelaton",
categoria: "Urología",
imagen: "imagenes/sonda_nelaton.jpg",
descripcion: "Sonda vesical intermitente recta.",
claves: ["nelaton", "recta"]
},

{
id: 22,
nombre: "Sonda Nelaton punta Mercier",
categoria: "Urología",
imagen: "imagenes/sonda_nelaton_mercier.jpg",
descripcion: "Sonda Nelaton con punta Mercier.",
claves: ["mercier", "curva", "próstata"]
},

{
id: 23,
nombre: "Sonda de nutrición enteral Nutrisoft",
categoria: "Nutrición Enteral",
imagen: "imagenes/sonda_nutricion_enteral_nutrisoft.jpg",
descripcion: "Sonda enteral con fiador y lastre distal.",
claves: ["nutrisoft", "enteral", "fiador"]
},

{
id: 24,
nombre: "Sonda Pezzer",
categoria: "Urología",
imagen: "imagenes/sonda_pezzer.jpg",
descripcion: "Sonda de cistostomía suprapúbica.",
claves: ["pezzer", "cistostomía"]
},

{
id: 25,
nombre: "Sonda Rectal",
categoria: "Rectales",
imagen: "imagenes/sonda_rectal.jpg",
descripcion: "Sonda para evacuación de gases y enemas.",
claves: ["rectal", "enema"]
},

{
id: 26,
nombre: "Sonda Salem",
categoria: "Digestivas",
imagen: "imagenes/sonda_salem.jpg",
descripcion: "Sonda digestiva de doble luz.",
claves: ["salem", "2 luces"]
},

{
id: 27,
nombre: "Sonda Sengstaken-Blakemore",
categoria: "Digestivas Especiales",
imagen: "imagenes/sonda_sengstaken_blakemore.jpg",
descripcion: "Control de hemorragias por varices esofágicas.",
claves: ["sengstaken", "blakemore", "balones"]
},

{
id: 28,
nombre: "Termómetro digital",
categoria: "Constantes Vitales",
imagen: "imagenes/termometro_digital01.jpg",
descripcion: "Medición de temperatura corporal.",
claves: ["temperatura"]
},

{
id: 29,
nombre: "Tubo endotraqueal",
categoria: "Vía aérea",
imagen: "imagenes/tubo_endotraqueal.jpg",
descripcion: "Dispositivo para intubación endotraqueal.",
claves: ["intubación", "tubo"]
},

{
id: 30,
nombre: "Ventilador mecánico UCI",
categoria: "Ventilación",
imagen: "imagenes/ventilador_mecanico_uci.jpg",
descripcion: "Equipo de ventilación mecánica invasiva.",
claves: ["ventilador", "uci"]
}

];

console.log("MATERIALS OK");
console.log("Total materiales:", MATERIALS.length);