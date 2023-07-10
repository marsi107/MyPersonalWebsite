// JavaScript code
document.addEventListener('DOMContentLoaded', function() {
  // Get the Spanish CV button element
  var spanishCVButton = document.querySelector('.resume-button-es');

  // Add click event listener to the button
  spanishCVButton.addEventListener('click', function() {
    // Open the Spanish CV document in a new tab
    window.open('CV-Ruben-ES.pdf', '_blank');
  });
});
