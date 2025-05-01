import { useState } from "react";
import reactLogo from "./assets/react.svg";
import Form from "./components/Form";
import ExpenseList from "./expence-tracker/components/ExpenseList";
import ExpenseFilter from "./expence-tracker/components/ExpenseFilter";
function App() {
  const [expence, setExpence] = useState([
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
  const [visualExpence, setVaisualExpence] = useState(expence);

  const handleDelete = (id: number) => {
    setExpence((ex) => ex.filter((e) => e.id !== id));
  };

  const onFilter = (category: string) => {
    setVaisualExpence(
      category ? expence.filter((e) => e.category == category) : expence
    );
  };

  return (
    <div>
      {/* <Form /> */}
      <div className="mb-2">
        <ExpenseFilter onSelectCategory={(category) => onFilter(category)} />
      </div>
      <ExpenseList expenses={visualExpence} onDelete={handleDelete} />
    </div>
  );
}

export default App;
