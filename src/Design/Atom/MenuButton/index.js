import React, { Component } from 'react'


class MenuButton extends Component {
    constructor(props) {
        super(props);
        this.state = {  

        }
    }
    render() {
        const { children } = this.props
        return (  
            <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">{children}</a>
            </li>
        );
    }
}
 
export default MenuButton;