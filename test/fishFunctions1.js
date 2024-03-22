
//////Constatns////////////////
/////Used by both Selector and Database pages. 

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
const fishshown = "Show all info cards";
const infoshown = "Show all fish cards";
const more = "Show more search options";
const fewer = "Show fewer search options";
const feedbacknotshown = "Send feedback"; 
const feedbackshown = "Hide feedback window";
const aboutoff = "About this page"; 
const abouton = "Hide page info";
const maincount = fish_master.length; 
const bcimages = 5; 


 //////////////////////////////////////////////
 //// Dictionary for numerical codes to categories
/// Used in info_card 

const codes_hardi = 
{
  4: "Beginner",
  3: "Easy",
  2: "Medium",
  1: "Difficult"
}
const codes_avail = 
{
  4: "Very common",
  3: "Common",
  2: "Rare",
  1: "Very rare"
}
const codes_behave = 
{
  3: "Schooling",
  2: "Social",
  1: "Solitary"
}

const codes_agres = 
{
  3: "Aggressive",
  2: "Mostly peaceful",
  1: "Peaceful"
}
const codes_breed = 
{
  4: "No record",
  3: "Hard",
  2: "Medium",
  1: "Easy"
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////////////////
  //Declaring variables 

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const numberinputs = document.querySelectorAll('input[type="number"]');
  const radioinputs = document.querySelectorAll('input[type = "radio"]');
  const listviewstring = "Results in list view";
  const tileviewstring = "Results in tiles view"

  let console_capacity = liter;
  let console_temperature = celsius; 
  let console_fishsize = cm; 
  let fishsize_option = show_inch;
  let options_option = fewer; 
  let whichcard = fishshown; 
  let feedbackstatus = feedbacknotshown;
  let aboutstatus = aboutoff; 
  let viewoption = listviewstring;
  let listview = false; 

  let cap_modifier = 1; 
  let temp_modifier1 = 1;
  let temp_modifier2 = 0;
  let size_modifier = 1; 

  let minimum_liter = 20;
  let minimum_gallon = 5.3; 
  let exactCel = null;
  let exactFar = null;

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
  // let more_options = document.getElementById("more_options");
  let view_options = document.getElementById("view_options"); 
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

  // let all_1 = document.getElementById("all_1");
  // let all_2 = document.getElementById("all_2");
  // let all_3 = document.getElementById("all_3");
  // let all_4 = document.getElementById("all_4");
  // let all_5 = document.getElementById("all_5");


  let div_hardiness_x = document.getElementById("div_hardiness_x");
  let div_avail_x = document.getElementById("div_avail_x");
  let div_behavior_x = document.getElementById("div_behavior_x");
  let div_agression_x = document.getElementById("div_agression_x");
  let div_breeding_x = document.getElementById('div_breeding_x');

  let sort_select = document.getElementById("sort");
  let sum = document.getElementById("sum");

  let hardi_chbx = document.querySelectorAll('input[name = "hardi"]');
  let avail_chbx = document.querySelectorAll('input[name = "avail"]');
  let social_chbx = document.querySelectorAll('input[name = "social"]');
  let agress_chbx = document.querySelectorAll('input[name = "agress"]');
  let breed_chbx = document.querySelectorAll('input[name = "breed"]');

  let result_div = document.getElementById("result");
  let fishcount = document.getElementById("fishcount");
  let previousFishcouont = 42; 
  let noresults =  document.getElementById("noresults");
  let invalid_search_cap = false;
  let invalid_search_temp = false;
  let invalid_search_checks = false;
  let emptiness_checker; 

  let srch_arr = []; 

  // let settings$ = document.getElementById("settings");
  let cmtoinch = document.getElementById("cmtoinch");
  let cardswticher = document.getElementById("cardswticher"); 
  let flipped = false; // this will be deprecated - I remove all flip function plus info cards will eb individually dynamically generated to reduce DOM size 
  let about = document.getElementById("about");
  let about_button = document.getElementById("about_button");
  let search_tiles = document.getElementById("search_tiles");
  let cpanel = document.getElementById("cpanel");
  // let imagechanger = document.getElementById("imagechanger");
  let allcount = document.getElementById("allcount");
  let currentImage; 

  let details = []; 

//  let feedback_button = document.getElementById("feedback_button"); 

var selects = [
  {checkboxArray: hardi_chbx, targetSpan: div_hardiness_x},
  {checkboxArray: avail_chbx, targetSpan: div_avail_x},
  {checkboxArray: social_chbx, targetSpan: div_behavior_x},
  {checkboxArray: agress_chbx, targetSpan: div_agression_x},
  {checkboxArray: breed_chbx, targetSpan: div_breeding_x},
];

//////////////////////////
/////% counters for each category

let beginner$$ = perCounter ("uncare", 4);
let easy$$ = perCounter ("uncare", 3);
let medium$$ = perCounter ("uncare", 2);
let difficult$$ = perCounter ("uncare", 1);

let verycommon$$ = perCounter ("availability", 4);
let common$$ = perCounter ("availability", 3);
let rare$$ = perCounter ("availability", 2);
let veryrare$$ = perCounter ("availability", 1);

let schooling$$ = perCounter ("school", 3);
let social$$ = perCounter ("school", 2);
let solitary$$ = perCounter ("school", 1);

let peaceful$$ = perCounter ("agression", 1);
let mpeaceful$$ = perCounter ("agression", 2);
let agressive$$ = perCounter ("agression", 3);

let beasy$$ = perCounter ("breeding_difficulty", 1);
let bmedium$$ = perCounter ("breeding_difficulty", 2);
let bhard$$ = perCounter ("breeding_difficulty", 3);
let norecord$$ = perCounter ("breeding_difficulty", 4);


  /////////////////////////////////////
  ////// Adding initial event listeners   
  document.addEventListener("DOMContentLoaded", function() {


    allcount.textContent = fish_master.length;
   
    tank_size.addEventListener("blur", preCheckTank);
    tank_size.addEventListener("keyup", preCheckTank);
    tank_size.addEventListener("click", preCheckTank);
tank_size.addEventListener("blur", updatePerCap);
tank_size.addEventListener("keyup", updatePerCap);
tank_size.addEventListener("click", updatePerCap);
tempmin.addEventListener("blur", updatePerTemp);
tempmin.addEventListener("keyup", updatePerTemp);
tempmin.addEventListener("click", updatePerTemp);

  document.getElementById("perliter").textContent = perCapCount ();

  document.getElementById("pertemp").textContent = perTempCount ();
    

      liter_radio.checked = true;
      convert_fc.checked = true; 
      
      liter_radio.addEventListener("change", gallonliter);
      gallon_radio.addEventListener("change", litergallon);
      convert_fc.addEventListener("change", ftoc);
      convert_cf.addEventListener("change", ctof);
  
      // all_1.addEventListener("change",function () {selectall(hardi_chbx, all_1);});
      // all_2.addEventListener("change",function () {selectall(avail_chbx, all_2);});
      // all_3.addEventListener("change",function () {selectall(social_chbx, all_3);});
      // all_4.addEventListener("change",function () {selectall(agress_chbx, all_4);});
      // all_5.addEventListener("change",function () {selectall(breed_chbx, all_5);});
  
      // listenAdder(hardi_chbx, uncheckBox.bind(null, hardi_chbx, all_1));
      // listenAdder(avail_chbx, uncheckBox.bind(null, avail_chbx, all_2));
      // listenAdder(social_chbx, uncheckBox.bind(null, social_chbx, all_3));
      // listenAdder(agress_chbx, uncheckBox.bind(null, agress_chbx, all_4));
      // listenAdder(breed_chbx, uncheckBox.bind(null, breed_chbx, all_5));
  
      // settings.addEventListener("click", settingsShow);   // Settings button 
      
      // verycommon.checked = true; 
      // common.checked = true; 
      // beginner.checked = true
      // easy.checked = true;
  
      // all_3.checked = true; 
      // selectall(social_chbx, all_3);
      // all_4.checked = true; 
      // selectall(agress_chbx, all_4);
      // all_5.checked = true; 
      // selectall(breed_chbx, all_5);

      ///All checkboxes checked as default: 
      checkboxes.forEach (checkbox => {
        checkbox.checked = true; 
      })
  
      checkboxes.forEach (checkbox => {
        checkbox.addEventListener("change", search_button);
      });
  
      numberinputs.forEach (input => {
        input.addEventListener("change", search_button);
      });
  
      radioinputs.forEach (radio => {
        radio.addEventListener("change", search_button);
      })
  
      sort_select.addEventListener("change", search_button);
  
      search_button()
  
      tempalert.style.display = "none";
      capalert.style.display = "none";
      checkalert.style.display = "none";
  
  
      ///Event listeners for SETTINGS dropdown --> removed this button because of responsiveness 
    //   document.getElementById("info").addEventListener("click", function () {
    //     var dropdown = document.getElementById("info_dropdown");
    //     dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
    // });
  
    // window.addEventListener("click", function (event) {
    //   var dropdown = document.getElementById("info_dropdown");
    //   if (event.target !== document.getElementById("info")) {
    //       dropdown.style.display = "none";
    //   }
    // });
  
    ///Event listeners for INFORMATION dropdown 
  
    document.getElementById("settings").addEventListener("click", function () {
      var dropdown = document.getElementById("settings_dropdown");
      dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
  });

  document.getElementById("more").addEventListener("click", function () {
    var dropdown = document.getElementById("more_dropdown");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
});
  
  window.addEventListener("click", function (event) {
    var dropdown = document.getElementById("settings_dropdown");
    if (event.target !== document.getElementById("settings")) {
        dropdown.style.display = "none";
    }
  });

  window.addEventListener("click", function (event) {
    var dropdown = document.getElementById("more_dropdown");
    if (event.target !== document.getElementById("more")) {
        dropdown.style.display = "none";
    }
  });


  
    cmtoinch.addEventListener("click", fishsizemetric);
    view_options.addEventListener("click", viewToggle);
  
  
  
let keylist = ["beginner","easy","medium","difficult","verycommon","common","rare","veryrare",
"schooling","social","solitary","peaceful","mpeaceful","agressive","beasy","bmedium","bhard","norecord"];
    for (let fish of keylist) {
      document.getElementById(fish + "$$$").textContent = eval(fish + "$$");  
    }

// Stopping dropdown menu of search parameters from closing when user clicks on drop down content elements 
document.querySelectorAll('.dropdown-content').forEach(function(element) {
  element.addEventListener('click', function(event) {
    event.stopPropagation();
  });
});

/// Select dorpdown value event listener
selects.forEach(function(group) {
  group.checkboxArray.forEach(function(chbx) {
    chbx.addEventListener('change', function() {
      selectValueDisplay(group.checkboxArray, group.targetSpan);
    });
  });
});

    });  /// Eventlisteners end here   
    ///////////////////////////////////////////////

    //////Functions supporting event listeners:
    //////Event listener adder for checkbox select/unselect logic 

    function listenAdder (arr, funk) {
      for (box of arr) {
        box.addEventListener("change", funk);
      }

  }



///Calculates the precentage value of each category compared to total

function perCounter (property, code) {
  let list = []; 
  for (let fish of fish_master) {
    if (fish[property] == parseInt(code)) {
      list.push(fish);
    }
  }
  return `(${Math.round((list.length/maincount)*100)}%)`; 
}


function perCapCount () {
  let tank_size = document.getElementById('tank_size').value;  
  if (console_capacity === gallon) {
    cap_modifier = 3.78541253426;
  }
  let bigger = [];
  for (let fish of fish_master) {
    if ((parseInt(fish.tank_size_liter)) / cap_modifier <= tank_size) {
      bigger.push(fish.fish_id);
    }
  }
  return `(${Math.round((bigger.length/maincount)*100)}%)`; 
}


function updatePerCap () { 
  document.getElementById("perliter").textContent = perCapCount ();
}



function perTempCount () {
  let temp = document.getElementById('tempmin').value; 
  let included = [];
  for (let fish of fish_master) {
    let fish_temp_min = parseFloat(fish.temperature_min);
    let fish_temp_max = parseFloat(fish.temperature_max);  
    if (console_temperature === farenheit) {
      fish_temp_min =  (fish_temp_min * 9/5)+32
      fish_temp_max = (fish_temp_max * 9/5)+32
    }

    
    if ((fish_temp_min <= temp) && (temp <= fish_temp_max)) {
      included.push(fish.fish_id);
    }
  }
  return `(${Math.round((included.length/maincount)*100)}%)`; 
}

function updatePerTemp () { 
  document.getElementById("pertemp").textContent = perTempCount ();
}

// ///// Metric change function (used in initial event listener)
// function fishsizemetric () {
//   console_fishsize = (console_fishsize === cm) ? inch : cm; 
//   fishsize_option = (fishsize_option === show_inch) ? show_cm : show_inch; 
//   console.log(fishsize_option);
//   size_modifier = (size_modifier === 1 ) ? 0.393 : 1;
//   cmtoinch.innerText = fishsize_option; 
//   search_button()
//  }


function selectValueDisplay (checkboxArr, targetSpan) {
 var len = checkboxArr.length;
 var checkedArr = [];
 for (let box of checkboxArr) {
  if (box.checked) {
    checkedArr.push(box);
  }
 }
//  console.log(len); 
//  console.log(checkedArr.length);
if (checkedArr.length === len) {
  targetSpan.textContent = "All";
}
else if (checkedArr.length < len && checkedArr.length > 0) {
  targetSpan.textContent = checkedArr.length;
}

else if (checkedArr.length === 0) {
  targetSpan.textContent = "None";
}

}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///general functions///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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
let cal_cap = parseFloat(tank_size.value);
document.getElementById("size").innerHTML = gallon;
cap_modifier = 3.78541253426; 
console_capacity = gallon;
tank_size.value = Math.round((cal_cap * 0.264172)*10)/10;
inputAnimation(tank_size);
}
}


