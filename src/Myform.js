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

  return (
    <div>
      <h5>Text Input</h5>
      <input type="text" value={inputValue} onChange={handleInputChange} style={{width:'40%'}}  className='m-2'/>
    </div>
  );
};

export default MyComponent;
