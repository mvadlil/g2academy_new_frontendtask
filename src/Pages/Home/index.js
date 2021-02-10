import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Card, Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addToCart, addItem } from '../../action';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  

        }
    }

    addToCart = (index) => {
        const { handphone, add } = this.props
        add({
            idProduct: handphone[index].idProduct,
            itemName: handphone[index].itemName,
            itemDesc: handphone[index].itemDesc,
            price: handphone[index].price,
            disc: handphone[index].disc,
            image: handphone[index].image,
            qty: 1
        })
        alert("Item berhasil ditambakan ke Cart!")
    }

    render() { 
        const { handphone, cartItem } = this.props
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

                {/* ITEM */}
                {/* const object = {
                    itemName: "Samsung S8 Plus 6/64"
                    itemDesc: "Image result for s8 plus description The phone is powered by Octa core 2.3 GHz, Quad core, M2 Mongoose + 1.7 GHz, Quad core, Cortex A53 processor. It runs on the Samsung Exynos 9 Octa 8895 Chipset.",
                    price: 5000000,
                    disc: 10%,
                    image: "S8"
                } */}

                <Container>
                    <Row>
                        {handphone.map((value, i) => (
                            <Col className="mt-3" key={value.idProduct}>
                                <Card style={{ width: '350px' }}>
                                    <Card.Img variant="top" src={value.image} />
                                    <Card.Body>
                                    <Card.Title>{value.itemName}</Card.Title>
                                    <Card.Text>
                                        {value.itemDesc}
                                    </Card.Text>
                                    <Card.Text>
                                        <del>Rp. {value.price}</del>
                                    </Card.Text>
                                    <Card.Text>
                                        <Button variant="info" disabled>Rp. {value.price - ((value.price / 100) * 10)}</Button>
                                    </Card.Text>
                                    <Button variant="primary" onClick={() => this.addToCart(i)}>Add to Cart</Button> <Button variant="danger" disabled>Disc {value.disc}%</Button>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </>
        );
    }
}
 
const mapStateToProps = state => ({
  handphone: state.front,
  cartItem: state.cart
})

const mapDispatchToProps = dispatch => ({
    add: payload => dispatch(addToCart(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)