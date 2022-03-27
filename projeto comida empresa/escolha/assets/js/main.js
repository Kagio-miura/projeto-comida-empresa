const form = document.querySelector('.form');
const labelPrato = form.querySelectorAll('label');

function addPratos(valor, indice) {
    labelPrato[indice].innerHTML = valor;
}

function setPratos() {
    const pratos = localStorage.getItem('pratos');
    const listaDePratos = JSON.parse(pratos);

    let i = 0;

    for (let prato of listaDePratos) {
        addPratos(prato, i);
        i++;  
    }
}
setPratos();