//Declaring variables 
//Declaring variables 
const liter = "Liter";
const gallon = "Gallon";
//let use_gallon = "Use Gallon";
//let use_liter = "Use Liter";
const celsius = "Celsius";
const farenheit = "Farenheit";
//let use_farenheit = "Use Farenheit";
//let use_celsius = "Use Celsius";

let console_capacity = liter;
let console_temperature = celsius; 

let on_search_page = true;
let expanded = false;
let minimum_liter = 20;
let minimum_gallon = 5.3; 

let = temp_alert = document.getElementById("mintemp_alert"); 
let search_alert_temp = document.getElementById("search_alert_temp");
        
let = tempmin = document.getElementById('tempmin'); 
let convert_fc = document.getElementById("convert_fc");
let convert_cf = document.getElementById("convert_cf");

//let = tempmax = document.getElementById('tempmax'); 
//let swtich_lg = document.getElementById("switch_lg"); 
//let switch_cf = document.getElementById("switch_cf"); 

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

// Starting functions     
all_select_behavior ()


// Adding initial event listeners   
search.addEventListener("click", search_button);
search_restart.addEventListener("click", restart_search);
more_options_button.addEventListener("click", options_expand);        
less_options_button.addEventListener("click", options_collapse);       
document.getElementById("all_1").addEventListener("click", selectall_1);
document.getElementById("all_2").addEventListener("click", selectall_2);
document.getElementById("all_3").addEventListener("click", selectall_3);
//swtich_lg.addEventListener("click", litergallon);    
//switch_cf.addEventListener("click", ctof);
document.getElementById("tank_size").addEventListener("blur", tank_size_check);
document.getElementById("tank_size").addEventListener("keyup", tank_size_check);
document.getElementById("tank_size").addEventListener("click", tank_size_check);

/*
tempmax.addEventListener("click", is_min_smaller);
tempmin.addEventListener("click", is_min_smaller);
tempmax.addEventListener("blur", is_min_smaller);
tempmin.addEventListener("blur", is_min_smaller);
tempmax.addEventListener("keyup", is_min_smaller);
tempmin.addEventListener("keyup", is_min_smaller);
*/
        
document.addEventListener("DOMContentLoaded", function() {
  liter_radio.checked = true;
  document.getElementById("tank_size_alert").style.display = 'none';
  document.getElementById("mintemp_alert").style.display = 'none';
  search_alert_temp.style.display = 'none';

  liter_radio.addEventListener("change", gallonliter);
  gallon_radio.addEventListener("change", litergallon);
  convert_fc.addEventListener("change", ftoc);
  convert_cf.addEventListener("change", ctof);
        
});


// Conversion from liter to gallon [radio buttons]         
function litergallon() {
if (gallon_radio.checked == true) {
let cal_cap = tank_size.value;
document.getElementById("size").innerHTML = gallon;
//swtich_lg.innerHTML = use_liter;
//swtich_lg.removeEventListener("click", litergallon);
//swtich_lg.addEventListener("click", gallonliter);
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
//swtich_lg.innerHTML = use_gallon;
//swtich_lg.removeEventListener("click", gallonliter);
//swtich_lg.addEventListener("click", litergallon);
console_capacity = liter;
tank_size.value = Math.round((cal_cap * 3.785)*10)/10; 
tank_size_check ()
}
}

// Conversion from celsius to farenheit [button]      
function ctof() {
let cal_tempmin = parseInt(tempmin.value);
//let cal_tempmax = parseInt(tempmax.value);
document.getElementById("min_t").innerHTML = farenheit;
//document.getElementById("max_t").innerHTML = farenheit;
//switch_cf.innerHTML = use_celsius;
//switch_cf.removeEventListener("click", ctof);
//switch_cf.addEventListener("click", ftoc);

console_temperature =  farenheit;
tempmin.value = Math.round((cal_tempmin * 9/5)+32);
//tempmax.value = Math.round((cal_tempmax * 9/5)+32);
tempmin.min = 39;
tempmin.max = 95;
//tempmax.min = 39; 
//tempmax.max = 95;

  }
        
// Conversion from farenheit to celsius [button] 
function ftoc() {
let cal_tempmin = parseInt(tempmin.value);
//let cal_tempmax = parseInt(tempmax.value);
document.getElementById("min_t").innerHTML = celsius;
//document.getElementById("max_t").innerHTML = celsius;
//switch_cf.innerHTML = use_farenheit;
//switch_cf.addEventListener("click", ctof);
//switch_cf.removeEventListener("click", ftoc)

console_temperature = celsius;
tempmin.value = Math.round((cal_tempmin-32)*5/9);
//tempmax.value = Math.round((cal_tempmax-32)*5/9);
tempmin.min = 4;
tempmin.max = 35;
//tempmax.min = 4; 
//tempmax.max = 35;
  }

