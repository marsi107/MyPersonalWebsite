// Get the buttons by their class name
const resumeButtonEn = document.getElementsByClassName("resume-button-en");

// Function to handle the button click event
function handleEnButtonClick(event) {
  // Prevent the default button behavior
  event.preventDefault();
  console.log("Funct entered-------");
  // Open the CV document in a new tab
  window.open("/resources/cv.html"); // Replace with the actual path to your CV document
}

// Attach the event handler to each button
Array.from(resumeButtonEn).forEach((button) => {
  button.addEventListener("click", handleEnButtonClick);
});
