let contacts = [];

function addContact() {
    const name = document.getElementById("name").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || phone === "" || email === "") {
        alert("Please fill all fields");
        return;
    }

    const contact = { name, phone, email };
    contacts.push(contact);

    document.getElementById("name").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("email").value = "";

    displayContacts(contacts);
}

function displayContacts(list) {
    const contactList = document.getElementById("contactList");
    contactList.innerHTML = "";

    list.forEach((contact, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <b>${contact.name}</b><br>
            📞 ${contact.phone}<br>
            ✉️ ${contact.email}<br>
            <button class="delete-btn" onclick="deleteContact(${index})">Delete</button>
        `;
        contactList.appendChild(li);
    });
}

function deleteContact(index) {
    contacts.splice(index, 1);
    displayContacts(contacts);
}

function searchContacts() {
    const searchValue = document.getElementById("search").value.toLowerCase();
    const filtered = contacts.filter(contact =>
        contact.name.toLowerCase().includes(searchValue)
    );
    displayContacts(filtered);
}
