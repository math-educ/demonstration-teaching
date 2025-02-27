function submitQuiz() {
    // Get all the answers
    var q1 = document.getElementById('q1').value;
    // Add more variables for additional questions as needed

    // Check the answers (for demonstration, we assume all answers are correct)
    var score = 0;
    if (q1 == 4) { score++; } // Replace 4 with the correct answer
    // Add more checks for additional questions

    // Display the responses
    var responses = "Question 1: " + q1 + "<br>";
    // Add more responses for additional questions

    document.getElementById('response-output').innerHTML = responses;
    document.getElementById('results').style.display = 'block'; // Show the results
}

// Optional: Clear the responses when the page is reloaded
window.onload = function() {
    document.getElementById('results').style.display = 'none';
};
