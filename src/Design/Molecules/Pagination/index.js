import React, { Component } from 'react'
import PageButton from '../../Atom/PageButton'

class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { onClickNext, onClickPrev, disabledPrev, disabledNext, page } = this.props
        return (  
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12">
                        <PageButton onClick={onClickPrev} disabled={disabledPrev}>Prev</PageButton>
                        <span className="m-1">Page {page}</span>
                        <PageButton onClick={onClickNext} disabled={disabledNext}>Next</PageButton>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Pagination;