// Conversion from gallon to liter [radio buttons]        
function gallonliter() {
  if (liter_radio.checked == true) {
let cal_cap = parseFloat(tank_size.value);
document.getElementById("size").innerHTML = liter;
cap_modifier = 1; 
console_capacity = liter;
tank_size.value = Math.round((cal_cap * 3.785)*10)/10; 
inputAnimation(tank_size);
}
}



// Conversion from celsius to farenheit [button]      
function ctof() {
let cal_tempmin = parseFloat(tempmin.value);

if (!exactCel || cal_tempmin !== Math.round(exactCel*10)/10) {
  exactCel = cal_tempmin;
  exactFar = (exactCel * 9/5) + 32;
}
 

console_temperature =  farenheit;
let rouondedFar = Math.round(exactFar*10)/10;
tempmin.value = rouondedFar;
temp_modifier1 = 1.8; 
temp_modifier2 = 32; 
tempmin.min = 39;
tempmin.max = 95;
document.getElementById("min_t").innerHTML = farenheit;
inputAnimation(tempmin);

  }
        
// Conversion from farenheit to celsius [button] 
function ftoc() {
let cal_tempmin = parseFloat(tempmin.value);

if (!exactFar ||cal_tempmin !==  Math.round(exactFar*10)/10) {
  exactFar = cal_tempmin;
  exactCel = (exactFar - 32) * 5/9;
}


console_temperature = celsius;
let rouondedCel = Math.round(exactCel*10)/10; 
tempmin.value = rouondedCel;
temp_modifier1 = 1; 
temp_modifier2 = 0; 
tempmin.min = 4;
tempmin.max = 35;
document.getElementById("min_t").innerHTML = celsius;
inputAnimation(tempmin);
  }

