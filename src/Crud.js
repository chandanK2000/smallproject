import React, { useEffect, useState } from "react";
import "./cruds.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

import ReactPaginate from "react-paginate";

const Crud = () => {
  const [getitem, updateiems] = useState([]);
  //getitem

  const getitems = () => {
    fetch("http://localhost:1234/itemlist")
      .then((Response) => Response.json())
      .then((itemarray) => {
        // alert(itemarray.length);
        updateiems(itemarray.reverse());
      });
  };

  useEffect(() => {
    getitems();
  }, [1]);

  // saving items

  const [name, pickname] = useState("");
  const [price, pickprice] = useState("");
  const [qty, pickqty] = useState("");
  const [quality, pickquality] = useState("");
  const [photo, pickphoto] = useState("");

  const handlechange = (event) => {
    const capitalize =
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);

    pickname(capitalize);
  };

  const Saveitems = () => {
    // alert("saving is happening");
    // alert(name);
    // alert(price);
    // alert(qty);
    // alert(quality);
    // alert(photo);

    var newitems = {
      name: name,
      price: price,
      qty: qty,
      quality: quality,
      photo: photo,
    };
    var url = "http://localhost:1234/itemlist";
    if (newitems.name == "") {
      alert("Name is required");
    } else if (!newitems.name.match(/^[A-Za-z]+$/)) {
      alert(
        "Name should contain only alphabetic characters(no any special characters"
      );
    } else {
      axios.post(url, newitems).then((Response) => {
        toast(name + " " + " save successfully");
        getitems();
      });
    }
  };

  // clear texfield;

  const Clear = () => {
    // alert("clear is happening");
    pickname("");
    pickprice("");
    pickqty("");
    pickquality("");
    pickphoto("");
  };

  // delete items

  const Deleteitems = (id, name) => {
    // alert(index);
    var url = "http://localhost:1234/itemlist/" + id;

    const confirmdelete = window.confirm("Are you sure you want to delete ?");

    if (confirmdelete) {
      axios.delete(url).then((response) => {
        const updatedItems = getitem.filter((i) => i !== id);
        toast(name + " " + "Delete Successfully !");
        getitems(updatedItems);
      });
    }
  };

  //search items

  const [searchQuery, setSearchQuery] = useState("");

  const Searchitems = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredItems = getitem.filter((iteminfo) =>
    iteminfo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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

  const PER_PAGE = 4;
  const [currentPage, setCurrentPage] = useState(1);
  function handlePageClick({ selected: selectedPage }) {
    setCurrentPage(selectedPage);
  }
  const offset = currentPage * PER_PAGE;
  const pageCount = Math.ceil(getitem.length / PER_PAGE);
  return (
    <div className="container contents_wrapper">
      <div className="row fixeds">
        <div className="col-lg-4"></div>
        <div className="col-lg-4">
          <div className="border p-2 shadow-sm text-center rounded ">
            <h4 className="text-center text-primary my-3 fst-italic animate__animated  animate__pulse animate__infinite	infinite">
              Enter the Items Details
            </h4>
            <table className="table table-border text-align-justify">
              <tr>
                <th>Name</th>
                <td>
                  <input
                    type="text"
                    placeholder="enter name"
                    value={name}
                    onChange={handlechange}
                  />
                </td>
              </tr>
              <tr>
                <th>Price</th>
                <td>
                  <input
                    type="number"
                    placeholder="price"
                    value={price}
                    onChange={(abc) => pickprice(abc.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <th>Quantity</th>
                <td>
                  {/* <input type="text" placeholder="enter the quantity"  value={qty} onChange={abc=>pickqty(abc.target.value)}/> */}
                  <select
                    value={qty}
                    onChange={(abc) => pickqty(abc.target.value)}
                  >
                    <option>5</option>
                    <option>10</option>
                    <option>15</option>
                    <option>20</option>
                    <option>25</option>
                  </select>
                </td>
              </tr>
              <tr>
                <th>Photo</th>
                <td>
                  <input
                    type="file"
                    placeholder="photo please"
                    value={photo}
                    onChange={(abc) => pickphoto(abc.target.value)}
                  />
                </td>
              </tr>
              <tr>
                <th>Quality</th>
                <td>
                  {/* <input type="text" placeholder="quality" value={quality} onChange={abc=>pickquality(abc.target.value)} /> */}
                  <select
                    value={quality}
                    onChange={(abc) => pickquality(abc.target.value)}
                  >
                    <option>Good</option>
                    <option>Very Good</option>
                    <option>Nice</option>
                    <option>Excellent</option>
                    <option>Bad</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td colSpan={2}>
                  <button
                    className="btn btn-primary btn-sm m-1  fw-lighter"
                    onClick={Saveitems}
                  >
                    Save items
                  </button>
                  <button
                    className="btn btn-primary btn-sm m-1  fw-lighter"
                    onClick={Clear}
                  >
                    Clear Texfield
                  </button>
                </td>
              </tr>
            </table>
          </div>
        </div>
        <div className="col-lg-4"></div>
      </div>
      <div className="row my-4">
        <div className="col-lg-3"></div>
        <div className="col-lg-6">
          <div class="input-group mb-3">
            <input
              onChange={Searchitems}
              type="search"
              className="form-control"
              placeholder=" 🔎
                search ..."
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <button className="input-group-text btn btn-primary">search</button>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
      <div className="row">
        <h4 className="text-center text-warning my-2">
          Total Items :{getitem.length}
        </h4>

        {filteredItems
          .slice(offset, offset + PER_PAGE)
          .map((iteminfo, index) => {
            return (
              <div className="col-lg-3">
                <div className="border p-2 m-1 shadow-sm rounded">
                  <div className="myitems" key={index}>
                    {/* <h6 className="text-center my-3">{iteminfo.name.charAt(0).toUpperCase() + iteminfo.name.slice(1)}</h6> */}
                    <h6 className="text-center my-3">{iteminfo.name}</h6>

                    <img
                      src={iteminfo.photo}
                      width="140px"
                      height="100px"
                      alt="image not found"
                      className="img-thumbnail rounded shadow-sm p-2"
                    />
                    <p>Price :- {iteminfo.price}</p>
                    <p>Quantity:- {iteminfo.qty}</p>
                    <p>quality:- {iteminfo.quality}</p>
                  </div>
                  <div className="text-center">
                    <button
                      className="btn btn-primary m-1 "
                      onClick={Deleteitems.bind(
                        this,
                        iteminfo.id,
                        iteminfo.name
                      )}
                    >
                      Delete
                    </button>

                    <Link
                      to={`/Edititems/${iteminfo.id}`}
                      className="btn btn-primary m-1"
                    >
                      Edit Item
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageClick}
          containerClassName={"pagination justify-content-center"}
          pageClassName={"page-item"}
          pageLinkClassName={"page-link"}
          previousClassName={"page-item"}
          previousLinkClassName={"page-link"}
          nextClassName={"page-item"}
          nextLinkClassName={"page-link"}
          breakClassName={"page-item"}
          breakLinkClassName={"page-link"}
          activeClassName={"active primary"}
        />
      </div>

      <ToastContainer />
    </div>
  );
};

export default Crud;
