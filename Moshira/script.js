
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

// Get the progress bar element
const progressBar = document.querySelector('.progress-bar');

// Set the initial progress value
let progressValue = 5;

// Update the progress bar with the current progress value
function updateProgressBar() {
  progressBar.style.width = `${progressValue}%`;
}

// Increase the progress value by a given amount
function increaseProgress(amount) {
  progressValue += amount;
  
  // Clamp the progress value between 0 and 100
  progressValue = Math.max(0, Math.min(progressValue, 100));
  
  // Update the progress bar
  updateProgressBar();
}

// Add event listeners to buttons
document.getElementById('food-btn').addEventListener('click', () => {
  // Increase food progress by 10
  increaseProgress(5);
});

document.getElementById('drink-btn').addEventListener('click', () => {
  // Increase thirst progress by 10
  increaseProgress(5);
});

document.getElementById('play-btn').addEventListener('click', () => {
  // Increase fun progress by 10
  increaseProgress(5);
});


// Retrieve selected character and name from localStorage
const selectedCharacter = localStorage.getItem('selectedCharacter');
const selectedCharacterName = localStorage.getItem('selectedCharacterName');

// Set the selected character and name in the HTML
document.getElementById('character-img').src = selectedCharacter;
document.getElementById('character-name').textContent = selectedCharacterName;

