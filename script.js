const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg"
]; // Add all your image paths here

let currentIndex = 0;
const displayedImage = document.getElementById('displayedImage');
const imageLink = document.getElementById('imageLink');

// Function to change the image
function changeImage(direction) {
    currentIndex += direction;

    // Loop back to the beginning or end of the array
    if (currentIndex >= images.length) {
           currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    // Update the image source and link href
    displayedImage.src = images[currentIndex];
    imageLink.href = images[currentIndex];
}

// Function to open the full image when clicked
function openFullImage(event) {
    // Prevents the default anchor behavior (e.g. navigating away if href is a real link)
    event.preventDefault(); 
    
    // Open the image in a new tab/window
    window.open(images[currentIndex], '_blank');
}