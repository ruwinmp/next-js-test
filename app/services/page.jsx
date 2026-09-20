'use client'

import React, { useState } from 'react'

function Page() {
  const [value, setValue] = useState('');

  const handleClick = (text) => {
    console.log(text);
    alert(`Value changed to: ${value}`);
  }
  const handleChange = (text) => {
    setValue(text);
  }

  return (
    <>
      <div>Services</div>

      <br />
      
      <div>
        <input
          type="text"
          placeholder="Enter new value"
          className='px-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500'
          onChange={(e) => handleChange(e.target.value)}
        />
        <button 
          className='px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors'
          onClick={() => handleClick('New Value')}
        >Change Value</button>

        <br />
        <div className='mt-4'>
          <p>Current Value: {value}</p>
        </div>
      </div>
    </>    
  )
}

export default Page