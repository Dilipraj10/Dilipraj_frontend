import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Button } from 'react-bootstrap'



const Portfolio = () => {

    return (

        <div>
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                <Container>


                    <Navbar.Brand href="#home">Bizland <span color='#00FFFF'>.</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">

                        <Nav className="me-auto"></Nav>

                        <Nav>
                            <Nav.Link href="#deets">Home</Nav.Link>
                            <Nav.Link href="#deets">About</Nav.Link>
                            <Nav.Link href="#deets">Service</Nav.Link>
                            <Nav.Link href="#deets">Portfolio</Nav.Link>
                            <Nav.Link href="#deets">Team</Nav.Link>

                            {/* <Nav.Link href="#"><a href='#'>Team</a></Nav.Link> */}
                            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#deets">Contact</Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <div>
                <div className='mt-4 text-center'>
                    <Button
                        variant="info"
                        style={{ backgroundColor: '#F0F8FF', color: '#007bff', height: '30px', width: '80px', border: 'none',borderRadius:'40px' }}
                        size="sm"
                    >
                        <b>Portfolio</b>
                    </Button>
                </div>

                <Container className='mt-4 text-center' >
                    <h1>Check our  <a style={{ textDecoration: 'none', marginLeft: '5px' }} href="#deets">Portfolio</a> </h1>
                    <p>

                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem
                        tenetur quibusdam dolorum vel beatae facilis architecto quasi amet
                        laborum saepe.
                    </p>

                    <div className="mt-4" style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ display: 'flex', gap: '10px' }}>
                            <p>ALL</p>
                            <p>APP</p>
                            <p>CARD</p>
                            <p>WEB</p>
                        </div>
                    </div>




                    <div className="row">
                        <div className="col-md-4 mb-3">
                            <div className="text-center">
                                <div className="card-body">
                                    <img src='https://images.unsplash.com/photo-1713640775951-e85a958314ed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyOXx8fGVufDB8fHx8fA%3D%3D' width={"320px"} href='images' alt="First" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="text-center">
                                <div className="card-body">
                                    <img src='https://plus.unsplash.com/premium_photo-1683921220194-874389c0ca42?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D' width={"320px"} href='images' alt="Second" />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <div className="text-center">
                                <div className="card-body">
                                    <img src='https://images.unsplash.com/photo-1710880694004-4da9ea2a2c44?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D' width={"320px"} href='images' alt="Third" />
                                </div>
                            </div>
                        </div>
                    </div>

                </Container>
            </div>

            <footer className="bg-light py-3">
                <Container>
                    <p className="text-center">
                        &copy; {new Date().getFullYear()} Bizland. All Rights Reserved.
                    </p>
                </Container>
            </footer>
        </div>
    );
};

export default Portfolio;