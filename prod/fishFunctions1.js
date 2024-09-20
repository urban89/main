
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
const show_farenheit = "Temperature in Farenheit";
const show_celsius = "Temperature in Celsius";
const show_liter =  "Tank size in Liter";
const show_gallon = "Tank size in Gallon"; 
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
const logupdate = "fish list has been updated"; 

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

const codes_swim = 
{
  3: "Top",
  2: "Middle",
  1: "Bottom"
}


///this is not used in code but need it here for reference: 
const regionsOb = 
{
  "1": "South America",
  "2": "Africa",
  "3": "Southeast Asia",
  "4": "South Asia",
  "5": "Central America",
  "6": "East Asia",
  "7": "Europe",
  "8": "North America",
  "9": "Australia",
  "A": "Artificial Origin",
  "W": "West Asia"
};
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
  let settings_tankcapacity = show_gallon; 
  let settings_temp = show_farenheit; 
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

  let check_fish = document.getElementById("check_fish");
  let check_notfish = document.getElementById("check_notfish");

  let ph = document.getElementById("ph");

let dropdownButtonHardi = document.getElementById("dropdownButtonHardi");
let dropdownButtonAvail = document.getElementById("dropdownButtonAvail");
let dropdownButtonBehavior = document.getElementById("dropdownButtonBehavior");
let dropdownButtonAgression = document.getElementById("dropdownButtonAgression");
let dropdownButtonBreeding = document.getElementById("dropdownButtonBreeding");
let dropdownButtonSwim = document.getElementById("dropdownButtonSwim");
let dropdownButtonOrigin = document.getElementById("dropdownButtonOrigin");


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
  let orig_chbx = document.querySelectorAll('input[name = "origin"]');
  let swim_chbx = document.querySelectorAll('input[name = "swim"]');

  let result_div = document.getElementById("result");
  let fishcount = document.getElementById("fishcount");
  let previousFishcouont = 42; 
  let noresults =  document.getElementById("noresults");
  let invalid_search_cap = false;
  let invalid_search_temp = false;
  let invalid_search_checks = false;
  let invalid_search_ph = false; 
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
  let allcount = document.getElementById("allcount");
  let currentImage; 

  let f_cmtoinch = document.getElementById("f_cmtoinch");
  let f_view_options = document.getElementById("f_view_options");
  let f_tempconversion = document.getElementById("f_tempconversion");
  let f_tankconversion = document.getElementById("f_tankconversion");
  let f_about = document.getElementById("f_about");


  let incrementtank = document.getElementById('increment-button-tank');
  let decrementtank = document.getElementById('decrement-button-tank');

  let incrementtemp = document.getElementById('increment-button-temp');
  let decrementtemp = document.getElementById('decrement-button-temp');

  let incrementph = document.getElementById('increment-button-ph');
  let decrementph = document.getElementById('decrement-button-ph');

  let details = []; 
  let grid_icon_id = document.getElementById('grid_icon_id');
  let grid_toggle = "small";

