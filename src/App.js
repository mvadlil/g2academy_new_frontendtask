import React, { Component } from 'react';
import { Table, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { submitData, updateData, deleteData } from './action';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {  
      nameValue: "",
      addressValue: "",
      idValue: 0,
      index: 0
    }
    this.onChangeName = this.onChangeName.bind(this)
    this.onChangeAddress = this.onChangeAddress.bind(this)
    this.onSubmitData = this.onSubmitData.bind(this)
    this.onClickUpdate = this.onClickUpdate.bind(this)
    this.onClickUpdateData = this.onClickUpdateData.bind(this)
    this.onClickDelete = this.onClickDelete.bind(this)
  }


  onChangeName = (event) => {
    this.setState({ nameValue: event.target.value })
  }

  onChangeAddress = (event) => {
    this.setState({ addressValue: event.target.value })
  }

  onSubmitData = (event) => {
    event.preventDefault()
    const { person, add } = this.props
    const id = person.length === 0 ? 1 : person[person.length - 1].id + 1
    add({
      id,
      name: this.state.nameValue,
      address: this.state.addressValue
    })
    this.setState({ nameValue: '', addressValue: '' })
  }

  onClickUpdate = (index) => {
    const { person } = this.props
    this.setState({ nameValue: person[index].name, 
      addressValue: person[index].address,
      idValue: person[index].id,
      index: index
    })
  }

  onClickUpdateData = (index) => {
    const { update } = this.props
    update({
      id: this.state.idValue,
      name: this.state.nameValue,
      address: this.state.addressValue,
      index
    })
    this.setState({ nameValue: '', addressValue: '' })
  }

  onClickDelete = (index) => {
    const { deleteObject } = this.props
    this.setState({ index })
    deleteObject({
      index
    })
  } 

  render() { 
    const { nameValue, addressValue, index } = this.state
    const { person } = this.props
    return (  
      <>
        {/* Input Component */}
        <Container className="mt-5 text-right border border-secondary p-3 rounded">
          <Row>
            <Col>
              <Form>
                <Form.Row>
                  <Col>
                    <Form.Control placeholder="Input Name" value={nameValue} onChange={this.onChangeName} />
                  </Col>
                  <Col>
                    <Form.Control placeholder="Address" value={addressValue} onChange={this.onChangeAddress} />
                  </Col>
                </Form.Row>

                <Button variant="primary" className="mt-3 mr-1" onClick={this.onSubmitData} >
                  Submit
                </Button>
                <Button variant="primary" className="mt-3" onClick={() => this.onClickUpdateData(index)} >
                  Update
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>


        {/* table component */}
        <Container className="mt-5">
          <Row>
            <Col>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Address</th>
                    <th>Update</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {person.map((value, i) => (
                      <tr key={value.id}>
                        <td>{i + 1}</td>
                        <td>{value.name}</td>
                        <td>{value.address}</td>
                        <td>{<Button variant="primary" onClick={() => this.onClickUpdate(i)}>Update</Button>}</td>
                        <td>{<Button variant="danger" onClick={() => this.onClickDelete(i)}>Delete</Button>}</td>
                      </tr>
                  ))}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

const mapStateToProps = state => ({
  person: state.data
})

const mapDispatchToProps = dispatch => ({
  add: payload => dispatch(submitData(payload)),
  update: payload => dispatch(updateData(payload)),
  deleteObject: payload => dispatch(deleteData(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
