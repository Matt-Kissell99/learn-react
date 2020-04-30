import React from 'react'

function Button({ name, type = "button", className, url='', onClick, children}) {
    return (
        <button {...{name, type, className, url, onClick}}>{children}</button>
    )
}

export default Button