var selects = [
  {checkboxArray: hardi_chbx, targetSpan: div_hardiness_x},
  {checkboxArray: avail_chbx, targetSpan: div_avail_x},
  {checkboxArray: social_chbx, targetSpan: div_behavior_x},
  {checkboxArray: agress_chbx, targetSpan: div_agression_x},
  {checkboxArray: breed_chbx, targetSpan: div_breeding_x},
  {checkboxArray: orig_chbx, targetSpan: div_origin_x},
  {checkboxArray: swim_chbx, targetSpan: div_swim_x},
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

let bottom$$ = perCounter ("swim", 1);
let middle$$ = perCounter ("swim", 2);
let top$$ = perCounter ("swim", 3);

let samerica$$  = perCounter ("region", 1);
let camerica$$  = perCounter ("region", 5);
let namerica$$  = perCounter ("region", 8);
let africa$$  = perCounter ("region", 2);
let australia$$  = perCounter ("region", 9);
let seasia$$  = perCounter ("region",3);
let sasia$$  = perCounter ("region", 4);
let easia$$  = perCounter ("region", 6);
//let europe$$  = perCounter ("region", 7);
//let arti$$  = perCounter ("region", "A");
//let wasia$$  = perCounter ("region", "W");


let first_run = true; 
let updateCount = 0;
let isVisible = false; 

function updatePool() { 
let poolcount = poolCounter (); 
allcount.textContent = poolcount;
}

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ////// Adding initial event listeners   
  document.addEventListener("DOMContentLoaded", function() {

    check_fish.addEventListener('change', updatePool);
    check_notfish.addEventListener('change', updatePool);
    check_fish.addEventListener('change', PoolFlash);
    check_notfish.addEventListener('change', PoolFlash);
    
   
    tank_size.addEventListener("blur", preCheckTank);
    tank_size.addEventListener("keyup", preCheckTank);
    tank_size.addEventListener("click", preCheckTank);
// tank_size.addEventListener("blur", updatePerCap);
// tank_size.addEventListener("keyup", updatePerCap);
// tank_size.addEventListener("click", updatePerCap);
// tempmin.addEventListener("blur", updatePerTemp);
// tempmin.addEventListener("keyup", updatePerTemp);
// tempmin.addEventListener("click", updatePerTemp);

  // document.getElementById("perliter").textContent = perCapCount ();

  // document.getElementById("pertemp").textContent = perTempCount ();
    

  liter_radio.checked = true;
  convert_fc.checked = true; 
      
      liter_radio.addEventListener("change", gallonliter);
      gallon_radio.addEventListener("change", litergallon);
      
      convert_fc.addEventListener("change", ftoc);
      convert_cf.addEventListener("change", ctof);
  


      ///All checkboxes checked as default: 
      checkboxes.forEach (checkbox => {
        checkbox.checked = true; 
      })

      check_notfish.checked = false; 
  
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

  
    ///Event listeners for INFORMATION dropdown 
  
    document.getElementById("settings").addEventListener("click", function () {
      var dropdown = document.getElementById("settings_dropdown");
      dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
  });

  document.getElementById("floatsettings").addEventListener("click", function () {
    var dropdown = document.getElementById("floatsettingsdrop");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
});

  
  window.addEventListener("click", function (event) {
    var dropdown = document.getElementById("settings_dropdown");
    if (event.target !== document.getElementById("settings")) {
        dropdown.style.display = "none";
    }
  });

  window.addEventListener("click", function (event) {
    var dropdown = document.getElementById("floatsettingsdrop");
    if (event.target !== document.getElementById("floatsettings")) {
        dropdown.style.display = "none";
    }
  });



  grid_icon_id.addEventListener("click", function () {
  grid_icon_id.src = (grid_toggle === "small") ? "icon/grid.png" : "icon/grid_small.png"; 
  grid_toggle = (grid_toggle === "small") ? "big" : "small"; 
    search_button()
  }); 
  
    cmtoinch.addEventListener("click", fishsizemetric);
    f_cmtoinch.addEventListener("click", fishsizemetric);
    view_options.addEventListener("click", viewToggle);
    f_view_options.addEventListener("click",viewToggle);
  
  
  
let keylist = ["beginner","easy","medium","difficult","verycommon","common","rare","veryrare",
"schooling","social","solitary","peaceful","mpeaceful","agressive","beasy","bmedium","bhard","norecord",
"bottom", "middle", "top",
"samerica","camerica","namerica", "africa","australia","seasia", "sasia","easia",
///"europe","arti","wasia" --> these are less than 1%
];
    for (let fish of keylist) {
      document.getElementById(fish + "$$$").textContent = eval(fish + "$$");  
    }
    //////////////////////////////////////////////////////////////
    //home button
    var backToTopButton = document.getElementById("backToTop");
    var floatSettingsButton = document.getElementById("floatsettings");

    // Show the button when scrolled down 20px from the top
    window.onscroll = function() {
        if ((document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) && !modal_satus) {
            backToTopButton.style.display = "block";
            floatSettingsButton.style.display = "block";
        } else {
            backToTopButton.style.display = "none";
            floatSettingsButton.style.display = "none";
        }
    };

    // Scroll to the top of the page when the button is clicked
    backToTopButton.onclick = function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    //////////////////////////////////////////////////////////////
       //float settings
      //  var floatSettingsButton = document.getElementById("floatsettings");

   
    //////////////////////////////////////////////////////////////
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
///////////// HERE1
document.getElementById('increment-button-tank').addEventListener('click', function() {
  var input = parseInt(tank_size.value);

  if (console_capacity == gallon) {tank_size.value = input + 1;}
  if (console_capacity == liter) {tank_size.value = input + 10;}
  tank_size.classList.add('inputflashup');
  setTimeout(() => {
    tank_size.classList.remove('inputflashup');
  }, 200);

  search_button()
});

document.getElementById('decrement-button-tank').addEventListener('click', function() {
  var input = parseInt(tank_size.value);
  if (input > 19 && console_capacity == liter )
{tank_size.value = input - 10;}

  if (input > 5 && console_capacity == gallon) {tank_size.value = input - 1;}

  tank_size.classList.add('inputflashdown');
  setTimeout(() => {
    tank_size.classList.remove('inputflashdown');
  }, 200);
    search_button()
});


document.getElementById('increment-button-temp').addEventListener('click', function() {
  var input = parseInt(tempmin.value);
  if (console_temperature == celsius && input < 36) {tempmin.value = input + 1;}
  
  if (console_temperature == farenheit && input < 96) {tempmin.value = input + 1;}
  
  search_button()

  tempmin.classList.add('inputflashup');
  setTimeout(() => {
    tempmin.classList.remove('inputflashup');
  }, 200);

});

document.getElementById('decrement-button-temp').addEventListener('click', function() {
  var input = parseInt(tempmin.value);

  if (console_temperature == celsius && input > 3) {tempmin.value = input - 1;}
  
  if (console_temperature == farenheit && input > 38) {tempmin.value = input - 1;}

  tempmin.classList.add('inputflashdown');
  setTimeout(() => {
    tempmin.classList.remove('inputflashdown');
  }, 200);

    search_button()

});

document.getElementById('increment-button-ph').addEventListener('click', function() {
  var input = parseFloat(ph.value);
  if (input < 9) {ph.value = input + 0.5;}


  ph.classList.add('inputflashup');
  setTimeout(() => {
    ph.classList.remove('inputflashup');
  }, 200);

    search_button()

  search_button()

});

document.getElementById('decrement-button-ph').addEventListener('click', function() {
  var input = parseFloat(ph.value);
  if (input > 5) {ph.value = input - 0.5;}

  ph.classList.add('inputflashdown');
  setTimeout(() => {
    ph.classList.remove('inputflashdown');
  }, 200);

    search_button();

});
const inputElements = document.querySelectorAll('input[type="number"]');

inputElements.forEach(function(inputElement) {
    inputElement.addEventListener('focus', function() {
        this.select();
    });

    inputElement.addEventListener('mouseup', function(event) {
        event.preventDefault(); // Prevents deselecting when the mouse is released
    });
});

f_tankconversion.addEventListener('click',function() {
  if (liter_radio.checked) {
    gallon_radio.checked = true;
    litergallon()
  } else {
    liter_radio.checked = true;
    gallonliter()
  }
  search_button(); 

// cap_switcher ();


});

f_tempconversion.addEventListener('click',function() {
  if (convert_fc.checked) {
    convert_cf.checked = true;
    ctof()
  } else {
    convert_fc.checked = true;
    ftoc()
  }
  search_button(); 
  // temp_switcher ();


});

    });  
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///event listeners end above 
/////////////////////////////////////////////////////////////////////////////
// function cap_switcher () {
//   settings_tankcapacity = (settings_tankcapacity === show_gallon) ? show_liter : show_gallon;
//   f_tankconversion.innerText = settings_tankcapacity;
//   search_button(); 
// }

// function temp_switcher () {
//   settings_temp = (settings_temp === show_farenheit) ? show_celsius : show_farenheit;
//   f_tempconversion.innerText = settings_temp;
//   search_button(); 
// }

//animation for updating metrics - flashing fish card numbers 
function cap_flash(elementclass) {
  // Delay the execution by 0.1 seconds (100 milliseconds)
  setTimeout(() => {
    var elements = document.querySelectorAll(`.${elementclass}`);

    elements.forEach((element) => {
      element.classList.add('converflash');
      setTimeout(() => {
        element.classList.remove('converflash');
      }, 200);
    });
  }, 100); // 0.1 second delay
}



///Calculates the precentage value of each category compared to total
function poolCounter () {
  let num = 0;
 for  (let fish of fish_master) {
   if (check_fish.checked && fish.isfish == "1") {num = num + 1;}
   if (check_notfish.checked && fish.isfish == "0") {num = num + 1;}
 }
 console.log(num);
 return num;
}

function perCounter (property, code) {
  let list = []; 
  for (let fish of fish_master) {
    if (fish[property] == parseInt(code) || fish[property] == code) {
      list.push(fish);
    }
  }
  return `(${Math.round((list.length/maincount)*100)}%)`; 
}




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
  cap_flash("tanksize");
if (gallon_radio.checked == true) {
let cal_cap = parseFloat(tank_size.value);
document.getElementById("size").innerHTML = gallon;
cap_modifier = 3.78541253426; 
console_capacity = gallon;
f_tankconversion.innerText = show_liter; 

tank_size.value = Math.round((cal_cap * 0.264172)*10)/10;
inputAnimation(tank_size);

}

}


