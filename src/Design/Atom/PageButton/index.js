import React, { Component } from 'react';

class PageButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { children, onClick, disabled } = this.props
        return (  
            <button disabled={disabled} type="button" className="btn btn-primary m-1" onClick={onClick}>{children}</button>
        );
    }
}
 
export default PageButton;