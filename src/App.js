import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      input: '',
      num1: 0,
      type: '',
      answer: 0,
      display: false
    }
  }

  handleFunctionClick = e => {
    let {name, value} = e.target
    this.setState({
      num1: this.state.input,
      [name] : value,
      input: ''
    })
  }

  handleNumberClick = e => {
    let {name, value} = e.target
    this.setState({
      [name]: this.state.input + value
    })
  }

  handleSolve = () => {
    let answer
    let {input, num1, type} = this.state
    if (type === 'add') {
       answer = +num1 + +input
    }
    if (type === 'subtract') {
      answer = +num1 - +input
    }
    if (type === 'multiply') {
    answer = +num1 * +input
    }
    if (type === 'divide') {
      answer = +num1 / +input
    }


    this.setState({
      answer,
      input: '',
      display: true
    })
  }

  handleClear = () => {
    this.setState({
      num1: 0,
      input: '',
      type: '',
      answer: 0,
      display: false
    })
  }

  handleSubmit = () => {
    let answer = +this.state.num1 + +this.state.num2 
    this.setState({
      answer
    })
  }

  render() {
    console.log(this.state)

    return (
      <div className='big-papa'>
        <div className='calc'>

          <div className='output'>
            {this.state.display 
            ? 
            <p>{this.state.answer}</p>
            :
              this.state.input 
              ?
              <p>{this.state.input}</p> 
              :
              <p>{this.state.num1}</p>}   
          </div>   

          <div className='buttons'>
            <button onClick={this.handleNumberClick} name='input' value='1'>1</button>
            <button onClick={this.handleNumberClick} name='input' value='2'>2</button>
            <button onClick={this.handleNumberClick} name='input' value='3'>3</button>
            <button onClick={this.handleFunctionClick} name='type' value='add'>+</button>
            <button onClick={this.handleNumberClick} name='input' value='4'>4</button>
            <button onClick={this.handleNumberClick} name='input' value='5'>5</button>
            <button onClick={this.handleNumberClick} name='input' value='6'>6</button>
            <button onClick={this.handleFunctionClick} name='type' value='subtract'>-</button>
            <button onClick={this.handleNumberClick} name='input' value='7'>7</button>
            <button onClick={this.handleNumberClick} name='input' value='8'>8</button>
            <button onClick={this.handleNumberClick} name='input' value='9'>9</button>
            <button onClick={this.handleFunctionClick} name='type' value='multiply'>x</button>
            <button onClick={this.handleClear}>C</button>
            <button onClick={this.handleNumberClick} name='input' value='0'>0</button>
            <button onClick={this.handleSolve}>=</button>
            <button onClick={this.handleFunctionClick} name='type' value='divide'>&divide;</button>
          </div>

        </div>
      </div>
    )
   }
}

export default App;



        // <div>
        //   <p>{this.state.answer}</p>
        //   <input
        //   name='num1'
        //   value={this.state.num1}
        //   type='number'
        //   onChange={this.handleChange}
        //   />
        //   <input
        //   name='num2'
        //   value={this.state.num2}
        //   type='number'
        //   onChange={this.handleChange}
        //   />
        //   <button onClick={this.handleSubmit}>=</button>
        // </div>
