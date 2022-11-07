// Import Bootstrap components:
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


function Background() {
    return (
        <div>
            <Card className="bg-dark" border="light">
                <Card.Img src="https://www.instacart.com/assets/homepage-hero-background-ec75de0ea80198801094497b46ad920b.jpg" alt="Instacart" />
                <Card.ImgOverlay>
                    <Card.Text style={{ fontSize: "2.5em", fontWeight: "bold" }}>Order groceries for delivery <br /> or pickup today</Card.Text>
                    <Card.Text style={{ fontSize: "1.2em", fontWeight: "bold" }}>Whatever you want from local stores, brought right to your door.</Card.Text>
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Control size="lg" type="text" placeholder="Enter your address" />
                        </Form.Group>
                        <Button variant="success" type="submit">Submit</Button>
                    </Form>
                </Card.ImgOverlay>
            </Card>
        </div>
    )
}

export default Background