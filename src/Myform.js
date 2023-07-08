// import React, { useState } from 'react';

// const MyForm = () => {
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     const value = event.target.value;
//     const sanitizedValue = value.replace(/\s/, '').charAt(0); // Remove spaces

//     setInputValue(sanitizedValue);
//   };

//   return (
//     <div className='m-4'>
//       <label>
//         Input Value:
//         <input
//           type="text"
//           value={inputValue}
//           onChange={handleInputChange}
//         />
//       </label>
//     </div>
//   );
// };

// export default MyForm;

import React, { useState } from 'react';

const MyComponent = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const value = event.target.value;
    if (value.length === 0) {
      setInputValue(value);
    } else if (value[0] !== ' ') {
      setInputValue(value);
    }
  };


  // save function

  const save=()=>{
    alert("save is happening");
  }

    const deletes=()=>{
    alert("deletes is happening");
  }
  return (
    <div className='m-3'>
      <h5>Text Input</h5>
      <input type="text" value={inputValue} onChange={handleInputChange} style={{width:'40%'}}  className='m-2'/>

      <input type='text' placeholder='please enter the name please'/>
      <button className='btn btn-primary my-3' onClick={save}>save the items</button>
      <button className='btn btn-primary my-3' onClick={deletes}>delete the items</button>

    </div>
  );
};

export default MyComponent;
