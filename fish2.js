

let temp_modifier1 = 1; 
let temp_modifier2 = 0; 
let cap_modifier = 1; 
let console_temperature = "℃"; 
let console_capacity = "L"; 

let result_div = document.getElementById("result")
let sort_select = document.getElementById("sort");

document.addEventListener("DOMContentLoaded", function() {
    sort_select.addEventListener("change", output);
    output ()
    
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
  console.log("teszt 1");
  console.log("len at stage 2: " + fish_list.length);

  for (let i = 0; i <fish_list.length; i++) {
    let fishcard = document.createElement('div'); // fish card for each fish; all the other elements generated will be appended to this 
    let result_lists_element = document.createElement("p");
    let image_element = document.createElement('img');
    let size = document.createElement("span");
    let temp = document.createElement("span"); // temperature in fish card 
    let tanksize = document.createElement("span"); // tank size in fish card 
    let temp_min = Math.round((fish_list[i].temperature_min * temp_modifier1) + temp_modifier2); // checking if ℃ or ℉ is used 
    let temp_max = Math.round((fish_list[i].temperature_max * temp_modifier1) + temp_modifier2); // checking if ℃ or ℉ is used
    let cap = Math.round(((fish_list[i].tank_size_liter / cap_modifier) * 10)/10)

   
    image_element.src = `images/${fish_list[i].fish_id}.jpeg`; //finding jpeg file for each fish based on fish ID 
    result_lists_element.textContent = `${fish_list[i].name_english}`;
    size.textContent = `${fish_list[i].cm_max}` + " cm";
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