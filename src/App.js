import './App.css';
import React, {Component} from 'react';
import MultiCounter from './components/multiCounter';
import NavbarCom from './components/navbarCom';

class App extends Component {
    constructor(props){
        super(props);
        console.log('app-constructor', this.props);
        // this.state=this.props.something;
    }
    state = {
        counters: [
            {id:1, value:4},
            {id:2, value:0},
            {id:3, value:0},
            {id:4, value:0}
        ]
    };

    componentDidMount() {
        //ajax call
        console.log('App-mounted')
    }

    handleDelete = (counterId) => {
        // console.log('event called',  counterId);
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    };

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index]={...counter};
        counters[index].value++;
        this.setState({ counters });
    };

    handleDecrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index]={...counter};
        counters[index].value--;
        this.setState({ counters });
    };

    handleReset = () => {
        const countersReset = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({countersReset});
    };

    render() {
        console.log('app-rendered');
        return (
            <div>
                <NavbarCom totalCounters={this.state.counters.filter(c => c.value >0).length}/>
                <main className='container'>
                    <MultiCounter 
                    handleReset={this.handleReset}
                    handleDelete={this.handleDelete}
                    handleIncrement={this.handleIncrement}
                    handleDecrement = {this.handleDecrement}
                    counters={this.state.counters}/>
                </main>
            </div>
          );
    }
}

export default App;
