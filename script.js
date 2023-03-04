const formulario = document.getElementById("formulario");
const nomePokemonInput = document.getElementById("nome-pokemon");

const nomePokemonDiv = document.getElementById("nome-pokemon-span");

const imagemPokemon = document.getElementById("imagem-pokemon");

function aoSubmeter() {

    let nomePokemon = nomePokemonInput.value;
    nomePokemon = nomePokemon.toLowerCase();

    fetch("https://pokeapi.co/api/v2/pokemon/" + nomePokemon)
        .then((response) => response.json())
        .then((data) => { 
            let imagem = data['sprites']['other']['official-artwork']['front_default'];
            nomePokemonDiv.innerText = data['name'];
            imagemPokemon.src = imagem;
        });

    return false;
}

                        //LAMBDA
formulario.onsubmit = () => aoSubmeter();