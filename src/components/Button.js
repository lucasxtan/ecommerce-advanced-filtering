function Buttons({handleChange, value, title}) {
    return <button onClick={handleChange} value={value} className="btns">{title}</button>
}

export default Buttons;