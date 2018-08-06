import React from 'react'

function Input({ name, type = "text" }) {
    return (
        <input {...{name, type}} className="input" />
    )

}

export default Input

