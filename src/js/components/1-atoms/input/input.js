import React from 'react'

function Input({ name, type = "text", className}) {
    return (
        <input {...{name, type, className}}  />
    )

}

export default Input

