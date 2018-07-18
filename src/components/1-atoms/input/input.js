import React from 'react'

function Input({name, type = "text"}) {
    return (
        <input {...{name, type}} className="Input" />
    )

}

export default Input

