import React, { useState } from "react";
import './components.css';

const GeneralInfo = (props) => {

	const {preview} = props;

	const [generalData, setGeneralData] = useState({
		FirstName : '',
		LastName : '',
		Email : '',
		Phone: ''
	});

	const {FirstName, LastName, Email, Address} = generalData;

	const handleChange = (e) => {
		const {name, value} = e.target;
		setGeneralData((data) => {
			return {...data, [name]: value};
		});
	}

	if (preview) {
	    return (
	    	<>
	    	<h3> <u>Personal Info</u> </h3>
	    	 <p> FirstName : {FirstName} </p>
	    	 <p> LastName : {LastName}</p>
	    	 <p> Email : {Email}</p>
	    	 <p> Address : {Address}</p>
	    	</>
	    );
	}

	return (
		<div className="form-component">
			<h2 className="info-title">General Information</h2>
			<div className="info-form">
				<label> FirstName: 
					<input
						type = "text"
						name = 'FirstName'
						value = {FirstName}
						onChange = {handleChange}
					/>
				</label>
				<label>LastName:
					<input
						type = "text"
						name = 'LastName'
						value = {LastName}
						onChange = {handleChange}
					/>
				</label>
				<label>Email:
					<input
						type = "text"
						name = 'Email'
						value = {Email}
						onChange = {handleChange}
					/>
				</label>
				<label>Address:
					<input
						type = "text"
						name = 'Address'
						value = {Address}
						onChange = {handleChange}
					/>
				</label>
			</div>
		</div>
	)
};

export default GeneralInfo;