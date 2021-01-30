import React, { Component } from 'react'
import InputForm from '../../Atom/InputForm'


class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            
        }
    }

    render() { 
        const { showPeople, filterValue, filterName, filterPeople, nameValue, inputName, addPerson, pageStart } = this.props
        return ( 
            <div className="container mt-5">
                <div className="row text-center">
                    <div className="col-md-12">
                        {/* <InputForm placeHolder="Search Name" value={filterValue} onChange={filterName} onClick={filterPeople}>Search</InputForm> */}
                        {/* <InputForm placeHolder="Input Name" value={nameValue} onChange={inputName} onClick={addPerson}>Submit</InputForm> */}
                        <table className="table">
                            <thead className="table-light">
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Height</th>
                                    <th>Mass</th>
                                    <th>Hair Color</th>
                                    <th>Skin Color</th>
                                </tr>
                            </thead>
                            <tbody>
                                {showPeople.map((value, index) => (
                                    <tr key={index}>
                                        <td>{pageStart + index + 1}</td>
                                        <td>{value.name}</td>
                                        <td>{value.height}</td>
                                        <td>{value.mass}</td>
                                        <td>{value.hair_color}</td>
                                        <td>{value.skin_color}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Data;