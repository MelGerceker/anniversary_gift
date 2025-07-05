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


    /**
     *  Star rating system modified from "Cam To"
     * MIT License
     * https://codepen.io/camto28/pen/MOyEvp
     * 
     */

    const ratingWrapper = document.createElement("div");
    ratingWrapper.classList.add("rating-wrapper");
    ratingWrapper.innerHTML = `
  <div class="ratingControl" data-restaurant="${restaurant.name}">
    <input id="${restaurant.name}-100" type="radio" name="rating-${restaurant.name}" value="100">
    <label for="${restaurant.name}-100" title="5 stars"></label>
    <input id="${restaurant.name}-80" type="radio" name="rating-${restaurant.name}" value="80">
    <label for="${restaurant.name}-80" title="4 stars"></label>
    <input id="${restaurant.name}-60" type="radio" name="rating-${restaurant.name}" value="60">
    <label for="${restaurant.name}-60" title="3 stars"></label>
    <input id="${restaurant.name}-40" type="radio" name="rating-${restaurant.name}" value="40">
    <label for="${restaurant.name}-40" title="2 stars"></label>
    <input id="${restaurant.name}-20" type="radio" name="rating-${restaurant.name}" value="20">
    <label for="${restaurant.name}-20" title="1 star"></label>
  </div>
`;
    popup.appendChild(ratingWrapper);


    /**
        const ratingControl = document.createElement('div');
        ratingControl.className = 'ratingControl';
        ratingControl.dataset.restaurant = restaurant.name;
    
        const slug = restaurant.name.toLowerCase().replace(/\s+/g, '-');
        const nameAttr = `rating-${slug}`;
    
        for (let value = 100; value >= 10; value -= 10) {
            const idVal = `${slug}-score${value}`;
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = nameAttr;
            input.value = value;
            input.id = idVal;
    
            // Save rating to localStorage
            input.addEventListener('change', () => {
                localStorage.setItem(`rating-${restaurant.name}`, value);
            });
    
            // show after reload
            const savedRating = localStorage.getItem(`rating-${restaurant.name}`);
            if (savedRating && parseInt(savedRating) === value) {
                input.checked = true;
            }
    
    
            const label = document.createElement('label');
            label.htmlFor = idVal;
            label.title = `${value / 20} Stars`;
    
            ratingControl.appendChild(input);
            ratingControl.appendChild(label);
        }
    
       
        popup.appendChild(ratingControl);
     */
    pin.appendChild(popup);

    // Restore saved rating + listen for changes
    const stars = ratingWrapper.querySelectorAll('input[type="radio"]');
    stars.forEach(star => {
        const saved = localStorage.getItem(`rating-${restaurant.name}`);
        if (saved === star.value) {
            star.checked = true;
        }

        star.addEventListener('change', () => {
            localStorage.setItem(`rating-${restaurant.name}`, star.value);
        });
    });

    /*
        pin.appendChild(icon);
        pin.appendChild(label);
    
        document.querySelector('.map-wrapper').appendChild(pin);
        **/


    pin.addEventListener("mouseenter", () => {
        document.querySelectorAll(".pin").forEach(p => p.classList.remove("show-popup"));
        pin.classList.add("show-popup");
    });

    pin.addEventListener("mouseleave", () => {
        pin.classList.remove("show-popup");
    });

    // If needed, append icon and label too
    pin.appendChild(icon);
    pin.appendChild(label);

    // Append pin to map
    document.querySelector('.map-wrapper').appendChild(pin);
}
