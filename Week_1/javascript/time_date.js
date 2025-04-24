//console.log(new Date());
// Function to format time as HH:MM:SS
function formatTime(date) {
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const seconds = String(date.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
}

// Function to display the clock
function displayClock() {
    // Clear the console for a dynamic clock effect
    console.clear();

    // Get the current time and format it
    const now = new Date();
    console.log(formatTime(now));
}

// Update the clock every second
setInterval(displayClock, 1000);