/////Slicing comma off from the end for origin string 
function commaRemover (x) {
if (x.endsWith(",")) {
  return x.slice(0, -1);
}
else {
  return x;
}
}

//// Upper case first letter:
function uppercaser(str) {
const words = str.split(' ');
const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
return capitalizedWords.join(' ');
}

////removing ".0" from round numbers 
function sizeFormatter (num) {
if (num % 1 !== 0) {
  return num.toFixed(1);
} else {
  return num.toFixed(0); 
}
}


/////////////////////////////////
/////Adnimation functions

function inputAnimation (x) {
x.classList.add('number-updated');
setTimeout(() => {
  x.classList.remove('number-updated');
}, 1000);
}

/////Need to edit this to make it apply to image only. 
function refreshAnimation (x) {
var y = document.getElementById(x);
y.classList.add('tiles-refresh');
setTimeout(() => {
  y.classList.remove('tiles-refresh');
}, 1000);
}





///Calculates the precentage value of each category compared to total

function perCounter (property, code) {
let list = []; 
for (let fish of fish_master) {
  if (fish[property] == parseInt(code)) {
    list.push(fish);
  }
}
return `(${Math.round((list.length/maincount)*100)}%)`; 
}



// /////Change background 
// function imageChange() {
//   if (currentImage === bcimages) {
//     currentImage = 1; 
//   }
//   else {
//     currentImage = currentImage+1; 
//   }

