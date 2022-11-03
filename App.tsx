import React,{Cmponents } from 'react';

class App extends React.Component{
  constructor(props){
   super(props);
   this.state = {value: ''};  
   this.handleChange = this.handleChange.bind(this);  
      this.handleSubmit = this.handleSubmit.bind(this);  
  }
  handleChange(event) {  
    this.setState({value: event.target.value});  
}  
handleSubmit(event) {  
    alert('Your name is : ' + this.state.value);  
    event.preventDefault();  
}  
  render(){
    return(
      <div>
        <form onSubmit =  {this.handleSubmit}>
          <h2>controlled forms</h2>
          <label>Name:
         
          <input type="text" value={this.state.value} onChange = {this.handleChange}/>  
              </label>
             <button>Submit</button>
              </form>
          </div>
    );
  }
}
export default App;