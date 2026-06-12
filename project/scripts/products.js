const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
	mainnav.classList.toggle('show');
	hambutton.classList.toggle('show');
});

const products = [
  {
    name: "Turtle",
    description: "10 inches turtle good small size to have in your office.",
    price: "10",
    imageUrl:
    "images/turtle.webp",
    filter: "turtle"
  },
  {
    name: "Shark",
    description: "12 inches grouper good small size to have in your office.",
    price: "10",
    imageUrl:
    "images/shark.webp",
    filter: "shark"
  },
  {
    name: "Small Fish",
    description: "6 inches length for each of them. ",
    price: "5 each",
    imageUrl:
    "images/small-fish.webp",
    filter: "fish"
  },
  {
    name: "Shark",
    description: "15 inches shark",
    price: "35",
    imageUrl:
    "images/shark-two.webp",
    filter: "shark"
  },
  {
    name: "Small Turtles",
    description: "5 inches turtles.",
    price: "5 each",
    imageUrl:
    "images/small-turtles.webp",
    filter: "turtle"
  },
  {
    name: "Tray",
    description: "8 inches heigh 14 inches long tray. Hang in you office",
    price: "35",
    imageUrl:
    "images/tray-one.webp",
    filter: "shark"
  },
  {
    name: "Small Canoe",
    description: "10 inches long canoe",
    price: "10",
    imageUrl:
    "images/canoe-a.webp",
    filter: "canoe"
  },
  {
    name: "Hook",
    description: "13 inches hook",
    price: "10",
    imageUrl:
    "images/hook-one.webp",
    filter: "hook"
  },
  {
    name: "Cup",
    description: " 5 inches cup.",
    price: "20 each",
    imageUrl:
    "images/cups.webp",
    filter: "cup"
  },
  {
    name: "Purse",
    description: "Size: 4in x 7in. Handmade purse",
    price: "28.75",
    imageUrl:
    "images/purse.webp",
    filter: "purse"
  },
  {
    name: "Hammock",
    description: "10 feet long hammock and max-width of 5 feet.",
    price: "10",
    imageUrl:
    "images/hammock.webp",
    filter: "hammock"
  },
  {
    name: "Ill Trab",
    description: "Size: 20in x 14in trap.",
    price: "10",
    imageUrl:
    "images/trap.webp",
    filter: "trap"
  },
  {
    name: "tuna",
    description: "36 inches tuna",
    price: "175",
    imageUrl:
    "images/tuna.webp",
    filter: "shark"
  },
  {
    name: "Lei",
    description: "- brown flowers",
    price: "10",
    imageUrl:
    "images/lei.webp",
    filter: "lei"
  }
  ,
  {
    name: "Lei",
    description: "- red flowers",
    price: "10",
    imageUrl:
    "images/lei-two.webp",
    filter: "lei"
  }
  ,
  {
    name: "Lei",
    description: "- yellow and red flowers",
    price: "10",
    imageUrl:
    "images/lei-three.webp",
    filter: "lei"
  },
  {
    name: "Lei",
    description: "- blue and yellow flowers",
    price: "10",
    imageUrl:
    "images/lei-four.webp",
    filter: "lei"
  }
];

// const homePage = document.getElementById("home");
// const oldTemple = document.getElementById("old");
// const newTemple = document.getElementById("new");
// const large = document.getElementById("large");
// const small = document.getElementById("small");

// homePage.addEventListener('click', function(even) {
//   event.preventDefault();
//   console.log("home");
//   document.querySelector(".images-container").innerHTML = ""
//   createTempleCard(temples);
// });

// oldTemple.addEventListener('click', function(even) {
//   event.preventDefault();
//   document.querySelector(".images-container").innerHTML = ""
//   createTempleCard(temples.filter(temple => parseInt(temple.dedicated) <= 2000));
// });

// newTemple.addEventListener('click', function(even) {
//   event.preventDefault();
//   document.querySelector(".images-container").innerHTML = ""
//   createTempleCard(temples.filter(temple => parseInt(temple.dedicated) >= 2000));
// });

// large.addEventListener('click', function(even) {
//   event.preventDefault();
//   document.querySelector(".images-container").innerHTML = ""
//   createTempleCard(temples.filter(temple => temple.area >= 90000));
// });

// small.addEventListener('click', function(even) {
//   event.preventDefault();
//   document.querySelector(".images-container").innerHTML = ""
//   createTempleCard(temples.filter(temple => temple.area <= 10000));
// });

createProductCard(products);

function createProductCard(products) {

    products.forEach(product => {
        let card = document.createElement("section");
        card.setAttribute("class",product.filter)
        let name = document.createElement("h2");
        let description = document.createElement("p");
        let price = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = product.name;
        description.innerHTML = `<span class="label"> Description:</span> ${product.description}`;
        price.innerHTML = `<span class="label"> Price:</span> $${product.price}`;
        img.setAttribute("src", product.imageUrl);
        img.setAttribute("alt", `${product.name}`);
        img.setAttribute("loading", "lazy");

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(description);
        card.appendChild(price);
        
        
        document.querySelector(".images-container").appendChild(card);
    })
}