//   document.body.style.backgroundImage = `url('backgrounds/${currentImage}.jpg')`; 
// }


/////Background image as initial
// function updateBackground() {
//   if (window.innerWidth > 767) {
//     if (!document.body.style.backgroundImage) {
//       let initial = Math.floor(Math.random() * bcimages) + 1;
//       currentImage = initial;
//       document.body.style.backgroundImage = `url('backgrounds/${initial}.jpg')`; 
//     }
//   } else {
//     document.body.style.backgroundImage = '';
//   }
// }

// function initialImage () {
//   if (window.innerWidth > 767) {
//   let initial = Math.floor(Math.random() * bcimages) + 1;
//   currentImage = initial;
//   document.body.style.backgroundImage = `url('backgrounds/${initial}.jpg')`; 
// }
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///// Search button function //////////////////////////////////////////////////////////////////////////////////////////
    function search_button() {
        result_div.innerHTML = "";
        event.preventDefault();
        //// Declaring variables used in the function. 
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
        let srch_hardi = []; 
        let srch_avail = []; 
        let srch_soci = []; 
        let srch_agress = []; 
        let srch_breed = []; 
        let fish_list = []; 
///// Checking if temperature and tank size are ok; + checking if checkboxes were selected     
      preCheckTemperature(v_tempmin);
      preCheckCheckboxes (v_verycommon,v_common,v_rare, v_veryrare,v_beginner,v_easy,v_medium,v_difficult, v_schooling1,v_schooling2,v_solitary,v_peaceful1, v_peaceful2,v_aggressive,v_b_easy,v_b_medium,v_b_hard,v_impossible);
      preCheckTank(); 
///// Adding search conditions to their respective arrays
        avail_list();
        hardiness_list();
        behavior_list();
        agres_list();
        breed_list();
/////Finding fish that meet selected criteria and pushing them to fish_list
  fishFinder(fish_list, fish_master, srch_hardi, srch_avail, srch_soci, srch_agress, srch_breed, v_tank_size, v_tempmin); 
/////Outputting serach results to UI
  fishSelect ();
/////search_button CORE -->|||||
///////////////////Outputting serach results to UI
function fishSelect () {
  if (listview) {
    listFiller (fish_list)
  }
  else {
  fishFiller(fish_list); //fills all the fish info card divs displayed on page 
} 
  flipListener() // adds event listeners to newly created divs responsibe for toggling the two sides of the displayed cards 
// remember (details); //checks array to see which should remain flipped and which shouldn't
noResultAlert (); // alert if no results were found 
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////Functions defined within search_button function 
////building the array that I use to iterate over fish_master and find results 
    function hardiness_list() {
    if (v_beginner) {srch_hardi.push(4);}
    if (v_easy) {srch_hardi.push(3);}
    if(v_medium) {srch_hardi.push(2);}
    if(v_difficult) { srch_hardi.push(1);}
}    
  function avail_list() {
    if (v_verycommon) {srch_avail.push(4);}
    if (v_common) {srch_avail.push(3);}
    if (v_rare) {srch_avail.push(2); }
    if (v_veryrare) {srch_avail.push(1);}
  }
  function behavior_list () {
    if (v_schooling1) {srch_soci.push(3);}
    if (v_schooling2) {srch_soci.push(2);}
    if (v_solitary) {srch_soci.push(1);}
  }
  function agres_list() {
    if (v_peaceful1) {srch_agress.push(1);}
    if (v_peaceful2) {srch_agress.push(2);}
    if (v_aggressive) {srch_agress.push(3);}
}
  function breed_list() {
    if (v_b_easy) {srch_breed.push(1);}
    if (v_b_medium) {srch_breed.push(2);}
    if (v_b_hard) {srch_breed.push(3);}
    if (v_impossible) {srch_breed.push(4);}
  }      
  }
////////////////// sort function
function sort (fish_list) {
  if (sort_select.value == "size_min") {
    fish_list.sort(compare_size);
  }

  if (sort_select.value == "size_max") {
    fish_list.sort(compare_size_descend);
  }

  if (sort_select.value == "temp_min") {
    fish_list.sort(compare_temp);
  }

}
///// search_button function ends here /////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/////Using the user input to create a search result array by iterating over the fish_master array 
function fishFinder(fish_list, fish_master, srch_hardi, srch_avail, srch_soci, srch_agress, srch_breed, v_tank_size, v_tempmin)  {   
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

    fish_list.push(fish); //pushing all that matches to fish list 
  } 
}
sort (fish_list)
console.log(fish_list)

  ///Updating number of search result value 
  fishcount.innerHTML = fish_list.length;
  emptiness_checker = fish_list.length;
  ///Displaying animation of selector result value changes
  if (previousFishcouont !== fish_list.length) {
  fishcount.classList.add('value-updated');
  setTimeout(() => {
    fishcount.classList.remove('value-updated');
  }, 1000);
}
  previousFishcouont = fish_list.length;
} 
/// fishFinder --> ||||| 
/////Checking if user missed to checkbox the minimum required checkboxes 
function preCheckCheckboxes (v_verycommon,v_common,v_rare,
  v_veryrare,v_beginner,v_easy,v_medium,v_difficult, v_schooling1,v_schooling2,v_solitary,v_peaceful1,
  v_peaceful2,v_aggressive,v_b_easy,v_b_medium,v_b_hard,v_impossible) {

  if (!v_verycommon && !v_common && !v_rare && !v_veryrare) {
  div_avail.classList.add('notselected');
  div_avail.classList.remove('tiles');
  checkalert.style.display = "inline-block";
  invalid_search_checks = true; 
}
else {
  div_avail.classList.remove('notselected');
  div_avail.classList.add('tiles');
}
if (!v_beginner && !v_easy && !v_medium && !v_difficult) {
  div_hardiness.classList.add('notselected');
  div_hardiness.classList.remove('tiles');
  checkalert.style.display = "inline-block";
  invalid_search_checks = true; 
}
else {
  div_hardiness.classList.remove('notselected');
  div_hardiness.classList.add('tiles');
}
if (!v_schooling1 && !v_schooling2 && !v_solitary) {
  div_behavior.classList.add('notselected');
  div_behavior.classList.remove('tiles');
  checkalert.style.display = "inline-block";
  invalid_search_checks = true; 
}
else {
  div_behavior.classList.remove('notselected');
  div_behavior.classList.add('tiles');
}
if (!v_peaceful1 && !v_peaceful2 && !v_aggressive) {
  div_agression.classList.add('notselected');
  div_agression.classList.remove('tiles');
  checkalert.style.display = "inline-block";
  invalid_search_checks = true; 
}
else {
  div_agression.classList.remove('notselected');
  div_agression.classList.add('tiles');
}
if (!v_b_easy && !v_b_medium && !v_b_hard && !v_impossible) {
  div_breeding.classList.add('notselected');
  div_breeding.classList.remove('tiles');
  checkalert.style.display = "inline-block";
  invalid_search_checks = true; 
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
  checkalert.style.display = "none";
  invalid_search_checks = false; 
}
}  
/////Component functions below////////////// - there are some general UI functions I will keep them here for now 

    // Check data before search and display alert if needed 
  function preCheckTemperature(temp) {
    var temp = parseFloat(document.getElementById('tempmin').value); 
    if ((temp < 4 || temp > 35) && console_temperature === celsius) {
      tempalert.innerHTML = "Temperature should not be lower than 4℃ or higher than 35℃";
            div_temp.classList.remove('tiles');
        div_temp.classList.add('notselected');
        tempmin.classList.remove('numberbox');
        tempmin.classList.add('inputalert');
        tempalert.style.display = "inline-block";
        invalid_search_temp = true; 
      }
      else if ((temp <  39 || temp >  95) && console_temperature === farenheit) {
        tempalert.innerHTML = "Temperature should not be lower than 39℉ or higher than 95℉";
              div_temp.classList.remove('tiles');
              div_temp.classList.add('notselected');
              tempmin.classList.remove('numberbox');
              tempmin.classList.add('inputalert');
              tempalert.style.display = "inline-block";
              invalid_search_temp = true; 
      }
    else {
            div_temp.classList.add('tiles');
              div_temp.classList.remove('notselected');
              tempmin.classList.add('numberbox');
              tempmin.classList.remove('inputalert');
              tempalert.style.display = "none";
              invalid_search_temp = false;
    }
  }
  //Checking tank size before submission (shouldn't be too small)
  function preCheckTank() {
    var tank = parseFloat(document.getElementById('tank_size').value);  
      if ((tank < 20) && (console_capacity === liter)) {
        div_tank_size.classList.remove('tiles');
        div_tank_size.classList.add('notselected')
        tank_size.classList.remove('numberbox');
        tank_size.classList.add('inputalert');
        capalert.style.display = 'inline-block'; 
        invalid_search_cap = true; 
      } 
      if ((tank < 5.3) && (console_capacity === gallon)) {
        div_tank_size.classList.remove('tiles');
        div_tank_size.classList.add('notselected')
        tank_size.classList.remove('numberbox');
        tank_size.classList.add('inputalert');
        capalert.style.display = 'inline-block'; 
        invalid_search_cap = true; 
      }
      if (((tank >= 20) && (console_capacity === liter)) || ((tank >= 5.3) && (console_capacity === gallon))) {
        div_tank_size.classList.add('tiles');
        div_tank_size.classList.remove('notselected')
        tank_size.classList.add('numberbox');
        tank_size.classList.remove('inputalert');
        capalert.style.display = 'none';
        invalid_search_cap = false; 
      }
    }
