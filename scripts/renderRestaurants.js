function initStarRatings() {
  document.querySelectorAll('.star-rating').forEach(container => {
    const id = container.dataset.id || 'global';
    const saved = localStorage.getItem(`rating-${id}`);
    if (saved) updateStars(container, parseInt(saved));

    container.querySelectorAll('.star').forEach(star => {
      const value = parseInt(star.dataset.value);
      star.addEventListener('click', () => {
        localStorage.setItem(`rating-${id}`, value);
        updateStars(container, value);
      });

      star.addEventListener('mouseenter', () => updateStars(container, value));
      star.addEventListener('mouseleave', () => {
        const saved = localStorage.getItem(`rating-${id}`) || 0;
        updateStars(container, parseInt(saved));
      });
    });
  });
}

function createRestaurantPin(restaurant) {
  const pin = document.createElement('div');
  pin.className = 'pin';
  pin.dataset.type = restaurant.type;
  pin.style.top = restaurant.top;
  pin.style.left = restaurant.left;

  const icon = document.createElement('img');
  icon.src = 'assets/restaurant_pin.png';
  icon.className = 'icon';

  const label = document.createElement('span');
  label.className = 'label';
  label.textContent = restaurant.name;

  const popup = document.createElement('div');
  popup.className = 'popup-card';

  const title = document.createElement('h3');
  title.textContent = restaurant.name;

  const review = document.createElement('p');
  review.textContent = restaurant.review;

  popup.appendChild(title);
  popup.appendChild(review);

  // Star rating
  const starRating = document.createElement('div');
  starRating.className = 'star-rating';
  starRating.dataset.id = restaurant.name;

  for (let i = 0; i < 5; i++) {
    const star = document.createElement('span');
    star.classList.add('star');
    star.dataset.value = i + 1;
    star.innerHTML = `
      <svg viewBox="0 0 24 24">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 
                 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>`;
    starRating.appendChild(star);
  }

  popup.appendChild(starRating);
  console.log("Added star rating to:", restaurant.name);


  pin.appendChild(icon);
  pin.appendChild(label);
  pin.appendChild(popup);

  document.querySelector('.map-wrapper').appendChild(pin);
  initStarRatings(); // here?

}



function updateStars(container, rating) {
  if (!container) return;
  container.querySelectorAll('.star').forEach(star => {
    const value = parseInt(star.dataset.value);
    star.classList.toggle('filled', value <= rating);
  });
}



// Render all restaurants
window.addEventListener('DOMContentLoaded', () => {
  restaurantData.forEach(createRestaurantPin);

});
