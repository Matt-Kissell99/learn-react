import React from 'react'

function Button({ name, type = "button" }) {
    return (
        <button {...{name, type='button', className}}>{...{value}}</button>
    )

}

export default Button