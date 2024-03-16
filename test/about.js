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