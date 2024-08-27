/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector("#default").addEventListener("click", function() {
    generateSummary("default");
  }
}
const generateSummary = {
  let pokemonName = ["Pikachu", "Rayquaza", "Magikarp", "Glaceon", "Palafin", "Tepig", "Shinx", "Lopunny", "Gardevoir", "Kingambit", "Staraptor", "Lucario", "Dragapult", "Garchomp", "Eevee", "Golisopod"];
  let catchLocation = ["Route 1", "Victory Road", "Driftveil City", "the Pokemon Center", "Mount Lanakila", "Route 202", "the Pokemon Mansion", "Lake Verity"];
  let nature = ["Hardy", "Lonely", "Adamant", "Naughty", "Brave", "Bold", "Docile", "Impish", "Lax", "Relaxed", "Modest", "Mild", "Bashful", "Rash", "Quiet", "Calm", "Careful", "Gentle", "Quirky", "Sassy", "Timid", "Hasty", "Naive", "Serious", "Jolly"]
  let characteristic = ["Loves to eat","Proud of its power", "Sturdy body","Likes to run","Highly curious","Strong willed","Likes to relax","Impetuous and silly","Thoroughly cunning","Mischievous"]
}

let pokemonNameIndex = Math.floor(Math.random() * pokemonName.length);
let catchLocationIndex = Math.floor(Math.random() * catchLocation.length);
let natureIndex = Math.floor(Math.random() * nature.length);
let characteristicIndex = Math.floor(Math.random() * characteristic.length);

let fullSummary = pokemonName[pokemonNameIndex] + " was caught at" + catchLocation[catchLocationIndex] + "." + nature[natureIndex] + " nature." + characteristic[characteristicIndex] + ".";
document.querySelector(".pokemonSummary").innerHTML = fullSummary;
