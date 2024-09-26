
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
const maincount = fish_master.length; 


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

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////variables for database page 
let currentImage; 



let fish_list = []; 
let filteredFish = []; 
let temp_modifier1 = 1; 
let temp_modifier2 = 0; 
let cap_modifier = 1; 
let size_modifier = 1; 
let console_temperature = celsius; 
let console_capacity = liter; 
let console_fishsize = cm;
let fishsize_option = show_inch;
let capacity_button = show_gallon;
let temp_button = show_farenheit; 
let flipped = false; 
let previousFishcount = 42; 

let details = []; 
let grid_icon_id = document.getElementById('grid_icon_id');
let grid_toggle = "small";

let cmtoinch = document.getElementById("cmtoinch");
let searchInput = document.getElementById("searchInput"); 

let result_div = document.getElementById("result");
let sort_select = document.getElementById("sortdb");

let notfound = document.getElementById("notfound"); 
let fishcount = document.getElementById("fishcount");
let displayed = document.getElementById("displayed");
let about = document.getElementById("about");
let about_button = document.getElementById("about_button");

let check_fish = document.getElementById("check_fish");
let check_notfish = document.getElementById("check_notfish");

let f_cmtoinch = document.getElementById("f_cmtoinch");
// let f_view_options = document.getElementById("f_view_options");
let f_tempconversion = document.getElementById("f_tempconversion");
let f_tankconversion = document.getElementById("f_tankconversion");
let f_about = document.getElementById("f_about");



///checkes categories and creates new list that will be displayed 
// function isFisher(fish_list) {
// for (fish of fish_master) {
//   if (check_fish.checked && fish.isfish == "1") {
//     fish_list.push(fish); 
//   }
//     if (check_notfish.checked && fish.isfish == "0") {
//       fish_list.push(fish); 
//   }
// }
// console.log(fish_list);
// }

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



function updatePool() { 
  fishcount.textContent = poolcount;
  }

