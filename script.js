// Function to toggle between dark mode and light mode
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');

  // Store the theme preference in local storage
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('dark-mode-preference', isDarkMode);
}

// Event listener for the theme toggle
document.getElementById('theme-toggle').addEventListener('change', function () {
  toggleTheme();
});

// Function to set the initial theme based on user preference
function setInitialTheme() {
  const isDarkMode = localStorage.getItem('dark-mode-preference') === 'true';
  const body = document.body;

  if (isDarkMode) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }

  // Update the switch state based on the theme
  document.getElementById('theme-toggle').checked = isDarkMode;

  // Show the toggle switch after applying the initial theme
  document.querySelector('.theme-toggle').style.visibility = 'visible';
}

// Call the setInitialTheme function when the page loads
window.addEventListener('load', setInitialTheme);

// Your existing dice game logic here
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var imageDice1 = 'images/dice' + randomNumber1 + '.png';
document.querySelectorAll('img')[0].setAttribute('src', imageDice1);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageDice2 = 'images/dice' + randomNumber2 + '.png';
document.querySelectorAll('img')[1].setAttribute('src', imageDice2);

if (randomNumber1 > randomNumber2) {
  document.querySelector('h1').innerHTML = '🚩 Player 1 wins!';
} else if (randomNumber2 > randomNumber1) {
  document.querySelector('h1').innerHTML = 'Player 2 wins! 🚩';
} else {
  document.querySelector('h1').innerHTML = 'Draw!';
}
