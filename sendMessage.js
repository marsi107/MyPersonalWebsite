// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent default form submission behavior

  // Get form data
  const name = document.getElementById('contact-form').name.value;
  const email = document.getElementById('contact-form').email.value;
  const message = document.getElementById('contact-form').message.value;

  // Perform client-side validation
  if (!name || !email || !message) {
    alert('Please fill in all the fields.');
    return;
  }

  // Prepare the data to be sent to the server
  const formData = {
    name,
    email,
    message
  };

  // TODO: Send the form data to the server using a server-side programming language like Node.js, PHP, etc.
  // You can use AJAX, fetch API, or any other method to send the data to the server endpoint that handles email sending.

  // Clear form inputs
  document.getElementById('contact-form').reset();

  alert('Your message has been sent. Thank you!');
}

// Attach form submit event listener
document.getElementById('contact-form').addEventListener('submit', handleFormSubmit);