//Checking if output list lenght is zero 
function noResultAlert () {
  if ((emptiness_checker < 1) && (!invalid_search_temp) && (!invalid_search_cap) && (!invalid_search_checks)) {
    noresults.style.display = "inline-block"; 
  }
  else {
    noresults.style.display = "none"; 
  }
}


///////no more flip for all!!
// function flipCards() {
//   flipped = (flipped === false) ? true : false; 
//   console.log(flipped);
//   whichcard = (flipped === true) ? infoshown: fishshown; 
//   cardswticher.innerHTML = whichcard;
//   if (flipped) {
//     for (let fish of fish_master) {
//       details.push(fish.fish_id);
//     }} else {
//       details = []; 
//     }
// //     search_button()
//   } 
  ////Remembering info card display based on iterating the 'details' array that serves as 'cache' 
// function remember (details) {
// for (let id of details) {
//  var fishcard = document.getElementById(id);
//  var infocard = document.getElementById("d" + id);
//  if (fishcard && infocard) {
//   fishcard.style.display = "none";
//   infocard.style.display = "block";
// }
// }
// }
///// Metric change function (used in initial event listener)
  function fishsizemetric () {
  console_fishsize = (console_fishsize === cm) ? inch : cm; 
  fishsize_option = (fishsize_option === show_inch) ? show_cm : show_inch; 
  size_modifier = (size_modifier === 1 ) ? 0.393 : 1;
  cmtoinch.innerText = fishsize_option; 
  search_button()
 }
