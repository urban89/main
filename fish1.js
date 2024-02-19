///////////////////////
//Declaring variables 
const liter = "Liter";
const gallon = "Gallon";
const celsius = "Celsius";
const farenheit = "Farenheit";

let console_capacity = liter;
let console_temperature = celsius; 

let on_search_page = true;
let expanded = false;
let minimum_liter = 20;
let minimum_gallon = 5.3; 

let temp_alert = document.getElementById("mintemp_alert"); 
let search_alert_temp = document.getElementById("search_alert_temp");
        
let tempmin = document.getElementById('tempmin'); 
let convert_fc = document.getElementById("convert_fc");
let convert_cf = document.getElementById("convert_cf");

let main_form = document.getElementById("main_form");
let search_restart = document.getElementById("search_restart");
let search_pmeters = document.getElementById("search_pmeters");
let more_options_button = document.getElementById("more_options_button");
let more_options = document.getElementById("more_options");
let less_options_button = document.getElementById("less_options_button");
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

let hardi_chbx = document.querySelectorAll('input[name = "hardi"]');
let avail_chbx = document.querySelectorAll('input[name = "avail"]');
let social_chbx = document.querySelectorAll('input[name = "social"]');
let agress_chbx = document.querySelectorAll('input[name = "agress"]');
let breed_chbx = document.querySelectorAll('input[name = "breed"]');

let result_div = document.getElementById("result");
let num_results = document.getElementById("num_results");

let srch_arr = []; 

// Adding initial event listeners   
search.addEventListener("click", search_button);
search_restart.addEventListener("click", restart_search);
more_options_button.addEventListener("click", options_expand);        
less_options_button.addEventListener("click", options_collapse);       
tank_size.addEventListener("blur", tank_size_check);
tank_size.addEventListener("keyup", tank_size_check);
tank_size.addEventListener("click", tank_size_check);

        
document.addEventListener("DOMContentLoaded", function() {
  liter_radio.checked = true;
  convert_fc.checked = true; 
  document.getElementById("tank_size_alert").style.display = 'none';
  document.getElementById("mintemp_alert").style.display = 'none';
  search_alert_temp.style.display = 'none';
  
  liter_radio.addEventListener("change", gallonliter);
  gallon_radio.addEventListener("change", litergallon);
  convert_fc.addEventListener("change", ftoc);
  convert_cf.addEventListener("change", ctof);
  all_1.addEventListener("change",selectall_1);
  all_2.addEventListener("change",selectall_2);
  all_3.addEventListener("change",selectall_3);
  all_4.addEventListener("change",selectall_4);
  all_5.addEventListener("change",selectall_5);

  all_select_behavior (social_chbx);
  all_select_behavior (agress_chbx);
  all_select_behavior (breed_chbx);      

  listenAdder(hardi_chbx, uncheckBox.bind(null, hardi_chbx, all_1));
  listenAdder(avail_chbx, uncheckBox.bind(null, avail_chbx, all_2));
  listenAdder(social_chbx, uncheckBox.bind(null, social_chbx, all_3));
  listenAdder(agress_chbx, uncheckBox.bind(null, agress_chbx, all_4));
  listenAdder(breed_chbx, uncheckBox.bind(null, breed_chbx, all_5));
        
});

// Used for checking all checkboxes when advanced options are collapsed 
        
function all_select_behavior (x) {
  x.forEach(function(box) {
    box.checked = true; 
  });
}


function all_deselect_behavior (x) {
x.forEach(function(box) {
 box.checked = false; 
});; 
}
  


// Conversion from liter to gallon [radio buttons]         
function litergallon() {
if (gallon_radio.checked == true) {
let cal_cap = tank_size.value;
document.getElementById("size").innerHTML = gallon;

console_capacity = gallon;
tank_size.value = Math.round((cal_cap * 0.264172)*10)/10;
tank_size_check ()
}
}


// Conversion from gallon to liter [radio buttons]        
function gallonliter() {
  if (liter_radio.checked == true) {
let cal_cap = tank_size.value;
document.getElementById("size").innerHTML = liter;
console_capacity = liter;
tank_size.value = Math.round((cal_cap * 3.785)*10)/10; 
tank_size_check ()
}
}

