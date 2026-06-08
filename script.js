/**
 * ============================================================================
 * WEEK 11 COMPONENT: INTERACTIVE THEME MANAGEMENT & EVENT SUBSCRIPTION
 * ============================================================================
 */
const themeToggle = document.querySelector('#theme-toggle');

themeToggle.addEventListener('click', function() {
    // Intercept and toggle alternate view matrix rule sheets
    document.body.classList.toggle('light-matrix');
    
    // Evaluate binary state toggles to dynamically correct system button labels
    if (document.body.classList.contains('light-matrix')) {
        themeToggle.textContent = "🌙 Cyber Mode";
    } else {
        themeToggle.textContent = "☀️ Light Matrix";
    }
    
    console.log("[Theme Change Triggered] Alternate Light Matrix Active State: " + document.body.classList.contains('light-matrix'));
});


/**
 * ============================================================================
 * WEEK 12 COMPONENT: SYNCHRONIZED 1:1 IMAGE/TEXT COUNTER ENGINE & GENERATION LOOP
 * ============================================================================
 */

// Dataset Array 1: Image Resource Asset Files (Maps your uploaded project image captures)
const hobbyImages = [
    "1000023614.jpg",  // Index 0: Cherry Blossom Nature Exploration in South Korea
    "1000021998.png",  // Index 1: Bodybuilding & Athletic Fitness Training
    "1000006165.jpg"   // Index 2: Astrophotography & Midnight Horizon Views
];

// Dataset Array 2: Dynamic Descriptions (Includes your Cricket details and your personal updates)
const hobbyDescriptions = [
    "Exploring South Korea: Capturing scenic landscapes and cherry blossom fields during semesters.",
    "Cricket Athletics: Passionate about structural batting strategy, fast-paced matches, and team play.",
    "Astrophotography: Long-exposure midnight deep sky observation and cosmic horizon imaging."
];

// Counter pointer tracing the active database array coordinate parameters
let currentIndex = 0;

// Gather UI layout rendering nodes from DOM
const galleryImg = document.getElementById('gallery-img');
const nextBtn = document.getElementById('next-btn');
const dynamicHobbyList = document.getElementById('dynamic-hobby-list');

/**
 * PROFESSOR'S MANDATE: Loops array content model datasets directly 
 * down through the web UI wrapper layout container elements.
 */
function compileDynamicHobbyList() {
    // Purge inner list buffer code trees entirely to safely prepare redraw recalculations
    dynamicHobbyList.innerHTML = "";
    
    // Iteration sequence scanning array data elements via native standard 'for' loop
    for (let i = 0; i < hobbyDescriptions.length; i++) {
        const li = document.createElement('li');
        li.className = 'hobby-node-item';
        li.textContent = `[SYS-0${i + 1}] ` + hobbyDescriptions[i];
        
        // Guarantees 1:1 logic congruence rules by tracking color focus directly on the matching index key
        if (i === currentIndex) {
            li.style.color = "#00f3ff";
            li.style.fontWeight = "bold";
            li.style.textShadow = "0 0 5px rgba(0, 243, 255, 0.5)";
            li.textContent = ">> ACTIVE: " + hobbyDescriptions[i];
        }
        
        // Append constructed node items line-by-line into the viewport window box
        dynamicHobbyList.appendChild(li);
    }
}

// Fire generation loop operations instantly upon program initialization sequence
compileDynamicHobbyList();

// Process swipe inputs to cycle asset tracks forward sequentially 
nextBtn.addEventListener('click', function() {
    // Shift index offset parameter mapping key coordinate locations
    currentIndex = currentIndex + 1;

    // Out-of-bounds containment block validation to roll back to index zero seamlessly
    if (currentIndex >= hobbyImages.length) {
        currentIndex = 0;
        console.log("[Loop Monitor Alert] Array threshold reached. Index pointer reset back to 0.");
    }

    // Mutate resource attributes inside image canvas viewports
    galleryImg.src = hobbyImages[currentIndex];
    
    // Refresh and trigger redraw sequences inside textual data blocks 
    compileDynamicHobbyList();
    
    // Output runtime trace analytics inside dev tools for system tracking check validation
    console.log(`[Gallery Shift Executed] Current Pointer: ${currentIndex} | File Loaded: ${hobbyImages[currentIndex]}`);
});
