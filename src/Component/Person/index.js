import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nameValue: "",
            people: [
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
        }
    }

    inputName = (event) => {
        this.setState({ nameValue: event.target.value })
    }

    addPerson = (event) => {
        event.preventDefault()
        const { people } = this.state
        let joined = people.concat({
            id: people.length + 1,
            name: this.state.nameValue,
            status: "New Comer"
        });
        this.setState({ people: joined, nameValue: '' })
    }

    render() {
        const { people } = this.state
        return ( 
            <div className="container mt-5">
                <div className="row text-center">
                    <div className="col-md-12">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Input Name" value={this.state.nameValue} onChange={this.inputName} />
                            <button className="btn btn-outline-secondary" onClick={this.addPerson}>Submit</button>
                        </div>

                        <div>
                            <table className="table">
                                <thead className="table-light">
                                    <tr>
                                        <th>No</th>
                                        <th>Name</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {people.map(x => (
                                        <tr key={x.id}>
                                            <td>{x.id}</td>
                                            <td>{x.name}</td>
                                            <td>{x.status}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Person.propTypes = {
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
 
export default Person;