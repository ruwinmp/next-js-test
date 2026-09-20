'use client'

import React from 'react'

function Button() {
    const handleClick = () => {
        console.log('Button clicked Client Side Component!');
    }

    return (
        <>
            <button onClick={handleClick} className='px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors'>Click Me</button>
        </>
    )
}

export default Button