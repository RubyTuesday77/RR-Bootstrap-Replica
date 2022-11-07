// Import Bootstrap components:
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'


function StoreListings() {
    return (
        <div>
            <h2 style={{ fontSize: "1.8em", fontWeight: "bold", paddingTop: "20px" }}>Browse stores in Raleigh</h2>
            <Container style={{ padding: "15px", textAlign: "center" }} fluid>
                <Row style={{ padding: "15px", display: "flex", justifyContent: "center", columnGap: "20px"}} className="justify-content-md-center">
                    <Col style={{ padding: "15px", display: "flex", justifyContent: "center", columnGap: "20px", border: "1px solid #E8E9EB", height: "130px" }}>
                        <Image style={{ paddingRight: "10px", width: "100px", height: "100px", border: "1px solid #000000" }} 
                            src="https://www.instacart.com/image-server/116x116/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/1925/d6846335-4e58-4fbd-b460-5d7e3266683e.jpg" roundedCircle />
                        <div style={{ display: "inline" }}>
                            <h5 style={{ fontWeight: "bold" }}>Harris Teeter</h5>
                            <p style={{ fontSize: "1em", fontWeight: "bold" }}>Delivery & Pick-up</p>
                        </div>
                    </Col>
                    <Col style={{ padding: "15px", display: "flex", justifyContent: "center", columnGap: "20px", border: "1px solid #E8E9EB", height: "130px" }}>
                        <Image style={{ paddingRight: "10px", width: "100px", height: "100px", border: "1px solid #000000" }} 
                            src="https://www.instacart.com/image-server/176x176/www.instacart.com/assets/domains/warehouse/logo/246/62c95c4e-90b1-4e94-b3e3-49ec806ee5ad.png" roundedCircle />
                        <div style={{ display: "inline" }}>
                            <h5 style={{ fontWeight: "bold" }}>Lowes Foods</h5>
                            <p style={{ fontSize: "1em", fontWeight: "bold" }}>Delivery</p>
                        </div>
                    </Col>
                </Row>
                <Row style={{ padding: "15px", display: "flex", justifyContent: "center", columnGap: "20px"}} className="justify-content-md-center">
                    <Col style={{ padding: "15px", display: "flex", justifyContent: "center", columnGap: "20px", border: "1px solid #E8E9EB", height: "130px" }}>
                        <Image style={{ paddingRight: "10px", width: "100px", height: "100px", border: "1px solid #000000" }} 
                            src="https://www.instacart.com/image-server/200x/www.instacart.com/assets/domains/warehouse/logo/144/c42efdcb-47d4-4a4a-afb1-c1029be23af1.png" roundedCircle />
                        <div style={{ display: "inline" }}>
                            <h5 style={{ fontWeight: "bold" }}>Total Wine</h5>
                            <p style={{ fontSize: "1em", fontWeight: "bold" }}>Delivery & Pick-up</p>
                        </div>
                    </Col>
                    <Col style={{ padding: "15px", display: "flex", justifyContent: "center", columnGap: "20px", border: "1px solid #E8E9EB", height: "130px" }}>
                        <Image style={{ paddingRight: "10px", width: "100px", height: "100px", border: "1px solid #000000" }} 
                            src="https://www.instacart.com/image-server/200x/www.instacart.com/assets/domains/warehouse/logo/5/65f2304b-908e-4cd0-981d-0d4e4effa8de.png" roundedCircle />
                        <div style={{ display: "inline" }}>
                            <h5 style={{ fontWeight: "bold" }}>Costco</h5>
                            <p style={{ fontSize: "1em", fontWeight: "bold" }}>Pick-up</p>
                        </div>
                    </Col>
                </Row>
                <Row style={{ padding: "15px", display: "flex", justifyContent: "center", columnGap: "20px"}} className="justify-content-md-center">
                    <Col style={{ padding: "15px", display: "flex", justifyContent: "center", columnGap: "20px", border: "1px solid #E8E9EB", height: "130px" }}>
                        <Image style={{ paddingRight: "10px", width: "100px", height: "100px", border: "1px solid #000000" }} 
                            src="https://www.instacart.com/image-server/200x/www.instacart.com/assets/domains/warehouse/logo/1879/43fb59cc-59cd-475d-b01c-6f863725e468.png" roundedCircle />
                        <div style={{ display: "inline" }}>
                            <h5 style={{ fontWeight: "bold" }}>Food Lion</h5>
                            <p style={{ fontSize: "1em", fontWeight: "bold" }}>Delivery & Pick-up</p>
                        </div>
                    </Col>
                    <Col style={{ padding: "15px", display: "flex", justifyContent: "center", columnGap: "20px", border: "1px solid #E8E9EB", height: "130px" }}>
                        <Image style={{ paddingRight: "10px", width: "100px", height: "100px", border: "1px solid #000000" }} 
                            src="https://www.instacart.com/image-server/116x116/filters:fill(FFF,true):format(webp)/www.instacart.com/assets/domains/warehouse/logo/12/2774c343-1319-4720-a54f-0c46e93f956c.png" roundedCircle />
                        <div style={{ display: "inline" }}>
                            <h5 style={{ fontWeight: "bold" }}>Aldi</h5>
                            <p style={{ fontSize: "1em", fontWeight: "bold" }}>Delivery & Pick-up</p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default StoreListings