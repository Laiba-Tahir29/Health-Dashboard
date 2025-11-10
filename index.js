const dailyGoal = 8;
let consumed = 0;
const increment = 1;

const consumedEl = document.getElementById('consumed');
const remainingEl = document.getElementById('remaining');
const percentageEl = document.getElementById('percentage');
const progressEl = document.getElementById('progress');
const button = document.getElementById('button');
const header = document.getElementById('header');

function updateTracker() {
    if (consumed > dailyGoal) consumed = dailyGoal;

    const remaining = dailyGoal - consumed;
    const percent = Math.round((consumed / dailyGoal) * 100);

    consumedEl.textContent = consumed;
    remainingEl.textContent = remaining;
    percentageEl.textContent = `${percent}%`;
    progressEl.style.width = `${percent}%`;

    if (percent === 100) {
        progressEl.style.background = 'linear-gradient(90deg, #4caf50 0%, #2e7d32 100%)';
        header.textContent = "💧 Goal Achieved!";
        button.disabled = true;
        button.style.background = '#018606ff';
        button.style.cursor = 'not-allowed';
    }
}

function addwater() {
    consumed += increment;
    updateTracker();
}

updateTracker();

button.addEventListener('click', () => {
    const waterIcon = document.querySelector('.water-icon');
    waterIcon.style.transform = 'translateY(-15px)';
    setTimeout(() => {
        waterIcon.style.transform = 'translateY(0)';
    }, 200);
});
