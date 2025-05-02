import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Form from "./components/Form";
import ExpenseList from "./expence-tracker/components/ExpenseList";
import ExpenseFilter from "./expence-tracker/components/ExpenseFilter";
import ExpenseForm from "./expence-tracker/components/ExpenseForm";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "Milk and Bread", amount: 20, category: "Groceries" },
    {
      id: 2,
      description: "Electricity Bill",
      amount: 100,
      category: "Utilities",
    },
    {
      id: 3,
      description: "Netflix Subscription",
      amount: 15,
      category: "Entertainment",
    },
    { id: 4, description: "Vegetables", amount: 30, category: "Groceries" },
    { id: 5, description: "Water Bill", amount: 25, category: "Utilities" },
    {
      id: 6,
      description: "Movie Ticket",
      amount: 12,
      category: "Entertainment",
    },
  ]);
  const [visualExpence, setVaisualExpence] = useState(expenses);
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  const handleDelete = (id: number) => {
    setExpenses(expenses.filter((e) => e.id !== id));
  };

  const onFilter = (category: string) => {
    setVaisualExpence(
      category ? expenses.filter((e) => e.category == category) : expenses
    );
  };

  const addExpense = (expense: any) => {
    setExpenses((prev) => [...prev, { ...expense, id: prev.length + 1 }]);
  };

  return (
    <div>
      {/* <Form /> */}
      <div className="mb-5">
        <ExpenseForm onSubmit={addExpense} />
      </div>
      <div className="mb-2">
        <ExpenseFilter onSelectCategory={setSelectedCategory} />
      </div>
      <ExpenseList expenses={filteredExpenses} onDelete={handleDelete} />
    </div>
  );
}

export default App;
