import React from 'react'
import { Container,Row,Col } from 'react-bootstrap';
import './Home.css'

export default function Home() {
  return (
    <>
    <header>
    <Container fluid>
        <Row>
            <Col sm={12}>
            <div className='home-content'>
                <span className='welcome'>Welcome to <br /> </span>
                <span className='company-name'>GR Engineers, <br />Hyderabad.</span>
                <p className='intro-para'> GR Engineers is a sheet metal componets manufactuing factory in hyderbad since 1998.</p>
            </div>
            </Col>
        </Row>
    </Container>
    </header>
    <Container>
        <Row>
            <Col sm={12} className='mt-5 bg-light p-3 shadow-lg text-center'><p> As we welcome you to GR Engineers, we invite you to explore the heart of our operations, witness the seamless integration of technology and craftsmanship, and experience firsthand the dedication that goes into every sheet metal component we create. Whether you are a member of our esteemed team, a valued client, or a curious visitor, your presence enriches our journey, and we are thrilled to share our passion for sheet metal manufacturing with you</p></Col>
                     
                  
            <Col sm={12} lg={6}>
                <div className='intro-two'>
                    <h3>About US</h3>
                    <p> Welcome to GR Engineers – Your Trusted Partner in Precision Sheet Metal Solutions!
                    At GR Engineers, we take pride in being a leading force in the manufacturing of high-quality sheet metal components. Nestled in the vibrant city of Hyderabad, we have been dedicatedly serving our clients with precision, reliability, and innovation since our inception.</p>
                </div>
            </Col>
            <Col sm={12} lg={6}>
                <div className='intro-two'>
                <h4>Our Expertise:</h4>
                        <p> With a commitment to excellence, GR Engineers specializes in the design and production of a diverse range of sheet metal components. Our skilled team of engineers and craftsmen leverage cutting-edge technology and years of industry experience to deliver solutions that meet the most demanding specifications.
                        </p>
                </div>
            </Col>
            <Col sm={12} lg={4}>
                <div className='intro-two'>
                <h4>Quality Assurance:</h4>
                        <p>At the heart of our operations is an unwavering dedication to quality. Every product that leaves our facility undergoes stringent quality checks to ensure it meets the highest industry standards. Our commitment to quality is a testament to our mission of delivering reliable and durable sheet metal components.
                        </p>
                </div>
            </Col>
            <Col sm={12} lg={4}>
                <div className='intro-two'>
                <h4>Innovation and Customization:</h4>
                        <p> Understanding the dynamic needs of our clients, GR Engineers thrives on innovation. We collaborate closely with our clients to develop customized solutions that cater to their specific requirements. Whether it's a unique design, material preference, or tight production timeline, we are here to exceed your expectations.
                        </p>
                </div>
            </Col>
            <Col sm={12} lg={4}>
                <div className='intro-two'>
                <h4>Our Mission:</h4>
                        <p> Understanding the dynamic needs of our clients, GR Engineers thrives on innovation. We collaborate closely with our clients to develop customized solutions that cater to their specific requirements. Whether it's a unique design, material preference, or tight production timeline, we are here to exceed your expectations.
                        </p>
                </div>
            </Col>
        </Row>
    </Container>
    <footer>
        <Container fluid>
            <Row>
                <Col sm={12} className='bg-dark text-white text-center p-4'>
                    <p>All rights reserved 2024</p>

                </Col>
            </Row>
        </Container>
    </footer>
    </>
  )
}
