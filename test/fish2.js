
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

 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////variables for database page 
let currentImage; 
let fish_list = fish_master; 
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
let whichcard = fishshown; 
let flipped = false; 
// let feedbackstatus = feedbacknotshown;
// let aboutstatus = aboutoff; 
let previousFishcount = 42; 

let details = []; 

let cmtoinch = document.getElementById("cmtoinch");
let searchInput = document.getElementById("searchInput"); 
// let imagechanger = document.getElementById("imagechanger"); 
let result_div = document.getElementById("result");
let sort_select = document.getElementById("sortdb");
let cap_conversion = document.getElementById("cap_conversion");
let temp_conversion = document.getElementById("temp_conversion");
let notfound = document.getElementById("notfound"); 
let fishcount = document.getElementById("fishcount");
let displayed = document.getElementById("displayed");
let about = document.getElementById("about");
let about_button = document.getElementById("about_button");
// let feedback_button = document.getElementById("feedback_button"); 


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
/// Adding initial event listeners 
document.addEventListener("DOMContentLoaded", function() {
  // document.getElementById("dbcount").textContent = maincount;   
  // document.getElementById("beginner$").textContent = beginner$$;  
  // document.getElementById("easy$").textContent = easy$$; 
  // document.getElementById("medium$").textContent = medium$$; 
  // document.getElementById("difficult$").textContent = difficult$$; 

  // document.getElementById("verycommon$").textContent = verycommon$$;  
  // document.getElementById("common$").textContent = common$$; 
  // document.getElementById("rare$").textContent = rare$$; 
  // document.getElementById("veryrare$").textContent = veryrare$$; 

  // document.getElementById("schooling$").textContent = schooling$$;  
  // document.getElementById("social$").textContent = social$$; 
  // document.getElementById("solitary$").textContent = solitary$$; 

  // document.getElementById("peaceful$").textContent = peaceful$$;  
  // document.getElementById("mpeaceful$").textContent = mpeaceful$$; 
  // document.getElementById("agressive$").textContent = agressive$$; 

  // document.getElementById("beasy$").textContent = beasy$$;  
  // document.getElementById("bmedium$").textContent = bmedium$$; 
  // document.getElementById("bhard$").textContent = bhard$$; 
  // document.getElementById("norecord$").textContent = norecord$$; 

    sort_select.addEventListener("change", output);
    output ()

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
  cap_conversion.addEventListener("click", litergallon);
  temp_conversion.addEventListener("click", celtofaren);
  // cardswticher.addEventListener("click", flipCards);   

  /// Search bar for filtering fish by name 
  searchInput.addEventListener("input",filterFishByName); 
  searchInput.addEventListener("keyup",filterFishByName); 

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
    // updateBackground();
    // window.addEventListener('resize', updateBackground);
    // // initialImage ()
  });
  // document.getElementById("dbcount").textContent = maincount; 
  // document.getElementById("dbcount2").textContent = maincount; 

  // }); 
