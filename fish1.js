///////////////////////
//Declaring variables 
const liter = "Liter";
const gallon = "Gallon";
const celsius = "Celsius";
const farenheit = "Farenheit";
const checkboxes = document.querySelectorAll('input[type="checkbox"]');
const numberinputs = document.querySelectorAll('input[type="number"]');

let console_capacity = liter;
let console_temperature = celsius; 

let minimum_liter = 20;
let minimum_gallon = 5.3; 

let tempalert = document.getElementById("tempalert");
let capalert = document.getElementById("capalert");
let checkalert = document.getElementById("checkalert");


let div_tank_size = document.getElementById("div_tank_size");
let div_hardiness = document.getElementById("div_hardiness");
let div_temp = document.getElementById("div_temp");
let div_avail = document.getElementById("div_avail");
let div_behavior = document.getElementById("div_behavior");
let div_agression =  document.getElementById("div_agression");
let div_breeding =  document.getElementById("div_breeding");
        
let tempmin = document.getElementById('tempmin'); 
let convert_fc = document.getElementById("convert_fc");
let convert_cf = document.getElementById("convert_cf");

let main_form = document.getElementById("main_form");
let more_options = document.getElementById("more_options");
let search = document.getElementById("search"); 

let tank_size = document.getElementById("tank_size"); 
let liter_radio = document.getElementById("liter_radio"); 
let gallon_radio = document.getElementById("gallon_radio"); 


let beginner = document.getElementById("beginner");
let easy = document.getElementById("easy");
let medium = document.getElementById("medium");
let difficult = document.getElementById("difficult");

let verycommon = document.getElementById("verycommon");
let common = document.getElementById("common");
let rare = document.getElementById("rare");
let veryrare = document.getElementById("veryrare");

let schooling1 = document.getElementById("schooling1");
let schooling2 = document.getElementById("schooling2");
let solitary = document.getElementById("solitary");

let peaceful1 = document.getElementById("peaceful1");
let peaceful2 = document.getElementById("peaceful2");
let aggressive = document.getElementById("aggressive");

let b_easy = document.getElementById("b_easy"); 
let b_medium = document.getElementById("b_medium"); 
let b_hard = document.getElementById("b_hard"); 
let impossible = document.getElementById("impossible");

let all_1 = document.getElementById("all_1");
let all_2 = document.getElementById("all_2");
let all_3 = document.getElementById("all_3");
let all_4 = document.getElementById("all_4");
let all_5 = document.getElementById("all_5");

let sort_select = document.getElementById("sort");
let browse_button = document.getElementById("browse_button");
let sum = document.getElementById("sum");

let hardi_chbx = document.querySelectorAll('input[name = "hardi"]');
let avail_chbx = document.querySelectorAll('input[name = "avail"]');
let social_chbx = document.querySelectorAll('input[name = "social"]');
let agress_chbx = document.querySelectorAll('input[name = "agress"]');
let breed_chbx = document.querySelectorAll('input[name = "breed"]');

let result_div = document.getElementById("result");
let fishcount = document.getElementById("fishcount");
let noresults =  document.getElementById("noresults");
let none_found = false; 
let invalid_search = false; 

let srch_arr = []; 

