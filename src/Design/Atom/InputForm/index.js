import React, { Component } from 'react';

class InputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { placeHolder, value, onChange, onClick, children } = this.props
        return (  
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder={placeHolder} value={value} onChange={onChange} />
                <button className="btn btn-outline-secondary" onClick={onClick}>{children}</button>
            </div>
        );
    }
}
 
export default InputForm;