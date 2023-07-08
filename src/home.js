import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MyForm from "./Myform";

const Home = () => {
  const [items, updatitems] = useState([
    "apple",
    "mango",
    "htmo",
    "css",
    "anjali",
  ]);
  const [newitems, pickitems] = useState("");
  const [message, updateMessage] = useState("");
  const [error, setnameerror] = useState("");

  const handlechange = (abc) => {
    pickitems(abc.target.value);
    setnameerror("");
  };

  const save = () => {
    // alert("save is happening");
    if (newitems == "") {
      setnameerror("Name is Required");
    } else if (!newitems.match(/^[A-Za-z]+$/)) {
      setnameerror(
        "Name should contain only alphabetic characters(no any special characters)"
      );
      pickitems("");
    } else {
      updatitems((items) => [newitems, ...items]);
      // updatitems(items=>[...items,newitems]);
      toast(newitems + " " + "Save successfully");
      document.getElementById("focuss").focus();
      pickitems("");
    }
  };

  const deletes = (id, name) => {
    // alert("delete is happening");
    // alert(index);
    items.splice(id, 1);
    updatitems((items) => [...items]);
    toast(name + " " + "Delete successfully");
  };

  const styles = {
    // border:"none",
    boxShadow: "2px 1px 0px grey",
    Outline: "none",
  };
  <ToastContainer
    position="bottom-left"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="light"
  />;

  const abc = {
    border: "1px solid grey",
    padding: "10px",
    boxShadow: "1px 2px 3px orange",
  };

  return (
    <div className="container contents_wrapper">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8 my-2">
          <h3 className="text-primary text-center">
            To Do App – Simple React Project
            <h5 className="my-2 text-success">{message}</h5>
            <h6>Total Items:- {items.length}</h6>
          </h3>
          <div style={abc}>
            <div class="input-group mb-3">
              <input
                style={styles}
                type="search"
                className="form-control"
                placeholder=" 🤗
                Add New + ..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={handlechange}
                value={newitems}
                id="focuss"
              />
              <button
                style={styles}
                className="input-group-text btn btn-primary"
                id="basic-addon2"
                onClick={save}
              >
                Add
              </button>
            </div>
            {error && <p style={{ color: "red" }}>{error}</p>}

            {items.map((iteminfo, id) => {
              return (
                <ul className="list-group">
                  <li key={id} class="list-group-item m-1 shadow-sm">
                    {/* <input
                      type="checkbox"
                      checked={iteminfo.checked}
                      className="me-2"
                    /> */}
                    <i
                      className="fa fa-trash  p-1"
                      onClick={deletes.bind(this, id, iteminfo)}
                    ></i>{" "}
                    {iteminfo}
                  </li>
                </ul>
              );
            })}
          </div>
        </div>
        <div className="col-lg-2"></div>
      </div>
      <ToastContainer />
  
    </div>
  );
};

export default Home;
