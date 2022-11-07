// Import Bootstrap components:
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

function TopBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg" >
                <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
                    <img src="https://www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color-6678cb82d531f8910d5ba270a11a7e9b56fc261371bda42ea7a5abeff3492e1c.svg" alt="" /> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav style={{ padding: "24px 40px 20px 40px", textColor: "green", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder", display: "flex" }} className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                    </Nav>
                    <Nav style={{ padding: "24px 40px 20px 40px", fontSize: "18px", lineHeight: "20px", fontWeight: "bolder", display: "flex" }}>
                    <Nav.Link style={{ paddingRight: "20px" }} href="#LogIn">Log In</Nav.Link>
                    <Button variant="success">Sign Up</Button>{ ' ' }
                </Nav>
                </Navbar.Collapse>
                
            </Navbar>
        </div>
    )
}

export default TopBar