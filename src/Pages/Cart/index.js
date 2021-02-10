import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addItem, deleteCart, reduceItem } from '../../action';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            totalPrice: 0
        }
    }

    deleteCart = (index) => {
        const { deleteItem } = this.props
        deleteItem({
            index: index
        })
    }

    addItem = (index) => {
        const { plus } = this.props
        plus(index)
    }

    reduceItem = (index) => {
        const { minus } = this.props
        minus(index)
    }

    setTotalPrice = () => {
        const { cartItem } = this.props
        let total = 0
        cartItem.map((value, i) => {
            let totalPriceLocal = (value.price - ((value.price / 100) * 10)) * value.qty
            total += totalPriceLocal 
        })
        this.setState(state => ({ totalPrice: total }))
    }

    render() { 
        const { cartItem } = this.props
        console.log(cartItem)
        return (  
            <>
                {/* NAVBAR */}
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                        <Navbar.Brand href="#home">Combo Smart Shop</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                            <Nav>
                            <Nav.Link>
                                <Link to="/"><Button variant="primary">HOME</Button></Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/cart"><Button variant="primary">CART</Button></Link>
                            </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                                <Button variant="secondary" disabled>{cartItem.length}</Button>
                            </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                {/* ITEM DETAIL */}
                {/* <Container>
                    <Row>
                        <Col>
                            <Card>
                                <Card.Body> <h3>TOTAL PRICE <Button className="ml-5"><h3> {this.state.totalPrice} </h3></Button></h3> </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container> */}
                <Container>
                    {cartItem.map((value, i) => (
                        <Row className="mt-3 mb-3" key={value.idProduct}>
                            <Col>
                                <Card>
                                    <Card.Header as="h5">{value.itemName}</Card.Header>
                                    <Card.Body>
                                        <Card.Text>
                                            <img src={value.image} style={{width: "150px"}} alt="imagehandphone" />
                                            <p>{value.itemDesc}</p>
                                        </Card.Text>
                                        <Button variant="info" className="mr-1" onClick={() => this.addItem(i)}>+</Button>
                                        <Button variant="secondary" className="mr-1" onClick={() => this.reduceItem(i)}>-</Button>
                                        <Button variant="danger" className="mr-1" onClick={() => this.deleteCart(i)}>Delete</Button>
                                        <label className="ml-5 mr-2"> Quantity </label>
                                        <Button variant="success" disabled>{value.qty}</Button>
                                        <label className="ml-5 mr-2"> Price </label>
                                        <Button variant="success" disabled>Rp. {value.price - ((value.price / 100) * 10)}</Button>
                                        <label className="ml-5 mr-2"> Total Price </label>
                                        <Button variant="success" disabled>Rp. {(value.price - ((value.price / 100) * 10)) * value.qty}</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    ))}
                </Container>
            </>
        );
    }
}
 
const mapStateToProps = state => ({
    cartItem: state.cart
})

const mapDispatchToProps = dispatch => ({
    deleteItem: payload => dispatch(deleteCart(payload)),
    plus: payload => dispatch(addItem(payload)),
    minus: payload => dispatch(reduceItem(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)