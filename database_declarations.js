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
let feedbackstatus = feedbacknotshown;
let aboutstatus = aboutoff; 

let details = []; 

let cmtoinch = document.getElementById("cmtoinch");
let searchInput = document.getElementById("searchInput"); 
// let imagechanger = document.getElementById("imagechanger"); 
let result_div = document.getElementById("result");
let sort_select = document.getElementById("sort");
let cap_conversion = document.getElementById("cap_conversion");
let temp_conversion = document.getElementById("temp_conversion");
let notfound = document.getElementById("notfound"); 
let fishcount = document.getElementById("fishcount");
let displayed = document.getElementById("displayed");
let about = document.getElementById("about");
let about_button = document.getElementById("about_button");
let feedback_button = document.getElementById("feedback_button"); 


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
  document.getElementById("dbcount").textContent = maincount;   
  document.getElementById("beginner$").textContent = beginner$$;  
  document.getElementById("easy$").textContent = easy$$; 
  document.getElementById("medium$").textContent = medium$$; 
  document.getElementById("difficult$").textContent = difficult$$; 

  document.getElementById("verycommon$").textContent = verycommon$$;  
  document.getElementById("common$").textContent = common$$; 
  document.getElementById("rare$").textContent = rare$$; 
  document.getElementById("veryrare$").textContent = veryrare$$; 

  document.getElementById("schooling$").textContent = schooling$$;  
  document.getElementById("social$").textContent = social$$; 
  document.getElementById("solitary$").textContent = solitary$$; 

  document.getElementById("peaceful$").textContent = peaceful$$;  
  document.getElementById("mpeaceful$").textContent = mpeaceful$$; 
  document.getElementById("agressive$").textContent = agressive$$; 

  document.getElementById("beasy$").textContent = beasy$$;  
  document.getElementById("bmedium$").textContent = bmedium$$; 
  document.getElementById("bhard$").textContent = bhard$$; 
  document.getElementById("norecord$").textContent = norecord$$; 

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
    // updateBackground();
    // window.addEventListener('resize', updateBackground);
    // // initialImage ()
  });
  document.getElementById("dbcount").textContent = maincount; 
  document.getElementById("dbcount2").textContent = maincount; 

  }); 
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
