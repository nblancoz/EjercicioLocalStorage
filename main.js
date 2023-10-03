const btn = document.getElementById("btn");
const btn2 = document.getElementById("btn2");
const nombre = document.getElementById("name");
const email = document.getElementById("email");
const msj = document.getElementById("msj"); 
let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
const miParrafo = document.getElementById("miParrafo");

btn.addEventListener("click", saveContacts)
btn2.addEventListener("click", del)

function saveContacts(e) {
    e.preventDefault();
    miParrafo.innerHTML = "";
    const person = {
        name: nombre.value,
        email: email.value,
        msj: msj.value
    }
    contacts.push(person);
    localStorage.setItem("contacts", JSON.stringify(contacts));
    let persons = JSON.parse(localStorage.getItem("contacts"));
    for (let i = 0; i < persons.length; i++) {
        const lista = `<ul>
                    <li>${persons[i].name}</li>
                    <li>${persons[i].email}</li>
                    <li>${persons[i].msj}</li>
                </ul>`;
        miParrafo.innerHTML += lista
        
    }
};
function del(e) {
    e.preventDefault();
    localStorage.clear()
};
let contactsSaved = JSON.parse(localStorage.getItem("contacts"));
console.log(contactsSaved);
