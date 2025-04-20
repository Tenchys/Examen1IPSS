async function getService(){
    const url = 'API/Services.php';
    let jsonResponse = await getContent(url);
    let row = document.getElementById('cardsServicios');
    row.innerHTML = '';
    jsonResponse.data.forEach(objeto => {
        if(objeto.activo){
            const card = createCard(objeto.titulo.esp, objeto.descripcion.esp, 'col-xl-4 col-md-12 pt-1');
            row.appendChild(card);
        }
    });
}


async function getAboutUs(){
    const url = 'API/about.php';
    let jsonResponse = await getContent(url);
    let row = document.getElementById('contenedorAbout');
    row.innerHTML = '';
    jsonResponse.data.forEach(objeto => {
        const card = createCard(objeto.titulo.esp, objeto.descripcion.esp, 'col-xl-4 col-md-12 pt-1');
        row.appendChild(card);
    });   

}
async function getContent(url){
    let response = await fetch(url);
    let json = await response.json();

    return json;
}

function createCard(titulo, texto, claseContendor){
    let card = document.createElement('div');
    let cardbody = document.createElement('div');
    let cardtitle = document.createElement('h5');
    let cardtext = document.createElement('p');

    cardtext.innerHTML = texto;
    cardtext.className = 'card-text p-2 fs-5';
    cardtitle.innerHTML = titulo;
    cardtitle.className = 'card-title p-2 fs-3';

    cardbody.appendChild(cardtitle);
    cardbody.appendChild(cardtext);
    cardbody.className = 'card-body bg-opacity-75';

    card.appendChild(cardbody);
    card.className = 'card sombra-card border-0 bg-transparent m-1';

    let divcontenedor = document.createElement('div');
    divcontenedor.className = claseContendor;
    divcontenedor.appendChild(card);

    return divcontenedor
}

function load(){
     getService();
     getAboutUs();
}

function cambiodetema(){
    let temaActual = document.querySelector('body').getAttribute('data-bs-theme');
    if(temaActual == 'light'){
        document.querySelector('body').setAttribute('data-bs-theme', 'dark');
        document.querySelector('#iconCambio').setAttribute('class', 'bi bi-sun-fill')
        document.querySelector('#logoEmpresa').setAttribute('class', 'imagenoscuro')
    }
    else {
        document.querySelector('body').setAttribute('data-bs-theme', 'light');
        document.querySelector('#iconCambio').setAttribute('class', 'bi bi-moon-fill')
        document.querySelector('#logoEmpresa').setAttribute('class', 'imagenclaro')
    }
}