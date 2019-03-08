import React from 'react'

const Label = ({ labelFor, labelValue }) => {
	return (
		<label htmlFor={labelFor} className='label'>
			{labelValue}
		</label>
	)
}

export default Label