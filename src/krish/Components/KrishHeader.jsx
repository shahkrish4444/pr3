import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
function KrishHeader() {
    return (
        <>
            <Navbar bg='light' data-bs-theme="dark" id='nav' className='row pt-3 pb-3'>
                <Container className='justify-content-between' >
                    <Navbar.Brand href="#home" className='logo'>MENTOR</Navbar.Brand>
                    <Nav className="text-center pe-3 gap-3 option">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Courses</Nav.Link>
                        <Nav.Link href="#pricing">Training</Nav.Link>
                        <Nav.Link href="#pricing">Events</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#pricing">Drop Down</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>
                        <button>Get Started</button>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}

export default KrishHeader