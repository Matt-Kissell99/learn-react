import React from 'react'

function Button({ name, type = "button", url=''}) {
    return (
        <button {...{name, type='button', className, url=''}}>{...{value}}</button>
    )

}

export default Button