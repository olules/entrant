import React, {Component} from 'react'

class Name extends Component {
    constructor(){
        super()
        this.state={
            name:'Black Olule'
        }
    }
    clickedMe=()=>{
        this.setState({
            name:this.state.name === 'Black Olule' ? 'John Doe' : 'Black Olule'
        
        })
    }
    render(){
        return (
          <div>
            <h1 className='bg-primary text-white text-center'>{this.state.name}</h1>
            <button  onClick={this.clickedMe} className='btn btn-success'>Change Text</button>
          </div>
        );
    }
}
export default Name;