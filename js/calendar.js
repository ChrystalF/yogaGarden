/* 
This script updates the calendar with the dates of the current month and year to help users book yoga classes.
*/
function updateCalendarDates() {
    let date = new Date();
    let month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    let nameOfMonth = month[date.getMonth()];
    let year = date.getFullYear();
    let calendar = document.getElementById('calendar');
    let currentMonth = date.getMonth();
    let daysInMonth = new Date(year, currentMonth + 1, 0).getDate(); // Get the number of days in the current month
    let firstDayOfMonth = new Date(year, currentMonth, 1).getDay(); // Get the day of the week the first day of the month is
    let calendarDays = calendar.querySelectorAll('.day');
    if (document.getElementById('calendarMonth')) {
      document.getElementById('calendarMonth').innerHTML = nameOfMonth + '&nbsp;' + year + '<br>'; // Updates the current month and year.
    };
    let dateCounter = 1;
    for (let i = 0; i < calendarDays.length; i++) {
      let dayElement = calendarDays[i];
      let appointmentSpans = dayElement.querySelectorAll('.yogaClass');
  
      // Clear the day element before updating with the current month's dates.
      dayElement.innerHTML = '';
      // Ensures that the only days within the current month are processed. 
      if (i >= firstDayOfMonth && dateCounter <= daysInMonth) {
        // Appends the date text node to the corresponding day element in the calendar. 
        dayElement.appendChild(document.createTextNode(dateCounter));
        // Append all appointment spans found in this day
        appointmentSpans.forEach(appointmentSpan => {
          dayElement.appendChild(document.createElement("br")); // Add line break for separation
          dayElement.appendChild(appointmentSpan.cloneNode(true)); // Append a clone of the span
        });
        dateCounter++;
      }
    }
  }
  
  // Call the function when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', () => {
    updateCalendarDates();
  });