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



