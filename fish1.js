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
  fishFiller(fish_list); //fills all the fish info card divs displayed on page 
  flipper() // adds event listeners to newly created divs responsibe for toggling the two sides of the displayed cards 
remember (details); //checks array to see which should remain flipped and which shouldn't
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

    if ((temp < 4 || temp > 35) && console_temperature === celsius) {
      tempalert.innerHTML = "Temperature should not be lower than 4C or higher than 35C";
            div_temp.classList.remove('tiles');
        div_temp.classList.add('notselected');
        tempalert.style.display = "inline-block";
        invalid_search_temp = true; 
      }
      else if ((temp <  39 || temp >  95) && console_temperature === farenheit) {
        tempalert.innerHTML = "Temperature should not be lower than 39F or higher than 95F";
              div_temp.classList.remove('tiles');
              div_temp.classList.add('notselected');
              tempalert.style.display = "inline-block";
              invalid_search_temp = true; 
      }
    else {
            div_temp.classList.add('tiles');
              div_temp.classList.remove('notselected');
              tempalert.style.display = "none";
              invalid_search_temp = false;
    }
  }
  //Checking tank size before submission (shouldn't be too small)
  function preCheckTank() {
    let tank_size = document.getElementById('tank_size').value;  
      if ((tank_size < 20) && (console_capacity === liter)) {
        capalert.style.display = 'inline-block';
        document.getElementById('tank_size').style.borderColor = 'red';  
        invalid_search_cap = true; 
      } 
      if ((tank_size < 5.3) && (console_capacity === gallon)) {
        capalert.style.display = 'inline-block';
        document.getElementById('tank_size').style.borderColor = 'red';  
        invalid_search_cap = true; 
      }
      if (((tank_size >= 20) && (console_capacity === liter)) || ((tank_size >= 5.3) && (console_capacity === gallon))) {
        capalert.style.display = 'none';
        document.getElementById('tank_size').style.borderColor = 'unset';
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

function flipCards() {
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
  ////Remembering info card display based on iterating the 'details' array that serves as 'cache' 
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
///// Metric change function (used in initial event listener)
  function fishsizemetric () {
  console_fishsize = (console_fishsize === cm) ? inch : cm; 
  fishsize_option = (fishsize_option === show_inch) ? show_cm : show_inch; 
  console.log(fishsize_option);
  size_modifier = (size_modifier === 1 ) ? 0.393 : 1;
  cmtoinch.innerText = fishsize_option; 
  search_button()
 }
///// Showing feedback page 
function gotofeedback () {
  feedback.style.display = (feedback.style.display === "block") ? "none" : "block"; 
  feedbackstatus = (feedbackstatus === feedbacknotshown) ? feedbackshown: feedbacknotshown; 
  feedback_button.innerText = feedbackstatus; 
}
///// Showing/hiding more options 
function optionsToggle () {
  more_options.style.display = (more_options.style.display === "grid") ? "none" : "grid";
  options_option = (more_options.style.display === "grid") ? fewer : more; 
  toggle_options.innerText = options_option; 
//Select all checkboxes in more options tiles in more options tiles are hidden
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
//////Showing info page 
function explain () {
  about.style.display = (about.style.display  === "block") ? "none" : "block"; 
  about_button.innerHTML = (about.style.display  === "block") ? abouton: aboutoff;
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
let latin_len = (`${fish_list[i].name_latin}`).length
console.log(latin_len);

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


//Fitting latin names to info card UI 
if (latin_len > 21) {
  latin.className = "bigsubtitle";
  console.log("teszt");
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
}

/////////////////////////////////////
////// Event listeners for the created fish card divs below. 
// Hides fish image card and shows fish info card 

function flipper() {
  let maincard_divs = document.querySelectorAll(".maincard");
  const iconImages = document.querySelectorAll('.iconimage');
  
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

//Hides fish info card and shows fish image card and  
iconImages.forEach(iconImage => {
  iconImage.addEventListener("click", function () {
  const src = this.getAttribute('src');
  const idRegex = /images\/(\d+)\.jpeg/;
  const match = src.match(idRegex);
  if (match) {
    const id = match[1];
  let reveal_id = eval("d" + id); 
  const fishcard_id = id; // This assumes the id extracted is directly the fishcard_id
  const index = details.indexOf(fishcard_id);
  
  
    reveal_id.style.display = "none"; 
    details.splice(index, 1);
    var fish_card = document.getElementById(fishcard_id);
    // refreshAnimation(fishcard_id); //Need to edit this to make it apply to image only. 
    fish_card.style.display = "block"; 
  }
  });
  });
}