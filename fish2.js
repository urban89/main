
const liter = "L";
const gallon = "gal";
const celsius = "℃";
const farenheit = "℉";
const cm = "cm";
const inch = "inch";
const show_inch = "Show fish size in inch";
const show_cm = "Show fish size in cm";
const show_farenheit = "Show water temperature in farenheit";
const show_celsius = "Show water temperature in celsius";
const show_liter =  "Show aquarium capacity in liter";
const show_gallon = "Show aquarium capacity in gallon"; 

let temp_modifier1 = 1; 
let temp_modifier2 = 0; 
let cap_modifier = 1; 
let size_modifier = 1; 
let console_temperature = celsius; 
let console_capacity = liter; 
let console_fishsize = cm;
let fishsize_option = show_inch;
let capacity_button = show_gallon;
let temp_button = show_farenheit; 

let cmtoinch = document.getElementById("cmtoinch");

let result_div = document.getElementById("result");
let sort_select = document.getElementById("sort");
let cap_conversion = document.getElementById("cap_conversion");
let temp_conversion = document.getElementById("temp_conversion");

// Adding initial event listeners 
document.addEventListener("DOMContentLoaded", function() {
    sort_select.addEventListener("change", output);
    output ()

    document.getElementById("settings").addEventListener("click", function () {
      var dropdown = document.getElementById("settings_dropdown");
      dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
  });

  window.addEventListener("click", function (event) {
    var dropdown = document.getElementById("settings_dropdown");
    if (event.target !== document.getElementById("settings")) {
        dropdown.style.display = "none";
    }
  });

  cmtoinch.addEventListener("click", fishsizemetric);
  cap_conversion.addEventListener("click", litergallon);
  temp_conversion.addEventListener("click", celtofaren);
    
});

let fish_list = fish_master; 



function sort () {
    if (sort_select.value == "size_min") {
        fish_list = fish_list.sort(compare_size);
        console.log("size_min")
        console.log(fish_list);
      }
  
      if (sort_select.value == "size_max") {
        fish_list =  fish_list.sort(compare_size_descend);
        console.log("size_max")
        console.log(fish_list);
      }
  
      if (sort_select.value == "temp_min") {
        fish_list = fish_list.sort(compare_temp);
        console.log("temp_min")
        console.log(fish_list);
      }
}

///////////////////Outputting serach results to UI
function fishSelect (fish_list) {
  result_div.innerHTML = '';  
  let result_lists = document.createElement("div");
  result_lists.className = "column_result"; 

  for (let i = 0; i <fish_list.length; i++) {
    let fishcard = document.createElement('div'); // fish card for each fish; all the other elements generated will be appended to this 
    let result_lists_element = document.createElement("p");
    let image_element = document.createElement('img');
    let size = document.createElement("span");
    let temp = document.createElement("span"); // temperature in fish card 
    let tanksize = document.createElement("span"); // tank size in fish card 
    let temp_min = Math.round((fish_list[i].temperature_min * temp_modifier1) + temp_modifier2); // checking if ℃ or ℉ is used 
    let temp_max = Math.round((fish_list[i].temperature_max * temp_modifier1) + temp_modifier2); // checking if ℃ or ℉ is used
    let cap = Math.round(((fish_list[i].tank_size_liter * cap_modifier) * 10)/10)
    let card_size_cal = Math.round(fish_list[i].cm_max * size_modifier*10)/10; //rounding up potentially converted fish size to 1 decimal place
    let card_size =  sizeFormatter(card_size_cal); //removing ".0" from round numbers 

   
    image_element.src = `images/${fish_list[i].fish_id}.jpeg`; //finding jpeg file for each fish based on fish ID 
    result_lists_element.textContent = `${fish_list[i].name_english}`;
    size.textContent = `${card_size} ${console_fishsize}`;
    temp.textContent = `${temp_min} - ${temp_max} ${console_temperature}`; 
    tanksize.textContent = `${cap} ${console_capacity}`

   
    fishcard.className = "fish_card";
    image_element.className = "fishcardimage";
    result_lists_element.className = "fishname";
    size.className = "fishsize";
    temp.className = "fishtemp";
    tanksize.className = "tanksize"; 

    fishcard.appendChild(image_element);
    fishcard.appendChild(result_lists_element);
    fishcard.appendChild(size);
    fishcard.appendChild(temp);
    fishcard.appendChild(tanksize);
    result_lists.appendChild(fishcard);
  }

  result_div.appendChild(result_lists);
  fishcount.innerText = fish_list.length; 
} 
  




function compare_size(a, b) {
    return a.cm_max - b.cm_max;
  }

  function compare_size_descend(a, b) {
    return b.cm_max - a.cm_max;
  }


  function compare_temp(a, b) {
    return (a.temperature_min + a.temperature_max) - (b.temperature_min + b.temperature_max);
  }


  function output () {
    console.log("why doesn't it run? ")
    sort();
    fishSelect (fish_list);
  }


 function fishsizemetric () {
      // console_fishsize = inch; 
      console_fishsize = (console_fishsize === cm) ? inch : cm; 
      fishsize_option = (fishsize_option === show_inch) ? show_cm : show_inch; 
      size_modifier = (size_modifier === 1 ) ? 0.393 : 1;
      cmtoinch.innerText = fishsize_option; 
      output ();
    }

    //removing ".0" from round numbers 
function sizeFormatter (num) {

  if (num % 1 !== 0) {
    return num.toFixed(1);
  } else {
    return num.toFixed(0); 
  }
  }

  function litergallon () {
    console_capacity = (console_capacity === liter) ? gallon : liter; 
    capacity_button = (capacity_button === show_gallon) ? show_liter: show_gallon;
    cap_modifier = (cap_modifier === 1) ? 0.264172 : 1; 
    cap_conversion.innerText = capacity_button;
    output ();
  }

  function celtofaren () {
    console_temperature = (console_temperature === celsius) ? farenheit : celsius; 
    temp_button = (temp_button === show_farenheit) ? show_celsius: show_farenheit;
    temp_modifier1 = (temp_modifier1 === 1) ? 1.8 : 1; 
    temp_modifier2 = (temp_modifier2 ===  0) ? 32 : 0; 
    temp_conversion.innerText = temp_button;
    output ();
  }