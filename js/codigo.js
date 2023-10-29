// Referenciamos al elemento de entrada por su ID
const inputNombre = document.getElementById('nombre');

//Referenciamos al botón por su ID
const botonCapturar = document.getElementById('botonCapturar');

//Referenciamos al elemento de entrada por su ID
const ponerNombre = document.getElementById('ponerNombre');

//Referenciamos el ID content que es el div principal
const contenido = document.getElementById('content');

//Referenciamos el ID que es el div de la imagen vs
const vs = document.getElementById("vs");

//Ocultamos la imagen
vs.style.display = 'none';


//Definimos todos los id de los div que contienen las imagenes de los usuarios
const cliente1 = document.getElementById("cliente1");
const cliente2 = document.getElementById("cliente2");
const cliente3 = document.getElementById("cliente3");
const cliente4 = document.getElementById("cliente4");
const cliente5 = document.getElementById("cliente5");

//Definimos las imágenes del cliente y las ocultamos hasta que las seleccione
const piedra_usuario = document.getElementById("piedra_usuario");
piedra_usuario.style.display = 'none';

const papel_usuario = document.getElementById("papel_usuario");
papel_usuario.style.display = 'none';

const tijeras_usuario = document.getElementById("tijeras_usuario");
tijeras_usuario.style.display = 'none';

const lagarto_usuario = document.getElementById("lagarto_usuario");
lagarto_usuario.style.display = 'none';

const spock_usuario = document.getElementById("spock_usuario");
spock_usuario.style.display = 'none';

//Aqui definimos si el cliente esta eligiendo o esta preparado para la lucha
const empezando = document.getElementById("empezando");
const fight = document.getElementById("fight");
//Ocultamos el mensaje "fight"
fight.style.display = 'none';

//Ahora definimos la parte de la maquina
const maquina1 = document.getElementById("maquina1");
const maquina2 = document.getElementById("maquina2");
const maquina3 = document.getElementById("maquina3");
const maquina4 = document.getElementById("maquina4");
const maquina5 = document.getElementById("maquina5");

//Definimos las imagenes de la máquina y las ocultamos hasta su selección
const piedra_maquina = document.getElementById("piedra_maquina");
piedra_maquina.style.display = 'none';

const papel_maquina = document.getElementById("papel_maquina");
papel_maquina.style.display = 'none';

const tijeras_maquina = document.getElementById("tijeras_maquina");
tijeras_maquina.style.display = 'none';

const lagarto_maquina = document.getElementById("lagarto_maquina");
lagarto_maquina.style.display = 'none';

const spock_maquina = document.getElementById("spock_maquina");
spock_maquina.style.display = 'none';




//variable que hace que se ejecute la segunda vez una parte del código 
let codigoEjecutado = false;
//Si no se le da al boton submit no se empieza 

