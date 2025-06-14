import { useState } from "react";

let ExpenseForm = (props) => {
  let [EnterTitle, setTitle] = useState("");
  let [EnterCost, setCost] = useState("");
  let [EnterDate, setDate] = useState("");

  let titleHandler = (event) => {
    setTitle(event.target.value);
  };

  let CostHandler = (event) => {
    setCost(event.target.value);
  };

  let DateHandler = (event) => {
    setDate(event.target.value);
  };

  let submitHandler = (event) => {
    event.preventDefault();
    let EnterExpenses = {
      title: EnterTitle,
      cost: EnterCost,
      date: new Date(EnterDate),
    };

    props.sendData(EnterExpenses);
    setTitle("");
    setCost("");
    setDate("");
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 p-4">
      <form
        className="w-full max-w-lg sm:max-w-md bg-violet-100 p-4 sm:p-6 rounded-xl shadow-lg"
        onSubmit={submitHandler}
      >
        {/* Title and Cost Field in the Same Row */}
        <div className="flex flex-col sm:flex-row sm:space-x-3 mb-3">
          {/* Title Field */}
          <div className="w-full sm:w-1/2 mb-3 sm:mb-0">
            <label className="block text-gray-800 font-semibold mb-1">Title</label>
            <input
              type="text"
              placeholder="Enter title"
              onChange={titleHandler}
              value={EnterTitle}
              className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
              required
            />
          </div>

          {/* Cost Field */}
          <div className="w-full sm:w-1/2">
            <label className="block text-gray-800 font-semibold mb-1">Cost</label>
            <input
              type="number"
              onChange={CostHandler}
              value={EnterCost}
              placeholder="Enter cost"
              className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
              required
            />
          </div>
        </div>

        {/* Date Field on a New Row */}
        <div className="mb-3">
          <label className="block text-gray-800 font-semibold mb-1">Date</label>
          <input
            type="date"
            onChange={DateHandler}
            value={EnterDate}
            className="w-full px-3 py-1.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-violet-600 text-white py-2 rounded-lg hover:bg-violet-700 transition-all duration-200 font-semibold"
        >
          Add Expense
        </button>
      </form>
    </div>
  );
};

export default ExpenseForm;
