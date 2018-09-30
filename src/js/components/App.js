import React from 'react'
import ReactDOM from 'react-dom'
import Input from './1-atoms/input.js'
import Button from './1-atoms/button.js'

const App = () => {
    return (
        <React.Fragment>
            <Input name="firstinput" type="text" />
            <Button name="firstbutton" />
        </React.Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));