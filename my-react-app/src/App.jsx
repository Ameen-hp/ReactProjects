import Expenses from "./Components/Expenses/Expenses";
import Card from "./Components/Ui/Card";
import NewExpense from "./NewExpenses/NewExpense";
import React, { useState } from "react";

let App = () => {
  let Dumy_Expenses = [];

  let [expenses, setExpenses] = useState(Dumy_Expenses);

  let getData = (getExpense) => {
    let UpdateExpenses = [getExpense, ...expenses];
    setExpenses(UpdateExpenses);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-200 to-blue-100 flex justify-center items-center py-6 px-2">
      <Card className="w-full max-w-4xl bg-white rounded-3xl shadow-lg border border-gray-300 p-4 sm:p-6 md:p-8">
        <h1 className="text-xl sm:text-2xl font-extrabold text-center text-indigo-700 mb-4">
          Welcome to Your Expense Tracker
        </h1>

        {/* Form Section */}
        <NewExpense sendData={getData} />

        {/* Expenses Section */}
        <div className="mt-4">
          <Expenses Expense={expenses} />
        </div>
      </Card>
    </div>
  );
};

export default App;
