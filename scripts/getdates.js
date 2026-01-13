const d = new Date("July 21, 1983 01:15:00");
let lastModified = `${d.getMonth()}/${d.getDate()}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
document.getElementById("last-modified").textContent = lastModified;