let contacts = {};

const args = process.argv.slice(2);
const command = args[0];

// Utility functions
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

function updateContact(name, newNumber) {
  if (contacts[name]) {
    contacts[name] = newNumber;
    console.log(`Updated: ${name} - ${newNumber}`);
  } else {
    console.log(`Contact "${name}" not found.`);
  }
}

function showAllContacts() {
  console.log("All Contacts:", contacts);
}

// Command handling
if (command === "add") {
  const name = args[1];
  const number = args[2];
  if (!name || !number) {
    console.log("Usage: node contact.js add <name> <number>");
  } else {
    addContact(name, number);
  }
} else if (command === "search") {
  const name = args[1];
  searchContact(name);
} else if (command === "update") {
  const name = args[1];
  const newNumber = args[2];
  updateContact(name, newNumber);
} else if (command === "list") {
  showAllContacts();
} else {
  console.log("Commands available: add, search, update, list");
}

