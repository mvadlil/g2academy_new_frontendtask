import React, { Component } from 'react'
import MenuButton from '../../Atom/MenuButton'

class Menus extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <>
                <MenuButton>Input</MenuButton>
                <MenuButton>Search</MenuButton>
            </>
        );
    }
}
 
export default Menus;