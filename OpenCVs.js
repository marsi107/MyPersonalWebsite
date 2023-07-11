// JavaScript code
document.addEventListener('DOMContentLoaded', function() {
  // Get the English CV button element
  var englishCVButton = document.querySelector('.resume-button-en');
  // Get the Spanish CV button element
  var spanishCVButton = document.querySelector('.resume-button-es');

  // Add click event listener to the button
  englishCVButton.addEventListener('click', function() {
    // Open the English CV document in a new tab
    window.open('resources/CV-Ruben-EN.pdf', '_blank');
  });

  // Add click event listener to the button
  spanishCVButton.addEventListener('click', function() {
    // Open the Spanish CV document in a new tab
    window.open('resources/CV-Ruben-ES.pdf', '_blank');
  });
});
