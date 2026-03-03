let expenses = [];

const args = process.argv.slice(2); 

const command = args[0]; 

// Utility functions
function addExpense(amount, category) {
  expenses.push({ amount: parseFloat(amount), category });
  console.log(`Added expense: ₹${amount} for ${category}`);
}

function showTotal() {
  const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  console.log(`Total Spent: ₹${total}`);
}

function showMax() {
  if (expenses.length === 0) {
    console.log("No expenses yet.");
    return;
  }
  const max = Math.max(...expenses.map(exp => exp.amount));
  console.log(`Highest Expense: ₹${max}`);
}

// Command handling
if (command === "add") {
  const amount = args[1];
  const category = args[2];
  if (!amount || !category) {
    console.log("Usage: node app.js add <amount> <category>");
  } else {
    addExpense(amount, category);
  }
} else if (command === "total") {
  showTotal();
} else if (command === "max") {
  showMax();
} else {
  console.log("Commands available: add, total, max");
}
