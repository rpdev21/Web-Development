// Record the start time
const startTime = performance.now(); // High-resolution timestamp

// Schedule a setTimeout with a delay of 100ms
setTimeout(() => {
    const endTime = performance.now(); // Record the time when the callback runs
    const delay = endTime - startTime; // Calculate the actual delay
    console.log(`Scheduled delay: 100ms`);
    console.log(`Actual delay: ${delay.toFixed(2)}ms`);
}, 100);
