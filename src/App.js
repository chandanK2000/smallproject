// import logo from './logo.svg';
import "./App.css";
// import "./index.css";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Calculators from "./calculator";
import Home from "./home.js";
import Navbars from "./navbars";
import Pagenotfounds from "./pagenotfoun";
import Snapshot from "./Snapshot";
import Emojisearch from "./Emojisearch";
import Crud from "./Crud";
import Tablesearch from "./Tablesearch";
import Edititems from "./Edititems";
import MyForm from "./Myform";
function App() {
  return (
    <div>
      <HashRouter>
        <Navbars />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="Calculators" element={<Calculators />} />
          <Route exact path="*" element={<Pagenotfounds />} />
          <Route exact path="snapshots" element={<Snapshot />} />
          <Route exact path="emojisearch" element={<Emojisearch />} />
          <Route exact path="cruds" element={<Crud />} />
          <Route exact path="tablesearch" element={<Tablesearch />} />
          <Route exact path="/Edititems/:pid" element={<Edititems/>}/>
          <Route exact path="/myform" element={<MyForm/>}/>


        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