// Conversion from gallon to liter [radio buttons]        
function gallonliter() {
  cap_flash("tanksize");
  if (liter_radio.checked == true) {
let cal_cap = parseFloat(tank_size.value);
document.getElementById("size").innerHTML = liter;
cap_modifier = 1; 
console_capacity = liter;
f_tankconversion.innerText = show_gallon; 
tank_size.value = Math.round((cal_cap * 3.785)*10)/10; 
inputAnimation(tank_size);

}

}



// Conversion from celsius to farenheit [button]      
function ctof() {
  cap_flash("fishtemp");
let cal_tempmin = parseFloat(tempmin.value);

if (!exactCel || cal_tempmin !== Math.round(exactCel*10)/10) {
  exactCel = cal_tempmin;
  exactFar = (exactCel * 9/5) + 32;
}
 

console_temperature =  farenheit;
f_tempconversion.innerText = show_celsius;
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
  cap_flash("fishtemp");
let cal_tempmin = parseFloat(tempmin.value);

if (!exactFar ||cal_tempmin !==  Math.round(exactFar*10)/10) {
  exactFar = cal_tempmin;
  exactCel = (exactFar - 32) * 5/9;
}


console_temperature = celsius;
f_tempconversion.innerText = show_farenheit;
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



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///// Search button function //////////////////////////////////////////////////////////////////////////////////////////
    function search_button() {
        result_div.innerHTML = "";
        event.preventDefault();
        //// Declaring variables used in the function. 
        let v_tempmin = tempmin.value;
        let v_tank_size = tank_size.value; 
        let v_ph = ph.value; 

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

        let v_check_fish = check_fish.checked;
        let v_check_notfish = check_notfish.checked;

        let samerica = document.getElementById("r1").checked;
        let camerica = document.getElementById("r5").checked;
        let namerica = document.getElementById("r8").checked; 
        let africa = document.getElementById("r2").checked; 
        let australia = document.getElementById("r9").checked;
        let seasia = document.getElementById("r3").checked;
        let sasia = document.getElementById("r4").checked;
        let easia = document.getElementById("r6").checked;
        let europe = document.getElementById("r7").checked;
        let arti = document.getElementById("rA").checked;
        let wasia = document.getElementById("rw").checked;

        let v_bottom = document.getElementById("bottom").checked;
        let v_middle = document.getElementById("middle").checked;
        let v_top = document.getElementById("top").checked;

        let srch_hardi = []; 
        let srch_avail = []; 
        let srch_soci = []; 
        let srch_agress = []; 
        let srch_breed = []; 
        let fish_list = []; 
        let reg_list = [];
        let srch_swim = []; 
        let isit_fish = [];
///// Checking if temperature and tank size are ok; + checking if checkboxes were selected     
      preCheckTemperature(v_tempmin);
      preCheckCheckboxes (v_verycommon,v_common,v_rare, v_veryrare,
        v_beginner,v_easy,v_medium,v_difficult,
         v_schooling1,v_schooling2,v_solitary,v_peaceful1,
          v_peaceful2,v_aggressive,v_b_easy,v_b_medium,v_b_hard,v_impossible,
          v_bottom,v_middle,v_top,
          samerica,camerica,namerica,africa,australia,seasia,sasia,easia,europe,arti,wasia);
      preCheckTank(); 
      preCheckPh() 
      updatePool();
///// Adding search conditions to their respective arrays
        isfish()
        avail_list();
        hardiness_list();
        behavior_list();
        agres_list();
        breed_list();
        regio_list();
        swim_list()
/////Finding fish that meet selected criteria and pushing them to fish_list
  fishFinder(fish_list, fish_master, srch_hardi, srch_avail, srch_soci, srch_agress, srch_breed, v_tank_size, v_tempmin, reg_list, srch_swim, isit_fish, v_ph); 
/////Outputting serach results to UI
  fishSelect ();
/////search_button CORE -->|||||
///////////////////Outputting serach results to UI
function fishSelect() {
  if (listview) {
    listFiller (fish_list)
  }
 else if (grid_toggle === "big"){
  microTileFiler(fish_list) 
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

function isfish() {
  if (v_check_fish) {isit_fish.push(1);}
  if (v_check_notfish) {isit_fish.push(0);}
}

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

function swim_list() {
  if (v_bottom) {srch_swim.push(1);}
  if (v_middle) {srch_swim.push(2);}
  if (v_top) {srch_swim.push(3);}
}

 function regio_list() {
  if (samerica) {reg_list.push("1");}
  if (camerica) {reg_list.push("5");}
  if (namerica) {reg_list.push("8");}
  if (africa) {reg_list.push("2");}
  if (australia) {reg_list.push("9");}
  if (seasia) {reg_list.push("3");}
  if (sasia) {reg_list.push("4");}
  if (easia) {reg_list.push("6");}
  if (europe) {reg_list.push("7");}
  if (arti) {reg_list.push("A");}
  if (wasia) {reg_list.push("W");}
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
function fishFinder(fish_list, fish_master, srch_hardi, srch_avail, srch_soci, srch_agress, srch_breed, v_tank_size, v_tempmin, reg_list, srch_swim, isit_fish, v_ph)  {   
  for (let fish of fish_master) {
    let region = fish.region; 
    if (region.includes(',')) { 
      region = region.split(',').map(num => num.trim());
    } else {
      region = [region.trim()]; 
    }

    let regionMatch = region.some(r => reg_list.includes(r));

    let fish_temp_min = parseFloat(fish.temperature_min);
    let fish_temp_max = parseFloat(fish.temperature_max); 

    let phmin = parseFloat(fish.phmin); 
    let phmax = parseFloat(fish.phmax); 

    let fish_cap = parseFloat(fish.tank_size_liter);
    if (console_capacity == gallon) {
      fish_cap = fish_cap * 0.264172;
    }
    if (console_temperature == farenheit) {
      fish_temp_min = (fish_temp_min * 9/5)+32;
      fish_temp_max = (fish_temp_max * 9/5)+32;
    }


    if ((isit_fish.includes(parseInt(fish.isfish))) && 
      
      (srch_hardi.includes(parseInt(fish.uncare))) && 
    (srch_avail.includes(parseInt(fish.availability))) && 
    (srch_soci.includes(parseInt(fish.school))) && 
    (srch_agress.includes(parseInt(fish.agression))) &&
    (srch_breed.includes(parseInt(fish.breeding_difficulty))) &&
    (v_tank_size >= fish_cap) && 
    (fish_temp_min <= v_tempmin) && (v_tempmin <= fish_temp_max) &&
    (srch_swim.includes(parseInt(fish.swim))) &&
    (v_ph <= phmax) && (phmin <= v_ph)
    &&
    regionMatch) {

    fish_list.push(fish); //pushing all that matches to fish list 
  } 
}
sort(fish_list)
console.log(fish_list)

  ///Updating number of search result value 
  fishcount.innerHTML = fish_list.length;
  emptiness_checker = fish_list.length;
  ///Displaying animation of selector result value changes
  if (previousFishcouont !== fish_list.length) {
  log_message();
  fishcount.classList.add('value-updated');
  setTimeout(() => {
    fishcount.classList.remove('value-updated');
  }, 1000);
}
  previousFishcouont = fish_list.length;
};
/// fishFinder --> ||||| 
/////Checking if user missed to checkbox the minimum required checkboxes 
function preCheckCheckboxes (v_verycommon,v_common,v_rare,
  v_veryrare,v_beginner,v_easy,v_medium,v_difficult, v_schooling1,v_schooling2,v_solitary,v_peaceful1,
  v_peaceful2,v_aggressive,v_b_easy,v_b_medium,v_b_hard,v_impossible,v_bottom,v_middle,v_top, 
  samerica,camerica,namerica,africa,australia,seasia,sasia,easia,europe,arti,wasia) {

  if (!v_verycommon && !v_common && !v_rare && !v_veryrare) {
  div_avail.classList.add('notselected');
  div_avail.classList.remove('tiles');
  checkalert.style.display = "inline-block";
  invalid_search_checks = true; 
  dropdownButtonAvail.classList.add("dropbtnalert");
  dropdownButtonAvail.classList.remove("dropbtn");
}
else {
  div_avail.classList.remove('notselected');
  div_avail.classList.add('tiles');
  dropdownButtonAvail.classList.remove("dropbtnalert");
  dropdownButtonAvail.classList.add("dropbtn");
}
if (!v_beginner && !v_easy && !v_medium && !v_difficult) {
  div_hardiness.classList.add('notselected');
  div_hardiness.classList.remove('tiles');
  checkalert.style.display = "inline-block";
  invalid_search_checks = true; 
  dropdownButtonHardi.classList.add("dropbtnalert");
  dropdownButtonHardi.classList.remove("dropbtn");
}
else {
  div_hardiness.classList.remove('notselected');
  div_hardiness.classList.add('tiles');
  dropdownButtonHardi.classList.remove("dropbtnalert");
  dropdownButtonHardi.classList.add("dropbtn");
}
if (!v_schooling1 && !v_schooling2 && !v_solitary) {
  div_behavior.classList.add('notselected');
  div_behavior.classList.remove('tiles');
  checkalert.style.display = "inline-block";
  invalid_search_checks = true; 
  dropdownButtonBehavior.classList.add("dropbtnalert");
  dropdownButtonBehavior.classList.remove("dropbtn");
}
else {
  div_behavior.classList.remove('notselected');
  div_behavior.classList.add('tiles');
  dropdownButtonBehavior.classList.remove("dropbtnalert");
  dropdownButtonBehavior.classList.add("dropbtn");
}
if (!v_peaceful1 && !v_peaceful2 && !v_aggressive) {
  div_agression.classList.add('notselected');
  div_agression.classList.remove('tiles');
  checkalert.style.display = "inline-block";
  invalid_search_checks = true; 
  dropdownButtonAgression.classList.add("dropbtnalert");
  dropdownButtonAgression.classList.remove("dropbtn");
}
else {
  div_agression.classList.remove('notselected');
  div_agression.classList.add('tiles');
  dropdownButtonAgression.classList.remove("dropbtnalert");
  dropdownButtonAgression.classList.add("dropbtn");
}
if (!v_b_easy && !v_b_medium && !v_b_hard && !v_impossible) {
  div_breeding.classList.add('notselected');
  div_breeding.classList.remove('tiles');
  checkalert.style.display = "inline-block";
  invalid_search_checks = true; 
  dropdownButtonBreeding.classList.add("dropbtnalert");
  dropdownButtonBreeding.classList.remove("dropbtn");
}
else {
  div_breeding.classList.remove('notselected');
  div_breeding.classList.add('tiles');
  dropdownButtonBreeding.classList.remove("dropbtnalert");
  dropdownButtonBreeding.classList.add("dropbtn");
}
////
if (!v_bottom && !v_middle && !v_top) {
  div_swim.classList.add('notselected');
  div_swim.classList.remove('tiles');
  checkalert.style.display = "inline-block";
  invalid_search_checks = true; 
  dropdownButtonSwim.classList.add("dropbtnalert");
  dropdownButtonSwim.classList.remove("dropbtn");
}
else {
  div_swim.classList.remove('notselected');
  div_swim.classList.add('tiles');
  dropdownButtonSwim.classList.remove("dropbtnalert");
  dropdownButtonSwim.classList.add("dropbtn");
}
/////

////
if (!samerica && !camerica && !namerica && !africa && !australia && !seasia && !sasia && !easia && !europe && !arti && !wasia) {
  div_origin.classList.add('notselected');
  div_origin.classList.remove('tiles');
  checkalert.style.display = "inline-block";
  invalid_search_checks = true; 
  dropdownButtonOrigin.classList.add("dropbtnalert");
  dropdownButtonOrigin.classList.remove("dropbtn");
}
else {
  div_origin.classList.remove('notselected');
  div_origin.classList.add('tiles');
  dropdownButtonOrigin.classList.remove("dropbtnalert");
  dropdownButtonOrigin.classList.add("dropbtn");
}
/////

if ((v_verycommon || v_common || v_rare || v_veryrare) && (v_beginner || v_easy || v_medium || v_difficult) && (v_schooling1 || v_schooling2 || v_solitary)
&& (v_peaceful1 || v_peaceful2 || v_aggressive) && (v_b_easy || v_b_medium || v_b_hard || v_impossible)
&& (v_bottom || v_middle || v_top) && (samerica || camerica || namerica || africa || australia || seasia || sasia || easia || europe || arti || wasia)) {
  div_avail.classList.remove('notselected');
  div_hardiness.classList.remove('notselected');
  div_behavior.classList.remove('notselected');
  div_agression.classList.remove('notselected');
  div_breeding.classList.remove('notselected');
  div_swim.classList.remove('notselected');
  div_origin.classList.remove('notselected');
  dropdownButtonHardi.classList.remove("dropbtnalert");
  dropdownButtonAvail.classList.remove("dropbtnalert");
  dropdownButtonBehavior.classList.remove("dropbtnalert");
  dropdownButtonAgression.classList.remove("dropbtnalert");
  dropdownButtonBreeding.classList.remove("dropbtnalert");
  dropdownButtonSwim.classList.remove("dropbtnalert");
  dropdownButtonOrigin.classList.remove("dropbtnalert");


  div_avail.classList.add('tiles');
  div_hardiness.classList.add('tiles');
  div_behavior.classList.add('tiles');
  div_agression.classList.add('tiles');
  div_breeding.classList.add('tiles');
  div_swim.classList.add('tiles');
  div_origin.classList.add('tiles');
  dropdownButtonHardi.classList.add("dropbtn");
  dropdownButtonAvail.classList.add("dropbtn");
  dropdownButtonBehavior.classList.add("dropbtn");
  dropdownButtonAgression.classList.add("dropbtn");
  dropdownButtonBreeding.classList.add("dropbtn");
  dropdownButtonSwim.classList.add("dropbtn");
  dropdownButtonOrigin.classList.add("dropbtn");
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
              incrementtemp.classList.remove('increment-button');
              decrementtemp.classList.remove('decrement-button');
        div_temp.classList.add('notselected');
        tempmin.classList.remove('numberbox');
        tempmin.classList.add('inputalert');
            incrementtemp.classList.add('increment-button-notsel');
            decrementtemp.classList.add('decrement-button-notsel');
        tempalert.style.display = "inline-block";
        invalid_search_temp = true; 
      }
      else if ((temp <  39 || temp >  95) && console_temperature === farenheit) {
        tempalert.innerHTML = "Temperature should not be lower than 39℉ or higher than 95℉";
              div_temp.classList.remove('tiles');
                incrementtemp.classList.remove('increment-button');
                decrementtemp.classList.remove('decrement-button');
              div_temp.classList.add('notselected');
              tempmin.classList.remove('numberbox');
                 incrementtemp.classList.add('increment-button-notsel');
                 decrementtemp.classList.add('decrement-button-notsel');
              tempmin.classList.add('inputalert');
              tempalert.style.display = "inline-block";
              invalid_search_temp = true; 
      }
    else {
            div_temp.classList.add('tiles');
              div_temp.classList.remove('notselected');
                incrementtemp.classList.remove('increment-button-notsel');
                decrementtemp.classList.remove('decrement-button-notsel');
              tempmin.classList.add('numberbox');
              tempmin.classList.remove('inputalert');
                incrementtemp.classList.add('increment-button');
                decrementtemp.classList.add('decrement-button');
              tempalert.style.display = "none";
              invalid_search_temp = false;
    }
  }
  //Checking tank size before submission (shouldn't be too small)
  function preCheckTank() {
    var tank = parseFloat(document.getElementById('tank_size').value);  
      if ((tank < 20) && (console_capacity === liter)) {
        div_tank_size.classList.remove('tiles');
        div_tank_size.classList.add('notselected');
        decrementtank.classList.remove('numberbox');
        incrementtank.classList.remove('numberbox');
        tank_size.classList.remove('numberbox');
        tank_size.classList.add('inputalert');
        decrementtank.classList.add('decrement-button-notsel');
        incrementtank.classList.add('increment-button-notsel');
        capalert.style.display = 'inline-block'; 
        invalid_search_cap = true; 
      } 
      if ((tank < 5.3) && (console_capacity === gallon)) {
        div_tank_size.classList.remove('tiles');
        div_tank_size.classList.add('notselected')
           decrementtank.classList.remove('numberbox');
           incrementtank.classList.remove('numberbox');
        tank_size.classList.remove('numberbox');
        tank_size.classList.add('inputalert');
        capalert.style.display = 'inline-block'; 
          decrementtank.classList.add('decrement-button-notsel');
          incrementtank.classList.add('increment-button-notsel');
        invalid_search_cap = true; 
      }
      if (((tank >= 20) && (console_capacity === liter)) || ((tank >= 5.3) && (console_capacity === gallon))) {
        div_tank_size.classList.add('tiles');
        div_tank_size.classList.remove('notselected')
           decrementtank.classList.remove('decrement-button-notsel');
           incrementtank.classList.remove('increment-button-notsel');
        tank_size.classList.add('numberbox');
        tank_size.classList.remove('inputalert');
           decrementtank.classList.add('numberbox');
           incrementtank.classList.add('numberbox');
        capalert.style.display = 'none';
        invalid_search_cap = false; 
      }
    }

function preCheckPh() {
 if (parseFloat(ph.value) < 4.4 || parseFloat(ph.value) > 9.1) {
  div_ph.classList.remove('tiles');
  div_ph.classList.add('notselected')
        ph.classList.remove('numberbox');
        ph.classList.add('inputalert');
        incrementph.classList.remove('incremph');
        incrementph.classList.add('increment-button-ph-notsel');
        decrementph.classList.remove('decremph');
        decrementph.classList.add('decrement-button-ph-notsel');

        phalert.style.display = 'inline-block'; 
  invalid_search_ph = true;
 }
 else {
  div_ph.classList.add('tiles');
  div_ph.classList.remove('notselected')
  ph.classList.add('numberbox');
  ph.classList.remove('inputalert');
  incrementph.classList.add('incremph');
  incrementph.classList.remove('increment-button-ph-notsel');
  decrementph.classList.add('decremph');
  decrementph.classList.remove('decrement-button-ph-notsel');

  phalert.style.display = 'none'; 
invalid_search_ph = false;
 }
}


//Checking if output list lenght is zero 
function noResultAlert () {
  if ((emptiness_checker < 1) && (!invalid_search_temp) && (!invalid_search_cap) && (!invalid_search_checks) && (!invalid_search_ph)) {
    noresults.style.display = "inline-block"; 
  }
  else {
    noresults.style.display = "none"; 
  }
}

///// Metric change function (used in initial event listener)
  function fishsizemetric () {
  console_fishsize = (console_fishsize === cm) ? inch : cm; 
  fishsize_option = (fishsize_option === show_inch) ? show_cm : show_inch; 
  size_modifier = (size_modifier === 1 ) ? 0.393 : 1;
  cmtoinch.innerText = fishsize_option; 
  f_cmtoinch.innerText = fishsize_option; 
  cap_flash("fishsize");

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
f_view_options.textContent = viewoption;
search_button()

}

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
 if (fish_list[i].isfish == "1")  {
 fishcard.className = "fish_card";
}
else {fishcard.className = "nonfish_card"}

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

//ghostcards because my grid view can messed up without it on bigger viewports 
if (window.innerWidth > 600 && fish_list.length > 0) { 
for (let i = 0; i < 8; i++) {
  let ghost = document.createElement('div');
  let ghostpic = document.createElement('img');
  ghostpic.src = "icon/ghost.png";
  ghostpic.alt = "ignore this user interface element";
  ghost.className = "ghostcard";
  ghost.appendChild(ghostpic);
  result_lists.appendChild(ghost); 
}}

result_div.appendChild(result_lists); 
}/// fishFiller ends here 




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
let fishcard_divs = document.querySelectorAll(".fish_card, .nonfish_card");
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
    let copyimage = document.createElement("img");
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
    // infocard.className = "infocard";

    if (fish.isfish == "1")  {
      infocard.className = "infocard";
     }
     else {infocard.className = "ninfocard"}
    
    iconimage.src = `webps1/${fish.fish_id}.webp`; //finding webp file for each fish based on fish ID 
    iconimage.alt = `"small image of ${name}`;
    // iconimage.id = info_id; //might be completely unnecessary 
    copyimage.src = 'icon/copy.png';
    fishname2.innerHTML = name;
    latin.innerHTML = `${fish.name_latin}`;
    mintanksize.innerHTML = `Minimum tank size: ${cap} ${console_capacity}`;
    tempinfo.innerHTML = `T: ${temp_min}-${temp_max}${console_temperature}   pH: ${fish.phmin}-${fish.phmax}`; 

    if (fish.isfish == "1")  {
      sizeinfo.innerHTML = `Fish size: ${card_size} ${console_fishsize}`;
     }
     else { sizeinfo.innerHTML = `Creature size: ${card_size} ${console_fishsize}`;}

   
    
    hardiness.innerHTML = `Difficulty: ${codes_hardi[hardi]}`;
    availability.innerHTML = `Availability: ${codes_avail[avail]}`;
    social.innerHTML = `Behavior: ${codes_behave[behave]}`;
    agression.innerHTML = `Agression: ${codes_agres[agres]}`;
    breeding.innerHTML =  `Breeding: ${codes_breed[breed]}`;
    origin.innerHTML = `Origin: ${commaRemover(fish.origin)}`; 

    var origin_len = (fish.origin).length;
  
    
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

  
    copyimage.className = "copy";


    //// more module button 
    if (fish.more == 1) {
      let moreButton = document.createElement('button');
      moreButton.className = fish.isfish == 1 ? 'more_button' : 'more_button_nonfish';
      moreButton.innerHTML = 'More';
      // moreButton.id = `m${fish.fish_id}`; 
      infocard.appendChild(moreButton);
      moreButton.onclick = function() {
      showMore(`more/${fish.fish_id}.html`,fish.fish_id); 
      };
    }
    
    infocard.id = info_id; 
    infocard.appendChild(iconimage);
    infocard.appendChild(copyimage);
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

    let textCopy = `${name} (${fish.name_latin})`;

    startFlipBubble(info_id); 
    //Bubble animation when flipped 

  
  

    iconimage.addEventListener("click", infocardKill);
    copyimage.addEventListener("click", copyname);

    function infocardKill() {
      infocard.remove();
      fishcard.style.display = "block";
    }

function copyname () {
   // Use the Clipboard API to copy the text
   navigator.clipboard.writeText(textCopy).then(() => {
    // Optional: Provide feedback to the user
    alert(`Copied to clipboard: ${textCopy}`);
  }).catch(err => {
    console.error('Failed to copy: ', err);
  });
}


    });
});
}


