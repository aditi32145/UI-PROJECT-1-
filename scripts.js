

// Wheel and timer elements
const container = document.getElementById("wheel"); // The wheel container
const timerElement = document.getElementById("timer");
const progressBar = document.getElementById("progress-bar");
const totalTime = 10; // Total countdown time in seconds
let remainingTime = totalTime;
let countdownTime = 10; // Set countdown timer to 10 seconds
let isSpinning = false; // To prevent overlapping spins
const numbers = document.querySelectorAll('.number');

// Optional: Images to show during scrolling (if needed)
const images = ["img1.png", "img2.png", "img3.png"]; // Replace with actual image URLs
let spinImg = document.getElementById("spin-image"); // Assume an image tag exists
let spinSound = new Audio("sounds/spin.wav"); // Replace with actual spin sound file
// Wheel element
const wheel = document.getElementById("wheel");

// Green circle elements
const greenCircles = document.querySelectorAll(".green-circle");

const timerInterval = setInterval(() => {
    if (remainingTime > 0) {
        remainingTime--;
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        timerElement.textContent = `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

        // Update progress bar
        const progressPercentage = ((totalTime - remainingTime) / totalTime) * 100;
        progressBar.style.width = `${progressPercentage}%`;
    } else {
        clearInterval(timerInterval);
        timerElement.textContent = "00:00";
        progressBar.style.width = "100%"; // Ensure it ends at 100%
    }
}, 1000);

// Start wheel spin (simulation)
function startWheelSpin() {
    let totalRotations = 15 * 360; // Example rotation for the wheel
    spinSound.play();

    // Set transition for gradual slowdown
    wheel.style.transition = "transform 8.2s cubic-bezier(0.1, 1, 0.3, 1)";
    wheel.style.transform = `rotate(${totalRotations}deg)`;
}

// Function to start the green circle animations
function startCircleAnimations() {
    const circles = document.querySelectorAll(".animate-colors");
    circles.forEach((circle) => {
        circle.classList.add("start-animation"); // Add the class to start the animation
    });
}

function addGreenShadow(button) {
    // Remove green shadow from all .outer-circle-1 elements
    document.querySelectorAll('.outer-circle-1').forEach(circle => {
        circle.style.boxShadow = 'none'; // Remove existing shadows
    });

    // Add green shadow to the parent of the clicked button
    const outerCircle = button.parentElement;
    outerCircle.style.boxShadow = '0 0 10px 5px green'; // Add green shadow with 5px border

    // Play the spin sound (if applicable)
    const audio = new Audio('sounds/coin-click.wav'); // Replace 'sound-path.mp3' with your actual file path
    audio.play();
}

// Function to apply the black shadow effect after 30 seconds
function applyBlackShadowAfterDelay() {
    setTimeout(() => {
        // Loop through all numbers
        numbers.forEach(number => {
            if (!number.classList.contains('num_0')) {
                // Apply black shadow to all numbers except `num_0`
                // number.style.boxShadow = '0 0 10px 5px black';
                // number.style.color = 'black'; // Optional: Make text black
                number.style.opacity = '0.5';
                // number.style.backdropFilter = 'invert(100%)';

            } else {
                // Reset styles for `num_0`
                number.style.boxShadow = 'none';
                number.style.color = ''; // Reset text color
            }
        });
    }, 18000); // 30 seconds delay
}

// Call the function to start the timer
applyBlackShadowAfterDelay();

// Trigger green circle animations after the wheel stops
wheel.addEventListener("transitionend", () => {
    // Start animation
    greenCircles.forEach((circle) => {
        circle.classList.add("animate-colors");
    });

    // Stop animation after 5 seconds
    setTimeout(() => {
        greenCircles.forEach((circle) => {
            circle.classList.remove("animate-colors");
        });
    }, 5000);
});

// Start the wheel spin after a delay for demo
setTimeout(() => {
    startWheelSpin();
}, 20000);

// Refresh the page after 20 seconds
// setTimeout(() => {
//   location.reload();
// }, 15000); // 20000 milliseconds = 20 seconds

// Listen for the end of the wheel spin
container.addEventListener("transitionend", () => {
    // Animation starts after the wheel stops spinning
    startCircleAnimations();
});

// Timer Countdown Function
function startTimer() {
    const interval = setInterval(() => {
        // Update timer
        const seconds = countdownTime % 60;
        timerElement.textContent = `00:${String(seconds).padStart(2, "0")}`;

        // When timer reaches 0: stop the countdown and start the wheel spin
        if (countdownTime <= 0) {
            clearInterval(interval);
            timerElement.style.color = "red"; // Optional: Highlight timer when it ends
            startWheelSpin(); // Trigger the wheel spin
        }

        countdownTime--;
    }, 1000); // Update every second
}

// Alternatively, trigger wheel spin after 10 seconds without using the timer
setTimeout(() => {
    if (!isSpinning) {
        startWheelSpin(); // Ensure the spin starts even if the timer isn't used
    }
}, 10000);

// Start the timer
startTimer();
