
const ExpenseFilter = (props) =>{
    const dropDownHandler = (event) => {
        props.onFilterChange(event.target.value);
    };
    return (
        <div className="filter-box">
            <div className="top">
                <span>Expense Fiter</span>
                <div>
                <label for="year">Filter By Year</label>
                <select id="year" onChange={dropDownHandler} value={props.selected}>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                </select>
                </div>
            </div>
        </div>
    );
}
export default ExpenseFilter;