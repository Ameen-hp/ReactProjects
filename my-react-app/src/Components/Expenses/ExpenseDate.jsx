import React from "react";
let ExpenseDate = (props) => {
    let date = props.date;
    let month = date.toLocaleString("default",{month:"long"});
    let day = date.getDate();
    let year = date.getFullYear();
    return (

    <div className="flex flex-col  items-start text-sm space-y-1">
    <span className="text-indigo-700 font-bold">{month}</span>
    <span className="text-pink-600 font-semibold">{day}</span>
    <span className="text-purple-700 font-medium">{year}</span>
  </div>
    )
}

export default ExpenseDate;