
const date = new Date();
document.getElementById("currentyear").innerHTML = date.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];
const select = document.querySelector("#product");

products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.name;
    option.id = product.name;
    option.textContent = product.name;
    select.appendChild(option);
});


// localStorage code here

const formData = document.getElementById("form");

formData.addEventListener('submit', function (event) {
    event.preventDefault();
    const product = document.getElementById("product").value;
    const date = document.getElementById("date").value;
    const review = document.getElementById("review").value;
    const name = document.getElementById("name").value;

    const selectedRadio = document.querySelector('input[name="rating"]:checked');
    const rating = selectedRadio ? selectedRadio.value : '';
    
    const features = [];
    const checkedBoxes = document.querySelectorAll('.checkbox input[type="checkbox"]:checked');
    checkedBoxes.forEach(checkbox => {
        features.push(checkbox.id); 
    });

    const formPayload = {
        product: product,
        rating: rating,
        date: date,
        features: features,
        review: review,
        name: name
    };

    localStorage.setItem('userData', JSON.stringify(formPayload));
    
    // Redirect using the original formData element's action attribute
    window.location.href = formData.getAttribute('action');
});