// Conversion from celsius to farenheit [button]      
function ctof() {
let cal_tempmin = parseInt(tempmin.value);
document.getElementById("min_t").innerHTML = farenheit;

console_temperature =  farenheit;
tempmin.value = Math.round((cal_tempmin * 9/5)+32);
tempmin.min = 39;
tempmin.max = 95;


  }
        
// Conversion from farenheit to celsius [button] 
function ftoc() {
let cal_tempmin = parseInt(tempmin.value);
document.getElementById("min_t").innerHTML = celsius;

console_temperature = celsius;
tempmin.value = Math.round((cal_tempmin-32)*5/9);
tempmin.min = 4;
tempmin.max = 35;
  }

// Select/deselect all [checkboxes] 
//1 - Select/deselect all
       function selectall_1 () {
      var boxes = document.querySelectorAll('input[name="hardi"]');
      if (all_1.checked == true) {
        boxes.forEach(function(box) {
          box.checked = true;
        });
      } 
      else {
        boxes.forEach(function(box) {
          box.checked = false;
        });
      }
    }
      

//2 - Select/deselect all


    function selectall_2 () {
      if (all_2.checked == true) {
        verycommon.checked = true; 
        common.checked = true; 
        rare.checked = true; 
        veryrare.checked = true;
      }
   
     else {

      verycommon.checked = false; 
      common.checked = false; 
      rare.checked = false; 
      veryrare.checked = false;

     }
   
}

//3 - Select/deselect all - social behavior 

function selectall_3 () {
   
   if (all_3.checked == true) {
    all_select_behavior(social_chbx);
   }
   else {
    all_deselect_behavior(social_chbx);
   }
}

//4 - Select/deselect all - agresssion 
function selectall_4 () {
  var boxes = document.querySelectorAll('input[name="agress"]');
  if (all_4.checked == true) {

    boxes.forEach(function(box) {
      box.checked = true;
    });
  }
       
  else {

    boxes.forEach(function(box) {
      box.checked = false;
    });
  }
}

