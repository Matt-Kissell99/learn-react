import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Input from './1-atoms/input/input'
import Button from './1-atoms/input/button'
import { Counter } from './Counter'

class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Input name="firstInput" type="text" />
				<Button name="firstButton">
					Test button
				</Button>
			</React.Fragment>
		)
	}	
}

ReactDOM.render(<App />, document.getElementById('root'));