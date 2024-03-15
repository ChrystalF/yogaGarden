/*
This script allows customers to book an appointment for a yoga class.
*/



// Retrieve the form elements by their IDs
let vinyasaForm = document.getElementById('vinyasaForm');
let powerForm = document.getElementById('powerForm');
let restorativeForm = document.getElementById('restorativeForm');

// Function to store the appointment time
function storeAppointmentTime(message) {
  localStorage.setItem('bookedTime', message);
}

// Add event listeners to the forms to handle the submit event
vinyasaForm.addEventListener('submit', function() {
  storeAppointmentTime('Vinyasa Yoga 11:30am');
});

powerForm.addEventListener('submit', function() {
  storeAppointmentTime('Power Yoga 1:00pm');
});

restorativeForm.addEventListener('submit', function() {
  storeAppointmentTime('Restorative Yoga 4:30pm');
});