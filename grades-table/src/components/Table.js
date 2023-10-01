import React, { useEffect, useState } from "react";
import { tableData } from "../data";
import NewGrades from "./NewGrades";

export const Table = () => {
  const [tableInfo, setTableinfo] = useState(tableData);

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
    console.log(totalQPI);
  }

  QPICalculator();

  function addData(newData) {
    setTableinfo([...tableInfo, newData]);
  }

  function handleAddData(newCourseData) {
    addData(newCourseData);
    QPICalculator();
  }

  return (
    <div>
      <div>
        <table>
          <thead>
            <tr>
              <th>Course No.</th>
              <th>Course Name</th>
              <th>Units</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => {
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
        <div>Total QPI: {totalQPI}</div>
      </div>
      <div>
        <NewGrades onClick={handleAddData}/>
      </div>
    </div>
  );
};

export default Table;
