import React  from "react"
import ExpenseItems from "./ExpenseItems"
let Expenses = (props) => {
   //  let getExpense = props.Expense
   //  console.log(getExpense)
     return (
        <div>
 
       {
  props.Expense.map((getExpense, index) => {
    return (
<ExpenseItems 
  key={getExpense.id || index} // ✅ Use id if available, or index as fallback
  date={getExpense.date}
  title={getExpense.title}
  cost={getExpense.cost}
/>
    );
  })
}


        {/* <ExpenseItems date={getExpense[1].date} title={getExpense[1].title} cost={getExpense[1].cost} />
        <ExpenseItems date={getExpense[2].date} title={getExpense[2].title} cost={getExpense[2].cost} />
        {/* <ExpenseItems date={Expenses[3].date} title={Expenses[3].title} cost={Expenses[3].cost} /> */}
           
        </div>
     )
}

export default Expenses