// 1. Array of images (3 different sample images)
const hobbyImages = [
    "https://picsum.photos/id/10/500/300",  // First image (Nature/Hiking)
    "https://picsum.photos/id/24/500/300",  // Second image (Books/Reading)
    "https://picsum.photos/id/96/500/300"   // Third image (Gaming/Tech)
];

// 2. Track the current index (starts at 0)
let currentIndex = 0;

// Selecting the HTML elements
const galleryImg = document.getElementById('gallery-img');
const nextBtn = document.getElementById('next-btn');

// 3. Event Listener for the button click
nextBtn.addEventListener('click', function() {
    // Increment the index by 1
    currentIndex = currentIndex + 1;

    // 4. Crucial Step: Reset to 0 when reaching the end of the array
    // This prevents the 'undefined' broken image error requested by the professor
    if (currentIndex >= hobbyImages.length) {
        currentIndex = 0; 
        console.log("Array ended! Resetting back to Index 0.");
    }

    // 5. Update the image source (src) attribute
    galleryImg.src = hobbyImages[currentIndex];
    
    // Console log for your grading screenshot requirement
    console.log("Current Index:", currentIndex, "Image URL:", hobbyImages[currentIndex]);
});
