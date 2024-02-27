
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
    console.log("teszt 2");
    let result_lists_element = document.createElement("p");
    let image_element = document.createElement('img');
    let size = document.createElement("span");
    let fishcard = document.createElement('div');
    image_element.src = `images/${fish_list[i].fish_id}.jpeg`;
    image_element.className = "fishcardimage";
    result_lists_element.textContent = `${fish_list[i].name_english}`;
    size.textContent = `${fish_list[i].cm_max}` + " cm";
    size.className = "fishsize";
    fishcard.className = "fish_card";
    fishcard.appendChild(image_element);
    fishcard.appendChild(result_lists_element);
    fishcard.appendChild(size);
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