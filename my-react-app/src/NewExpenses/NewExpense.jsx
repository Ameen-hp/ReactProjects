import ExpenseForm from "./ExpenseForm";
import App from "../App"
let NewExpense = (props) => {
    let getData = (reciveData) => {
          let  UpdateRecivedData = {
            ...reciveData,
            id: Math.random().toString()
          }
          props.sendData(UpdateRecivedData);
    }
    return (
        <div> 
         <ExpenseForm sendData={getData}/>
         
        </div>
    )
}


export default NewExpense;