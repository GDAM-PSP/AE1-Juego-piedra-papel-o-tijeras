// Referenciamos al elemento de entrada por su ID
const inputNombre = document.getElementById("nombre");

//Referenciamos al botón por su ID
const botonCapturar = document.getElementById("botonCapturar");

//Referenciamos al elemento de entrada por su ID
const ponerNombre = document.getElementById("ponerNombre");

//Referenciamos el ID content que es el div principal
const contenido = document.getElementById("content");

//Referenciamos el ID que es el div de la imagen vs
const vs = document.getElementById("vs");

//Ocultamos la imagen
vs.style.display = "none";

//Definimos todos los id de los div que contienen las imagenes de los usuarios
const cliente1 = document.getElementById("cliente1");
const cliente2 = document.getElementById("cliente2");
const cliente3 = document.getElementById("cliente3");
const cliente4 = document.getElementById("cliente4");
const cliente5 = document.getElementById("cliente5");

//Definimos las imágenes del cliente y las ocultamos hasta que las seleccione
const piedra_usuario = document.getElementById("piedra_usuario");
piedra_usuario.style.display = "none";

const papel_usuario = document.getElementById("papel_usuario");
papel_usuario.style.display = "none";

const tijeras_usuario = document.getElementById("tijeras_usuario");
tijeras_usuario.style.display = "none";

const lagarto_usuario = document.getElementById("lagarto_usuario");
lagarto_usuario.style.display = "none";

const spock_usuario = document.getElementById("spock_usuario");
spock_usuario.style.display = "none";

const puntuacion_jugador = document.getElementById("puntuacion_jugador");
const puntuacion_maquina = document.getElementById("puntuacion_maquina");

//Aqui definimos si el cliente esta eligiendo o esta preparado para la lucha
const empezando = document.getElementById("empezando");
const fight = document.getElementById("fight");
//Ocultamos el mensaje "fight"
fight.style.display = "none";

//Ahora definimos la parte de la maquina
const maquina1 = document.getElementById("maquina1");
const maquina2 = document.getElementById("maquina2");
const maquina3 = document.getElementById("maquina3");
const maquina4 = document.getElementById("maquina4");
const maquina5 = document.getElementById("maquina5");

//Definimos las imagenes de la máquina y las ocultamos hasta su selección
const piedra_maquina = document.getElementById("piedra_maquina");
piedra_maquina.style.display = "none";

const papel_maquina = document.getElementById("papel_maquina");
papel_maquina.style.display = "none";

const tijeras_maquina = document.getElementById("tijeras_maquina");
tijeras_maquina.style.display = "none";

const lagarto_maquina = document.getElementById("lagarto_maquina");
lagarto_maquina.style.display = "none";

const spock_maquina = document.getElementById("spock_maquina");
spock_maquina.style.display = "none";

let codigoEjecutado = false;

let marcador = document.getElementById("marcador");
let cont_puntuacion_jugador;
let cont_puntuacion_maquina;

//Si no se le da al boton submit no se empieza
function empezarJuego() {
	codigoEjecutado = true;

	//Desocultamos el mensaje "empezando"
	empezando.style.display = "block";

	//Ocultamos el mensaje "fight" por si volvemos a poner el nombre que no se sobreescriban los mensajes
	fight.style.display = "none";

	//Ocultamos las imagenes del usuario
	piedra_usuario.style.display = "none";
	papel_usuario.style.display = "none";
	tijeras_usuario.style.display = "none";
	lagarto_usuario.style.display = "none";
	spock_usuario.style.display = "none";

	//Reseteamos el marcador
	marcador.style.setProperty("display", "block");
	cont_puntuacion_jugador = 0;
	cont_puntuacion_maquina = 0;
	puntuacion_jugador.textContent = cont_puntuacion_jugador;
	puntuacion_maquina.textContent = cont_puntuacion_maquina;

	//Ocultamos las imagenes de la máquina
	piedra_maquina.style.display = "none";
	papel_maquina.style.display = "none";
	tijeras_maquina.style.display = "none";
	lagarto_maquina.style.display = "none";
	spock_maquina.style.display = "none";

	//cambiamos las elecciones de la maquina a ninguna
	cliente1.style.backgroundColor = "";
	cliente2.style.backgroundColor = "";
	cliente3.style.backgroundColor = "";
	cliente4.style.backgroundColor = "";
	cliente5.style.backgroundColor = "";

	//cambiamos las elecciones de la maquina a ninguna
	maquina1.style.backgroundColor = "";
	maquina2.style.backgroundColor = "";
	maquina3.style.backgroundColor = "";
	maquina4.style.backgroundColor = "";
	maquina5.style.backgroundColor = "";

	// Capturamos el valor del input
	const valorNombre = inputNombre.value;

	// Creamos un nuevo nodo de texto
	ponerNombre.textContent = "Usuario: ";
	const texto = document.createTextNode(valorNombre);
	ponerNombre.appendChild(texto);

	//"Vaciamos" el nombre del input
	document.getElementById("nombre").value = "";

	//Mostramos el logo del versus
	vs.style.display = "block";

	let elementos_partida = document.getElementsByClassName("ganar")[0].children;
	for (let index = 0; index < elementos_partida.length; index++) {
		let element = elementos_partida[index];

		element.style.display = "none";
	}
	debugger;
	document.getElementById("empezando").style.display = "block";

	//Hacemos escroll hasta el fin de pagina para que el usuario vea todas las opciones
	window.scrollTo(0, document.body.scrollHeight);
}

