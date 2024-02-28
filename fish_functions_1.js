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

  tank_size_check ()
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
  tank_size_check ()
  }
  }
  
  // Conversion from celsius to farenheit [button]      
  function ctof() {
  let cal_tempmin = parseInt(tempmin.value);
  document.getElementById("min_t").innerHTML = farenheit;
  
  console_temperature =  farenheit;
  tempmin.value = Math.round(((cal_tempmin * 9/5)+32)*10)/10;
  temp_modifier1 = 1.8; 
  temp_modifier2 = 32; 
  tempmin.min = 39;
  tempmin.max = 95;
  
  
    }
          
  // Conversion from farenheit to celsius [button] 
  function ftoc() {
  let cal_tempmin = parseInt(tempmin.value);
  document.getElementById("min_t").innerHTML = celsius;
  
  console_temperature = celsius;
  tempmin.value = Math.round(((cal_tempmin-32)*5/9)*10)/10;
  temp_modifier1 = 1; 
  temp_modifier2 = 0; 
  tempmin.min = 4;
  tempmin.max = 35;
    }


