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
    feedback_button.addEventListener("click", gotofeedback);
  
  
  
  document.getElementById("x-about").addEventListener("click", explain);
  document.getElementById("x-feedback").addEventListener("click", gotofeedback);
  
  
    let x_outs = document.querySelectorAll(".x-out");
    x_outs.forEach(div => {
      div.innerHTML = "x"; 
      div.addEventListener("click", function() {
        let parentDiv = div.parentNode;
        let id = parentDiv.id;
        parentDiv.style.display = "none";
      })
      explain();
      gotofeedback(); 
    });
  
    });  /// Eventlisteners end here   