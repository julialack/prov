// 3. Shoppingcart (3p)
// Skriv klart funktionen calculateTotalPrice som tar en array med produkter
// som input och returnerar det totala priset

const products = [
  { name: "Camera", brand: "Canon", model: "EOS_70D", price: 100 },
  { name: "Camera", brand: "Nikon", model: "D3400", price: 120 },
];

const products2 = [
  { name: "Camera", brand: "GoPro", model: "Hero_4", price: 80 },
  { name: "Drone", brand: "DJI", model: "Phantom", price: 50 },
  { name: "Drone", brand: "GoPro", model: "Karma", price: 200 },
];

function calculateTotalPrice(shoppingCart) {
  let cart = [
    { name: "Camera", brand: "Canon", model: "EOS_70D", price: 100 },
    { name: "Camera", brand: "Nikon", model: "D3400", price: 120 },
  ];
  let total = 0;
  for (let item of cart) {
    total += item.price;
  }

  let cart2 = [
    { name: "Camera", brand: "GoPro", model: "Hero_4", price: 80 },
    { name: "Drone", brand: "DJI", model: "Phantom", price: 50 },
    { name: "Drone", brand: "GoPro", model: "Karma", price: 200 },
  ];
  let total2 = 0;
  for (let item of cart2) {
    total2 += item.price;
  }
}

console.log(calculateTotalPrice(products)); // Ska logga 220
console.log(calculateTotalPrice(products2)); // Ska logga 330