function listFiller (fish_list) {
  let list_view_divs = document.createElement("div");
  list_view_divs.classList.add("list-view");
  for (let i = 0; i <fish_list.length; i++) {
      let list_line = document.createElement("span");
      let listnumber = document.createElement("span");
      let fishname = document.createElement("span");
      let latinname = document.createElement("span");
      let brr = document.createElement("br");
      let name = uppercaser(fish_list[i].name_english);
      let latin = uppercaser(fish_list[i].name_latin);

      listnumber.className ="listnum";
      fishname.className = "listname";
      latinname.className = "listlatin";
      list_line.className = "listline"; 
      
      
      listnumber.textContent = `${i+1}. `
      fishname.textContent = `${name} `;
      latinname.textContent =  `(${latin})`;
      list_line.appendChild(listnumber);
      list_line.appendChild(fishname);
      list_line.appendChild(latinname);
      list_view_divs.appendChild(brr);
      list_view_divs.appendChild(list_line);
  }
      result_div.appendChild(list_view_divs); 
}

// ///Super good micro tiles view 
// function microTileFiler(fish_list) {
//   console.log("test1");
//   let micro_tiles_div = document.createElement("div");
//   let result_lists = document.createElement("div");
//   result_lists.className = "column_result"; 
//   micro_tiles_div.className = "micro_tiles_div"; 
//   for (let i = 0; i <fish_list.length; i++) { 
//     let micro_image = document.createElement("img");
//     micro_image.className = "micro_tile_element"; 
//     micro_image.src = `webps1/${fish_list[i].fish_id}.webp`;
//     micro_image.id = `im${fish_list[i].fish_id}`;