// Select/deselect all [buttons] 
//1 - Select/deselect all
     function selectall_1 () {
   
           beginner.checked = true; 
           easy.checked = true; 
           medium.checked = true; 
           difficult.checked = true;
           document.getElementById("all_1").addEventListener("click", deselectall_1);
           document.getElementById("all_1").removeEventListener("click", selectall_1); 
           document.getElementById("all_1").innerHTML = "deselect all";
           
    }
      
    function deselectall_1 () {

           beginner.checked = false; 
           easy.checked = false; 
           medium.checked = false; 
           difficult.checked = false;
           document.getElementById("all_1").addEventListener("click", selectall_1);
           document.getElementById("all_1").removeEventListener("click", deselectall_1);
           document.getElementById("all_1").innerHTML = "select all";
    }

//2 - Select/deselect all


    function selectall_2 () {
   
   verycommon.checked = true; 
   common.checked = true; 
   rare.checked = true; 
   veryrare.checked = true;
   document.getElementById("all_2").addEventListener("click", deselectall_2);
   document.getElementById("all_2").removeEventListener("click", selectall_2); 
   document.getElementById("all_2").innerHTML = "deselect all";
   
}

function deselectall_2 () {

   verycommon.checked = false; 
   common.checked = false; 
   rare.checked = false; 
   veryrare.checked = false;
   document.getElementById("all_2").addEventListener("click", selectall_2);
   document.getElementById("all_2").removeEventListener("click", deselectall_2);
   document.getElementById("all_2").innerHTML = "select all";
}

//3 - Select/deselect all

function selectall_3 () {
   
   all_select_behavior ()
   document.getElementById("all_3").addEventListener("click", deselectall_3);
   document.getElementById("all_3").removeEventListener("click", selectall_3); 
   document.getElementById("all_3").innerHTML = "deselect all";
   
}

function deselectall_3 () {

   all_deselect_behavior () 
   document.getElementById("all_3").addEventListener("click", selectall_3);
   document.getElementById("all_3").removeEventListener("click", deselectall_3);
   document.getElementById("all_3").innerHTML = "select all";
}

        
// Check all checkboxes when advanced options are collapsed 
        
// Check all checkboxes when advanced options are collapsed 
        
function all_select_behavior () {
  schooling1.checked = true; 
  schooling2.checked = true; 
  solitary.checked = true; 
}


function all_deselect_behavior () {
  schooling1.checked = false; 
  schooling2.checked = false; 
  solitary.checked = false; 
}

        
//////////////////////////////
/// Search button function 
  function search_button() {
      event.preventDefault();
      let v_tempmin = tempmin.value;
     // let v_tempmax = tempmax.value; 
    
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
    document.getElementById("p_temp").innerHTML = `(${console_temperature}): ${v_tempmin} - ${v_tempmax}`;
  
  // Populating search parameters summary 

      let l_avail = [];
      let l_hardiness = [];
      let l_behavior = [];
      avail_list(l_avail);
      hardiness_list(l_hardiness)
      behavior_list(l_behavior)
  
      document.getElementById("p_avail").innerHTML = l_avail.join(", ");
      document.getElementById("p_hardiness").innerHTML = l_hardiness.join(", ");
      document.getElementById("p_social").innerHTML = l_behavior.join(", ");

  
   // Functions for populating search parameters summary 



  function hardiness_list(x) {

  if (v_beginner) {
        x.push("beginner");
    }
     
     if (v_easy) {
      x.push("easy");
    }

     if(v_medium) {
      x.push("medium");
    }

     if(v_difficult) {
      x.push("difficult");
    }

    if (v_beginner && v_easy && v_medium && v_difficult) {
    x.length = 0; 
    x.push("All");
  }

}
      
function avail_list(x) {
  if (v_verycommon) {
        x.push("very common");
    }
     
      if (v_common) {
      x.push("common");
    }

    if (v_rare) {
      x.push("rare");
    }

    if (v_veryrare) {
      x.push("very rare");
    }

       if (v_verycommon && v_common && v_rare && v_veryrare) {
    x.length = 0; 
    x.push("All");
  }

}

function behavior_list (x) {
  if (!expanded) {
    x.length = 0; 
    x.push("All");
  }

  if (v_schooling1) {
    x.push("Needs schooling")
  }

  if (v_schooling2) {
    x.push("Prefers schooling")
  }

  if (v_solitary) {
    x.push("Prefers/accepts solitary life")
  }

  if (v_schooling1 && v_schooling2 && v_solitary) {
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
    checker_1 ()

  }

  function options_expand() {
    expanded = true; 
    checker_1 ()
    all_deselect_behavior () 
  }

  function options_collapse() {
    expanded = false; 
    checker_1 ()
    all_select_behavior ()
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
      more_options.style.display = 'inline-block';
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

  // Checking if minimum temperature is greater than maximum temperature 
/*
  function is_min_smaller () {
  let tmin = parseInt(tempmin.value);
  let tmax = parseInt(tempmax.value);

  if (tmin > tmax ) {
      temp_alert.style.display = 'inline-block';
      tempmin.style.borderColor = 'red';
    }

  if (tmax >= tmin) {
    temp_alert.style.display = 'none';
    tempmin.style.borderColor = 'unset';
  }

  }
*/ 
      
