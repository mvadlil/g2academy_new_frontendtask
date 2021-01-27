import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            counter: 0
        }
    }

    buttonPlus = () => {
        this.setState(state => ({ counter: state.counter + 1 }))
    }

    buttonMinus = () => {
        this.setState(state => ({ counter: state.counter - 1 }))
    }

    render() { 
        const { counter } = this.state
        return ( 
            <div className="container border border-secondary rounded mt-5 pb-5">
                <div className="row text-center">
                    <div className="col-md-12">
                        <h1 className="display-1">{counter}</h1>
                        <button className="btn btn-primary" onClick={this.buttonPlus}>+</button>
                        <button className="btn btn-danger" onClick={this.buttonMinus}>-</button>
                    </div>
                </div>
            </div>
        );
    }
}

Counter.propTypes = {
    counter: PropTypes.number
}
 
export default Counter;