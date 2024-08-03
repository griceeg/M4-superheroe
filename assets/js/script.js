const BASE_URL = "https://superheroapi.com/api.php/4905856019427443/";

const inputSuperhero = $('#input-superhero');
const buttonSearch = $('#search-superhero');
const errorInput = $('#errorInput');


const getOneSuperhero = (inputSuperhero) => {
    return $.ajax({
        type: "GET",
        url: `${ BASE_URL }/${ inputSuperhero }`,
        dataType: 'json',
        success: function (data) {
                let htmlCard = `
                <h3 class="title text-center fs-2 py-3 mb-0 bg-light text-dark rounded-top-4">
                    ¡SuperHero encontrado!
                    <i class="fa-solid fa-location-crosshairs fa-sm"></i>
                </h3>
                <div class="card rounded-bottom-4 rounded-top-0">
                    <div class="row g-0">
                    
                        <div class="col-md-5">
                            <img src="${data.image.url}" class="card-img-top img-thumbnail border border-dark-subtle rounded-4 mt-2" alt="Imagen de ${data.name}">
                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <p class="card-text fs-3 fw-medium">${data.name}</p>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Conexiones: ${data.connections['group-affiliation']}</li>
                                    <li class="list-group-item">Publicado por: ${data.biography.publisher}</li>
                                    <li class="list-group-item">Ocupacion: ${data.work.occupation}</li>
                                    <li class="list-group-item">Primera aparición: ${data.biography['first-appearance']}</li>
                                    <li class="list-group-item">Altura: ${data.appearance.height[1]}</li>
                                    <li class="list-group-item">Peso: ${data.appearance.weight[1]}</li>
                                    <li class="list-group-item">Alianzas: ${data.biography.aliases}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                `
                $(".oneSuperhero-section").html(htmlCard);
                createSuperheroChart(data);
        },
        error: function (error) {
            console.log('Error al encontrar el superhero', error);
        }
    });
}


buttonSearch.on('click', function(event){
    event.preventDefault();
    cleanError();

    let resultado = validation(inputSuperhero.val());
    if(resultado) {
        getOneSuperhero(inputSuperhero.val());
    }
})


function validation (input) {
    let validacionSuperada = true;
    let patron = /^\d{1,3}$/

    if(!patron.test(input)|| input < 1 || input > 731){
        errorInput.html('Ingresa un número válido del 1 al 731');
        validacionSuperada = false;
    }
    return validacionSuperada;
};

function cleanError () {
    errorInput.html('');
}