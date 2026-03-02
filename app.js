// Day 1 - Expense Manager


let expenses = [];

function addExpense(amount, category) {
  expenses.push({ amount, category });
}


function removeExpense(index) {
  if (index >= 0 && index < expenses.length) {
    expenses.splice(index, 1);
  } else {
    console.log("Invalid index");
  }
}


function getTotal() {
  return expenses.reduce((sum, exp) => sum + exp.amount, 0);
}


function getMax() {
  if (expenses.length === 0) return null;
  return expenses.reduce((max, exp) => exp.amount > max.amount ? exp : max);
}

// Example usage
addExpense(200, "Food");
addExpense(100, "Transport");


console.log("All Expenses:", expenses);
console.log("Total Spent:", getTotal());
console.log("Highest Expense:", getMax());

removeExpense(1); // removes Transport
console.log("After Removal:", expenses);