/////////////////////////////////////
/// Adding initial event listeners 
document.addEventListener("DOMContentLoaded", function() {

  check_fish.checked = true; 
  check_notfish.checked = true; 

  fishcount.innerText = fish_master.length; 
 check_fish.addEventListener('change', () => fishSelect (fish_list));
 check_notfish.addEventListener('change', () => fishSelect (fish_list));
 check_fish.addEventListener('change', flipListener);
 check_notfish.addEventListener('change', flipListener);
 check_fish.addEventListener('change', updatePool);
 check_notfish.addEventListener('change', updatePool);
 check_fish.addEventListener('change', poolChanges);
 check_notfish.addEventListener('change', poolChanges);


     //home button
     var backToTopButton = document.getElementById("backToTop");
     var floatSettingsButton = document.getElementById("floatsettings");

     // Show the button when scrolled down 250px from the top
     window.onscroll = function() {
   
      if ((document.body.scrollTop > 250 || document.documentElement.scrollTop > 250)&& !modal_satus){
        // console.log("modal status in window onscroll" + modal_status);
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
     }; //home button ends

    sort_select.addEventListener("change", output);
    output ()

    document.getElementById("settings").addEventListener("click", function () {
      var dropdown = document.getElementById("settings_dropdown");
      dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";fishsizemetric
  });


  window.addEventListener("click", function (event) {
    var dropdown = document.getElementById("settings_dropdown");
    if (event.target !== document.getElementById("settings")) {
        dropdown.style.display = "none";
    }
  });

  document.getElementById("floatsettings").addEventListener("click", function () {
    var dropdown = document.getElementById("floatsettingsdrop");
    dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";
});

window.addEventListener("click", function (event) {
  var dropdown = document.getElementById("floatsettingsdrop");
  if (event.target !== document.getElementById("floatsettings")) {
      dropdown.style.display = "none";
  }
});


grid_icon_id.src = "icon/smalltiles.png"; 
grid_icon_id.addEventListener("click", function () {
  grid_icon_id.src = (grid_toggle === "small") ? "icon/fishcards.png" : "icon/smalltiles.png"; 
  grid_toggle = (grid_toggle === "small") ? "big" : "small"; 
  output();
  }); 


  cmtoinch.addEventListener("click", fishsizemetric);
  f_cmtoinch.addEventListener("click", fishsizemetric);
  cap_conversion.addEventListener("click", litergallon);
  temp_conversion.addEventListener("click", celtofaren);
  // cardswticher.addEventListener("click", flipCards);   

  /// Search bar for filtering fish by name 
  searchInput.addEventListener("input",filterFishByName); 
  searchInput.addEventListener("keyup",filterFishByName); 


  f_tempconversion.addEventListener('click',celtofaren);
  f_tankconversion.addEventListener('click',litergallon);




  
  });





/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///event listeners end above 
/////////////////////////////////////////////////////////////////////////////
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

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


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

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



function sort () {

    if (sort_select.value == "size_min") {
        fish_list = fish_list.sort(compare_size);
      }
  
      if (sort_select.value == "size_max") {
        fish_list =  fish_list.sort(compare_size_descend);
      }
  
      if (sort_select.value == "temp_min") {
        fish_list = fish_list.sort(compare_temp);
      }
}

///////////////////Outputting serach results to UI
function fishSelect (fish_list) {
  if (filteredFish.length > 0) {
    fish_list = filteredFish; 
    sort();
  }
  else {
    fish_list = fish_master; 
    sort();
  }
  result_div.innerHTML = '';  ////this is where div is emptied 
  let result_lists = document.createElement("div");
  result_lists.className = "column_result"; 
 let final_list = [];
  for (let i = 0; i <fish_list.length; i++) {

    if (check_fish.checked && fish_list[i].isfish == "1") {
      final_list.push(fish_list[i]);
    }
    if (check_notfish.checked && (fish_list[i].isfish == "0" || fish_list[i].isfish == "2" || fish_list[i].isfish == "3")) {
        final_list.push(fish_list[i]);
    }
  }

  poolcount = final_list.length;
  for (let i = 0; i <final_list.length; i++) {

     //Generating fish card (fish cards are displayed by default)

    let fishid = final_list[i].fish_id; 
    let main_card = document.createElement('div'); //container card to hide/show info  
    let fishcard = document.createElement('div'); // fish card for each fish; all the other elements generated will be appended to this 
    let fishname = document.createElement("p");
    let image_element = document.createElement('img');
    let size = document.createElement("span");
    let temp = document.createElement("span"); // temperature in fish card 
    let tanksize = document.createElement("span"); // tank size in fish card 
    let name = uppercaser(final_list[i].name_english);

    let temp_min = Math.round((final_list[i].temperature_min * temp_modifier1) + temp_modifier2); // checking if ℃ or ℉ is used 
    let temp_max = Math.round((final_list[i].temperature_max * temp_modifier1) + temp_modifier2); // checking if ℃ or ℉ is used
    let cap = Math.round(((final_list[i].tank_size_liter * cap_modifier) * 10)/10)
    let card_size_cal = Math.round(final_list[i].cm_max * size_modifier*10)/10; //rounding up potentially converted fish size to 1 decimal place
    let card_size =  sizeFormatter(card_size_cal); //removing ".0" from round numbers 

   
    image_element.src = `webps1/${final_list[i].fish_id}.webp`; //finding webp file for each fish based on fish ID 
    image_element.alt = `"image of ${name}`;
    fishname.textContent = name;
    size.textContent = `${card_size} ${console_fishsize}`;
    temp.textContent = `${temp_min} - ${temp_max} ${console_temperature}`; 
    tanksize.textContent = `${cap} ${console_capacity}`

    fishcard.id = fishid;  // changed from main card!! 
    // fishcard.className = "fish_card";

    if (final_list[i].isfish == "1")  {
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


    //Generating info card (with display none a default)  
   //removed because of too large DOM and added as event listener 
 

  } // fishSelect contiune after for loop ends 
  if (window.innerWidth > 600 && final_list.length > 0) { 
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
  
  displayed.innerText = final_list.length; 



} // fishSelect ends here 
  




function compare_size(a, b) {
    return a.cm_max - b.cm_max;
  }

  function compare_size_descend(a, b) {
    return b.cm_max - a.cm_max;
  }


  function compare_temp(a, b) {
    return (a.temperature_min + a.temperature_max) - (b.temperature_min + b.temperature_max);
  }


  function output() {
    fish_list = filteredFish.length > 0 ? filteredFish : fish_master;
    sort();
    if (grid_toggle === "big"){
      result_div.innerHTML = ''; 
      microTileFiler(fish_list) 
    }
else {
    fishSelect (fish_list);

  }



    flipListener()
     ///Displaying animation of selector result value changes
  if (previousFishcount !== fish_list.length) {
    displayed.classList.add('value-updated');
    setTimeout(() => {
      displayed.classList.remove('value-updated');
    }, 1000);
  }
  previousFishcount = fish_list.length;
  }


 function fishsizemetric () {
      // console_fishsize = inch; 
      console_fishsize = (console_fishsize === cm) ? inch : cm; 
      fishsize_option = (fishsize_option === show_inch) ? show_cm : show_inch; 
      size_modifier = (size_modifier === 1 ) ? 0.393 : 1;
      cmtoinch.innerText = fishsize_option; 
      f_cmtoinch.innerText = fishsize_option; 
      output ();
      cap_flash("fishsize");
    }

    //removing ".0" from round numbers 
function sizeFormatter (num) {

  if (num % 1 !== 0) {
    return num.toFixed(1);
  } else {
    return num.toFixed(0); 
  }
  }

  function litergallon () {
    console_capacity = (console_capacity === liter) ? gallon : liter; 
    capacity_button = (capacity_button === show_gallon) ? show_liter: show_gallon;
    // f_tankconversion = (f_tankconversion === show_gallon) ? show_liter: show_gallon;
    cap_modifier = (cap_modifier === 1) ? 0.264172 : 1; 
    cap_conversion.innerText = capacity_button;
    f_tankconversion.innerText = capacity_button; 
    output ();
    cap_flash("tanksize");
  }

  function celtofaren () {
    console_temperature = (console_temperature === celsius) ? farenheit : celsius; 
    temp_button = (temp_button === show_farenheit) ? show_celsius: show_farenheit;
    // f_tempconversion = (f_tempconversion === show_farenheit) ? show_celsius: show_farenheit;
    temp_modifier1 = (temp_modifier1 === 1) ? 1.8 : 1; 
    temp_modifier2 = (temp_modifier2 ===  0) ? 32 : 0; 
    temp_conversion.innerText = temp_button;
    f_tempconversion.innerText = temp_button;
    output ();
    cap_flash("fishtemp");
  }


//// Upper case first letter:
function uppercaser(str) {
  const words = str.split(' ');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
}


//////Filter by fish name (latin, english and alternative name or fish id )

function filterFishByName() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  fish_list = fish_master; 
  if (searchTerm === "") {
    filteredFish = []; // Reset to full list if search bar is cleared
    output ()
    return; }

  // }
   else {
    filteredFish = fish_list.filter(fish => 
      fish.name_english.toLowerCase().includes(searchTerm) ||
      fish.alt_name.toLowerCase().includes(searchTerm) ||
      fish.name_latin.toLowerCase().includes(searchTerm) ||
      fish.fish_id.includes(searchTerm)
    );

    console.log(filteredFish);

    if (filteredFish.length === 0) {
      notfound.style.display = "block";
      result_div.innerHTML = '';
      displayed.innerText = filteredFish.length; 
    } else {
      notfound.style.display = "none";
      output(); // Output based on filtered results
    }
  }
}


/////////////////// //Event listener for flipcard to each main card//
function flipListener() {
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
    let cap = Math.round(((fish.tank_size_liter * cap_modifier) * 10)/10); //converting to gallon if necessary with "cap_modifier" and also rounding the number 
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

    if (fish.isfish == "1")  {
      infocard.className = "infocard";
     }
     else {infocard.className = "ninfocard"}
    
    iconimage.src = `webps1/${fish.fish_id}.webp`; //finding webp file for each fish based on fish ID 
    iconimage.alt = `"small image of ${name}`;
    iconimage.id = info_id; //might be completely unnecessary 
    copyimage.src = 'icon/copy.png';
    fishname2.innerHTML = name;
    latin.innerHTML = `${fish.name_latin}`;
    mintanksize.innerHTML = `Minimum tank size: ${cap} ${console_capacity}`;
    tempinfo.innerHTML = `T: ${temp_min}-${temp_max}${console_temperature}   pH: ${fish.phmin}-${fish.phmax}`; 


    // sizeinfo.innerHTML = `Fish size: ${card_size} ${console_fishsize}`;

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



function poolChanges () {
  fishcount.classList.add('value-updated');
  setTimeout(() => {
    fishcount.classList.remove('value-updated');
  }, 1000);
}


////////////////////////////////////
///Bubble animation
function calculateMaxBubbles(container) {
  const area = container.clientWidth * container.clientHeight; // Calculate area of the div
  const bubbleDensity = 0.0005; // Adjust this value to control bubble density (bubbles per square pixel)
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

// start bubbles
function startBubbles() {
  document.querySelectorAll('.tiles').forEach(container => {
      // Use setInterval to create bubbles at regular intervals
      setInterval(() => createBubble(container), 500); // Create a bubble every 500ms
  });

}

// Start the bubbles when the page loads
window.onload = startBubbles;


///Super good micro tiles view 
function microTileFiler(fish_list) {
  let micro_tiles_div = document.createElement("div");
  let result_lists = document.createElement("div");
  result_lists.className = "column_result"; 
  micro_tiles_div.className = "micro_tiles_div"; 
  for (let i = 0; i <fish_list.length; i++) { 
    let micro_image = document.createElement("img");
    micro_image.className = "micro_tile_element"; 
    micro_image.src = `webps1/${fish_list[i].fish_id}.webp`;
    micro_image.id = `im${fish_list[i].fish_id}`;

    micro_tiles_div.appendChild(micro_image)
    // result_lists.appendChild(micro_image); 

  }
  result.appendChild(micro_tiles_div);
}



///FLip bubbles:

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


function flipBubblesCreate(container) {
  const bubble = document.createElement('div');
  bubble.classList.add('bubble_inflip');
  
  const minLeft = 0.3 * container.clientWidth; // Minimum left position is 30% of the container width
  const maxLeft = container.clientWidth; // Maximum left position is 100% of the container width
  bubble.style.left = minLeft + Math.random() * (maxLeft - minLeft) + 'px';

  bubble.style.animationDuration = 1 + Math.random() * 1 + 's'; // random duration between 3 to 5 seconds
  bubble.style.animationDelay = Math.random() * 0.1 + 's'; 
  container.appendChild(bubble);

  // Remove bubble after animation ends
  bubble.addEventListener('animationend', () => {
    container.removeChild(bubble);
  });
}