import { useState } from "react";
import React from "react";
import ExpenseDate from "./ExpenseDate";

let ExpenseItems = (props) => {
  let [title, setTitle] = useState(props.title);
  let [changeTitle, setChangeTitle] = useState("");

  let changeHandler = (event) => {
    setChangeTitle(event.target.value);
  };

  let clickHandler = () => {
    setTitle(changeTitle);
  };

  return (
    <div className="max-w-2xl mx-auto mt-6 p-4 sm:p-6 bg-gradient-to-r from-indigo-100 to-purple-100 rounded-3xl shadow-xl border border-indigo-200 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
  {/* Date Column */}
  <div className="sm:order-1 flex justify-center sm:justify-start">
    <ExpenseDate date={props.date} />
  </div>

  {/* Centered Expense Title */}
  <div className="text-center sm:text-left flex-1 sm:order-2">
    <h1 className="text-xl sm:text-2xl font-extrabold text-gray-800 tracking-wide">{title}</h1>
  </div>

  {/* Price on the right */}
  <div className="text-center sm:text-right sm:order-3">
    <h1 className="text-lg sm:text-xl font-bold text-emerald-600 bg-emerald-100 px-4 py-2 rounded-lg shadow-md">{`$${props.cost}`}</h1>
  </div>

  {/* Update Section */}
  <div className="flex flex-col items-center sm:items-end gap-2 sm:order-4">
    <input
      type="text"
      placeholder="Enter new title"
      className="w-full sm:w-auto px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
      onChange={changeHandler}
    />
    <button
      onClick={clickHandler}
      className="w-full sm:w-auto bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
    >
      Update Title
    </button>
  </div>
</div>

  );
};

export default ExpenseItems;
