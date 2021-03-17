import React ,{ useState }from "react";
import './components.css';

const EducationInfo = (props) => {

	const {preview} = props;

	const [educationData, setEducationData] = useState({
		University : '',
		Degree : '',
		GPA : ''
	});

	const {University, Degree, GPA} = educationData;

	const handleChange = (e) => {
		const {name, value} = e.target;
		setEducationData((data) => {
			return {...data, [name] : value};
		});
	}

	if (preview) {
		return (
			<>
			<h3> <u>Education Info</u> </h3>
				<p>University Name: {University} </p>
				<p>Degree: {Degree} </p>
				<p>GPA: {GPA}</p>
			</>
		);
	} 

	return (
		<div className="form-component">
			<h2 className="info-title">Education</h2>
			<div className="info-form">
			<label>University:
				<input
					type = "text"
					name = 'University'
					value = {University}
					onChange = {handleChange}
				/>
			</label>
			<label>Degree:
				<input
					type = "text"
					name = 'Degree'
					value = {Degree}
					onChange = {handleChange}
				/>
			</label>
			<label>GPA:
				<input
					type = "text"
					name = 'GPA'
					value = {GPA}
					onChange = {handleChange}
				/>
			</label>
			</div>
		</div>

	)
};

export default EducationInfo;