//     micro_tiles_div.appendChild(micro_image)
//     // result_lists.appendChild(micro_image); 

//   }
//   const micros = document.querySelectorAll(`.micro_tiles_div`);
//   micros.forEach(function(element) { element.addEventListener('click', function() {
//   var elementID = element.id.substring(2); 

//   var fishID = fish_master.find(function(fish) {
//     return fish.fish_id === elementID;
//   });
// // Hover events
// element.addEventListener("mouseover", function () {
//   console.log("Mouse is over the element.");
//   const hover_div = document.createElement("span");
//   hover_div.innerHTML = "test";
//   var element_element = document.getElementById(element.id);
//   element_element.appendChild(hover_div);
//   console.log("test2");
// });

// }); }); 
//   result.appendChild(micro_tiles_div);
// }
/// Super good micro tiles view 
function microTileFiler(fish_list) {
  console.log("test1");
  let micro_tiles_div = document.createElement("div");
  micro_tiles_div.className = "micro_tiles_div"; 

  for (let i = 0; i < fish_list.length; i++) { 
    let micro_image = document.createElement("img");
    micro_image.className = "micro_tile_element"; 
    micro_image.src = `webps1/${fish_list[i].fish_id}.webp`;
    micro_image.id = `im${fish_list[i].fish_id}`;

    // Create a hover div to show the fish name, but do not add it yet
    const hover_div = document.createElement("span");
    hover_div.className = "hover_div";
    hover_div.innerHTML = uppercaser(fish_list[i].name_english);
    hover_div.style.position = "absolute";
    hover_div.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    hover_div.style.color = "white";
    hover_div.style.padding = "5px";
    hover_div.style.borderRadius = "5px";
    hover_div.style.display = "none"; // Hide by default

    // Append hover_div to the micro_tiles_div, not to the image directly
    micro_tiles_div.appendChild(hover_div);

    // Hover events
    micro_image.addEventListener("mouseover", function (event) {
      // Show the hover_div near the image
      hover_div.style.display = "block";
      hover_div.style.left = `${event.pageX + 10}px`; // Position near the cursor
      hover_div.style.top = `${event.pageY + 10}px`;
    });

    micro_image.addEventListener("mousemove", function (event) {
      // Move the hover_div with the cursor
      hover_div.style.left = `${event.pageX + 10}px`;
      hover_div.style.top = `${event.pageY + 10}px`;
    });

    micro_image.addEventListener("mouseout", function () {
      // Hide the hover_div when the mouse is not over the image
      hover_div.style.display = "none";
    });

    // Add click event listener to each image element directly
    micro_image.addEventListener('click', function() {
      var elementID = micro_image.id.substring(2); // Remove 'im' prefix to get the fish ID

      var fishID = fish_master.find(function(fish) {
        return fish.fish_id === elementID;
      });

      if (fishID) {
        console.log(fishID); // Do something with the found fish object
      }
    });

    // Append the micro_image to the micro_tiles_div
    micro_tiles_div.appendChild(micro_image);
  }

  // Append the micro_tiles_div to the result element
  result.appendChild(micro_tiles_div);
}

