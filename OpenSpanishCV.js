// Get the buttons by their class name
const resumeButtonEs = document.getElementsByClassName("resume-button-en");

// Function to handle the button click event
function handleEsButtonClick(event) {
  // Prevent the default button behavior
  event.preventDefault();
  
  // Open the CV document in a new tab
  window.open("/resources/cv.html"); // Replace with the actual path to your CV document
}

// Attach the event handler to each button
Array.from(resumeButtonEs).forEach((button) => {
  button.addEventListener("click", handleEsButtonClick);
});
