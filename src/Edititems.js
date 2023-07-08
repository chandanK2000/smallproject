import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Edititems = () => {

    const {pid}=useParams();
    
    const [pname,pickname]=useState("");
    const [pprice,pickprice]=useState("");
    const [pqty,pickqty]=useState("");
    const [pquality,pickquality]=useState("");
    const [pphots,pickphoto]=useState("");

    const handlechange=(event)=>{
      const capitalize=
      event.target.value.charAt(0).toUpperCase() + event.target.value.slice(1);
  
      pickname(capitalize);
    }

    const GetitemsInfo=()=>{
        var url="http://localhost:1234/itemlist/"+pid;
        fetch(url)
        .then(response=>response.json())
        .then(iteminfos=>{
            pickname(iteminfos.name);
            pickprice(iteminfos.price);
            pickqty(iteminfos.qty);
            pickquality(iteminfos.quality);
            pickphoto(iteminfos.photo);

        })
    }

    useEffect(()=>{
        GetitemsInfo();
    },[1]);

    
    // to save

    const Updateitems=()=>{
        var url ="http://localhost:1234/itemlist/"+pid;
        var itemdata={
                 "name": pname,
                "price": pprice,
                "qty": pqty,
                "quality":pquality,
                "photo":pphots,
              
        };
        axios.put(url,itemdata)
        .then(response=>{
            toast(pname+" "+"updataed successfully");  
        
        })

    }
    // goback

    const navigate=useNavigate();



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
/>
  return (
    <div className='container my-3'>
        <div className='row'>
            <div className='col-lg-4'></div>
            <div className="col-lg-4">
          <div className="border p-2 shadow-sm text-center rounded ">
            <h4 className="text-center text-primary my-3 fst-italic">
              Edit the Items Details
            </h4>
            <table className="table table-border text-align-justify">
              <tr>
                <th>Name</th>
                <td>
                  <input type="text" placeholder="enter name"  value={pname} onChange={handlechange} />
                </td>
              </tr>
              <tr>
                <th>Price</th>
                <td>
                  <input type="number" placeholder="price"  value={pprice} onChange={abc=>pickprice(abc.target.value)} />
                </td>
              </tr>
              <tr>
                <th>Quantity</th>
                <td>
                  {/* <input type="text" placeholder="enter the quantity"  value={pqty} onChange={abc=>pickqty(abc.target.value)} /> */}
                  <select  value={pqty} onChange={abc=>pickqty(abc.target.value)}>
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
                  <input type="text" placeholder="photo please"   value={pphots} onChange={abc=>pickphoto(abc.target.value)}/>
                </td>
              </tr>
              <tr>
                <th>Quality</th>
                <td>
                  {/* <input type="text" placeholder="quality" value={pquality}  onChange={abc=>pickquality(abc.target.value)} /> */}
                  <select  value={pquality}  onChange={abc=>pickquality(abc.target.value)} >
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
                    <div className='my-4'>
                    <button className="btn btn-primary m-1  fw-lighter"  onClick={Updateitems}>
                    Update items
                  </button>
                  <button className="btn btn-primary m-1  fw-lighter" onClick={()=>navigate("/cruds")}>
                    Go Back
                  </button>
                    </div>
               
                </td>
              </tr>
            </table>
          </div>
        </div>
            <div className='col-lg-4'></div>

        </div>
        <ToastContainer />

    </div>
  )
}

export default Edititems;