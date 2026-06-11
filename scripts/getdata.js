function getList() {
  return JSON.parse(localStorage.getItem('userData'));
};

const userData = getList();
let name = userData.name
let date = userData.date;
let product = userData.product;
let rating = userData.rating;
let review = userData.review;
const header = document.getElementById('header');
const h1 = document.createElement('h1');
h1.innerHTML = `
    <h1>Thank you ${name} for your humble review...
`;
header.appendChild(h1);
const thankYouPage = document.getElementById('thankyou');
thankYouPage.innerHTML = `
            <p><span class="bold">
                    Date
                </span>: ${date}
            </p>

            <ul>
                <li>
                    <span class="bold">Product</span>: ${product}
                </li>
                <li>
                    <span class="bold">Rating</span>: ${rating}
                </li>
                <li>
                    <span class="bold"></span>
                </li>
                <li>
                    <span class="bold">Review</span>: ${review}
                </li>
            </ul>

`;