/// Super good micro tiles view <----------------


function PoolFlash () {
  allcount.classList.add('value-updated');
  setTimeout(() => {
    allcount.classList.remove('value-updated');
  }, 1000);
}







////////////////////////////////////
///Bubble animation
function calculateMaxBubbles(container) {
  const area = container.clientWidth * container.clientHeight; // Calculate area of the div
  const bubbleDensity = 0.0004; // Adjust this value to control bubble density (bubbles per square pixel)
  return Math.floor(area * bubbleDensity); // Calculate max bubbles based on area
}

function createBubble(container) {
  const maxBubbles = calculateMaxBubbles(container);
  if (container.childElementCount >= maxBubbles) {
    return; // Exit the function if the limit is reached
}
  const bubble = document.createElement('div');
  bubble.classList.add('bubble');
  bubble.style.left = Math.random() * container.clientWidth + 'px';
  bubble.style.animationDuration = 3 + Math.random() * 2 + 's'; // random duration between 3 to 5 seconds
  bubble.style.animationDelay = Math.random() * 0.1 + 's'; 
  container.appendChild(bubble);

  // Remove bubble after animation ends
  bubble.addEventListener('animationend', () => {
      container.removeChild(bubble);
  });
}


function flipBubblesCreate(container) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble_inflip');
  bubble.style.left = Math.random() * container.clientWidth + 'px';
  bubble.style.animationDuration = 1 + Math.random() * 1 + 's'; // random duration between 3 to 5 seconds
  bubble.style.animationDelay = Math.random() * 0.1 + 's'; 
  container.appendChild(bubble);

  // Remove bubble after animation ends
  bubble.addEventListener('animationend', () => {
    container.removeChild(bubble);
  });
}