///// Showing feedback page 
function gotofeedback () {
  feedback.style.display = (feedback.style.display === "block") ? "none" : "block"; 
  feedbackstatus = (feedbackstatus === feedbacknotshown) ? feedbackshown: feedbacknotshown; 
  feedback_button.innerText = feedbackstatus;
  createAndAppendIframe(); 
}
///// List/tiles view of results toggle 
function viewToggle () {
  console.log("test");
//   more_options.style.display = (more_options.style.display === "grid") ? "none" : "grid";
listview = (listview === false) ? true : false; 
viewoption = (viewoption === listviewstring) ? tileviewstring : listviewstring; 
view_options.textContent = viewoption;
search_button()
//   toggle_options.innerText = options_option; 
}
//////Showing info page 
// function explain () {
//   about.style.display = (about.style.display  === "flex") ? "none" : "flex"; 
//   about_button.innerHTML = (about.style.display  === "flex") ? abouton: aboutoff;
// }
///// Sorting functions 
function compare_size(a, b) {
  return a.cm_max - b.cm_max;
}
function compare_size_descend(a, b) {
  return b.cm_max - a.cm_max;
}
function compare_temp(a, b) {
  return (a.temperature_min + a.temperature_max) - (b.temperature_min + b.temperature_max);
}
/////Filling up the fish cards - main_card and reveal_card
function fishFiller(fish_list) {
  let result_lists = document.createElement("div");
  result_lists.className = "column_result"; 
  for (let i = 0; i <fish_list.length; i++) {
 //Generating fish card (fish cards are displayed by default)
 let fishid = fish_list[i].fish_id; 
 let main_card = document.createElement('div'); //container card to hide/show info 
 let fishcard = document.createElement('div'); // fish card for each fish; all the other elements generated will be appended to this 
 let fishname = document.createElement("p"); // <p> holding the fish name 
 let image_element = document.createElement('img'); // <img> holding the fish image 
 let size = document.createElement("span"); // fish size in fish card 
 let temp = document.createElement("span"); // temperature in fish card 
 let tanksize = document.createElement("span"); // tank size in fish card 
 let name = uppercaser(fish_list[i].name_english);

 let temp_min = Math.round((fish_list[i].temperature_min * temp_modifier1) + temp_modifier2); // checking if ℃ or ℉ is used 
 let temp_max = Math.round((fish_list[i].temperature_max * temp_modifier1) + temp_modifier2); // checking if ℃ or ℉ is used
 let cap = Math.round(((fish_list[i].tank_size_liter / cap_modifier) * 10)/10); //converting to gallon if necessary with "cap_modifier" and also rounding the number 
 let card_size_cal = Math.round(fish_list[i].cm_max * size_modifier*10)/10; //rounding up potentially converted fish size to 1 decimal place
 let card_size =  sizeFormatter(card_size_cal); //removing ".0" from round numbers 

 image_element.src = `webps1/${fish_list[i].fish_id}.webp`; //finding webp file for each fish based on fish ID 
 image_element.alt = `"image of ${name}`;
 fishname.textContent = name; // adding name to <p> result_lists_element
 size.textContent = `${card_size} ${console_fishsize}`; // getting fish size from fish_master 
 temp.textContent = `${temp_min} - ${temp_max} ${console_temperature}`; 
 tanksize.textContent = `${cap} ${console_capacity}`;
 
 fishcard.id = fishid;  // changed from main card!! 
 fishcard.className = "fish_card";
 image_element.className = "fishcardimage"; 
 fishname.className = "fishname";
 size.className = "fishsize";
 temp.className = "fishtemp";
 tanksize.className = "tanksize"; 
 main_card.className = "maincard"; //container card to hide/show info 

 fishcard.appendChild(image_element);
 fishcard.appendChild(fishname);
 fishcard.appendChild(size);
 fishcard.appendChild(temp);
 fishcard.appendChild(tanksize);

 main_card.appendChild(fishcard);
 result_lists.appendChild(main_card);


}


result_div.appendChild(result_lists); 
}/// fishFiller ends here 



