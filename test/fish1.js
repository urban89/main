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
      let fishname = document.createElement("p");
      let name = uppercaser(fish_list[i].name_english);
      fishname.textContent = name;
      list_view_divs.appendChild(fishname);
  }
      result_div.appendChild(list_view_divs); 
}
