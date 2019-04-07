import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Square extends Component{
    constructor(props){
        super(props);
        this.state={
            fontColor:"",
            boxColor:""
        }
        // const buttonProps ={
        //   onClick( )
        // }
        // ReactDOM.render(
        //   React.createElement('button',buttonProps,'Magic Square!'),

        // )
    }
    setFont = (e)=>{
      this.setState({fontColor: e.target.value});
    }
    setBackground = (e) =>{
      this.setState({boxColor: e.target.value});
      console.log(this.state.boxColor);
    }
    createSquare =() =>{
      const box=(
        React.createElement('div', {class: "d-flex align-items-center border border-dark", style: {width : "250px", height: "250px", backgroundColor: `${this.state.boxColor}`}}, 
        React.createElement('h3', {style: {color: `${this.state.fontColor}`}}, `${this.state.fontColor} text on a ${this.state.boxColor} background`)
        )
      );
      return box;
        
    }
    displaySquare =()=>{
      console.log("click");
      const box = this.createSquare();
      ReactDOM.render(box, document.getElementById('stage'));
    }
    render(){
      return(
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h1>Let's make some Magic Squares!</h1>
            </div>
          </div>
          <div className="row">
            <div className ="col">
              <input id="background" onChange={this.setBackground} placeholder="Background Color"/>
              <input id="textcolor" onChange={this.setFont} placeholder="Text Color"/>
              <br/><br/>
              <button id="magic" class="btn btn-warning" onClick={this.displaySquare}>Magic Square!</button>
              <br/>
            </div>
          </div>
          <div id="stage" className="row d-flex p-4 justify-content-center"></div>
        </div>
      );
    }
}
export default Square;