// Load the pilgrimage places from the JSON file using an AJAX request
function loadPilgrimagePlaces() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'pilgrimage-places.json', true);
  
    xhr.onload = function() {
      if (this.status === 200) {
        const pilgrimagePlaces = JSON.parse(this.responseText);
  
        if (Array.isArray(pilgrimagePlaces)) {
            let output = '';

        // Loop through the pilgrimage places and create HTML elements to display them
        pilgrimagePlaces.forEach(function(place) {
          output += `
            <li>
              <a href="${place.virtualExperienceLink}">
                <img src="${place.image}" alt="${place.name}">
                <h3>${place.name}</h3>
                <p>${place.description}</p>
              </a>
            </li>
          `;
        });
  
        // Add the HTML elements to the page
        const placesList = document.getElementById('places-list');
        placesList.innerHTML = output;
      }
      else {
        console.error('Invalid JSON format');
      }
    } else {
      console.error(`Error loading JSON (${this.status})`);
    }
    }
  
    xhr.send();
  }
  
  // Call the loadPilgrimagePlaces function when the page is loaded
  document.addEventListener('DOMContentLoaded', loadPilgrimagePlaces);
  