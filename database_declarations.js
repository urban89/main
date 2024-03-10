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

let details = []; 

let cmtoinch = document.getElementById("cmtoinch");
let searchInput = document.getElementById("searchInput"); 
let imagechanger = document.getElementById("imagechanger"); 
let result_div = document.getElementById("result");
let sort_select = document.getElementById("sort");
let cap_conversion = document.getElementById("cap_conversion");
let temp_conversion = document.getElementById("temp_conversion");
let notfound = document.getElementById("notfound"); 
let fishcount = document.getElementById("fishcount");
let displayed = document.getElementById("displayed");


/////////////////////////////////////
/// Adding initial event listeners 
document.addEventListener("DOMContentLoaded", function() {
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
  cardswticher.addEventListener("click", flipCards);   

  /// Search bar for filtering fish by name 
  searchInput.addEventListener("input",filterFishByName); 
  searchInput.addEventListener("keyup",filterFishByName); 
  }); 
/////////////////////////////////////Event listeners ends here //////////////////////////////



