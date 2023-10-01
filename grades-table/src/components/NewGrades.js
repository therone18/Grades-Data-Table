import React, {useState} from "react";

export const NewGrades = ({ onClick }) => {


    const [cNum, setCNum] = useState('')
    const [cName, setCName] = useState('')
    const [cUnits, setCUnits] = useState('')

    const handleCNumChange = (event) => {
        setCNum(event.target.value)
    }
    const handleCNameChange = (event) => {
        setCName(event.target.value)
    }
    const handleCUnitsChange = (event) => {
        setCUnits(event.target.value)
    }

    const [radioValue, setRadioValue] = useState ('A')

    const handleRadioChange = (event) => {
        setRadioValue (event.target.value)
    }

    const handleSubmit = () => {
        console.log(cNum)
        console.log(cName)
        console.log(cUnits)
        console.log(radioValue)
    }


  return (
    <div>
      <div>
        <label>Course No.: </label>
        <input type="text"  value={cNum} onChange={handleCNumChange}/>
      </div>
      <div>
        <label>Course Name: </label>
        <input type="text" value={cName} onChange={handleCNameChange}/>
      </div>
      <div>
        <label >Units: </label>
        <input type="number" value={cUnits} onChange={handleCUnitsChange}/>
      </div>
      <div>
        <label>Grade: </label>
        <input type="radio" value="A" checked={radioValue == "A"} onChange={handleRadioChange}/>
        A
        <input type="radio" value="B+" checked={radioValue == "B+"} onChange={handleRadioChange}/>
        B+
        <input type="radio" value="B" checked={radioValue == "B"} onChange={handleRadioChange}/>
        B
        <input type="radio" value="C+" checked={radioValue == "C+"} onChange={handleRadioChange}/>
        C+
        <input type="radio" value="C" checked={radioValue == "C"} onChange={handleRadioChange}/>
        C
        <input type="radio" value="D" checked={radioValue == "D"} onChange={handleRadioChange}/>
        D
        <input type="radio" value="F" checked={radioValue == "F"} onChange={handleRadioChange}/>
      </div>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default NewGrades;