function createAndAppendIframe() {
  // Check if the iframe already exists to avoid duplicates
  const existingIframe = document.querySelector('#feedbackchecker');
  if (!existingIframe) {
      // Create the iframe element
      const iframe = document.createElement('iframe');

      // Set the iframe's attributes
      iframe.setAttribute('src', 'https://docs.google.com/forms/d/e/1FAIpQLSdBJ_Cyacxbd-gubUAe9pKqTPwM-VMAKKRzTSkJ7eUVU2Iszg/viewform?embedded=true');
      iframe.setAttribute('width', '640');
      iframe.setAttribute('height', '371');
      iframe.setAttribute('frameborder', '0');
      iframe.setAttribute('marginheight', '0');
      iframe.setAttribute('marginwidth', '0');
      iframe.innerHTML = 'Loading…';
      iframe.id = "feedbackchecker";

      // Find the feedback div and append the iframe to it
      const iframed_div = document.getElementById('iframed');
      if (iframed_div) {
        iframed_div.appendChild(iframe);
      } else {
          console.error('No element with id "inframed" found to append the iframe.');
      }
  }
  else {
    document.getElementById("iframed").innerHTML = ""; 
  }
}

function toggleDropdown(event) {
  // event.preventDefault();//it's a button right now but it won't be a button in the future and I will remove this comment 
  event.stopPropagation();
  // Find the closest parent element with the class 'dropdown' from the clicked button
  let dropdown = event.target.closest('.dropdown');

   // Close all other dropdowns before toggling the current one
  var allDropdowns = document.querySelectorAll('.dropdown-content');
  allDropdowns.forEach(function(dropdownContent) {
    if (dropdown && !dropdown.contains(dropdownContent)) {
      dropdownContent.classList.remove('show');
    }
  });

  // Toggle the 'show' class on the dropdown-content within this specific dropdown
  if (dropdown) {
    let content = dropdown.querySelector('.dropdown-content');
    if (content) {
      content.classList.toggle('show');
    }
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn') && !event.target.matches('.dropdown-content') && !event.target.closest('.dropdown-content')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    for (var i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

function flipListener() {
  //Event listener for flipcard to each main card//
let fishcard_divs = document.querySelectorAll(".fish_card");
fishcard_divs.forEach(div => {
  let divId = div.id; 
  div.addEventListener("click", function () {
    // var clickedDivID = event.target.id;
    let fishcard = document.getElementById(divId);
    let fish;  
    for (let x of fish_master) {
        if (x.fish_id === divId) {   
           fish = x; 
        }
    }
    
    let info_id = `d${fish.fish_id}`; 
    let name = uppercaser(fish.name_english);
    let hardi = fish.uncare; 
    let avail = fish.availability; 
    let behave = fish.school; 
    let agres = fish.agression; 
    let breed = fish.breeding_difficulty; 
    let latin_len = (`${fish.name_latin}`).length
    
    let temp_min = Math.round((fish.temperature_min * temp_modifier1) + temp_modifier2); // checking if ℃ or ℉ is used 
    let temp_max = Math.round((fish.temperature_max * temp_modifier1) + temp_modifier2); // checking if ℃ or ℉ is used
    let cap = Math.round(((fish.tank_size_liter / cap_modifier) * 10)/10); //converting to gallon if necessary with "cap_modifier" and also rounding the number 
    let card_size_cal = Math.round(fish.cm_max * size_modifier*10)/10; //rounding up potentially converted fish size to 1 decimal place
    let card_size =  sizeFormatter(card_size_cal); //removing ".0" from round numbers 
    
    // let reveal_card = document.createElement('div'); //container card to hide/show info 
    let infocard = document.createElement('div'); 
    
    let iconimage = document.createElement("img");
    let fishname2 = document.createElement("p");
    let latin = document.createElement("p");
    let mintanksize = document.createElement("p");
    let tempinfo = document.createElement("p");
    let sizeinfo = document.createElement("p");
    let hardiness = document.createElement("p");
    let availability = document.createElement("p");
    let social = document.createElement("p");
    let agression = document.createElement("p");
    let breeding = document.createElement("p");
    let origin = document.createElement("p");
    
    // reveal_card.className = "reveal_card";
    infocard.className = "infocard";
    
    iconimage.src = `webps1/${fish.fish_id}.webp`; //finding webp file for each fish based on fish ID 
    iconimage.alt = `"small image of ${name}`;
    iconimage.id = info_id; //might be completely unnecessary 
    fishname2.innerHTML = name;
    latin.innerHTML = `${fish.name_latin}`;
    mintanksize.innerHTML = `Minimum tank size: ${cap} ${console_capacity}`;
    tempinfo.innerHTML = `Temperature: ${temp_min} - ${temp_max} ${console_temperature}`; 
    sizeinfo.innerHTML = `Fish size: ${card_size} ${console_fishsize}`;
    
    hardiness.innerHTML = `Difficulty: ${codes_hardi[hardi]}`;
    availability.innerHTML = `Availability: ${codes_avail[avail]}`;
    social.innerHTML = `Behavior: ${codes_behave[behave]}`;
    agression.innerHTML = `Agression: ${codes_agres[agres]}`;
    breeding.innerHTML =  `Breeding: ${codes_breed[breed]}`;
    origin.innerHTML = `Origin: ${commaRemover(fish.origin)}`; 
    
    iconimage.className = "iconimage";
    fishname2.className = "title";
    
    
    //Fitting latin names to info card UI 
    if (latin_len > 21) {
      latin.className = "bigsubtitle";
    }
     if (latin_len > 25)  {
      latin.className = "verybigsubtitle";
     }
    if (latin_len <= 21) {
      latin.className = "subtitle";
    }
    
    mintanksize.className = "infocardtext";
    tempinfo.className = "infocardtext";
    sizeinfo.className = "infocardtext";
    
    hardiness.className = "infocardtext";
    availability.className = "infocardtext";
    social.className = "infocardtext";
    agression.className = "infocardtext";
    breeding.className = "infocardtext";
    origin.className = "infocardtext";
    
    infocard.id = info_id; 
    infocard.appendChild(iconimage);
    infocard.appendChild(fishname2);
    infocard.appendChild(latin);
    infocard.appendChild(mintanksize);
    infocard.appendChild(tempinfo);
    infocard.appendChild(sizeinfo);
    
    infocard.appendChild(hardiness);
    infocard.appendChild(availability);
    infocard.appendChild(social);
    infocard.appendChild(agression);
    infocard.appendChild(breeding);
    infocard.appendChild(origin);
    
    // reveal_card.appendChild(infocard); //container card to hide/show info 
    let father = fishcard.parentNode;
    fishcard.style.display = "none";
    father.appendChild(infocard);
    

    iconimage.addEventListener("click", infocardKill);
    function infocardKill() {
      infocard.remove();
      fishcard.style.display = "block";
    }

    });
});
}


function listFiller (fish_list) {
  let list_view_divs = document.createElement("div");
  list_view_divs.classList.add("list-view");
  for (let i = 0; i <fish_list.length; i++) {
      let listnumber = document.createElement("span");
      let fishname = document.createElement("span");
      let latinname = document.createElement("span");
      let brr = document.createElement("br");
      let name = uppercaser(fish_list[i].name_english);
      let latin = uppercaser(fish_list[i].name_latin);

      listnumber.className ="listnum";
      fishname.className = "listname";
      latinname.className = "listlatin";
      
      
      listnumber.textContent = `${i+1}. `
      fishname.textContent = `${name} `;
      latinname.textContent =  `(${latin})`;
      list_view_divs.appendChild(listnumber);
      list_view_divs.appendChild(fishname);
      list_view_divs.appendChild(latinname);
      list_view_divs.appendChild(brr);
  }
      result_div.appendChild(list_view_divs); 
}