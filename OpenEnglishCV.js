// JavaScript code
document.addEventListener('DOMContentLoaded', function() {
  // Get the English CV button element
  var englishCVButton = document.querySelector('.resume-button-en');

  // Add click event listener to the button
  englishCVButton.addEventListener('click', function() {
    // Open the English CV document in a new tab
    window.open('resources/CV-Ruben-EN.pdf', '_blank');
  });
});
