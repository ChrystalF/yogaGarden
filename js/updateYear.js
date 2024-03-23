function updateYear() {
let year = new Date().getFullYear();
document.querySelector('footer').innerHTML = `Copyright &copy; ${year} Chrystal F. All rights reserved.`;
};

window.onload = updateYear;
