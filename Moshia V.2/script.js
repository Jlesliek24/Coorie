
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
  healthValue += 2;
  funValue -= 3;
  thirstValue -= 3;
  foodValue += 5;
  if (healthValue > 100) healthValue = 100;
  if (funValue < 0) funValue = 0;
  if (thirstValue < 0) thirstValue = 0;
  if (foodValue < 0) foodValue = 0;
  updateValues();
}

function drink() {
  thirstValue += 5;
  funValue -= 3;
  healthValue += 2;
  foodValue -= 3;
  if (thirstValue > 100) thirstValue = 100;
  if (funValue < 0) funValue = 0;
  if (healthValue < 0) healthValue = 0;
  if (foodValue < 0) foodValue = 0;
  updateValues();
}

function play() {
  funValue += 5;
  healthValue += 2;
  thirstValue -= 3;
  foodValue -= 3;
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

  // Get HTML elements
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

// Define a conversation object with a greeting and possible responses
const conversation = {
  greeting: {
    text: "Hi there, how can I assist you today?",
    time: "anytime"
  },
  responses: {
    morning: "Good morning! How can I assist you today?",
    afternoon: "Good afternoon! How can I assist you today?",
    evening: "Good evening! How can I assist you today?",
    help: "Sure, I'd be happy to help. What do you need assistance with?",
    product: "Our product is the best in the market. What specific questions do you have about it?",
    pricing: "Our pricing varies depending on the package you choose. Which package are you interested in?",
    contact: "You can reach us by email at support@company.com or by phone at 555-1234. How can I help you further?",
    cancel: "I'm sorry to hear that. Can you please provide more details about why you want to cancel?",
    default: "I'm sorry, I didn't understand. Can you please rephrase or try another question?"
  }
};

// Get current time and define greeting message
const now = new Date();
const currentHour = now.getHours();
let greeting = "";
if (currentHour >= 5 && currentHour < 12) {
  greeting = conversation.responses.morning;
} else if (currentHour >= 12 && currentHour < 18) {
  greeting = conversation.responses.afternoon;
} else {
  greeting = conversation.responses.evening;
}

// Define a function to generate bot responses
function generateBotResponse(userInput) {
  // Convert user input to lowercase and remove whitespace
  const input = userInput.toLowerCase().trim();
  
  // Check if user input matches a response key
  if (conversation.responses.hasOwnProperty(input)) {
    return conversation.responses[input];
  } else {
    return conversation.responses.default;
  }
}

// Display greeting message on chat box
const greetingMessage = document.createElement("div");
greetingMessage.classList.add("bot-message");
greetingMessage.innerHTML = `<p>${greeting}</p>`;
chatBox.appendChild(greetingMessage);

// Define a function to handle user input and generate responses
function handleUserInput() {
  // Get user input and clear input field
  const userInputValue = userInput.value;
  userInput.value = "";
  
  // Check if user input is empty
  if (userInputValue === "") {
    return;
  }
  
  // Display user input on chat box
  const userMessage = document.createElement("div");
  userMessage.classList.add("user-message");
  userMessage.innerHTML = `<p>${userInputValue}</p>`;
  chatBox.appendChild(userMessage);
  
  // Generate bot response based on user input and display on chat box
  const botMessage = document.createElement("div");
  botMessage.classList.add("bot-message");
  botMessage.innerHTML = `<p>${generateBotResponse(userInputValue)}</p>`;
  chatBox.appendChild(botMessage);
  
  // Scroll to bottom of chat box
  chatBox.scrollTop = chatBox.scrollHeight;
}

// Display greeting message and focus on input field
const init = () => {
  const greetingMessage = document.createElement("div");
  greetingMessage.classList.add("bot-message");
  greetingMessage.innerHTML = `<p>${greeting}</p>`;
  chatBox.appendChild(greetingMessage);
  userInput.focus();
};

init();

function sendMessage() {
    // Get the user input and clear the input field
    const userInput = document.getElementById("user-input");
    const message = userInput.value.trim();
    userInput.value = "";
  
    // Create a new message element
    const messageElement = document.createElement("div");
    messageElement.classList.add("message");
    messageElement.innerHTML = message;
  
    // Add the message to the chat box
    const chatBox = document.getElementById("chat-box");
    chatBox.appendChild(messageElement);
  }
  
  function sendMessage() {
    var message = document.getElementById("user-input").value;
    
    // Create a new XMLHttpRequest object
    var xhttp = new XMLHttpRequest();
    
    // Set up a function to handle the response from the server
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // Display the response in the chat box
        document.getElementById("chat-box").innerHTML += "<p>Bot: " + this.responseText + "</p>";
      }
    };
    
    // Open a new request to send the message to the server
    xhttp.open("POST", "server.php", true);
    
    // Set the Content-Type header
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    // Send the message to the server
    xhttp.send("message=" + message);
    
    // Clear the input field
    document.getElementById("user-input").value = "";
  }
  