botonCapturar.addEventListener('click', function() {
	if (!codigoEjecutado) {
		codigoEjecutado = true;
		
		//Desocultamos el mensaje "empezando"
		empezando.style.display = 'inline';

		//Ocultamos el mensaje "fight" por si volvemos a poner el nombre que no se sobreescriban los mensajes
		fight.style.display = 'none';


		//Ocultamos las imagenes del usuario
		piedra_usuario.style.display = 'none';
		papel_usuario.style.display = 'none';
		tijeras_usuario.style.display = 'none';
		lagarto_usuario.style.display = 'none';
		spock_usuario.style.display = 'none';

		//Ocultamos las imagenes de la máquina
		piedra_maquina.style.display = 'none';
		papel_maquina.style.display = 'none';
		tijeras_maquina.style.display = 'none';
		lagarto_maquina.style.display = 'none';
		spock_maquina.style.display = 'none';

		//cambiamos las elecciones de la maquina a ninguna
		maquina1.style.backgroundColor = "";
		maquina2.style.backgroundColor = "";
		maquina3.style.backgroundColor = "";
		maquina4.style.backgroundColor = "";
		maquina5.style.backgroundColor = "";

		// Capturamos el valor del input
		const valorNombre = inputNombre.value;

		// Creamos un nuevo nodo de texto
		ponerNombre.textContent = 'Usuario: ';
		const texto = document.createTextNode(valorNombre);
		ponerNombre.appendChild(texto);
		
		//"Vaciamos" el nombre del input
		document.getElementById('nombre').value = '';
		
		//Mostramos el logo del versus
		vs.style.display = 'block';

		//funcion que se aplicara al pasar el mouse por las imagenes del usuario
		function pasarMouseimgIn(event) {
			//aumenta la escala a 1.2 
			event.target.style.transform = 'scale(1.2)';
			//Esto lo que hace es que le mete al css el pointer que es que parezca que sea un boton donde se pueda clicar
			event.target.style.cursor = 'pointer';
		}

		function pasarMouseimgOut(event) {
			//vuelve a la escala a 1
			event.target.style.transform = 'scale(1)';
			
		}
		

		//Funciones clickar
		function clickimg(event) {
			//Vamos a hacer que cuando clickemos la imagen se seleccione y aparezca al lado del logo VS en el circulo de la izquierda
			//Vamos a identificar el evento de las imagenes a traves de la "etiqueta" alt y a traves de los condicionales iremos
			//seleccionando que imagen se va a ver
			//En un principio definimos todaslas imagenes en none
			piedra_usuario.style.display = 'none';
			papel_usuario.style.display = 'none';
			tijeras_usuario.style.display = 'none';
			lagarto_usuario.style.display = 'none';
			spock_usuario.style.display = 'none';
			//Ocultamos los mensajes
			fight.style.display = 'none';
			ganar.style.display = 'none';
			perder.style.display = 'none';
			empate.style.display = 'none';
			empezando.style.display = 'none';
			//ocultamos las respuestas anteriores de la máquina
			piedra_maquina.style.display = 'none';
			papel_maquina.style.display = 'none';
			tijeras_maquina.style.display = 'none';
			lagarto_maquina.style.display = 'none';
			spock_maquina.style.display = 'none';
			
			//Desocultamos solo la imagen seleccionada y esto lo hacemos a través de condicionales
			//Desocultamos la imagen piedra del usuario
			if (event.target.alt === 'piedra') {
				piedra_usuario.style.display = '';
			}
			//Desocultamos la imagen papel del usuario
			if (event.target.alt === 'papel') {
				papel_usuario.style.display = '';
			}
			//Desocultamos la imagen tijeras del usuario
			if (event.target.alt === 'tijeras') {
				tijeras_usuario.style.display = '';
			}
			//Desocultamos la imagen lagarto del usuario 
			if (event.target.alt === 'lagarto') {
				lagarto_usuario.style.display = '';
			}
			//Desocultamos la imagen spock del usuario
			if (event.target.alt === 'spock') {
				spock_usuario.style.display = '';
			}
			//Hacemos que aparezca el mensaje "fight"
			fight.style.display = 'inline';
		}
		//llamando a la parte decorativa del usuario
		//piedra
		cliente1.addEventListener('mouseover', pasarMouseimgIn);
		cliente1.addEventListener('mouseout', pasarMouseimgOut);
		//papel
		cliente2.addEventListener('mouseover', pasarMouseimgIn);
		cliente2.addEventListener('mouseout', pasarMouseimgOut);
		//tijeras
		cliente3.addEventListener('mouseover', pasarMouseimgIn);
		cliente3.addEventListener('mouseout', pasarMouseimgOut);
		//lagarto
		cliente4.addEventListener('mouseover', pasarMouseimgIn);
		cliente4.addEventListener('mouseout', pasarMouseimgOut);
		//spock
		cliente5.addEventListener('mouseover', pasarMouseimgIn);
		cliente5.addEventListener('mouseout', pasarMouseimgOut);

		//llamando al evento 'click' de las imagenes del usuario
		//piedra
		cliente1.addEventListener('click', clickimg);
		//Papel
		cliente2.addEventListener('click', clickimg);
		//Tijeras
		cliente3.addEventListener('click', clickimg);
		//Lagarto
		cliente4.addEventListener('click', clickimg);
		//Spock
		cliente5.addEventListener('click', clickimg);
		//
		//
		//
		//Configuramos el fight(cuando se toque la máquina hará su elección)
		//
		//
		//
		//Esta función va a elegir un numero random que estará asociado a una imagen que es la que sacará la máquina
		function maquinaElige(event) {
			let opcion= Array('piedra', 'papel', 'tijeras', 'lagarto', 'spock');
			let numeroAzar = 0;
			let usuario;
			//Usamos Math.random para generar un número aleatorio y usamos parseInt para evitar números decimales
			numeroAzar = parseInt(Math.random(1 - 5) * 5);
			//Ponemos en 'none' todo lo de la máquina para definirlo despues
			piedra_maquina.style.display = 'none';
			papel_maquina.style.display = 'none';
			tijeras_maquina.style.display = 'none';
			lagarto_maquina.style.display = 'none';
			spock_maquina.style.display = 'none';
			maquina1.style.backgroundColor = "";
			maquina2.style.backgroundColor = "";
			maquina3.style.backgroundColor = "";
			maquina4.style.backgroundColor = "";
			maquina5.style.backgroundColor = "";


			if (opcion[numeroAzar] == 'piedra') {
				piedra_maquina.style.display = '';
				maquina1.style.backgroundColor = "blue";
			}
			if (opcion[numeroAzar] == 'papel') {
				papel_maquina.style.display = '';
				maquina2.style.backgroundColor = "blue";
			}
			if (opcion[numeroAzar] == 'tijeras') {
				tijeras_maquina.style.display = '';
				maquina3.style.backgroundColor = "blue";
			}
			if (opcion[numeroAzar] == 'lagarto') {
				lagarto_maquina.style.display = '';
				maquina4.style.backgroundColor = "blue";
			}
			if (opcion[numeroAzar] == 'spock') {
				spock_maquina.style.display = '';
				maquina5.style.backgroundColor = "blue";
			}
			if (piedra_usuario.style.display === '') {
				usuario = 'piedra';
			}
			if (papel_usuario.style.display === '') {
				usuario = 'papel';
			}
			if (tijeras_usuario.style.display === '') {
				usuario = 'tijeras';
			}
			if (lagarto_usuario.style.display === '') {
				usuario = 'lagarto';
			}
			if (spock_usuario.style.display === '') {
				usuario = 'spock';
			}
			
			
			//Ponemos los mensajes en none
			empezando.style.display = 'none';
			fight.style.display = 'none';
			ganar.style.display = 'none';
			perder.style.display = 'none';
			empate.style.display = 'none';
			
		}
		fight.addEventListener('click', maquinaElige);
		

		//Una vez ejecutado el código si queremos poner los valores a 0 le damos al botón submit
	} else {
		
		//Desocultamos el mensaje "empezando" y lo ponemos 'inline'
		empezando.style.display = 'inline';
		//Ocultamos el mensaje fight por si volvemos a poner el nombre que no se sobreescriban los mensajes
		fight.style.display = 'none';
		//ocultamos los demas mensajes
	
		//Desocultamos las imagenes del usuario
		piedra_usuario.style.display = 'none';
		papel_usuario.style.display = 'none';
		tijeras_usuario.style.display = 'none';
		lagarto_usuario.style.display = 'none';
		spock_usuario.style.display = 'none';
		//Desocultamos las imagenes de la máquina
		piedra_maquina.style.display = 'none';
		papel_maquina.style.display = 'none';
		tijeras_maquina.style.display = 'none';
		lagarto_maquina.style.display = 'none';
		spock_maquina.style.display = 'none';
		//cambiamos las elecciones de la maquina a ninguna
		maquina1.style.backgroundColor = "";
		maquina2.style.backgroundColor = "";
		maquina3.style.backgroundColor = "";
		maquina4.style.backgroundColor = "";
		maquina5.style.backgroundColor = "";

		// Capturamos el valor del input
		const valorNombre = inputNombre.value;

		// Creamos un nuevo nodo de texto
		ponerNombre.textContent = 'Usuario: ';
		const texto = document.createTextNode(valorNombre);
		ponerNombre.appendChild(texto);
		//el nombre lo cambiamos a '' el del input
		document.getElementById('nombre').value = '';
		//Mostramos el logo VS
		vs.style.display = 'block';
		

	}
})