// start bubbles
function startBubbles() {
  document.querySelectorAll('.tiles').forEach(container => {
      // Use setInterval to create bubbles at regular intervals
      setInterval(() => createBubble(container), 500); // Create a bubble every 500ms
  });

}

//Flip page bubbles 
function startFlipBubble(elementId) {
  const flip_bubble_pane = document.getElementById(elementId);
  if (flip_bubble_pane) {
    let bubbleCount = 0;
    const maxBubblesFlip = 25;

    // Set an interval to create bubbles
    const intervalId = setInterval(() => {
      if (bubbleCount < maxBubblesFlip) {
        flipBubblesCreate(flip_bubble_pane); // Create a simple bubble
        bubbleCount++; // Increment bubble count
      } else {
        clearInterval(intervalId); // Stop the interval after 25 bubbles
      }
    }, 50); // Create bubbles every 500ms
  }
}

// Start the bubbles when the page loads
window.onload = startBubbles;



function log_message() {
  updateCount++;

  if (first_run) {
    first_run = false;
    return; 
  }

  if (isVisible) {
    // If visible, update the text with the current count
    document.getElementById('updateMessage').innerText = `${logupdate} (${updateCount}x)`;
    
    // Extend the display time by clearing the old timeout and setting a new one
    clearTimeout(timeoutId);
    timeoutId = setTimeout(hidePopup, 2000); // Extend by 2 seconds
    return; // Exit the function early
  }

  isVisible = true; 
  console.log(logupdate);
  let updateMessage = document.createElement('span');
  updateMessage.classList.add('popup', 'show');
  updateMessage.id = "updateMessage";
  document.body.appendChild(updateMessage);
  updateMessage.innerText = logupdate;
  isVisible = true;
  timeoutId = setTimeout(hidePopup, 2000);
}


  
function hidePopup() {
  const updateMessage = document.getElementById('updateMessage');
  if (updateMessage) {
    updateMessage.classList.remove('show');

    // Wait for the transition to complete before removing the element
    setTimeout(() => {
      document.body.removeChild(updateMessage); // Remove the element from the DOM
      isVisible = false; // Reset the visibility flag
      updateCount = 0; // Reset the counter
    }, 500); // Match the duration of the CSS transition (0.5s)
  }
}