/**
 * Funciones fuera de listeners con llamadas desde el HTML
 *
 */
/**
 * Hacer click en las imagenes del usuario
 * @param {*} element Elemento que ejecuta la accion desde el HTML (this)
 */
function clickimg(element) {
	if (codigoEjecutado) {
		//Vamos a hacer que cuando clickemos la imagen se seleccione y aparezca al lado del logo VS en el circulo de la izquierda
		//Vamos a identificar el evento de las imagenes a traves de la "etiqueta" alt y a traves de los condicionales iremos
		//seleccionando que imagen se va a ver
		//En un principio definimos todaslas imagenes en none
		piedra_usuario.style.display = "none";
		papel_usuario.style.display = "none";
		tijeras_usuario.style.display = "none";
		lagarto_usuario.style.display = "none";
		spock_usuario.style.display = "none";
		//Ocultamos los mensajes
		fight.style.display = "none";
		ganar.style.display = "none";
		perder.style.display = "none";
		empate.style.display = "none";
		empezando.style.display = "none";
		//cambiamos el color de fondo de selecciones anteriores
		cliente1.style.setProperty("background-color", "white");
		cliente2.style.setProperty("background-color", "white");
		cliente3.style.setProperty("background-color", "white");
		cliente4.style.setProperty("background-color", "white");
		cliente5.style.setProperty("background-color", "white");
		//ocultamos las respuestas anteriores de la máquina
		piedra_maquina.style.display = "none";
		papel_maquina.style.display = "none";
		tijeras_maquina.style.display = "none";
		lagarto_maquina.style.display = "none";
		spock_maquina.style.display = "none";

		//Desocultamos solo la imagen seleccionada y esto lo hacemos a través de condicionales
		//Desocultamos la imagen piedra del usuario
		if (element.children[0].getAttribute("alt") === "piedra") {
			piedra_usuario.style.display = "";
			cliente1.style.backgroundColor = "greenyellow";
		}
		//Desocultamos la imagen papel del usuario
		if (element.children[0].getAttribute("alt") === "papel") {
			papel_usuario.style.display = "";
			cliente2.style.backgroundColor = "greenyellow";
		}
		//Desocultamos la imagen tijeras del usuario
		if (element.children[0].getAttribute("alt") === "tijeras") {
			tijeras_usuario.style.display = "";
			cliente3.style.backgroundColor = "greenyellow";
		}
		//Desocultamos la imagen lagarto del usuario
		if (element.children[0].getAttribute("alt") === "lagarto") {
			lagarto_usuario.style.display = "";
			cliente4.style.backgroundColor = "greenyellow";
		}
		//Desocultamos la imagen spock del usuario
		if (element.children[0].getAttribute("alt") === "spock") {
			spock_usuario.style.display = "";
			cliente5.style.backgroundColor = "greenyellow";
		}
		//Hacemos que aparezca el mensaje "fight"
		fight.style.display = "block";
	}
}

/**
 * Funcion que se aplicara al pasar el mouse por las imagenes del usuario
 * @param {*} element Elemento que ejecuta la accion desde el HTML (this)
 */
function pasarMouseIn(element) {
		//aumenta la escala a 1.2
		element.style.transform = "scale(1.15)";
		//Esto lo que hace es que le mete al css el pointer que es que parezca que sea un boton donde se pueda clicar
		element.style.cursor = "pointer";
}

/**
 * Funcion que se aplicara al sacar el mouse de las imagenes del usuario
 * @param {*} element Elemento que ejecuta la accion desde el HTML (this)
 */
