// Hover effect on profile image
const profileImage = document.querySelector('.profile-image img');

profileImage.addEventListener('mouseover', () => {
  profileImage.style.transform = 'rotate(10deg) scale(1.1)';
  profileImage.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
});

profileImage.addEventListener('mouseout', () => {
  profileImage.style.transform = 'rotate(0deg) scale(1)';
  profileImage.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
});

// Dynamic text change in the header
const headerText = document.querySelector('header h1 span');
let textArray = ["Maheen Fayyaz", "A Frontend Developer", "A Digital Marketer"];
let textIndex = 0;

function changeText() {
  textIndex = (textIndex + 1) % textArray.length;
  headerText.textContent = textArray[textIndex];
}

// Change the text every 3 seconds
setInterval(changeText, 3000);

// Hover effect on "Contact Me" button
const button = document.querySelector('.hover-effect');

button.addEventListener('mouseover', () => {
  button.textContent = "Let's Connect!";
  button.style.backgroundColor = '#ff4e4e';
  button.style.transform = 'scale(1.1)';
});

button.addEventListener('mouseout', () => {
  button.textContent = "Contact Me";
  button.style.backgroundColor = '#0ea5e9';
  button.style.transform = 'scale(1)';
});

// Display an alert message when the button is clicked
button.addEventListener('click', () => {
  alert('Thanks for visiting my page! Let’s connect.');
});
// Adding hover effect on "Thanks" section
const thanksSection = document.querySelector('.thanks-section');

thanksSection.addEventListener('mouseover', () => {
  thanksSection.style.backgroundColor = '#d1edfa';
  thanksSection.style.transition = 'background-color 0.3s ease-in-out';
});

thanksSection.addEventListener('mouseout', () => {
  thanksSection.style.backgroundColor = '#e8f5fd';
});