// Adding initial event listeners   
document.addEventListener("DOMContentLoaded", function() {
      
tank_size.addEventListener("blur", preCheckTank);
tank_size.addEventListener("keyup", preCheckTank);
tank_size.addEventListener("click", preCheckTank);
  
  liter_radio.checked = true;
  convert_fc.checked = true; 
  
  liter_radio.addEventListener("change", gallonliter);
  gallon_radio.addEventListener("change", litergallon);
  convert_fc.addEventListener("change", ftoc);
  convert_cf.addEventListener("change", ctof);

  all_1.addEventListener("change",function () {selectall(hardi_chbx, all_1);});
  all_2.addEventListener("change",function () {selectall(avail_chbx, all_2);});
  all_3.addEventListener("change",function () {selectall(social_chbx, all_3);});
  all_4.addEventListener("change",function () {selectall(agress_chbx, all_4);});
  all_5.addEventListener("change",function () {selectall(breed_chbx, all_5);});

  listenAdder(hardi_chbx, uncheckBox.bind(null, hardi_chbx, all_1));
  listenAdder(avail_chbx, uncheckBox.bind(null, avail_chbx, all_2));
  listenAdder(social_chbx, uncheckBox.bind(null, social_chbx, all_3));
  listenAdder(agress_chbx, uncheckBox.bind(null, agress_chbx, all_4));
  listenAdder(breed_chbx, uncheckBox.bind(null, breed_chbx, all_5));
        
  verycommon.checked = true; 
  common.checked = true; 
  beginner.checked = true
  easy.checked = true;

  all_3.checked = true; 
  selectall(social_chbx, all_3)
  all_4.checked = true; 
  selectall(agress_chbx, all_4)
  all_5.checked = true; 
  selectall(breed_chbx, all_5)

  checkboxes.forEach (checkbox => {
    checkbox.addEventListener("change", search_button);
  });

  numberinputs.forEach (checkbox => {
    checkbox.addEventListener("change", search_button);
  });

  sort_select.addEventListener("change", search_button);

  search_button()

  browse_button.addEventListener("click", browse);

  tempalert.style.display = "none";
  capalert.style.display = "none";
  checkalert.style.display = "none";
  
});

      
//////////////////////////////
/// Search button function 
  function search_button() {
      result_div.innerHTML = "";
      event.preventDefault();
      let v_tempmin = tempmin.value;
    
      let v_tank_size = tank_size.value; 

      let v_beginner = beginner.checked; 
      let v_easy = easy.checked; 
      let v_medium = medium.checked; 
      let v_difficult = difficult.checked; 

      let v_verycommon = verycommon.checked;
      let v_common = common.checked;
      let v_rare = rare.checked;
      let v_veryrare = veryrare.checked;

      let v_schooling1 = schooling1.checked;
      let v_schooling2 = schooling2.checked;
      let v_solitary = solitary.checked;

      let v_peaceful1 = peaceful1.checked;
      let v_peaceful2 = peaceful2.checked;
      let v_aggressive = aggressive.checked;

      let v_b_easy = b_easy.checked;
      let v_b_medium = b_medium.checked;
      let v_b_hard = b_hard.checked;
      let v_impossible = impossible.checked;

      let selection_missing;

      let srch_hardi = []; 
      let srch_avail = []; 
      let srch_soci = []; 
      let srch_agress = []; 
      let srch_breed = []; 
      let fish_list = []; 
          
     srch_arr = [srch_hardi, srch_avail, srch_soci, srch_agress,srch_breed, parseFloat(v_tank_size), parseFloat(v_tempmin)];

      // Checking if temperature and tank size are ok; + checking if checkboxes were selected     
     preCheckTemperature(v_tempmin);
     preCheckCheckboxes (); 
     preCheckTank(); 

      function preCheckCheckboxes () {
      if (!v_verycommon && !v_common && !v_rare && !v_veryrare) {
      selection_missing = true;
      div_avail.classList.add('notselected');
      div_avail.classList.remove('tiles');
    }

    else {
      div_avail.classList.remove('notselected');
      div_avail.classList.add('tiles');
    }

    if (!v_beginner && !v_easy && !v_medium && !v_difficult) {
      selection_missing = true;
      div_hardiness.classList.add('notselected');
      div_hardiness.classList.remove('tiles');
    }

    else {
      div_hardiness.classList.remove('notselected');
      div_hardiness.classList.add('tiles');
    }

     if (!v_schooling1 && !v_schooling2 && !v_solitary) {
      selection_missing = true;
      div_behavior.classList.add('notselected');
      div_behavior.classList.remove('tiles');
    }

    else {
      div_behavior.classList.remove('notselected');
      div_behavior.classList.add('tiles');
    }

    if (!v_peaceful1 && !v_peaceful2 && !v_aggressive) {
      selection_missing = true;
      div_agression.classList.add('notselected');
      div_agression.classList.remove('tiles');
    }

    else {
      div_agression.classList.remove('notselected');
      div_agression.classList.add('tiles');
    }

    if (!v_b_easy && !v_b_medium && !v_b_hard && !v_impossible) {
      selection_missing = true;
      div_breeding.classList.add('notselected');
      div_breeding.classList.remove('tiles');
    }

    else {
      div_breeding.classList.remove('notselected');
      div_breeding.classList.add('tiles');
    }

      

    if ((v_verycommon || v_common || v_rare || v_veryrare) && (v_beginner || v_easy || v_medium || v_difficult) && (v_schooling1 || v_schooling2 || v_solitary)
    && (v_peaceful1 || v_peaceful2 || v_aggressive) && (v_b_easy || v_b_medium || v_b_hard || v_impossible)) {
      div_avail.classList.remove('notselected');
      div_hardiness.classList.remove('notselected');
      div_behavior.classList.remove('notselected');
      div_agression.classList.remove('notselected');
      div_breeding.classList.remove('notselected');

      div_avail.classList.add('tiles');
      div_hardiness.classList.add('tiles');
      div_behavior.classList.add('tiles');
      div_agression.classList.add('tiles');
      div_breeding.classList.add('tiles');


      selection_missing = false;

    }
      
    
      if (selection_missing) {
        checkalert.style.display = "inline-block";
        invalid_search = true; 
      }

     else {
      checkalert.style.display = "none";
      invalid_search = false; 
     }

    }      

 
// Adding requirements to search paramters summary 
  
      avail_list();
      hardiness_list();
      behavior_list();
      agres_list();
      breed_list();

    console.log(srch_arr);

          /////using the user input to create a search result array by iterating over the fish_master array 
      function fishFinder ()  {   
    for (fish of fish_master) {
       let fish_temp_min = parseFloat(fish.temperature_min);
       let fish_temp_max = parseFloat(fish.temperature_max); 
       let fish_cap = parseFloat(fish.tank_size_liter);

       if (console_capacity == gallon) {
        fish_cap = fish_cap * 0.264172;
       }

       if (console_temperature == farenheit) {
        fish_temp_min = (fish_temp_min * 9/5)+32;
        fish_temp_max = (fish_temp_max * 9/5)+32;
       }

       if ((srch_hardi.includes(parseInt(fish.uncare))) && 
       (srch_avail.includes(parseInt(fish.availability))) && 
       (srch_soci.includes(parseInt(fish.school))) && 
       (srch_agress.includes(parseInt(fish.agression))) &&
       (srch_breed.includes(parseInt(fish.breeding_difficulty))) &&
       (v_tank_size >= fish_cap) && 
       (fish_temp_min <= v_tempmin) && (v_tempmin <= fish_temp_max)){

       fish_list.push(fish);

    } 

  }

    if (sort_select.value == "size_min") {
      fish_list.sort(compare_size);
      console.log("size_min")
    }

    if (sort_select.value == "size_max") {
      fish_list.sort(compare_size_descend);
      console.log("size_max")
    }

    if (sort_select.value == "temp_min") {
      fish_list.sort(compare_temp);
      console.log("temp_min")
    }

    console.log(fish_list);
    console.log("len at stage 1: " + fish_list.length);
    fishcount.innerHTML = fish_list.length;
    if (fish_list == 0) {
      none_found = true;
    }
    else {
      none_found = false; 
    }
}


///////////////////Outputting serach results to UI
function fishSelect () {
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
} 
   
          

          fishFinder ()
          fishSelect ()
          noResultAlert ()

   // Responsible for building the array that I use to iterate over fish_master and find results 
  function hardiness_list() {

  if (v_beginner) {
        srch_hardi.push(4);
    }
     
     if (v_easy) {
      srch_hardi.push(3);
    }

     if(v_medium) {
      srch_hardi.push(2);
    }

     if(v_difficult) {
      srch_hardi.push(1);
    }

}
      
function avail_list() {
  if (v_verycommon) {
        srch_avail.push(4);
    }
     
      if (v_common) {
      srch_avail.push(3);
    }
    

    if (v_rare) {
      srch_avail.push(2);
    }

    if (v_veryrare) {
      srch_avail.push(1);
    }

}

function behavior_list () {
  if (v_schooling1) {
    srch_soci.push(3);
  }

  if (v_schooling2) {
    srch_soci.push(2);
  }

  if (v_solitary) {
    srch_soci.push(1);
  }

}
  

function agres_list() {
  if (v_peaceful1) {
    srch_agress.push(1);
  }

  if (v_peaceful2) {
    srch_agress.push(2);
  }

  if (v_aggressive) {
    srch_agress.push(3);
  }

}

function breed_list() {
  if (v_b_easy) {
    srch_breed.push(1);
  }

  if (v_b_medium) {
    srch_breed.push(2);
  }

  if (v_b_hard) {
    srch_breed.push(3);
  }

  if (v_impossible) {
    srch_breed.push(4);
  }

}      
 }
 

 // search_button function ends here 


  // Check data before search and display alert if needed 

