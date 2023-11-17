// Variables to store HTML elements
const $weatherReportLink = document.getElementById('weatherReportLink');
const $lunchRoomLink = document.getElementById('lunchRoomLink');
const $weatherReport = document.getElementById('weatherReport');
const $lunchRoom = document.getElementById('lunchRoom');
const $story = document.getElementById('story');

// Event listener for Weather Report link
$weatherReportLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    
    // Update visibility and active classes
    $weatherReport.classList.remove('d-none');
    $lunchRoom.classList.add('d-none');
    $story.classList.add('d-none');
    $weatherReportLink.classList.add('active');
    $lunchRoomLink.classList.remove('active');
});

// Event listener for Lunch Room link
$lunchRoomLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    
    // Update visibility and active classes
    $lunchRoom.classList.remove('d-none');
    $weatherReport.classList.add('d-none');
    $story.classList.add('d-none');
    $lunchRoomLink.classList.add('active');
    $weatherReportLink.classList.remove('
