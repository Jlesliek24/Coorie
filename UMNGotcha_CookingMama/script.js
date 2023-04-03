
const characterImgs = document.querySelectorAll('.character-img');
const nextPageBtn = document.getElementById('start-btn');
const characterNameInput = document.getElementById('character-name');

// Event listener for character images
characterImgs.forEach((img) => {
  img.addEventListener('click', () => {
    // Remove 'selected' class from all images
    characterImgs.forEach((img) => img.classList.remove('selected'));
    // Add 'selected' class to the clicked image
    img.classList.add('selected');
    
    // Enable start button
    nextPageBtn.disabled = false;
  });
});

// Event listener for next page button
nextPageBtn.addEventListener('click', () => {
  // Get selected character and character name
  const selectedCharacter = document.querySelector('.character-img.selected');
  const selectedCharacterName = characterNameInput.value;
  
  // Save selected character and character name to localStorage
  localStorage.setItem('selectedCharacter', selectedCharacter.src);
  localStorage.setItem('selectedCharacterName', selectedCharacterName);
  
  // Navigate to next page
  window.location.href = 'page2.html';
});

//Page1 end

let thirstValue = 50;
      let funValue = 50;
      let healthValue = 50;
      let foodValue = 50;

      function updateValues() {
        document.getElementById("thirst-value").innerHTML = thirstValue;
        document.getElementById("fun-value").innerHTML = funValue;
        document.getElementById("health-value").innerHTML = healthValue;
        document.getElementById("food-value").innerHTML = foodValue;
      }

      function eat() {
        healthValue += 1;
        funValue -= 1;
        thirstValue -= 1;
        foodValue -= 1;
        if (healthValue > 100) healthValue = 100;
        if (funValue < 0) funValue = 0;
        if (thirstValue < 0) thirstValue = 0;
        if (foodValue < 0) foodValue = 0;
        updateValues();
      }

      function drink() {
        thirstValue += 1;
        funValue -= 1;
        healthValue -= 1;
        foodValue -= 1;
        if (thirstValue > 100) thirstValue = 100;
        if (funValue < 0) funValue = 0;
        if (healthValue < 0) healthValue = 0;
        if (foodValue < 0) foodValue = 0;
        updateValues();
      }

      function play() {
        funValue += 1;
        healthValue -= 1;
        thirstValue -= 1;
        foodValue -= 1;
        if (funValue > 100) funValue = 100;
        if (healthValue < 0) healthValue = 0;
        if (thirstValue < 0) thirstValue = 0;
        if (foodValue < 0) foodValue = 0;
        updateValues();
      }


// Retrieve selected character and name from localStorage
const selectedCharacter = localStorage.getItem('selectedCharacter');
const selectedCharacterName = localStorage.getItem('selectedCharacterName');

// Set the selected character and name in the HTML
document.getElementById('character-img').src = selectedCharacter;
document.getElementById('character-name').textContent = selectedCharacterName;


function talk() {
  window.location.href = "page3.html";
}

//Page2 end
