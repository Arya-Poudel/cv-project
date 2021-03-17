import React, {useState} from "react";
import './components.css';

const WorkInfo = (props) => {

	const {preview} = props;

	const [workData, setWorkData] = useState({
		CompanyName : '',
		Position : '',
		WorkDuration : ''
	});

	const {CompanyName, Position, WorkDuration} = workData;

	const handleChange = (e) => {
		const {name, value} = e.target;
		setWorkData((data) => {
			return {...data, [name]: value};
		});
	}


	if (preview) {
		return (
			<>
			<h3> <u>Experience Info</u></h3>
				<p>Company Name: {CompanyName}</p>
				<p>Position: {Position}</p>
				<p>Work Duration: {WorkDuration}</p>
			</>
		);
	} 

	return (
		<div className="form-component">
			<h2 className="info-title">Work Experience</h2>
			<div className="info-form">
			<label>Company Name:
				<input
					type = "text"
					name = 'CompanyName'
					value = {CompanyName}
					onChange = {handleChange}
				/>
			</label>
			<label>Position:
				<input
					type = "text"
					name = 'Position'
					value = {Position}
					onChange = {handleChange}
				/>
			</label>
			<label>Work Duration:
				<input
					type = "text"
					name = 'WorkDuration'
					value = {WorkDuration}
					onChange = {handleChange}
				/>
			</label>
			</div>
		</div>
	);
};

export default WorkInfo;