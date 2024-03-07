  ///////////////////////
  //Declaring variables 
  const liter = "L";
  const gallon = "gal";
  const celsius = "℃";
  const farenheit = "℉";
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const numberinputs = document.querySelectorAll('input[type="number"]');
  const radioinputs = document.querySelectorAll('input[type = "radio"]');
  const cm = "cm";
  const inch = "inch";
  const show_inch = "Show fish size in inch";
  const show_cm = "Show fish size in cm";
  const more = "Show more search options";
  const fewer = "Show fewer search options";
  const fishshown = "Show all info cards";
  const infoshown = "Show all fish cards";
  const feedbacknotshown = "Send feedback"; 
  const feedbackshown = "Hide feedback window";

  let console_capacity = liter;
  let console_temperature = celsius; 
  let console_fishsize = cm; 
  let fishsize_option = show_inch;
  let options_option = fewer; 
  let whichcard = fishshown; 
  let feedbackstatus = feedbacknotshown;

  let cap_modifier = 1; 
  let temp_modifier1 = 1;
  let temp_modifier2 = 0;
  let size_modifier = 1; 

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
  let none_found = false; 
  let invalid_search = false;

  let srch_arr = []; 

  let settings = document.getElementById("settings");
  let cmtoinch = document.getElementById("cmtoinch");
  let cardswticher = document.getElementById("cardswticher"); 
  let flipped = false; 
  let about = document.getElementById("about");
  let about_button = document.getElementById("about_button");
  let atabout = false; 
  // let toselector = document.getElementById("toselector"); 
  let search_tiles = document.getElementById("search_tiles");
  let cpanel = document.getElementById("cpanel");

  let details = []; 

 let feedback_button = document.getElementById("feedback_button"); 

  /////////////////////////////////////
  /// Adding initial event listeners   
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

    // settings.addEventListener("click", settingsShow);   // Settings button 
    
    verycommon.checked = true; 
    common.checked = true; 
    beginner.checked = true
    easy.checked = true;

    all_3.checked = true; 
    selectall(social_chbx, all_3);
    all_4.checked = true; 
    selectall(agress_chbx, all_4);
    all_5.checked = true; 
    selectall(breed_chbx, all_5);

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


    ///Event listeners for SETTINGS dropdown 
    document.getElementById("info").addEventListener("click", function () {
      var dropdown = document.getElementById("info_dropdown");
      dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
  });

  window.addEventListener("click", function (event) {
    var dropdown = document.getElementById("info_dropdown");
    if (event.target !== document.getElementById("info")) {
        dropdown.style.display = "none";
    }
  });

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
  about_button.addEventListener("click", explain);
  // toselector.addEventListener("click", gotoselector);
  feedback_button.addEventListener("click", gotofeedback);

  let x_outs = document.querySelectorAll(".x-out");
  x_outs.forEach(div => {
    div.innerHTML = "x"; 
    div.addEventListener("click", function() {
      let parentDiv = div.parentNode;
      parentDiv.style.display = "none";
    })
  });

  });  /// Eventlisteners end here   
        



  function flipCards() {
    console.log("teszt1");
    flipped = (flipped === false) ? true : false; 
    console.log(flipped);
    whichcard = (flipped === true) ? infoshown: fishshown; 
    cardswticher.innerHTML = whichcard;
    if (flipped) {
      for (let fish of fish_master) {
        details.push(fish.fish_id);
      }} else {
        details = []; 
      }
      search_button()
    } 


    ////Remembering info card display based on iterating the 'details' array that serves as cache? 
