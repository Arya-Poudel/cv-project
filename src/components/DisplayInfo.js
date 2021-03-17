import React from "react";
import './components.css';


const DisplayInfo = (props) => {

	const {topics, data} = props;
	// console.log(topics);
	// console.log(data);

	return (
		<>
		<h2 className="preview-title">CV PREVIEW</h2>
		 <div className="preview">
			<ul>
				{topics.map((topic) =>{
					return <li>{topic} : </li>
				})}
			</ul>
		</div>
		</>
	);
};

export default DisplayInfo;