function pasarMouseOut(element) {
		//vuelve a la escala a 1
		element.style.transform = "scale(1)";
}

/**
 * Configuramos el fight(cuando se toque la máquina hará su elección)
 * Esta función va a elegir un numero random que estará asociado a una imagen que es la que sacará la máquina
 * @param {*} event Evento que ha causado la llamada del listener
 */
function maquinaElige() {
	if (codigoEjecutado) {
		let opcion = Array("piedra", "papel", "tijeras", "lagarto", "spock");
		let usuario;
		//Usamos Math.random para generar un número aleatorio y usamos parseInt para evitar números decimales
		let numeroAzar = parseInt(Math.random(1 - 5) * 5);

		//Ponemos en 'none' todo lo de la máquina para definirlo despues
		piedra_maquina.style.display = "none";
		papel_maquina.style.display = "none";
		tijeras_maquina.style.display = "none";
		lagarto_maquina.style.display = "none";
		spock_maquina.style.display = "none";
		maquina1.style.backgroundColor = "";
		maquina2.style.backgroundColor = "";
		maquina3.style.backgroundColor = "";
		maquina4.style.backgroundColor = "";
		maquina5.style.backgroundColor = "";

		//Ponemos los mensajes en none
		empezando.style.display = "none";
		fight.style.display = "none";
		ganar.style.display = "none";
		perder.style.display = "none";
		empate.style.display = "none";

		//Conocemos cual ha sido la opcion del usuario
		if (piedra_usuario.style.display === "") {
			usuario = "piedra";
		} else if (papel_usuario.style.display === "") {
			usuario = "papel";
		} else if (tijeras_usuario.style.display === "") {
			usuario = "tijeras";
		} else if (lagarto_usuario.style.display === "") {
			usuario = "lagarto";
		} else {
			usuario = "spock";
		}

		switch (opcion[numeroAzar]) {
			case "piedra":
				piedra_maquina.style.display = "";
				maquina1.style.backgroundColor = "greenyellow";

				if (usuario == "papel" || usuario == "spock") {
					mostrarResultado("ganar");
				} else if (usuario == "tijeras" || usuario == "lagarto") {
					mostrarResultado("perder");
				} else {
					mostrarResultado("empate");
				}
				break;
			case "papel":
				papel_maquina.style.display = "";
				maquina2.style.backgroundColor = "greenyellow";

				if (usuario == "tijeras" || usuario == "lagarto") {
					mostrarResultado("ganar");
				} else if (usuario == "piedra" || usuario == "spock") {
					mostrarResultado("perder");
				} else {
					mostrarResultado("empate");
				}
				break;
			case "tijeras":
				tijeras_maquina.style.display = "";
				maquina3.style.backgroundColor = "greenyellow";

				if (usuario == "spock" || usuario == "piedra") {
					mostrarResultado("ganar");
				} else if (usuario == "papel" || usuario == "lagarto") {
					mostrarResultado("perder");
				} else {
					mostrarResultado("empate");
				}
				break;
			case "lagarto":
				lagarto_maquina.style.display = "";
				maquina4.style.backgroundColor = "greenyellow";

				if (usuario == "tijeras" || usuario == "piedra") {
					mostrarResultado("ganar");
				} else if (usuario == "papel" || usuario == "spock") {
					mostrarResultado("perder");
				} else {
					mostrarResultado("empate");
				}
				break;
			case "spock":
				spock_maquina.style.display = "";
				maquina5.style.backgroundColor = "greenyellow";

				if (usuario == "papel" || usuario == "lagarto") {
					mostrarResultado("ganar");
				} else if (usuario == "piedra" || usuario == "tijeras") {
					mostrarResultado("perder");
				} else {
					mostrarResultado("empate");
				}
				break;
		}
	}
}

function mostrarResultado(resultado) {
	switch (resultado) {
		case "ganar":
			ganar.style.display = "block";
			cont_puntuacion_jugador++;
			puntuacion_jugador.textContent = cont_puntuacion_jugador;
			puntuacion_maquina.textContent = cont_puntuacion_maquina;
			break;
		case "perder":
			perder.style.display = "block";
			cont_puntuacion_maquina++;
			puntuacion_jugador.textContent = cont_puntuacion_jugador;
			puntuacion_maquina.textContent = cont_puntuacion_maquina;
			break;
		default:
			empate.style.display = "block";
			puntuacion_jugador.textContent = cont_puntuacion_jugador;
			puntuacion_maquina.textContent = cont_puntuacion_maquina;
			break;
	}
}
