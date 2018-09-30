import React from 'react'

function Button({ name, type = "button", url='', children}) {
    return (
        <button {...{name, type, className, url=''}}>{children}</button>
    )
}

export default Button