// Initialize leaderboard data
let leaderboardData = [];

// Add event listener to form submit
const form = document.getElementById('add-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get input values
  const nameInput = document.getElementById('name-input');
  const scoreInput = document.getElementById('score-input');
  const name = nameInput.value.trim();
  const score = parseInt(scoreInput.value);

  // Validate input
  if (name === '' || isNaN(score)) {
    alert('Please enter valid input');
    return;
  }

  // Add data to leaderboard
  leaderboardData.push({ name, score });
  leaderboardData.sort((a, b) => b.score - a.score);

  // Clear form inputs
  nameInput.value = '';
  scoreInput.value = '';

  // Update leaderboard display
  updateLeaderboard();
});

// Update leaderboard display
function updateLeaderboard() {
  const leaderboard = document.getElementById('leaderboard');

  // Clear current display
  leaderboard.innerHTML = '';

  // Add new data to display
  leaderboardData.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `${index + 1}. ${item.name} - ${item.score}`;
    leaderboard.appendChild(li);
  });
}

// Initialize display
updateLeaderboard();
