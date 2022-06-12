const addButton = (props) => {
    const click = () =>{
        props.onChange();
    };
    return(
       <div className="form button">
            <button onClick={click}>Add New Element</button>
       </div>
    );
};

export default addButton;