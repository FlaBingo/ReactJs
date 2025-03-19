import React, { useState } from 'react'

function Buttons({color, setColor}) {
    
    
    return (
        <>
            <button
                onClick={() => setColor(color)}
                className="butt outline-none px-4 py-1 text-white rounded-full shadow-lg"
                style={{ backgroundColor: color }}
            >
                {color.charAt(0).toUpperCase() + color.slice(1)}
            </button>
        </>
    )
}

export default Buttons