function preCheckTemperature(temp) {

  if ((temp < 4 || temp > 35) && console_temperature === celsius) {
    tempalert.innerHTML = "Temperature should not be lower than 4C or higher than 35C";
          div_temp.classList.remove('tiles');
      div_temp.classList.add('notselected');
      tempalert.style.display = "inline-block";
      invalid_search = true; 
    }

    else if ((temp <  39 || temp >  95) && console_temperature === farenheit) {
      tempalert.innerHTML = "Temperature should not be lower than 39F or higher than 95F";
             div_temp.classList.remove('tiles');
             div_temp.classList.add('notselected');
             tempalert.style.display = "inline-block";
             invalid_search = true; 
    }

   else {
           div_temp.classList.add('tiles');
            div_temp.classList.remove('notselected');
            tempalert.style.display = "none";
            invalid_search = false;
   }

}
  
 
//Checking tank size before submission (shouldn't be too small)
function preCheckTank() {
  let tank_size_alert = document.getElementById("tank_size_alert");
  let tank_size = document.getElementById('tank_size').value;  

    if ((tank_size < 20) && (console_capacity === liter)) {
      capalert.style.display = 'inline-block';
      document.getElementById('tank_size').style.borderColor = 'red';  
      invalid_search = true; 
    } 

    if ((tank_size < 5.3) && (console_capacity === gallon)) {
      capalert.style.display = 'inline-block';
      document.getElementById('tank_size').style.borderColor = 'red';  
      invalid_search = true; 
    }

    if (((tank_size >= 20) && (console_capacity === liter)) || ((tank_size >= 5.3) && (console_capacity === gallon))) {
      capalert.style.display = 'none';
      document.getElementById('tank_size').style.borderColor = 'unset';
      invalid_search = false; 
    }

  }


 //////Event listener adder for checkbox select/unselect logic 

  function listenAdder (arr, funk) {
      for (box of arr) {
        box.addEventListener("change", funk);
      }

  }

  function uncheckBox(arr, all_box) {
    let checker = true; 
    for (box of arr) {
      if (!box.checked) {
        all_box.checked = false; 
        checker = false; 
      }
    }
    if (checker) {
      all_box.checked = true;
    }
  }


  //// Select all / deselect all function 
  function selectall (group, all) {
    if (all.checked == true) {
      group.forEach(function(box) {
        box.checked = true;
      });
    } 
    else {
      group.forEach(function(box) {
        box.checked = false;
      });
    }
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



  function browse () {
    let fish_list_all = []; 
    main_form.style.display = "none";
    more_options.style.display = "none";
    fishcount.innerHTML = fish_master.length;
    sum.innerText = "Number of species in database: "

    fishSelectAll ();
  }

  function fishSelectAll () {
    let result_lists = document.createElement("div");
    result_lists.className = "column_result"; 
  
    for (let i = 0; i <fish_master.length; i++) {
      let result_lists_element = document.createElement("p");
      let image_element = document.createElement('img');
      let size = document.createElement("span");
      let fishcard = document.createElement('div');
      image_element.src = `images/${fish_master[i].fish_id}.jpeg`;
      image_element.className = "fishcardimage";
      result_lists_element.textContent = `${fish_master[i].name_english}`;
      size.textContent = `${fish_master[i].cm_max}` + " cm";
      size.className = "fishsize";
      fishcard.className = "fish_card";
      fishcard.appendChild(image_element);
      fishcard.appendChild(result_lists_element);
      fishcard.appendChild(size);
      result_lists.appendChild(fishcard);
    }
  
    result_div.appendChild(result_lists);
  } 


  // function preCheckTank() {
  //     if (parseInt(tank_size) < 20) {
  //       capalert.style.display = "inline-block";
  //     }
  // }

//// duuplicate alert for now: a bug to resolve 
  function noResultAlert () {
    if ((none_found == true) && (invalid_search == false)) {
      noresults.style.display = "inline-block"; 
    }
    else {
      noresults.style.display = "none"; 
    }
  }