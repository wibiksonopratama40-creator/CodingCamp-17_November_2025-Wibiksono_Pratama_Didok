document.addEventListener('DOMContentLoaded', () => {

const welcomeNameSpan = document.getElementById('welcome-name');
if (welcomeNameSpan) {
let userName = prompt("Please enter your name:", "");
if (userName === null || userName.trim() === "") {
userName = "Guest";
}
welcomeNameSpan.textContent = userName;
}

const messageForm = document.getElementById('message-form');
if (messageForm) {
messageForm.addEventListener('submit', function(event) {
event.preventDefault();

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const phone = document.getElementById('phone').value;
const message = document.getElementById('message').value;

if (!name || !email || !phone || !message) {
alert('All fields must be filled out.');
return;
}

const now = new Date();
const currentTime = now.toLocaleString('id-ID', {
dateStyle: 'full',
timeStyle: 'medium'
});

document.getElementById('display-time').textContent = currentTime;
document.getElementById('display-name').textContent = name;
document.getElementById('display-email').textContent = email;
document.getElementById('display-phone').textContent = phone;
document.getElementById('display-message').textContent = message;

messageForm.reset();
});
}

const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

if (hamburger && navLinks) {
hamburger.addEventListener('click', () => {
navLinks.classList.toggle('nav-active');
});
}

});