import React from 'react'

function input_field({name, type = "number"}) {
    return (
        <input {...{name, type}} className="Input" />
    )

}

export default input_field

