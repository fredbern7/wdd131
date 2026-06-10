
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
let option1 = document.createElement("option");
option1.innerHTML = `
    <option value="" disabled>Choose a product ...</option>
   `;
select.appendChild(option1)
for (const product in products) {
    let option = document.createElement("option");
    id = products[product].id;
    name = products[product].name;
    rating = products[product].averagerating;
    option.innerHTML = `
        <option value="${name}" id="${id}">${name}</option>
    `;
    select.appendChild(option);
}

// localStorage code here

