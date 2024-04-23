function Buttons({ handleChange, selectedCompany, value, title }) {
    return (
        <div className="recommended-container">
            <button onClick={handleChange} value={value} className={`btns ${selectedCompany?.includes(value) ? "active" : ""}`}>{title}</button>
            <span classname="recommended-btn"></span>
        </div>
    )
}

export default Buttons;