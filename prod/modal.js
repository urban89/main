////////////////////////////////////////////////////////////////////////////
//// "MORE" MODULES creation 

function showMore(src, id) {
    // Create the iframe
    const iframe = document.createElement('iframe');
    iframe.className = 'iframe_content';
    iframe.src = src;
    iframe.setAttribute('scrolling', 'no');
    iframe.style.overflow = 'hidden';

       // Inject CSS once the iframe is fully loaded
       iframe.onload = function () {
        const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;

        if (iframeDocument) {
            // Create a new <style> element
            const style = iframeDocument.createElement('style');
            style.type = 'text/css';

            // Add your CSS styles as text content
            style.textContent = `
            .more_section {
              text-shadow: 0.25px 0.25px 0.25px #08d305e8;
            }
            /* Add more CSS rules here if needed */
          `;

            // Append the <style> element to the <head> of the iframe document
            iframeDocument.head.appendChild(style);
        }
    };

    // Create the modal div
    const fish = fish_master.find(fish => fish.fish_id === id);
    
    const modal = document.createElement('div');
    const fishsummary = document.createElement('div');
    const masterline = document.createElement('span');
    const fishname = document.createElement('h1');
    const latin = document.createElement('span');
    const moreimg = document.createElement('img');
    const summarybox = document.createElement('div');
    const bubbleghost = document.createElement('div');

  
    const similar_results = document.createElement('div');
  
    let mintanksize = document.createElement("p");
    let tempinfo = document.createElement("p");
    let sizeinfo = document.createElement("p");
    let hardiness = document.createElement("p");
    let availability = document.createElement("p");
    let social = document.createElement("p");
    let agression = document.createElement("p");
    let breeding = document.createElement("p");
    let origin = document.createElement("p");
    let ph = document.createElement("p");
    let more_console = document.createElement("div");
    let idshown = document.createElement("p");
    let isfishshown = document.createElement("p");

    let altname;
    if (fish.alt_name !== "") {
      altname = document.createElement("p");
    }
  
  
  
    modal.id = 'moreModal';
    modal.className = 'modal';
  
    // Create the modal content div
    const modalContent = document.createElement('div');
    modalContent.className = fish.isfish == 1 ? 'modal_content' : 'modal_content_nonfish';
  
    // Create the close button
    const closeButton = document.createElement('span');
    closeButton.className = 'close_button';
    closeButton.innerHTML = '←';
    closeButton.onclick = function() {
        closeMore(modal);
    };
  
  
  ////Adding classes:
  fishsummary.className = "fishsummary";
  fishname.className = "namesummary";
  latin.className = "latinsummary";
  moreimg.className = "moreimg"; 
  moreimg.src = `webps1/${id}.webp`;
  summarybox.className = "summarybox";
  masterline.className = "masterline";
  bubbleghost.className = "bubbleghost"; 
  
  more_console.className = "moreconsole";
  idshown.className = "moreConsoleText";
  isfishshown.className = "moreConsoleText";
  
  if (altname) {
    altname.className = "mo_infocardtext";
  }
  
  mintanksize.className = "mo_infocardtext";
  tempinfo.className = "mo_infocardtext";
  sizeinfo.className = "mo_infocardtext";
      
  hardiness.className = "mo_infocardtext";
  availability.className = "mo_infocardtext";
  social.className = "mo_infocardtext";
  agression.className = "mo_infocardtext";
  breeding.className = "mo_infocardtext";
  
  
  
  origin.className = "mo_infocardtext";
  
  
  ph.className = "mo_infocardtext";
  
  
  var isfish = (fish.isfish === 1) ? "false" : "true";
  idshown.innerHTML = `species ID: #${id}`;
  isfishshown.innerHTML = `isFish?: ${isfish}`;
  
  let cap = Math.round(((fish.tank_size_liter / cap_modifier) * 10)/10);
  let temp_min = Math.round((fish.temperature_min * temp_modifier1) + temp_modifier2); // checking if ℃ or ℉ is used 
  let temp_max = Math.round((fish.temperature_max * temp_modifier1) + temp_modifier2); // checking if ℃ or ℉ is used
  let card_size_cal = Math.round(fish.cm_max * size_modifier*10)/10; //rounding up potentially converted fish size to 1 decimal place
  let card_size =  sizeFormatter(card_size_cal); //removing ".0" from round numbers 
  let hardi = fish.uncare; 
  let avail = fish.availability; 
  let behave = fish.school; 
  let agres = fish.agression; 
  let breed = fish.breeding_difficulty; 
  
  if (window.innerWidth <= 550) {
    if (altname) {altname.innerHTML = `Alt. name: <span class = "more_param">${uppercaser(fish.alt_name)}</span>`}; 
  mintanksize.innerHTML = `Minimum tank size: <span class = "more_param">${cap} ${console_capacity}</span>`;
  tempinfo.innerHTML = `Temperature: <span class = "more_param">${temp_min}-${temp_max}${console_temperature}</span>`; 
  ph.innerHTML =  `pH: <span class = "more_param">${fish.phmin}-${fish.phmax}</span>`;
  sizeinfo.innerHTML = `Fish size:<span class = "more_param"> ${card_size} ${console_fishsize}</span>`
  hardiness.innerHTML = `Difficulty: <span class = "more_param">${codes_hardi[hardi]}</span>`;
  availability.innerHTML = `Availability: <span class = "more_param">${codes_avail[avail]}</span>`;
  social.innerHTML = `Behavior: <span class = "more_param">${codes_behave[behave]}</span>`;
  agression.innerHTML = `Agression: <span class = "more_param">${codes_agres[agres]}</span>`;
  breeding.innerHTML =  `Breeding: <span class = "more_param">${codes_breed[breed]}</span>`;
  origin.innerHTML = `Origin: <span class = "more_param">${commaRemover(fish.origin)}</span>`; 
  }
  
  else {
    if (altname) {altname.innerHTML = `Alternative name: ${uppercaser(fish.alt_name)}`; }
  mintanksize.innerHTML = `Minimum tank size: <span class = "more_param">${cap} ${console_capacity}</span>`;
  tempinfo.innerHTML = `Water temperature: <span class = "more_param"> ${temp_min}-${temp_max}${console_temperature}</span>`; 
  ph.innerHTML = `pH: <span class = "more_param"> ${fish.phmin}-${fish.phmax}</span>`;
  sizeinfo.innerHTML = `Max fish size: <span class = "more_param"> ${card_size} ${console_fishsize}</span>`;
  hardiness.innerHTML = `Keeping difficulty: <span class = "more_param"> ${codes_hardi[hardi]}</span>`;
  availability.innerHTML = `Purchase availability: <span class = "more_param"> ${codes_avail[avail]}</span>`;
  social.innerHTML = `Social behavior: <span class = "more_param"> ${codes_behave[behave]}</span>`;
  agression.innerHTML = `Agression level: <span class = "more_param"> ${codes_agres[agres]}</span>`;
  breeding.innerHTML =  `Breeding difficulty: <span class = "more_param"> ${codes_breed[breed]}</span>`;
  origin.innerHTML = `Geographical origin: <span class = "more_param"> ${commaRemover(fish.origin)}</span>`; 
  }
  
  
  
  //Obtain fish id here
  
  fishname.innerText = uppercaser(fish.name_english);
  latin.innerText = `(${fish.name_latin})`;
  
  ///////////////////////
  ///Similarity analysis: 
  const similars_ids = []; 
  
  for (const species of fish_master) {
    let similarity_score = 0;
  
  ///Scholing comparison 
  if (fish.school === 1 & fish.school === species.school) {
    similarity_score += 1;
  }
     if (fish.school === species.school & fish.school !== 1) {
      similarity_score += 1; // Exact match
    } else if (Math.abs(fish.school - species.school) < 2) {
      similarity_score += 0.5; // Close match
    } else {
      similarity_score += 0; // No match
    }
  
  
  
    
    // Add the species id and similarity score to the similars array
    similars_ids.push({
      id: species.id,
      score: similarity_score,
      species: species.name_english
    });
  
  }
  
  // Sort the similars array by similarity score in descending order
  similars_ids.sort((a, b) => b.score - a.score);
  console.log(similars_ids);
  
  /////Similarity analysis END
  ////////////////////////////////////////
  
    // Append the close button and iframe to the modal content
    modalContent.appendChild(closeButton);
    fishsummary.appendChild(fishname);
    fishsummary.appendChild(masterline);
  
  
  
    more_console.appendChild(idshown);
    more_console.appendChild(isfishshown);
  
    if (altname) {summarybox.appendChild(altname);}
    summarybox.appendChild(mintanksize);
    summarybox.appendChild(tempinfo);
    summarybox.appendChild(ph);
    summarybox.appendChild(sizeinfo);
    summarybox.appendChild(hardiness);
    summarybox.appendChild(availability);
    summarybox.appendChild(social);
    summarybox.appendChild(agression);
    summarybox.appendChild(breeding);
    summarybox.appendChild(origin);
    
  
    masterline.appendChild(moreimg);
    bubbleghost.appendChild(summarybox);
    // masterline.appendChild(summarybox);
    masterline.appendChild(bubbleghost);
  
  
    modalContent.appendChild(fishsummary);
    // modalContent.appendChild(summarybox);
    modalContent.appendChild(more_console);
    modalContent.appendChild(iframe);
  
  
  
    // Append the modal content to the modal
    modal.appendChild(modalContent);
  
    // Append the modal to the body
    document.body.appendChild(modal);
  
    // Display the modal
    modal.style.display = 'block';
  
    // Disable scrolling on the main page
    document.body.style.overflow = 'hidden';
  
    // Event listener for keydown ESC
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape' || event.key === 'Esc') { // Check if 'ESC' key is pressed
      closeMore(modal); // Call the function to close the modal
    }
  });
  
  document.querySelectorAll('.bubbleghost').forEach(container => {
    // Use setInterval to create bubbles at regular intervals
    setInterval(() => createBubble(container), 500); // Create a bubble every 500ms
  });
  
  }
  
  
  function closeMore(modal) {
    if (modal && modal.parentNode) {
    // Hide the modal
    modal.style.display = 'none';
    // Remove the modal from the DOM
    document.body.removeChild(modal);
    // Re-enable scrolling on the main page
    document.body.style.overflow = 'auto';
  }
  }