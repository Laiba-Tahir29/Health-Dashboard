// Total daily goal in glasses
const dailyGoal = 8;

// Current consumed glasses
let consumed = 0;

// Increment per click (1 glass)
const increment = 1;

// Get DOM elements
const consumedEl = document.getElementById('consumed');
const remainingEl = document.getElementById('remaining');
const percentageEl = document.getElementById('percentage');
const progressEl = document.getElementById('progress');
const button = document.getElementById('button');
const header = document.getElementById('header');

// Update tracker display
function updateTracker() {
    // Cap at daily goal
    if (consumed > dailyGoal) consumed = dailyGoal;

    const remaining = dailyGoal - consumed;
    const percent = Math.round((consumed / dailyGoal) * 100);

    // Update text (show glasses)
    consumedEl.textContent = consumed;
    remainingEl.textContent = remaining;
    percentageEl.textContent = `${percent}%`;

    // Smoothly animate progress bar width
    progressEl.style.width = `${percent}%`;

    // Goal reached effect
    if (percent === 100) {
        progressEl.style.background = 'linear-gradient(90deg, #4caf50 0%, #2e7d32 100%)';
        header.textContent = "💧 Goal Achieved!";
        button.disabled = true;
        button.style.background = '#1fbe9eff';
        button.style.cursor = 'not-allowed';
    }
}

// Add a glass per click
function addwater() {
    consumed += increment;
    updateTracker();
}

// Initialize
updateTracker();

// Optional: animate water icon bounce on click
button.addEventListener('click', () => {
    const waterIcon = document.querySelector('.water-icon');
    waterIcon.style.transform = 'translateY(-15px)';
    setTimeout(() => {
        waterIcon.style.transform = 'translateY(0)';
    }, 200);
});
