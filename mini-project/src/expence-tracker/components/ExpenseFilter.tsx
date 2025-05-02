import React from "react";
import categories from "../model/categories";
interface Props {
  onSelectCategory: (category: string) => void;
}
const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div>
      <select
        className="form-select"
        onChange={(event) => onSelectCategory(event.target.value)}
      >
        <option value="">All category</option>
        {categories.map((item: string) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
        {/* <option value="Groceries">Groceries</option>
        <option value="Utilities">Utilities</option>
        <option value="Entertenmient">Entertenmient</option> */}
      </select>
    </div>
  );
};

export default ExpenseFilter;
