function updateYear() {
let year = new Date().getFullYear();
document.querySelector('footer').innerHTML = `Copyright &copy; ${year} Yoga Garden &nbsp; | &nbsp;
<a href="mailto:emailAddress@EmailService.com">emailAddress@EmailService.com</a>`;
};

window.onload = updateYear;