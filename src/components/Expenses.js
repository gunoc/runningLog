import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "./UI/Card"

function Expenses(props) {
  return (
    
        <Card className="expenses">
          <ExpenseItem
            title={props.items[0].title}
            pin={props.items[0].pin}
            amount={props.items[0].amount}
            date={props.items[0].date}
          />
          <ExpenseItem
            title={props.items[1].title}
            pin={props.items[1].pin}
            amount={props.items[1].amount}
            date={props.items[1].date}
          />
          <ExpenseItem
            title={props.items[2].title}
            pin={props.items[2].pin}
            amount={props.items[2].amount}
            date={props.items[2].date}
          />
          <ExpenseItem
            title={props.items[3].title}
            pin={props.items[3].pin}
            amount={props.items[3].amount}
            date={props.items[3].date}
          />
        </Card>
    
  );
}

export default Expenses;
