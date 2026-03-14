export function titulo(texto) {

    const elemento = document.createElement("h1");

    elemento.textContent = texto;
    
    document.body.appendChild(elemento);
}
