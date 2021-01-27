import React, { Component } from 'react'
import PropTypes from 'prop-types' 
import InputForm from '../../Atom/InputForm'


let defaultPeople = [
    {
        id: 1,
        name: 'Obi Wan',
        status: 'Jedi'
    },
    {
        id: 2,
        name: 'Luke Skywalker',
        status: 'Padawan'
    },
    {
        id: 3,
        name: 'Qui Gon',
        status: 'Jedi Master'
    }
]

class Data extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            nameValue: "",
            filterValue: "",
            showPeople: defaultPeople,
            people: defaultPeople
        }
    }

    inputName = (event) => {
        this.setState({ nameValue: event.target.value })
    }

    addPerson = (event) => {
        event.preventDefault()
        const { people } = this.state
        people.push({
            id: people.length + 1,
            name: this.state.nameValue,
            status: "New Comer"
        });
        this.setState({ showPeople: people })
        this.setState({ nameValue: "" })
    }

    filterName = (event) => {
        this.setState({ filterValue: event.target.value })
    }

    filterPeople = (event) => {
        event.preventDefault()
        const { filterValue, people } = this.state
        if ( filterValue.length > 0) {
            let filteredPeople = people.filter(value => {
                return value.name.toLowerCase().includes(filterValue.toLowerCase())
            })
            this.setState({ showPeople: filteredPeople })
        } else {
            this.setState({ showPeople: people })
        }
    }

    render() { 
        const { showPeople } = this.state
        return ( 
            <div className="container mt-5">
                <div className="row text-center">
                    <div className="col-md-12">
                        <InputForm placeHolder="Search Name" value={this.state.filterValue} onChange={this.filterName} onClick={this.filterPeople}>Search</InputForm>
                        <InputForm placeHolder="Input Name" value={this.state.nameValue} onChange={this.inputName} onClick={this.addPerson}>Submit</InputForm>
                        <table className="table">
                            <thead className="table-light">
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {showPeople.map((value, index) => (
                                    <tr key={value.id}>
                                        <td>{index + 1}</td>
                                        <td>{value.name}</td>
                                        <td>{value.status}</td>
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

Data.propTypes = {
    nameValue: PropTypes.string,
    filterValue: PropTypes.string,
    showPeople: PropTypes.array,
    people: PropTypes.arrayOf(
        PropTypes.shape(
            {
                id: PropTypes.number,
                name: PropTypes.string,
                status: PropTypes.string
            }
        )
    )
}
 
export default Data;