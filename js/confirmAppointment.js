/*
    The purpose of this program is to manage appointments. It retrieves form data from local storage and displays
    the confirmation of the yoga class that was booked, along with the date and time.
*/

// Function to update the appointment time message
function updateAppointmentTime() {
    let message = localStorage.getItem('bookedTime');
    let appointmentTime = document.getElementById('appointmentTime');
    if (appointmentTime && message) {
      appointmentTime.innerHTML = message;
      console.log(message);
    }
  }
  
  // Call the function when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    updateAppointmentTime();
  });
