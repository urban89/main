
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

   
    image_element.src = `images/${fish_list[i].fish_id}.jpeg`; //finding jpeg file for each fish based on fish ID 
    fishname.textContent = name;
    size.textContent = `${card_size} ${console_fishsize}`;
    temp.textContent = `${temp_min} - ${temp_max} ${console_temperature}`; 
    tanksize.textContent = `${cap} ${console_capacity}`

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
    let latin_len = (`${fish_list[i].name_latin}`).length /////AIRPLANE
 
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
    mintanksize.innerHTML = `Minimum tank size: ${cap} ${console_capacity}`;
    tempinfo.innerHTML = `Temperature: ${temp_min} - ${temp_max} ${console_temperature}`; 
    sizeinfo.innerHTML = `Maximum fish size: ${card_size} ${console_fishsize}`;
 
    hardiness.innerHTML = `Difficulty: ${codes_hardi[hardi]}`;
    availability.innerHTML = `Availability: ${codes_avail[avail]}`;
    social.innerHTML = `Behavior: ${codes_behave[behave]}`;
    agression.innerHTML = `Agression: ${codes_agres[agres]}`;
    breeding.innerHTML =  `Breeding: ${codes_breed[breed]}`;
    origin.innerHTML = `Origin: ${commaRemover(fish_list[i].origin)}`; 
 
    iconimage.className = "iconimage";
    fishname2.className = "title";

//Fitting latin names to info card UI   /////AIRPLANE
if (latin_len > 21) {
  latin.className = "bigsubtitle";
}
 if (latin_len > 25)  {
  latin.className = "verybigsubtitle";
 }
if (latin_len <= 21) {
  latin.className = "subtitle";
}

    // latin.className = "subtitle"; /////AIRPLANE
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
 

  } // fishSelect contiune after for loop ends 

  result_div.appendChild(result_lists);
  fishcount.innerText = fish_master.length; 
  displayed.innerText = fish_list.length; 

  // fish cards and infor cards when clicked it hides the div and the other div is displayed in its place
  let maincard_divs = document.querySelectorAll(".maincard");
  const iconImages = document.querySelectorAll('.iconimage');
  
  // Hides fish image card and shows fish info card 
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



function flipCards() {
  flipped = (flipped === false) ? true : false; 
  whichcard = (flipped === true) ? infoshown: fishshown; 
  cardswticher.innerHTML = whichcard;
  if (flipped) {
    for (let fish of fish_master) {
      details.push(fish.fish_id);
    }} else {
      details = []; 
    }
    output ()
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

//////Showing info page 
function explain () {
  about.style.display = (about.style.display  === "block") ? "none" : "block"; 
  about_button.innerHTML = (about.style.display  === "block") ? abouton: aboutoff;
}

function gotofeedback () {
  feedback.style.display = (feedback.style.display === "block") ? "none" : "block"; 
  feedbackstatus = (feedbackstatus === feedbacknotshown) ? feedbackshown: feedbacknotshown; 
  feedback_button.innerText = feedbackstatus; 
}