function remember (details) {
  for (let id of details) {
   var fishcard = document.getElementById(id);
   var infocard = document.getElementById("d" + id);
   if (fishcard && infocard) {
    fishcard.style.display = "none";
    infocard.style.display = "block";
  }
}
}


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
        
      console.log("selection_missing: " + selection_missing);
        if (selection_missing) {
          checkalert.style.display = "inline-block";
          invalid_search = true; 
          console.log("1: " + invalid_search);
        }

      else {
        checkalert.style.display = "none";
        invalid_search = false; 
        console.log("2: " +invalid_search);
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
      }

      if (sort_select.value == "size_max") {
        fish_list.sort(compare_size_descend);
      }

      if (sort_select.value == "temp_min") {
        fish_list.sort(compare_temp);
      }

      console.log(fish_list);

      ///Updating selector result value on page 
      fishcount.innerHTML = fish_list.length;

      ///Displaying animation of selector result value changes
      if (previousFishcouont !== fish_list.length) {
      fishcount.classList.add('value-updated');
      setTimeout(() => {
        fishcount.classList.remove('value-updated');
      }, 1000);
    }
      previousFishcouont = fish_list.length;

  }


  ///////////////////Outputting serach results to UI
  function fishSelect () {
    console.log(fish_list);
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
     
      image_element.src = `images/${fish_list[i].fish_id}.jpeg`; //finding jpeg file for each fish based on fish ID 
      fishname.textContent = name; // adding name to <p> result_lists_element
      size.textContent = `${card_size} ${console_fishsize}`; // getting fish size from fish_master 
      temp.textContent = `${temp_min} - ${temp_max} ${console_temperature}`; 
      tanksize.textContent = `${cap} ${console_capacity}`;
      
      main_card.id = fishid;
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

   //Generating info card (with display none a default)  
   let info_id = `d${fish_list[i].fish_id}`; 
   let hardi = fish_list[i].uncare; 
   let avail = fish_list[i].availability; 
   let behave = fish_list[i].school; 
   let agres = fish_list[i].agression; 
   let breed = fish_list[i].breeding_difficulty; 

   let reveal_card = document.createElement('div'); //container card to hide/show info 
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

   reveal_card.className = "reveal_card";
   infocard.className = "infocard";

   iconimage.src = `images/${fish_list[i].fish_id}.jpeg`; //finding jpeg file for each fish based on fish ID 
   fishname2.innerHTML = name;
   latin.innerHTML = `${fish_list[i].name_latin}`;
   mintanksize.innerHTML = `Minimum aquarium size: ${cap} ${console_capacity}`;
   tempinfo.innerHTML = `Temperature range: ${temp_min} - ${temp_max} ${console_temperature}`; 
   sizeinfo.innerHTML = `Maximum fish size: ${card_size} ${console_fishsize}`;

   hardiness.innerHTML = `Keeping difficulty: ${codes_hardi[hardi]}`;
   availability.innerHTML = `Purchase availability: ${codes_avail[avail]}`;
   social.innerHTML = `Social behavior: ${codes_behave[behave]}`;
   agression.innerHTML = `Agression level: ${codes_agres[agres]}`;
   breeding.innerHTML =  `Breeding difficulty: ${codes_breed[breed]}`;
   origin.innerHTML = `Origin: ${commaRemover(fish_list[i].origin)}`; 

   iconimage.className = "iconimage";
   fishname2.className = "title";
   latin.className = "subtitle";
   mintanksize.className = "infocardtext";
   tempinfo.className = "infocardtext";
   sizeinfo.className = "infocardtext";

   hardiness.className = "infocardtext";
   availability.className = "infocardtext";
   social.className = "infocardtext";
   agression.className = "infocardtext";
   breeding.className = "infocardtext";
   origin.className = "infocardtext";

   reveal_card.id = info_id; 
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

   reveal_card.appendChild(infocard); //container card to hide/show info 
   result_lists.appendChild(reveal_card);


    }

    result_div.appendChild(result_lists);


  // fish cards and infor cards when clicked it hides the div and the other div is displayed in its place
  let maincard_divs = document.querySelectorAll(".maincard");
  let revealcard_divs = document.querySelectorAll(".reveal_card");
  
  maincard_divs.forEach(div => {
  let divId = div.id; 
  div.addEventListener("click", function () {
    div.style.display = "none"; 
    var info_id = `d${divId}`; 
    var info_card = document.getElementById(info_id);
    info_card.style.display = "block"; 
  if (!details.includes(divId)) {
    console.log(divId);
    details.push(divId);
  } 
  });
  });

  revealcard_divs.forEach(div => {
    let divId = div.id; 
    
    div.addEventListener("click", function () {
      div.style.display = "none"; 
      var fishcard_id = divId.slice(1); 
      var index = details.indexOf(fishcard_id); 
      details.splice(index, 1);
      var fish_card = document.getElementById(fishcard_id);
      // refreshAnimation(fishcard_id); //Need to edit this to make it apply to image only. 
      fish_card.style.display = "block"; 
  });
  });

  remember (details);
  noResultAlert (fish_list, invalid_search);
  console.log(invalid_search);
  } // fishSelect () ends here 
    
            

            fishFinder ()
            fishSelect ()
            // refreshAnimation("fish_card");
            // refreshAnimation("fishcardimage");

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
/////////////////////////////////////////////

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


