/**
 * Function to check the user's selected answer against the correct answer
 * and provide feedback.
 */
function checkAnswer() {
    // 1. Identify the Correct Answer
    const correctAnswer = "4";

    // 2. Retrieve the User’s Answer
    // Select the currently checked radio button with the name="quiz"
    const selectedInput = document.querySelector('input[name="quiz"]:checked');
    
    // Check if an answer was selected before proceeding
    if (!selectedInput) {
        document.getElementById('feedback').textContent = "Please select an answer.";
        return; // Exit the function if no choice is made
    }
    
    const userAnswer = selectedInput.value;

    // 3. Compare the User’s Answer with the Correct Answer
    const feedbackElement = document.getElementById('feedback');
    
    if (userAnswer === correctAnswer) {
        // Correct Answer
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green"; 
    } else {
        // Incorrect Answer
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red";
    }
}

// 4. Add an Event Listener to the Submit Button

// Get the submit button element
const submitButton = document.getElementById('submit-answer');

// Add a click event listener, passing the checkAnswer function as the callback
submitButton.addEventListener('click', checkAnswer);
