var btn_piedra = document.getElementById('Piedra');
var btn_papel = document.getElementById('Papel');
var btn_tijera = document.getElementById('Tijera');

var btn_start = document.getElementById('play');

var img_usuario = document.getElementById('usuario');
var img_cpu = document.getElementById('cpu');

var puntaje_usuario = document.getElementById('puntos_usuario').innerText;
var puntaje_cpu = document.getElementById('puntos_cpu').innerText;

var Menu = "espera";
var Opcion_jugador;
var Opcion_cpu;

init_images();

btn_start.onclick = function() {
    Menu = "inicio";
    console.log(Opcion_jugador);
    if (Opcion_jugador == undefined) {
        alert("Seleccione una opción!")
    } else {
        Opcion_cpu = num_aleatorio()
        display_opcion_cpu(Opcion_cpu)
        game(Opcion_jugador, Opcion_cpu)
    }
}

btn_piedra.onclick = function() {
    Opcion_jugador = 0;
    img_usuario.src = "./img/Piedra.png";
}

btn_papel.onclick = function() {
    Opcion_jugador = 1;
    img_usuario.src = "./img/Papel.png";
}

btn_tijera.onclick = function() {
    Opcion_jugador = 2;
    img_usuario.src = "./img/Tijeras.png";
}

switch (Menu) {
    case "espera":
        console.log("Esperando..");
        console.log(Opcion_cpu);
        break;
    case "inicio":
        console.log("Iniciando juego");
        break;
}

function init_images() {
    btn_piedra.style.backgroundImage = " url('./img/Piedra.png')";
    btn_papel.style.backgroundImage = " url('./img/Papel.png')";
    btn_tijera.style.backgroundImage = " url('./img/Tijeras.png')";
}

function num_aleatorio() {
    return parseInt(Math.random() * 3);
}

function game(opcion_jugador, opcion_cpu) {
    var usuario;
    var cpu;
    var empate;
    if (opcion_jugador === opcion_cpu) {
        empate = true;
    } else if (opcion_jugador === 0 && opcion_cpu === 2) {
        usuario = true;
    } else if (opcion_jugador === 1 && opcion_cpu === 0) {
        usuario = true;
    } else if (opcion_jugador === 2 && opcion_cpu === 1) {
        usuario = true;
    } else {
        cpu = true;
    }
    console.log(usuario,cpu);
    if (Boolean(usuario)) {
        alert("Ganaste!");
        puntaje_usuario++;
        document.getElementById("puntos_usuario").innerText = puntaje_usuario
    } else if (Boolean(cpu)) {
        alert("Perdiste!");
        puntaje_cpu++;
        document.getElementById("puntos_cpu").innerText = puntaje_cpu
    } else {
        alert("Empate!");
    }
    console.log(`USUARIO: ${opcion_jugador}`)
    console.log(`CPU: ${opcion_cpu}`)
}

function display_opcion_cpu(opcion) {
    if (opcion === 0) {
        img_cpu.src = "./img/Piedra.png";
    } else if (opcion === 1) {
        img_cpu.src = "./img/Papel.png";
    } else {
        img_cpu.src = "./img/Tijeras.png"
    }
}