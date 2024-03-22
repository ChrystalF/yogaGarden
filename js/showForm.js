/*
  This program retrieves a yoga class registration form and makes it visible.
*/

function showForm(className) {
  var form = document.getElementById(className + 'Form');
  var overlay = document.getElementById('overlay');

  form.style.display = 'block';
  overlay.style.display = 'block';
}
