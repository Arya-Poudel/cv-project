import './App.css';
import GeneralInfo from "./components/GeneralInfo";
import EducationInfo from "./components/EducationInfo";
import WorkInfo from "./components/WorkInfo";
import React, {Component} from "react";


class App extends Component{
  constructor(){
    super();

    this.state = {
      preview: false,
    };
  }

  handleSubmit = () => {
    this.setState({
      preview: !this.state.preview,

    });
  }

  render(){
    const {preview} = this.state;
    let btnText;
    if (preview) {
       btnText = 'Edit'
    } else {
       btnText = 'Submit'
    }
    return (
    <>
    <h1 className="title">CV APP</h1>
    <div className="mainContent">
       <GeneralInfo preview={preview}/>
       <EducationInfo preview={preview}/>
       <WorkInfo preview={preview}/>
        <button onClick = {this.handleSubmit} className="btn">{btnText}</button>
      
   </div>
   </>
  );
  }
}

export default App;