const currentDate = new Date();
document.getElementById("currentyear").innerHTML = currentDate.getFullYear();
document.getElementById("lastModified").innerHTML = document.lastModified;

function getList() {
  return JSON.parse(localStorage.getItem('data'));
};

const data = getList();
console.log(data);
let name = data.name;
let product = data.email;
let comment = data.comment;
let date = data.date;
const form_message = document.getElementById('message');
form_message.setAttribute('class', 'form_message');
const h2 = document.createElement('h2');
const comment_text = document.createElement('p');
const message_two = document.createElement('p');
const div_comment = document.createElement('div');
message_two.innerHTML = `<span class="bold"> Your Comment</span>: ${comment}`;

h2.textContent = "Message: Comment Submitted.";
comment_text.innerHTML = `Hi ${name}, thank you commenting, we will get back to you as soon as possible.`;
div_comment.appendChild(comment_text);
div_comment.appendChild(message_two);
div_comment.setAttribute('class','div_comment');

const close = document.createElement('div')
close.innerHTML = `<a class="active" href="contacts.html">&#10006;</a>`;
close.setAttribute('id', 'close');

form_message.appendChild(close);
form_message.appendChild(h2);
form_message.appendChild(div_comment);
