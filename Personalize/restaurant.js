// restaurants.js

const restaurantData = [
  {
    name: "Five Guys",
    top: "39%",
    left: "63.9%",
    type: "hamburger",
    review: "Review displayed here."
  },
  {
    name: "Samurai Ramen",
    top: "31%",
    left: "25.8%",
    type: "asian sushi ramen bowl",
    review: "Review displayed here."
  },
  {
    name: "HMBRGR",
    top: "8.9%",
    left: "72.6%",
    type: "hamburger",
    review: "Review displayed here."
  },
  {
    name: "Vapiano",
    top: "56.2%",
    left: "78.9%",
    type: "pasta pizza",
    review: "Review displayed here."
  },
  {
    name: "Xu Noodle Bar",
    top: "46.4%",
    left: "22.8%",
    type: "asian bowl",
    review: "Review displayed here."
  },
  {
    name: "Chidoz",
    top: "92.9%",
    left: "53.6%",
    type: "mexican",
    review: "Review displayed here."
  },
  {
    name: "SojuBar",
    top: "85.1%",
    left: "61.2%",
    type: "chicken",
    review: "Review displayed here."
  },
  {
    name: "Man Nam Bar",
    top: "97.6%",
    left: "85.7%",
    type: "asian chicken",
    review: "Review displayed here."
  },
  {
    name: "Down Town",
    top: "78.3%",
    left: "89.6%",
    type: "asian mexican bowl pizza pasta chicken sushi",
    review: "Review displayed here."
  },
  {
    name: "WawBurger",
    top: "10.7%",
    left: "20.5%",
    type: "hamburger",
    review: "Review displayed here."
  },
  {
    name: "New Oriental",
    top: "11.1%",
    left: "62.2%",
    type: "asian",
    review: "Review displayed here."
  },
  {
    name: "Dadawan",
    top: "61.2%",
    left: "86.5%",
    type: "asian mexican bowl pizza pasta chicken sushi",
    review: "Review displayed here."
  },
  {
    name: "Van't Spit",
    top: "76.5%",
    left: "66.9%",
    type: "chicken",
    review: "Review displayed here."
  },
  {
    name: "Taster",
    top: "86.8%",
    left: "44.2%",
    type: "hamburger",
    review: "Review displayed here."
  },
  {
    name: "Ikigai",
    top: "99.7%",
    left: "35.4%",
    type: "asian sushi",
    review: "Review displayed here."
  }
];

// Copy the data of moved restaurant pins while live
document.getElementById('copy-data-button').addEventListener('click', () => {
  const cleanedData = restaurantData.map(r => ({
    name: r.name,
    top: r.top,
    left: r.left,
    type: r.type,
    review: r.review
  }));

  const jsonString = JSON.stringify(cleanedData, null, 2);

  navigator.clipboard.writeText(jsonString)
    .then(() => alert('Updated data copied to clipboard!'))
    .catch(err => alert('Failed to copy: ' + err));
});
