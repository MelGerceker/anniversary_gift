const starContainer = document.getElementById("starRating");
const ratingText = document.getElementById("ratingText");
let currentRating = 0;

const createStar = (index) => {
    const span = document.createElement("span");
    span.classList.add("star");
    span.dataset.value = index + 1;
    span.innerHTML = `
        <svg viewBox="0 0 24 24">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 
                   9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>`;
    return span;
};

const updateStars = (rating) => {
    document.querySelectorAll(".star").forEach(star => {
        star.classList.toggle("filled", parseInt(star.dataset.value) <= rating);
    });
    ratingText.textContent = `You rated: ${rating} star${rating > 1 ? "s" : ""}`;
};

// Load
const saved = localStorage.getItem("userRating");
if (saved) {
    currentRating = parseInt(saved);
}

for (let i = 0; i < 5; i++) {
    const star = createStar(i);

    star.addEventListener("click", () => {
        currentRating = i + 1;
        updateStars(currentRating);
        localStorage.setItem("userRating", currentRating); // Save only on click
    });

    star.addEventListener("mouseenter", () => updateStars(i + 1));
    star.addEventListener("mouseleave", () => updateStars(currentRating));

    starContainer.appendChild(star);
}

updateStars(currentRating);
