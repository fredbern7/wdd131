const d = new Date(document.lastModified);
document.getElementById("last-modified").textContent = d.toLocaleString();;
let currentYear = new Date().getFullYear();
document.getElementById("current-year").textContent = currentYear;