import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}
interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length === 0) return null;
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => (
            <tr key={expense.id}>
              <td>{expense.description}</td>
              <td>{expense.category}</td>
              <td className="text-right">{expense.amount}</td>
              <td>
                <button
                  onClick={() => onDelete(expense.id)}
                  className="btn btn-sm btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="fw-bold">
            <td colSpan={2}>Total</td>
            <td>
              {expenses
                .reduce((acc, expenses) => expenses.amount + acc, 0)
                .toFixed(2)}
            </td>
            <td></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
