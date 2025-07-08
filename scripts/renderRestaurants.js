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

    pin.appendChild(icon);
    pin.appendChild(label);
    pin.appendChild(popup);

    document.querySelector('.map-wrapper').appendChild(pin);
  }

  // Render all restaurants
  window.addEventListener('DOMContentLoaded', () => {
    restaurantData.forEach(createRestaurantPin);
  });
