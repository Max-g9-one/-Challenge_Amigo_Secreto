let amigos = [];

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        input.focus(); // Mantiene el foco en la caja de texto
        return;
    }

    amigos.push(nombre);
    mostrarLista();
    input.value = "";
    input.focus(); // Devuelve el foco a la caja de texto para el siguiente nombre
}

function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(amigo => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");

    if (amigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${amigos[indiceAleatorio]}</strong></li>`;
}

function reiniciarJuego() {
    amigos = [];
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    const input = document.getElementById("amigo");
    input.value = "";
    input.focus(); // Devuelve el foco a la caja de texto después de reiniciar
}

// Event listener para manejar la tecla Enter en la caja de texto
document.addEventListener("DOMContentLoaded", function() {
    const input = document.getElementById("amigo");
    
    input.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault(); // Previene el comportamiento por defecto
            agregarAmigo();
        }
    });
    
    // Foco inicial en la caja de texto cuando carga la página
    input.focus();
});