import React, {Component} from 'react';


class Calculator extends Component {

  constructor(props) {
    super(props)

    this.plus = this.plus.bind(this)
    this.minus = this.minus.bind(this)
    this.multi = this.multi.bind(this)
    this.divide = this.divide.bind(this)

    this.state = {
      sum:0
    }
    this.state = {
      minus:0
    }
    this.state = {
      multi:0
    }
    this.state = {
      divide:0
    }

  }

  plus() {
   var sum = (parseInt(this.refs.val1.value) || 0) + (parseInt(this.refs.val2.value) || 0);
   this.setState({
     sum: sum
      })
    }


  minus() {
   var minus = (parseInt(this.refs.val3.value) || 0) - (parseInt(this.refs.val4.value) || 0);
   this.setState({
     minus:minus
      })
    }
  multi() {
   var multi = (parseInt(this.refs.val5.value) || 0) * (parseInt(this.refs.val6.value) || 0);
   this.setState({
     multi:multi
      })
    }
  divide() {
   var divide = (parseInt(this.refs.val7.value) || 0) / (parseInt(this.refs.val8.value) || 0);
   this.setState({
     divide:divide
      })
    }



  render(){
    return (
  <div className="container">
      <h1>Math with React!</h1>

    <div className="add">
      <h3> Add </h3>
      <input type="text" ref='val1' onKeyUp={this.plus}/>
      <span>+</span>
      <input type="text" ref='val2' onKeyUp={this.plus}/>
      <span>=</span><span>{this.state.sum}</span>

    </div>

    <div className="subtract">
    <h3> Subtract </h3>
      <input type="text" ref='val3' onKeyUp={this.minus}/>
      <span>-</span>
      <input type="text" ref='val4' onKeyUp={this.minus}/>
      <span>=</span> <span>{this.state.minus}</span>
    </div>

    <div className="multiply">
      <h3> Multiply</h3>
      <input type="text" ref='val5' onKeyUp={this.multi}/>
      <span>x</span>
      <input type="text" ref='val6' onKeyUp={this.multi}/>
      <span>=</span>  <span>{this.state.multi}</span>

    </div>
    <div className="divide">

      <h3> divide</h3>
      <input type="text" ref='val7' onKeyUp={this.divide}/>
      <span>/</span>
      <input type="text" ref='val8' onKeyUp={this.divide}/>
      <span>=</span> <span>{this.state.divide}</span>

    </div>

  </div>

    )
  }
}

export default Calculator;
