

const liter = "L";
const gallon = "gal";
const celsius = "℃";
const farenheit = "℉";
const cm = "cm";
const inch = "inch";
const maincount = fish_master.length; 
const randomIndexes = getRandomIndexes(fish_master);
let temp_modifier1 = 1; 
let temp_modifier2 = 1; 
let cap_modifier = 1;
let size_modifier = 1; 

let console_temperature = celsius; 
let console_capacity = liter; 
let console_fishsize = cm;

const result_div = document.getElementById("result");

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

//adding event listeners 
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("dbcount").textContent = maincount; 

let keylist = ["beginner","easy","medium","difficult","verycommon","common","rare","veryrare",
    "schooling","social","solitary","peaceful","mpeaceful","agressive","beasy","bmedium","bhard","norecord"];

    for (let fish of keylist) {
      document.getElementById(fish + "$").textContent = eval(fish + "$$");  
    }

   
}); // even listeners end here 

  
function perCounter (property, code) {
    let list = []; 
    for (let fish of fish_master) {
      if (fish[property] == parseInt(code)) {
        list.push(fish);
      }
    }
    return `(${Math.round((list.length/maincount)*100)}%)`; 
  }  


  /////////////////4 random integers for example fish cards
  function getRandomIndexes(array) {
    let indexes = new Set(); // Useing a Set to ensure uniqueness
    while(indexes.size < 4) {
      let randomIndex = Math.floor(Math.random() * array.length);
      indexes.add(randomIndex);
    }
    return Array.from(indexes); // Convert the Set to an Array
  }
  

  /////////////////examle fish cards generated 
  function exampleFiller () {
  fish_list = fish_master; 
  let result_lists = document.createElement("div");
  result_lists.className = "column_result"; 

  for (let fish of randomIndexes) {

     //Generating fish card (fish cards are displayed by default)

    let fishid = fish_list[fish].fish_id; 
    let main_card = document.createElement('div'); //container card to hide/show info  
    let fishcard = document.createElement('div'); // fish card for each fish; all the other elements generated will be appended to this 
    let fishname = document.createElement("p");
    let image_element = document.createElement('img');
    let size = document.createElement("span");
    let temp = document.createElement("span"); // temperature in fish card 
    let tanksize = document.createElement("span"); // tank size in fish card 
    let name = uppercaser(fish_list[fish].name_english);

    let temp_min = Math.round((fish_list[fish].temperature_min * temp_modifier1) + temp_modifier2); // checking if ℃ or ℉ is used 
    let temp_max = Math.round((fish_list[fish].temperature_max * temp_modifier1) + temp_modifier2); // checking if ℃ or ℉ is used
    let cap = Math.round(((fish_list[fish].tank_size_liter * cap_modifier) * 10)/10)
    let card_size_cal = Math.round(fish_list[fish].cm_max * size_modifier*10)/10; //rounding up potentially converted fish size to 1 decimal place
    let card_size =  sizeFormatter(card_size_cal); //removing ".0" from round numbers 

   
    image_element.src = `webps1/${fish_list[fish].fish_id}.webp`; //finding webp file for each fish based on fish ID 
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
}



exampleFiller ()
flipListener()









//////////////////////// other funcitons:
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


  /////Slicing comma off from the end for origin string 
function commaRemover (x) {
  if (x.endsWith(",")) {
    return x.slice(0, -1);
  }
  else {
    return x;
  }
  }


  ////Flip the cards 
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