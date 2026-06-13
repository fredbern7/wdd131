
heros = [
    {
        'h1': 'KNCC Home Page',
        'image_large': 'images/hero_large.webp'
    }
 
]

// testings = [
//     {
//         'test': 'Testing 1'
//     },
//     {
//         'test': 'Testing 2'
//     },
//     {
//         'test': 'Testing 4'
//     },
//     {
//         'test': 'Testing 5'
//     }
// ]



createHero(heros);


function createHero(heros) {
    const hero_section = document.querySelector("#hero");
    heros.forEach(hero => {
        let heroDiv = document.createElement("picture");
        let img = document.createElement("img")
        img.setAttribute("src", hero.image_large);
        img.setAttribute("alt", `${hero.h1}`);
        img.setAttribute("loading", "lazy");
        heroDiv.appendChild(img);
        hero_section.appendChild(heroDiv);
        })
    }

// let index = 0
// function createTest(testings) {
//     const div = document.querySelector(".testing");
//     testings.forEach((test, index) => {

//         setTimeout(() => {
//             div.innerHTML = "";
//             const h2 = document.createElement('h2');
//             h2.textContent = test.test;
//             div.appendChild(h2);
//             index = (index + 1)
//         }, 3000 * index);
//     });

// }

// function testing(test) {
//     document.querySelector(".testing").innerHTML = "";
//     h2 = document.createElement('h2')
//     h2.textContent = test.test;
//     document.querySelector(".testing").appendChild(h2);
// }


// createTest(testings);

// `            
//     <picture>
//         <source srcset="images/sokehs-large.webp" media="(min-width: 1000px)">
//         <source srcset="images/sokehs-medium.webp" media="(min-width: 500px)">
//         <img src="images/sokehs-mini.webp" alt="Pohnpei" width="500" height="250">
//     </picture>
// `