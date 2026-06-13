const date = new Date();
document.getElementById("currentyear").innerHTML = date.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

// localStorage code here
const formData = document.getElementById("form");

formData.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const comment = document.getElementById("comment").value;

    const formPayload = {
        name: name,
        email: email,
        comment: comment,
        date: date
    };

    localStorage.setItem('data', JSON.stringify(formPayload));
    
    window.location.href = formData.getAttribute('action');
});