// Get all radio buttons and the h2 element to display the message
const radioButtons = document.querySelectorAll('input[type="radio"]');
const resultText = document.querySelector("div h2");
let UserScore = 0;
let ComputerScore = 0;

// Function to update the message based on the selected radio button
const updateMessage = () => {
  // Check for the conditions and update the message accordingly
  if (
    document.getElementById("rock-rock").checked ||
    document.getElementById("paper-paper").checked ||
    document.getElementById("scissors-scissors").checked
  ) {
    resultText.textContent = "You Tied!";
  } else if (
    document.getElementById("rock-paper").checked ||
    document.getElementById("paper-scissors").checked ||
    document.getElementById("scissors-rock").checked
  ) {
    resultText.textContent = "You Win!";
    UserScore += 1;
  } else if (
    document.getElementById("rock-scissors").checked ||
    document.getElementById("paper-rock").checked ||
    document.getElementById("scissors-paper").checked
  ) {
    resultText.textContent = "Computer Wins!";
    ComputerScore += 1;
  }

    // Update the score display on the webpage
    document.getElementById("user-score").textContent = UserScore;
    document.getElementById("computer-score").textContent = ComputerScore;
};

// Add event listeners to each radio button
radioButtons.forEach((radio) => {
  radio.addEventListener("change", updateMessage);
});

// Add event listener to the reset button to reset the scores
const resetButton = document.querySelector('.button-24');
resetButton.addEventListener("click", () => {
  UserScore = 0; // Reset the user score
  ComputerScore = 0; // Reset the computer score
  resultText.textContent = ""; // Optionally clear the result message

  // Update the score display on the webpage
  document.getElementById("user-score").textContent = UserScore;
  document.getElementById("computer-score").textContent = ComputerScore;
});
