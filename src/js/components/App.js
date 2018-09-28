import React from 'react'
import ReactDOM from 'react-dom'
import Input from './1-atoms/input.js'
import Button from './1-atoms/button.js'


const App = () => {
    return (
        <React.Fragment>
            <Input name="testInput" type="text" />
            <Button name="testButton" />
        </React.Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));