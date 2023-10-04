import "./App.css";
import { useState } from "react";
import { tableData } from "./data";
import { BsSearch } from "react-icons/bs";
function App() {
  const [searchValue, setSearchValue] = useState("");
  const [tableInfo, setTableinfo] = useState(tableData);
  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
    if (searchValue.length == 0){
      setTableinfo(tableData)
      console.log("search box empty")
    }
  };

  var totalQPI = 0;

  function QPICalculator() {
    
    var pregrades = [];
    var units = [];
    for (const course of tableInfo) {
      switch (course.courseGrade) {
        case "A":
          pregrades.push(4 * course.courseUnits);
          break;
        case "B+":
          pregrades.push(3.5 * course.courseUnits);
          break;
        case "B":
          pregrades.push(3 * course.courseUnits);
          break;
        case "C+":
          pregrades.push(2.5 * course.courseUnits);
          break;
        case "C":
          pregrades.push(2 * course.courseUnits);
          break;
        case "D":
          pregrades.push(1 * course.courseUnits);
          break;
        case "F":
          pregrades.push(0 * course.courseUnits);
          break;
      }
      units.push(course.courseUnits);
    }
    if (pregrades.length === 0) {
      totalQPI = 0;
    }

    const sum = pregrades.reduce(
      (total, currentValue) => total + currentValue,
      0
    );
    const sumUnits = units.reduce(
      (total, currentValue) => total + currentValue,
      0
    );
    totalQPI = (sum / sumUnits).toFixed(2);
    
  }

  const [cNum, setCNum] = useState("");
  const [cName, setCName] = useState("");
  const [cUnits, setCUnits] = useState("");

  const handleCNumChange = (event) => {
    setCNum(event.target.value);
  };
  const handleCNameChange = (event) => {
    setCName(event.target.value);
  };
  const handleCUnitsChange = (event) => {
    setCUnits(event.target.value);
  };

  const [radioValue, setRadioValue] = useState("A");

  const handleRadioChange = (event) => {
    setRadioValue(event.target.value);
  };

  function addData(newData) {
    setTableinfo([...tableInfo, newData]);
    tableData.push(newData)
    
  }

  function handleAddDataClick() {
    if (cNum.length != 0 && cName.length != 0 && cUnits.length != 0) {
      const newdata = {
        courseNum: cNum,
        courseName: cName,
        courseUnits: Number(cUnits),
        courseGrade: radioValue,
      };
      addData(newdata);
      QPICalculator();

    } else {
      alert("Please input complete course details");
    }
  }

  function handleSearchClick(){
    console.log(searchValue)
    if(searchValue.length !== 0){
      var searchedTableInfo = []
      for (let i=0; i< tableInfo.length; i++){

        

        if (String(tableInfo[i].courseNum).includes(searchValue) || tableInfo[i].courseName.includes(searchValue)){
            searchedTableInfo.push(tableInfo[i]);
        }
      }

      setTableinfo(searchedTableInfo)

      
    }else{
      alert("Search Box Empty")
    }
    
  }
  QPICalculator();
  return (
    <div class="bg-slate-800 text-white flex justify-center space-x-4">
      <div className="flex flex-col p-5 bg-gray-700 rounded-lg drop-shadow-lg">
        <div className="flex justify-center font-bold">Add Course</div>
        <div className="flex flex-col">
          <label>Course No.: </label>
          <input className="text-black" type="text" value={cNum} onChange={handleCNumChange} />
        </div>
        <div className="flex flex-col">
          <label>Course Name: </label>
          <input className="text-black" type="text" value={cName} onChange={handleCNameChange} />
        </div>
        <div className="flex flex-col">
          <label>Units: </label>
          <input className="text-black" type="number" value={cUnits} onChange={handleCUnitsChange} />
        </div>
        <div>Grade: </div>

        <div className="flex">
          <input
            type="radio"
            value="A"
            checked={radioValue == "A"}
            onChange={handleRadioChange}
          />
          <div>A</div>
        </div>

        <div className="flex">
          <input
            type="radio"
            value="B+"
            checked={radioValue == "B+"}
            onChange={handleRadioChange}
          />
          <div>B+</div>
        </div>

        <div className="flex">
          <input
            type="radio"
            value="B"
            checked={radioValue == "B"}
            onChange={handleRadioChange}
          />
          <div>B</div>
        </div>

        <div className="flex">
          <input
            type="radio"
            value="C+"
            checked={radioValue == "C+"}
            onChange={handleRadioChange}
          />
          <div>C+</div>
        </div>

        <div className="flex">
          <input
            type="radio"
            value="C"
            checked={radioValue == "C"}
            onChange={handleRadioChange}
          />
          <div>C</div>
        </div>

        <div className="flex">
          <input
            type="radio"
            value="D"
            checked={radioValue == "D"}
            onChange={handleRadioChange}
          />
          <div>D</div>
        </div>

        <div className="flex">
          <input
            type="radio"
            value="F"
            checked={radioValue == "F"}
            onChange={handleRadioChange}
          />
          <div>F</div>
        </div>
        <button className="bg-green-500 rounded-lg drop-shadow-lg  hover:bg-green-600" onClick={handleAddDataClick}>Submit</button>
      </div>

      <div className="bg-gray-700 flex flex-col p-5 rounded-lg w-2/3 drop-shadow-lg">
      <div className="flex justify-center font-bold">Grades Table</div>
        <div class="space-x-4">
          <label class="search-bar-item">Search for: </label>
          <input
            className="text-black"
            type="text"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Course Number or Name"
          />
          <button class="search-bar-item" onClick={handleSearchClick}>
            
            <BsSearch />
          </button>
        </div>

        <div >
          <div>
            <table className="table-fixed w-full px-2">
              <thead>
                <tr>
                  <th>Course No.</th>
                  <th>Course Name</th>
                  <th>Units</th>
                  <th>Grade</th>
                </tr>
              </thead>
              <tbody>
                {tableInfo.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td>{item.courseNum}</td>
                      <td>{item.courseName}</td>
                      <td>{item.courseUnits}</td>
                      <td>{item.courseGrade}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            
          </div>
          <div className="flex justify-end">Total QPI: {totalQPI} </div>
          
        </div>
      </div>
    </div>
  );
}

export default App;
