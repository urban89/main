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
  let cal_cap = tank_size.value;
  document.getElementById("size").innerHTML = gallon;
  cap_modifier = 3.785; 
  console_capacity = gallon;
  tank_size.value = Math.round((cal_cap * 0.264172)*10)/10;
  inputAnimation(tank_size);
  }
  }
  
  
  // Conversion from gallon to liter [radio buttons]        
  function gallonliter() {
    if (liter_radio.checked == true) {
  let cal_cap = tank_size.value;
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

/////Background image as initial
function initialImage () {
  let initial = Math.floor(Math.random() * bcimages) + 1;
  currentImage = initial;
  document.body.style.backgroundImage = `url('backgrounds/${initial}.jpg')`; 
}

/////Change background 
function imageChange() {
  if (currentImage === bcimages) {
    currentImage = 1; 
  }
  else {
    currentImage = currentImage+1; 
  }

  document.body.style.backgroundImage = `url('backgrounds/${currentImage}.jpg')`; 
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

