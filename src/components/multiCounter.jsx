import React, { Component } from 'react';
import Counter from './counter';

class MultiCounter extends Component {

    render() { 
        console.log('multi-rendered');
        return (
            <div>
                <button className='btn btn-primary btn-sm' onClick={this.props.handleReset}>Reset</button>
                {this.props.counters.map(counter => 
                <Counter 
                key={counter.id}  
                selected={true}
                handleDelete={this.props.handleDelete}
                handleIncrement={this.props.handleIncrement}
                handleDecrement = {this.props.handleDecrement}
                counter={counter}
                />)}
            </div>
        );
    }
}
 
export default MultiCounter;