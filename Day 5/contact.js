let contacts = {};

const args = process.argv.slice(2);
const command = args[0];

function addContact(name, number) {
  if (contacts[name]) {
    console.log(`Contact "${name}" already exists!`);
  } else {
    contacts[name] = number;
    console.log(`Added contact: ${name} - ${number}`);
  }
}

function searchContact(name) {
  if (contacts[name]) {
    console.log(`Found: ${name} - ${contacts[name]}`);
  } else {
    console.log(`Contact "${name}" not found.`);
  }
}

// Bug: deletes instead of updating
function updateContact(name, newNumber) {
  console.log("Before update:", contacts);
  if (contacts[name]) {
    delete contacts[name]; // bug here
    console.log("After update:", contacts);
    console.log(`Updated: ${name} - ${newNumber}`);
  } else {
    console.log(`Contact "${name}" not found.`);
  }
}

function showAllContacts() {
  console.log("All Contacts:", contacts);
}

if (command === "add") {
  addContact(args[1], args[2]);
} else if (command === "search") {
  searchContact(args[1]);
} else if (command === "update") {
  updateContact(args[1], args[2]);
} else if (command === "list") {
  showAllContacts();
} else {
  console.log("Commands available: add, search, update, list");
}
