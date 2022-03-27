function setPratos() {
    const inputPratos = form.querySelectorAll('input');
    const listaDePratos= [];

    for (let pratos of inputPratos) {
        let pratosTexto = pratos.value;
        pratosTexto = pratosTexto.replace('Apagar', '').trim();
        listaDePratos.push(pratosTexto);
    }

    console.log(listaDePratos.length)

    const pratosJSON = JSON.stringify(listaDePratos);
    localStorage.setItem('pratos', pratosJSON);
}

const form = document.querySelector('.form');

form.addEventListener('submit', (e) =>{
    e.preventDefault();

    setPratos();
});