/////////////////////////////////////Event listeners ends here //////////////////////////////

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
  result_div.innerHTML = '';  
  let result_lists = document.createElement("div");
  result_lists.className = "column_result"; 

  for (let i = 0; i <fish_list.length; i++) {

     //Generating fish card (fish cards are displayed by default)

    let fishid = fish_list[i].fish_id; 
    let main_card = document.createElement('div'); //container card to hide/show info  
    let fishcard = document.createElement('div'); // fish card for each fish; all the other elements generated will be appended to this 
    let fishname = document.createElement("p");
    let image_element = document.createElement('img');
    let size = document.createElement("span");
    let temp = document.createElement("span"); // temperature in fish card 
    let tanksize = document.createElement("span"); // tank size in fish card 
    let name = uppercaser(fish_list[i].name_english);

    let temp_min = Math.round((fish_list[i].temperature_min * temp_modifier1) + temp_modifier2); // checking if ℃ or ℉ is used 
    let temp_max = Math.round((fish_list[i].temperature_max * temp_modifier1) + temp_modifier2); // checking if ℃ or ℉ is used
    let cap = Math.round(((fish_list[i].tank_size_liter * cap_modifier) * 10)/10)
    let card_size_cal = Math.round(fish_list[i].cm_max * size_modifier*10)/10; //rounding up potentially converted fish size to 1 decimal place
    let card_size =  sizeFormatter(card_size_cal); //removing ".0" from round numbers 

   
    image_element.src = `webps1/${fish_list[i].fish_id}.webp`; //finding webp file for each fish based on fish ID 
    image_element.alt = `"image of ${name}`;
    fishname.textContent = name;
    size.textContent = `${card_size} ${console_fishsize}`;
    temp.textContent = `${temp_min} - ${temp_max} ${console_temperature}`; 
    tanksize.textContent = `${cap} ${console_capacity}`

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


    //Generating info card (with display none a default)  
   //removed because of too large DOM and added as event listener 
 

  } // fishSelect contiune after for loop ends 

  result_div.appendChild(result_lists);
  fishcount.innerText = fish_master.length; 
  displayed.innerText = fish_list.length; 

  // fish cards and infor cards when clicked it hides the div and the other div is displayed in its place
  // let maincard_divs = document.querySelectorAll(".maincard");
  // const iconImages = document.querySelectorAll('.iconimage');
  
  // // Hides fish image card and shows fish info card 
  // maincard_divs.forEach(div => {
  // let divId = div.id; 
  // div.addEventListener("click", function () {
  //   div.style.display = "none"; 
  //   var info_id = `d${divId}`; 
  //   var info_card = document.getElementById(info_id);
  //   info_card.style.display = "block"; 
  // if (!details.includes(divId)) {
  //   console.log(divId);
  //   details.push(divId);
  // }

  // });
  // });

//Hides fish info card and shows fish image card and  
// iconImages.forEach(iconImage => {
//   iconImage.addEventListener("click", function () {
//   const src = this.getAttribute('src');
//   const idRegex = /webps1\/(\d+)\.webp/;
//   const match = src.match(idRegex);
//   if (match) {
//     const id = match[1];
//   let reveal_id = eval("d" + id); 
//   const fishcard_id = id; // This assumes the id extracted is directly the fishcard_id
//   const index = details.indexOf(fishcard_id);
  
  
//     reveal_id.style.display = "none"; 
//     details.splice(index, 1);
//     var fish_card = document.getElementById(fishcard_id);
//     // refreshAnimation(fishcard_id); //Need to edit this to make it apply to image only. 
//     fish_card.style.display = "block"; 
//   }
//   });
//   });


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


  function output () {
    fish_list = filteredFish.length > 0 ? filteredFish : fish_master;
    sort();
    fishSelect (fish_list);
    flipListener()
    remember (details)
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
      output ();
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
    cap_modifier = (cap_modifier === 1) ? 0.264172 : 1; 
    cap_conversion.innerText = capacity_button;
    output ();
  }

  function celtofaren () {
    console_temperature = (console_temperature === celsius) ? farenheit : celsius; 
    temp_button = (temp_button === show_farenheit) ? show_celsius: show_farenheit;
    temp_modifier1 = (temp_modifier1 === 1) ? 1.8 : 1; 
    temp_modifier2 = (temp_modifier2 ===  0) ? 32 : 0; 
    temp_conversion.innerText = temp_button;
    output ();
  }


//// Upper case first letter:
function uppercaser(str) {
  const words = str.split(' ');
  const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  return capitalizedWords.join(' ');
}



// function flipCards() {
//   flipped = (flipped === false) ? true : false; 
//   whichcard = (flipped === true) ? infoshown: fishshown; 
//   cardswticher.innerHTML = whichcard;
//   if (flipped) {
//     for (let fish of fish_master) {
//       details.push(fish.fish_id);
//     }} else {
//       details = []; 
//     }
//     output ()
//   } 

    ////Remembering info card display based on iterating the 'details' array that serves as cache? 
    // function remember (details) {
    //   for (let id of details) {
    //    var fishcard = document.getElementById(id);
    //    var infocard = document.getElementById("d" + id);
    //    if (fishcard && infocard) {
    //     fishcard.style.display = "none";
    //     infocard.style.display = "block";
    //   }
    // }
    // }

//////Filter by fish name (latin, english and alternative name)

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
      fish.name_latin.toLowerCase().includes(searchTerm)
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