// Function to handle user registration
function registerUser() {
    // Fetch input values
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const initialInvestment = document.getElementById('initialInvestment').value;

    // Validate input (add more validation logic)
    if (!fullName || !email || !initialInvestment) {
        alert('Please fill in all fields');
        return;
    }

    // Send this data to your server for processing
    // just log the data
    console.log('User Registration Data:', { fullName, email, initialInvestment });

    // Reset the form after successful registration
    document.getElementById('registrationForm').reset();

    // Add any additional logic, e.g., redirecting to a confirmation page
    alert('User registered successfully!');
}

// Function to handle referring a friend
function referFriend() {
    // Fetch input value
    const friendEmail = document.getElementById('friendEmail').value;

    // Validate input (you may add more validation logic)
    if (!friendEmail) {
        alert('Please enter your friend\'s email');
        return;
    }

    // Send this data to your server for processing
    // Just log the data
    console.log('Referral Data:', { friendEmail });

    // Reset the form after a successful referral
    document.getElementById('referralForm').reset();

    // Displaying a confirmation message
    alert('Referral sent successfully!');
}

// Placeholder variables for dashboard data (replace with actual data)
let referralHistory = 0;
let totalEarnings = 0;

// Function to display dashboard data
function updateDashboard() {
    document.getElementById('referralHistory').textContent = referralHistory;
    document.getElementById('totalEarnings').textContent = totalEarnings.toFixed(2);
}

// Function to show referral link (placeholder)
function showReferralLink() {
    // You can replace this alert with actual logic to display the referral link
    alert('Your referral link: https://example.com/referral?user=123');
}

// Placeholder function to simulate fetching dashboard data from the server
function fetchDashboardData() {
    // Replace this with an actual AJAX/fetch request to your server
    // to get the latest dashboard data.
    // For now, let's use dummy data.
    referralHistory = 0;
    totalEarnings = 0;

    // Update the dashboard display
    updateDashboard();
}

// Call fetchDashboardData when the page loads to populate initial data
fetchDashboardData();

// Function to submit contact form
function submitContactForm() {
    // Get form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;

    // Perform validation if needed

    // Example: Displaying an alert with contact details
    alert('Message Submitted!\n\nName: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
}

// Add more functions as needed for different sections

document.addEventListener('DOMContentLoaded', function () {
    // Get the sign-up and log-in buttons
    const signUpButton = document.getElementById('signUpButton');
    const logInButton = document.getElementById('logInButton');

    // Add click event listeners
    signUpButton.addEventListener('click', function () {
        // Replace this with your actual sign-up logic or redirect to the sign-up page
        alert('Sign Up button clicked');
    });

    logInButton.addEventListener('click', function () {
        // Replace this with your actual log-in logic or redirect to the log-in page
        alert('Log In button clicked');
    });
});