//Checking if output list lenght is zero 
function noResultAlert (len, invalid) {
  console.log("none_found: " + len.length);
  console.log("invalid_search: " + invalid);
  if ((len.length < 1) && (!invalid)) {
    noresults.style.display = "inline-block"; 
  }
  else {
    noresults.style.display = "none"; 
  }
}



    function fishsizemetric () {
      // console_fishsize = inch; 
      console_fishsize = (console_fishsize === cm) ? inch : cm; 
      fishsize_option = (fishsize_option === show_inch) ? show_cm : show_inch; 
      console.log(fishsize_option);
      size_modifier = (size_modifier === 1 ) ? 0.393 : 1;
      cmtoinch.innerText = fishsize_option; 
      search_button()
    }

    
function gotofeedback () {
  feedback.style.display = (feedback.style.display === "block") ? "none" : "block"; 
  feedbackstatus = (feedbackstatus === feedbacknotshown) ? feedbackshown: feedbacknotshown; 
  feedback_button.innerText = feedbackstatus; 
}

function optionsToggle () {
  more_options.style.display = (more_options.style.display === "grid") ? "none" : "grid";
  options_option = (more_options.style.display === "grid") ? fewer : more; 
  toggle_options.innerText = options_option; 

  if (more_options.style.display === "none") {
    all_3.checked = true; 
    selectall(social_chbx, all_3);
    all_4.checked = true; 
    selectall(agress_chbx, all_4);
    all_5.checked = true; 
    selectall(breed_chbx, all_5);

    div_behavior.classList.remove('notselected');
    div_agression.classList.remove('notselected');
    div_breeding.classList.remove('notselected');
    div_behavior.classList.add('tiles');
    div_agression.classList.add('tiles');
    div_breeding.classList.add('tiles');
    search_button()
  
  }
}

//removing ".0" from round numbers 
function sizeFormatter (num) {
if (num % 1 !== 0) {
  return num.toFixed(1);
} else {
  return num.toFixed(0); 
}
}



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
  4: "Impossible",
  3: "Hard",
  2: "Medium",
  1: "Easy"
}




//// Upper case first letter:
function uppercaser(str) {
  const words = str.split(' ');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
}

//Showing info page 
function explain () {
  about.style.display = "block"; 
  // search_tiles.style.display = "none";
  // cpanel.style.display = "none";
}

//Going back to main page 
function gotoselector () {
  about.style.display = "none"; 
  // search_tiles.style.display = "block";
  // cpanel.style.display = "block";
}


//Slicing comma off from the end for origin string 
function commaRemover (x) {
  if (x.endsWith(",")) {
    return x.slice(0, -1);
  }
  else {
    return x;
  }
  }


  function inputAnimation (x) {
    x.classList.add('number-updated');
    setTimeout(() => {
      x.classList.remove('number-updated');
    }, 1000);
  }
  
//Need to edit this to make it apply to image only. 
  function refreshAnimation (x) {
    var y = document.getElementById(x);
    y.classList.add('tiles-refresh');
    setTimeout(() => {
      y.classList.remove('tiles-refresh');
    }, 1000);
  }
  