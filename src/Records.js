import React, { useState } from "react";
import { BiArrowToBottom } from "react-icons/bi";

const Records = ({ data }) => {
    const [searchQuery, setSearchQuery] = useState('');

    const Searchitems=(event)=>{
      setSearchQuery(event.target.value);
    }
  
    const filteredItems = data.filter((listinfo) =>
    listinfo.first_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // for download concepts

    
    const handleDownload=()=>{
        alert("download");
        
    }
 
  return (
    <div className="container my-3">
      <div className="row">

        <div className="col-lg-12">
      
          <input type="search" placeholder=" 🔎 search..." onChange={Searchitems}/>

            <table className="table table-bordered table-hover my-3">
              <thead>
                <tr className="text-warning">
                  <th>Id</th>
                  <th>First_Name</th>
                  <th>Last_Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Ip_Address</th>
                </tr>
              </thead>
              <tbody>
                
                {filteredItems.map((listinfo, index) => {
                  return (
                    <tr key={index}>
                      <td>{listinfo.id}</td>
                      <td>{listinfo.first_name}</td>
                      <td>{listinfo.last_name}</td>
                      <td>{listinfo.email}</td>
                      <td>{listinfo.gender}</td>
                      <td>{listinfo.ip_address}</td>
                      <td> <button className="btn btn-outline-primary btn-sm" onClick={handleDownload}><BiArrowToBottom/></button></td>
                    </tr>
                  );
                })}
              </tbody>
            
            </table>
     
        </div>
      </div>
    </div>
  );
};

export default Records;
