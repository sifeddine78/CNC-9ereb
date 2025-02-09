const targetDate = new Date("May 22, 2025 08:00:00").getTime();

const countdownFunction = () => {
    const now = new Date().getTime();
    const distance = targetDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `
        <div class="countdown-box">${days}d</div>
        <div class="countdown-box">${hours}h</div>
        <div class="countdown-box">${minutes}m</div>
        <div class="countdown-box">${seconds}s</div>
    `;

    if (distance < 0) {
        clearInterval(interval);
        document.getElementById("countdown").innerHTML = "Countdown has ended";
    }
};

const interval = setInterval(countdownFunction, 1000);