//5 - Select/deselect all - breeding
function selectall_5 () {
  var boxes = document.querySelectorAll('input[name="breed"]');
  if (all_5.checked == true) {

    boxes.forEach(function(box) {
      box.checked = true;
    });
  }
       
  else {

    boxes.forEach(function(box) {
      box.checked = false;
    });
  }
}

      
//////////////////////////////
/// Search button function 
  function search_button() {
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
      let selection_alert = "Some search parameters were not selected: ";
      let selection_alert_arr = []; 

      let srch_hardi = []; 
      let srch_avail = []; 
      let srch_soci = []; 
      let srch_agress = []; 
      let srch_breed = []; 
      let fish_list = []; 
          
     srch_arr = [srch_hardi, srch_avail, srch_soci, srch_agress,srch_breed, parseFloat(v_tank_size), parseFloat(v_tempmin)];

     preCheck(v_tempmin);

      if (!v_verycommon && !v_common && !v_rare && !v_veryrare) {
      selection_missing = true;
      document.getElementById('availabilty').classList.add('notselected');
      selection_alert_arr.push ("availability");
    }

    if (!v_beginner && !v_easy && !v_medium && !v_difficult) {
      selection_missing = true;
      document.getElementById('difficulty').classList.add('notselected');
      selection_alert_arr.push ("difficulty");
    }

     if (!v_schooling1 && !v_schooling2 && !v_solitary) {
      selection_missing = true;
      document.getElementById('behavior').classList.add('notselected');
      selection_alert_arr.push ("behavior");
    }

      

    if ((v_verycommon || v_common || v_rare || v_veryrare) && (v_beginner || v_easy || v_medium || v_difficult) && (v_schooling1 || v_schooling2 || v_solitary)) {
      document.getElementById('availabilty').classList.remove('notselected');
      document.getElementById('difficulty').classList.remove('notselected');
      document.getElementById('behavior').classList.remove('notselected');
      selection_missing = false;

    }
      


      if (selection_missing) {
        alert(selection_alert + selection_alert_arr.join(", "));
        return; 
      }
      

      document.getElementById("main_form").style.display = 'none';
      document.getElementById("search_restart").style.display = 'inline-block';
      document.getElementById("search_pmeters").style.display = 'inline-block';


// Adding capacity and temeprature to search paramters summary 

    document.getElementById("p_tanksize").innerHTML = `(${console_capacity}):  ${v_tank_size}`;
    document.getElementById("p_temp").innerHTML = `(${console_temperature}): ${v_tempmin}`;
  
  // Populating search parameters summary 

      let l_avail = [];
      let l_hardiness = [];
      let l_behavior = [];
      let l_agress = [];
      let l_breed = [];
      avail_list(l_avail);
      hardiness_list(l_hardiness);
      behavior_list(l_behavior);
      agres_list(l_agress);
      breed_list(l_breed);
  
      document.getElementById("p_avail").innerHTML = l_avail.join(", ");
      document.getElementById("p_hardiness").innerHTML = l_hardiness.join(", ");
      document.getElementById("p_social").innerHTML = l_behavior.join(", ");
      document.getElementById("p_agression").innerHTML = l_agress.join(", ");
      document.getElementById("p_breeding").innerHTML = l_breed.join(", ");

    console.log(srch_arr);

          /////using the user input to create a search result array by iterating over the fish_master 
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
       (v_tank_size > fish_cap) && 
       (fish_temp_min < v_tempmin) && (v_tempmin < fish_temp_max)){

       fish_list.push(fish);

    } 
  }
    console.log(fish_list);
    num_results.innerHTML = fish_list.length;
}


  ///////////////////Outputting serach results to UI
    function fishSelect () {
    let list_fish = document.createElement("ul");

    for (let i = 0; i < fish_list.length; i++) {
      let list_fish_element = document.createElement("li");
      let image_element = document.createElement('img');
      image_element.src = `images/${fish_list[i].fish_id}.jpeg`;
      image_element.width = 200;
      image_element.height = 150;
      list_fish_element.textContent = `${i+1} ${fish_list[i].name_english}`;
      list_fish.appendChild(list_fish_element);
      list_fish.appendChild(image_element);
    }

    result_div.appendChild(list_fish);
  }
          

          fishFinder ()
          fishSelect ()
    ///// long ass search function ends here 
       //////////////////////////
   // Functions for populating search results dashboard with the chosen parameters


  function hardiness_list(x) {

  if (v_beginner) {
        x.push("beginner");
        srch_hardi.push(4);
    }
     
     if (v_easy) {
      x.push("easy");
      srch_hardi.push(3);
    }

     if(v_medium) {
      x.push("medium");
      srch_hardi.push(2);
    }

     if(v_difficult) {
      x.push("difficult");
      srch_hardi.push(1);
    }

    if (all_1.checked) {
    x.length = 0; 
    x.push("All");
  }

}
      
function avail_list(x) {
  if (v_verycommon) {
        x.push("very common");
        srch_avail.push(4);
    }
     
      if (v_common) {
      x.push("common");
      srch_avail.push(3);
    }
    

    if (v_rare) {
      x.push("rare");
      srch_avail.push(2);
    }

    if (v_veryrare) {
      x.push("very rare");
      srch_avail.push(1);
    }

       if (all_2.checked) {
    x.length = 0; 
    x.push("All");
  }

}

function behavior_list (x) {
  if (v_schooling1) {
    x.push("Needs schooling");
    srch_soci.push(3);
  }

  if (v_schooling2) {
    x.push("Prefers schooling");
    srch_soci.push(2);
  }

  if (v_solitary) {
    x.push("Prefers/accepts solitary life");
    srch_soci.push(1);
  }

  if (all_3.checked || (!expanded)) {
    x.length = 0; 
    x.push("All");
  }

}
  

function agres_list(x) {
  if (v_peaceful1) {
    x.push("peaceful");
    srch_agress.push(1);
  }

  if (v_peaceful2) {
    x.push("semi-agresssive");
    srch_agress.push(2);
  }

  if (v_aggressive) {
    x.push("agressive");
    srch_agress.push(3);
  }

  if (all_4.checked || (!expanded)) {
    x.length = 0; 
    x.push("All");
  }

}

