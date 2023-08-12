// import logo from "./logo.svg";
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { itemName: "Scooter", amount: 200000, date: new Date(2023, 7, 11) },
    { itemName: "Groceries", amount: 5000, date: new Date(2023, 4, 25) },
    { itemName: "Mobile phone", amount: 72000, date: new Date(2023, 1, 11) },
  ];

  return (
    <div>
      <h1 className="text-center text-displayOne">Expense Tracker</h1>

      {expenses.map((expense, index) => (
        <ExpenseItem key={index} expense={expense} />
      ))}
    </div>
  );
}

export default App;
