function ExpenseDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="date">
      <span className="num">{day}</span>
      <span className="text">
        {month} {year}
      </span>
    </div>
  );
}

export default ExpenseDate;
