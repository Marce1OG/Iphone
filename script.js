// Button 1: "Enter Now" button
const enterButton = document.getElementById('enterBtn');
enterButton.addEventListener('click', function () {
  // Redirect to the giveaway entry page
  window.location.href = 'https://smrturl.co/a/s891740fa8f/805?s1=';
});

// Button 2: "Submit" button in the contact form
const submitButton = document.querySelector('#contactForm button[type="submit"]');
submitButton.addEventListener('click', function (event) {
  // Prevent the default form submission
  event.preventDefault();

  // Redirect to a thank-you page
  window.location.href = 'https://smrturl.co/a/s891740fa8f/805?s1=';
});
