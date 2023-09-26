document.addEventListener("DOMContentLoaded", () => {

    alert("Ingrear en minusculas el nombre del pokemon")

const Boton = document.getElementById("BotonBuscador");
const Nombre = document.getElementById("nombre");
const Peso = document.getElementById("peso");
const ID = document.getElementById("ID");
const ImagenPokemon = document.getElementById("Imagen_Pokemon")

function fetchPokemon(NombrePokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${NombrePokemon}/`)
    .then(res => res.json())
    .then(data => {

        Nombre.textContent=data.name;
        Peso.textContent=data.weight;
        ID.textContent=data.id;
        
        const URLimagen = data.sprites.front_default;
        ImagenPokemon.src = URLimagen;
        })}

       
Boton.addEventListener("click", () => {
   
    const NombrePokemon = document.getElementById("NombrePokemon").value;
    fetchPokemon(NombrePokemon);
});




});


