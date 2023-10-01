import "./App.css";
import { tableData } from "./data";
import Table from "./components/Table";
import Searchbar from "./components/Searchbar";
function App() {
  return (
    <div class="main">
      <div class="table-container">
        <Searchbar />
        <Table />
      </div>
    </div>
  );
}

export default App;
