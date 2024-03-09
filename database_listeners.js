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
  searchInput.addEventListener("input", function() {  
  const searchTerm = searchInput.value.trim().toLowerCase();

  filteredFish = fish_list.filter(fish => 
    fish.name_english.toLowerCase().includes(searchTerm) ||
    fish.alt_name.toLowerCase().includes(searchTerm)
    );

  console.log(filteredFish);

  if (filteredFish.length == 0 && searchTerm !== "") {
    notfound.style.display = "block"; 
    result_div.innerHTML = '';  
  } else {
  output();
  notfound.style.display = "none"; 
  } 
  }); 
  initialImage ()
  imagechanger.addEventListener("click", imageChange);
  }); 
/////////////////////////////////////Event listeners ends here //////////////////////////////



