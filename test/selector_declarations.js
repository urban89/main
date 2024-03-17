  ///////////////////////
  //Declaring variables 

  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const numberinputs = document.querySelectorAll('input[type="number"]');
  const radioinputs = document.querySelectorAll('input[type = "radio"]');

  let console_capacity = liter;
  let console_temperature = celsius; 
  let console_fishsize = cm; 
  let fishsize_option = show_inch;
  let options_option = fewer; 
  let whichcard = fishshown; 
  let feedbackstatus = feedbacknotshown;
  let aboutstatus = aboutoff; 

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
  let more_options = document.getElementById("more_options");
  let toggle_options = document.getElementById("toggle_options"); 
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
  let flipped = false; 
  let about = document.getElementById("about");
  let about_button = document.getElementById("about_button");
  let search_tiles = document.getElementById("search_tiles");
  let cpanel = document.getElementById("cpanel");
  // let imagechanger = document.getElementById("imagechanger");
  let allcount = document.getElementById("allcount");
  let currentImage; 

  let details = []; 

//  let feedback_button = document.getElementById("feedback_button"); 



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
  
  window.addEventListener("click", function (event) {
    var dropdown = document.getElementById("settings_dropdown");
    if (event.target !== document.getElementById("settings")) {
        dropdown.style.display = "none";
    }
  });
  
    cmtoinch.addEventListener("click", fishsizemetric);
    toggle_options.addEventListener("click", optionsToggle);
  
    cardswticher.addEventListener("click", flipCards); 
    // about_button.addEventListener("click", explain);
    // feedback_button.addEventListener("click", gotofeedback);
  
  
  
  // document.getElementById("x-about").addEventListener("click", explain);
  // document.getElementById("x-feedback").addEventListener("click", gotofeedback);
  
  
    // let x_outs = document.querySelectorAll(".x-out");
    // x_outs.forEach(div => {
    //   div.innerHTML = "x"; 
    //   div.addEventListener("click", function() {
    //     let parentDiv = div.parentNode;
    //     let id = parentDiv.id;
    //     parentDiv.style.display = "none";
    //   })
    //   explain();
    //   gotofeedback(); 
      // initialImage ()
      // updateBackground();
    //   // window.addEventListener('resize', updateBackground);
    // });


    ////Background changer 
    // imagechanger.addEventListener("click", imageChange);
  
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


    });  /// Eventlisteners end here   
    ///////////////////////////////////////////////

    //////Functions supporting event listeners:
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


      ///// Select all / deselect all function 
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
    cap_modifier = 0.264172;
  }
  let bigger = [];
  for (let fish of fish_master) {
    if ((parseInt(fish.tank_size_liter)) * cap_modifier <= tank_size) {
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