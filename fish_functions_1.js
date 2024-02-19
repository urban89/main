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
  tempmin.value = Math.round((cal_tempmin * 9/5)+32);
  tempmin.min = 39;
  tempmin.max = 95;
  
  
    }
          
  // Conversion from farenheit to celsius [button] 
  function ftoc() {
  let cal_tempmin = parseInt(tempmin.value);
  document.getElementById("min_t").innerHTML = celsius;
  
  console_temperature = celsius;
  tempmin.value = Math.round((cal_tempmin-32)*5/9);
  tempmin.min = 4;
  tempmin.max = 35;
    }
  
  // Select/deselect all [checkboxes] 
  //1 - Select/deselect all
         function selectall_1 () {
        var boxes = document.querySelectorAll('input[name="hardi"]');
        if (all_1.checked == true) {
          boxes.forEach(function(box) {
            box.checked = true;
          });
        } 
        else {
          boxes.forEach(function(box) {
            box.checked = false;
          });
        }
      }
        
  
  //2 - Select/deselect all
  
  
      function selectall_2 () {
        if (all_2.checked == true) {
          verycommon.checked = true; 
          common.checked = true; 
          rare.checked = true; 
          veryrare.checked = true;
        }
     
       else {
  
        verycommon.checked = false; 
        common.checked = false; 
        rare.checked = false; 
        veryrare.checked = false;
  
       }
     
  }
  
  //3 - Select/deselect all - social behavior 
  
  function selectall_3 () {
     
     if (all_3.checked == true) {
      all_select_behavior(social_chbx);
     }
     else {
      all_deselect_behavior(social_chbx);
     }
  }
  
  //4 - Select/deselect all - agresssion 
  function selectall_4 () {
    var boxes = document.querySelectorAll('input[name="agress"]');
    if (all_4.checked == true) {
  
      boxes.forEach(function(box) {
        box.checked = true;
      });
    }
         
    else {
  
      boxes.forEach(function(box) {
        box.checked = false;
      });
    }
  }
  
  //5 - Select/deselect all - breeding
  function selectall_5 () {
    var boxes = document.querySelectorAll('input[name="breed"]');
    if (all_5.checked == true) {
  
      boxes.forEach(function(box) {
        box.checked = true;
      });
    }
         
    else {
  
      boxes.forEach(function(box) {
        box.checked = false;
      });
    }
  }
  