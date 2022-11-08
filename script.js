let $ = (selector) => document.querySelector(selector);
let searchPokemon = $(".search-pokemon");
let seacher = $(".seacher");
let noLoad = $(".noLoad");
let inputPokemon = $(".input-pokemon");

let result = {};
let searching = inputPokemon.value.toLowerCase();

function jsonLoaded(json) {

    let pokemonName = $(".pokemon-name");
    let img = $(".pokemon-img")

    let progressHp = $(".progress-hp");
    let numberHP = $(".number-hp");

    let progressAttack = $(".progress-attack");
    let numberAttack = $(".number-attack");

    let progressDefense = $(".progress-defense");
    let numberDefense = $(".number-defense");

    let progressSAttack = $(".progress-sAttack");
    let numberSpecAttack = $(".number-specAttack");

    let progressSDefense = $(".progress-sDefense");
    let numberSpecDefense = $(".number-specDefense");

    let progressSpeed = $(".progress-speed");
    let numberSpeed = $(".number-speed");


    pokemonName.innerHTML = `Nombre: ${json.name.toUpperCase()}`;
    img.src = json.sprites.front_default;

    progressHp.value = json.stats[0].base_stat
    numberHP.innerHTML = json.stats[0].base_stat

    progressAttack.value = json.stats[1].base_stat
    numberAttack.innerHTML = json.stats[1].base_stat

    progressDefense.value = json.stats[2].base_stat
    numberDefense.innerHTML = json.stats[2].base_stat

    progressSAttack.value = json.stats[3].base_stat
    numberSpecAttack.innerHTML = json.stats[3].base_stat

    progressSDefense.value = json.stats[4].base_stat
    numberSpecDefense.innerHTML = json.stats[4].base_stat

    progressSpeed.value = json.stats[5].base_stat
    numberSpeed.innerHTML = json.stats[5].base_stat

}





// searchPokemon.addEventListener("click", () => {

//     if (isNaN(searching)) {
        
//         error.style.display = "block";
//         seacher.style.height = "150px";
        
//     } else {
//             findPokemon()
        
//             seacher.style.height = "780px";
//     }

// });

searchPokemon.addEventListener("click", () => {

    let inputPokemon = $(".input-pokemon");
    let searching = inputPokemon.value.toLowerCase();
    console.log(searching)


    let url = `https://pokeapi.co/api/v2/pokemon/${searching}`;

    if (isNaN(searching)) {
        
        console.log(isNaN(searching))
        seacher.style.height = "780px";
        noLoad.style.display = "none";

        fetch(url)
            .then(res => res.json())
            .then(jsonLoaded)
            .catch(function (error) {
                console.log('Hubo un problema con la petición Fetch:' + error.message)

                noLoad.style.display = "block";
                seacher.style.height = "150px";

            });


    } else {
        noLoad.style.display = "block";
        seacher.style.height = "150px";
        console.log(isNaN(searching))
        console.log("No es un pokemon")
    }


})