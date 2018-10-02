import React, {Component} from 'react';


export class AutoComplete extends Component {

    get value(){
        return this.refs.inputOpponent.value
    }

    set value(inputValue){
        this.refs.inputOpponent.value = inputValue;
    }
    set name(n){
        console.log(n);
        
    }
    render(){  
      //  console.log(this.props);
              
        return (
            <div>
                <input ref="inputOpponent" 
                       type="text" 
                       list="opponents-list" 
                       className ="form-control"
                       defaultValue={this.props.defaultValue}
                       required />
                <datalist id="opponents-list">
                    {
                        this.props.options.map((opt, i ) => 
                            <option key={i}>{opt}</option>
                        )
                    }
                </datalist>
                <div ref="name"></div>
            </div>
        )
    }
}