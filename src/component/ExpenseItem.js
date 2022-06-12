import ExpenseDate from "./ExpenseDate";
function ExpenseItem(props) {
 
  return (
    <div className="block">
      <ExpenseDate date={props.date} />
      <div className="title">
        <h2>{props.title}</h2>
        <span>&#8377; {props.amount}</span>
      </div>
    </div>
  );
}

export default ExpenseItem;
