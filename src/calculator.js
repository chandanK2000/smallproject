import React, { useState } from "react";
import "./calculator.css";
import Lists from "./Lists";
const Calculators = () => {
  const [result, setresult] = useState("");

  const handleclick = (event) => {
    setresult(result.concat(event.target.value));
  };

  const clearbutton = () => {
    setresult("");
  };

  const calculate = () => {
    setresult(eval(result).toString());
  };

  const deletes = () => {
    setresult(result.slice(0, -1));
  };
  return (
    <div className="container contents_wrapper">
      <div className="row">
        <div className="col-lg-4"></div>
        <div className="col-lg-4 p-4">
          <div className="border p-2 rounded shadow-sm">
            <h5 className="text-center text-primary">
              Simple calculator in Reactjs
            </h5>
            <div className="calc">
              <input type="text" id="answer" placeholder="0" value={result} />
              <input
                type="button"
                value="9"
                className="buttons"
                onClick={handleclick}
              />
              <input
                className="buttons"
                type="button"
                value="8"
                onClick={handleclick}
              />
              <input
                className="buttons"
                type="button"
                value="7"
                onClick={handleclick}
              />
              <input
                className="buttons"
                type="button"
                value="6"
                onClick={handleclick}
              />
              <input
                className="buttons"
                type="button"
                value="5"
                onClick={handleclick}
              />
              <input
                className="buttons"
                type="button"
                value="4"
                onClick={handleclick}
              />
              <input
                className="buttons"
                type="button"
                value="3"
                onClick={handleclick}
              />
              <input
                className="buttons"
                type="button"
                value="2"
                onClick={handleclick}
              />
              <input
                className="buttons"
                type="button"
                value="1"
                onClick={handleclick}
              />
              <input
                className="buttons"
                type="button"
                value="0"
                onClick={handleclick}
              />
              <input
                className="buttons"
                type="button"
                value="00"
                onClick={handleclick}
              />

              <input
                className="buttons"
                type="button"
                value="."
                onClick={handleclick}
              />

              <input
                className="buttons"
                type="button"
                value="+"
                onClick={handleclick}
              />
              <input
                className="buttons"
                type="button"
                value="-"
                onClick={handleclick}
              />
              <input
                className="buttons"
                type="button"
                value="*"
                onClick={handleclick}
              />
              <input
                className="buttons"
                type="button"
                value="/"
                onClick={handleclick}
              />
              <input
                className="buttons"
                type="button"
                value="%"
                onClick={handleclick}
              />
              <input
                className="buttons"
                type="button"
                value="="
                onClick={calculate}
              />
              <input
                className="buttons"
                type="button"
                value="ac"
                onClick={clearbutton}
              />
              <input
                className="buttons"
                type="button"
                value="del"
                onClick={deletes}
              />
            </div>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
      <Lists/>
    </div>
  );
};

export default Calculators;