function breed_list(x) {
  if (v_b_easy) {
    x.push("easy");
    srch_breed.push(1);
  }

  if (v_b_medium) {
    x.push("medium");
    srch_breed.push(2);
  }

  if (v_b_hard) {
    x.push("hard");
    srch_breed.push(3);
  }

  if (v_impossible) {
    x.push("impossible");
    srch_breed.push(4);
  }

  if (all_5.checked || (!expanded)) {
    x.length = 0; 
    x.push("All");
  }
}
      
 // Expanding/collapsing advanced search options and jumping between search/result pages - part of search_buttton()

      
   document.getElementById("less_options_button").style.display = 'none';
   on_search_page = false;
   checker_1 ()
  }

  // Check data before search and display alert if needed 

function preCheck(min) {

  if ((min < 4 || min > 35) && console_temperature === celsius) {
      search_alert_temp.innerHTML = "Temperature should not be lower than 4C or higher than 35C";
      search_alert_temp.style.display = 'inline-block';
      return FALSE; 
    }

    else if ((min <  39 || min >  95) && console_temperature === farenheit) {
      search_alert_temp.innerHTML = "Temperature should not be lower than 39F or higher than 95F";
      search_alert_temp.style.display = 'inline-block';
      return FALSE; 
    }

   else {
    search_alert_temp.style.display = 'none';
   }

}
  
 // Expanding/collapsing advanced search options and jumping between search/result pages (separate functions)   

 function restart_search() {
    on_search_page = true; 
    checker_1 ();
    result_div.innerHTML = ""; 

  }

  function options_expand() {
    expanded = true; 
    checker_1 ()
    all_deselect_behavior (social_chbx);
    all_deselect_behavior (agress_chbx);
    all_deselect_behavior (breed_chbx);
  }

  function options_collapse() {
    expanded = false; 
    checker_1 ()
    all_select_behavior (social_chbx);
    all_select_behavior (agress_chbx);
    all_select_behavior (breed_chbx);
  }

    function checker_1 () {
    if (on_search_page && !expanded) {
      main_form.style.display = 'flex';
      search_restart.style.display = 'none';
      search_pmeters.style.display = 'none';
      more_options_button.style.display = 'flex';
      more_options.style.display = 'none';
      less_options_button.style.display = 'none';
      search.style.display = 'flex';  
    }

    if (on_search_page && expanded) {
      main_form.style.display = 'flex';
      search_restart.style.display = 'none';
      search_pmeters.style.display = 'none';
      more_options_button.style.display = 'none';
      more_options.style.display = 'grid';
      less_options_button.style.display = 'flex';
      search.style.display = 'flex';  
    }

    if ((!on_search_page && expanded) || (!on_search_page && !expanded)) {
      main_form.style.display = 'none';
      search_restart.style.display = 'flex';
      search_pmeters.style.display = 'inline-block';
      more_options_button.style.display = 'none';
      more_options.style.display = 'none';
      less_options_button.style.display = 'none';
      search.style.display = 'none';
        
  }
  } 


//Checking tank size before submission (shouldn't be too small)
function tank_size_check () {
  let tank_size_alert = document.getElementById("tank_size_alert");
  let tank_size = document.getElementById('tank_size').value;  

    if ((tank_size < 20) && (console_capacity === liter)) {
      tank_size_alert.innerHTML = "Tank size too small. At least " + minimum_liter + console_capacity;
      tank_size_alert.style.display = 'inline-block';
      document.getElementById('tank_size').style.borderColor = 'red';  
    } 

    if ((tank_size < 5.3) && (console_capacity === gallon)) {
      tank_size_alert.innerHTML = "Tank size too small. At least " + minimum_gallon + console_capacity;
      tank_size_alert.style.display = 'inline-block';
      document.getElementById('tank_size').style.borderColor = 'red';  
    }

    if (((tank_size >= 20) && (console_capacity === liter)) || ((tank_size >= 5.3) && (console_capacity === gallon))) {
      tank_size_alert.style.display = 'none';
      document.getElementById('tank_size').style.borderColor = 'unset';
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
