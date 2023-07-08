import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Records from './Records';
import ReactLoading from 'react-loading';

const Lists = () => {

  const [data,setdata]=useState([]);
  const [loading,setloading]=useState(true);

  useEffect(()=>{
    setloading(true);
    axios.get('MOCK_DATA.json')
    .then(response=>{
      setdata(response.data);
      // alert(data.length);
      setloading(false);
    })
  //   .catch(() => {
  //     alert('There was an error while retrieving the data')
  // })
  },[]);

  if (loading) {
    return (
<div class="spinner-border text-center" role="status">
  <span class="sr-only">data is loading</span>
</div>      )
  }
  else{
    return (
      <div>
        <p>{loading}</p>
        <h3 className="my-3 text-warning">Total Lists -{data.length}</h3>
  
        <Records data={data}/>
      </div>
    )
  }

}

export default Lists;