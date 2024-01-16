import React from 'react'
import { Container, Row, Col, Card, CardGroup } from 'react-bootstrap'
import './MandS.css'
export default function MandS() {
  return (
    <>
      <section>
        <Container className='mb-3 mt-3 p-3'>
          <Row className='p-2' >
            <Col sm={12} className='p-4 shadow'>
              <div className='service-box p-5'>
                <p> GR Engineers is a cutting-edge manufacturing facility specializing in the production of sheet metal components. Renowned for its commitment to precision engineering, the factory boasts a diverse array of machines and dies tailored to meet the unique demands of various manufacturing processes.</p>


                <p> Within the facility, state-of-the-art machinery is strategically employed to ensure efficient and high-quality production. These machines are meticulously designed to handle different aspects of sheet metal fabrication, including cutting, bending, and shaping. From advanced laser cutting machines for intricate designs to robust press brakes for precise bending, GR Engineers has invested in a comprehensive suite of equipment to cater to a wide range of component specifications. </p>

              </div>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col>
              <div>
                <CardGroup>
                  <Card>

                    <Card.Body>
                      <Card.Title>Power Press Machines</Card.Title>
                      <Card.Text>


                        Power press machines are essential tools in industrial manufacturing, employing hydraulic or mechanical force to shape and form metal sheets with precision. These versatile machines play a crucial role in various industries, ensuring efficient and accurate production processes.

                      </Card.Text>
                    </Card.Body>

                  </Card>
                  <Card>

                    <Card.Body>
                      <Card.Title>Hydraulic machines</Card.Title>
                      <Card.Text>

                        Hydraulic machines utilize fluid power to perform various tasks, from lifting heavy loads to powering industrial equipment. Their efficiency, reliability, and adaptability make them integral in diverse applications, ranging from construction and manufacturing to transportation and beyond.
                      </Card.Text>
                    </Card.Body>

                  </Card>
                  <Card>

                    <Card.Body>
                      <Card.Title>Shearing Machines</Card.Title>
                      <Card.Text>
                        Shearing machines are indispensable in metal fabrication, employing a simple yet effective mechanism to cut metal sheets with precision. These machines find widespread use in industries such as automotive and construction, ensuring clean and accurate cuts for diverse applications.
                      </Card.Text>
                    </Card.Body>

                  </Card>
                </CardGroup>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid>
          <Row>
            <Col sm={12} className='mt-5 mb-5 bg-dark p-3 shadow-lg text-white text-center'><p> Here is all the procedure we do to manyfacture any components...</p></Col>
          </Row>
        </Container>

        <Container>
          <Row >
            <Col lg={4} className='mb-1 mt-2' >
              {/* <div> */}
                <Card style={{ width: '18rem' }} >
                  <Card.Img variant="top" src="https://media.istockphoto.com/id/1135159626/photo/female-mechanical-engineer-designs-3d-engine-on-her-personal-computer-while-male-automation.jpg?s=612x612&w=0&k=20&c=U2Eu-LvJ-xunl2VDIBzYlRJDwC1sLA3HgrWG5Oxw_TY=" rounded />
                  <Card.Body>
                    <Card.Title>Design & Engineering</Card.Title>
                    <Card.Text>
                      Begin with a detailed design of the sheet metal component using computer-aided design (CAD) software. Consider factors such as material selection, dimensions, tolerances, and manufacturing processes during the design phase.
                    </Card.Text>
                  </Card.Body>
                </Card>
              {/* </div> */}
            </Col>
            <Col lg={4} className='mb-1 mt-2 '>
              {/* <div> */}
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://media.istockphoto.com/id/517187642/photo/small-stack-of-steel-plates-on-the-bench-miller.jpg?s=612x612&w=0&k=20&c=NRdI5rQQezj7tksEVKfKo59lWCsz7HrPsanXgzt94hM=" />
                  <Card.Body>
                    <Card.Title>Material Selection & Sheet metal Cutting</Card.Title>
                    <Card.Text>
                      Choose the appropriate sheet metal material based on the requirements of the component.The first step is cutting the raw sheet metal into the desired shape. Common cutting methods is Shearing. Using a shear to cut straight lines.
                    </Card.Text>

                  </Card.Body>
                </Card>

              {/* </div> */}
            </Col>
            <Col lg={4} className='mb-1 mt-2'>
              {/* <div> */}
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://media.istockphoto.com/id/1399963031/photo/metal-products-bent-on-a-bending-machine-factory-made-products-industrial-concept-background.jpg?s=612x612&w=0&k=20&c=lcEqIIt8RCwARa2nsJWZOuuUhgbVvPvmn__OvKJRZXQ=" />
                  <Card.Body>
                    <Card.Title>Blanking & Forming</Card.Title>
                    <Card.Text>
                      Blank pieces are cut from the larger sheet, each representing the outline of the final component.Use processes like bending, folding, or stamping to shape the flat sheet into the desired three-dimensional form. Press brakes, stamping presses, and roll forming machines are commonly used for forming.
                    </Card.Text>

                  </Card.Body>
                </Card>

              {/* </div> */}
            </Col>
            <Col lg={4} className='mb-1 mt-2 p-2'>
              <div>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://media.istockphoto.com/id/1317464471/photo/the-technician-operator-working-with-hydraulic-press-brake-bending-machine.jpg?s=612x612&w=0&k=20&c=E0a2JXpdU27Q_yx_VV3UQr1l1VdFCi3QLq5oxzdWqfE=" />
                  <Card.Body>
                    <Card.Title>Punching & Piercing</Card.Title>
                    <Card.Text>
                      Holes and other features are created through punching or piercing processes. Power Press punching machines or Hydraulic punches are often used for this purpose
                    </Card.Text>

                  </Card.Body>
                </Card>

              </div>
            </Col>
            <Col lg={4} className='mb-1 mt-2 p-2'>
              <div>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://media.istockphoto.com/id/969507226/photo/manuel-worker-in-a-production-line-of-a-machine-part.jpg?s=612x612&w=0&k=20&c=M2k9TprOf_Rx893JYb3Pfo1bT02CPShdSaGZh_SBag8=" />
                  <Card.Body>
                    <Card.Title>Assembly & Quality Control</Card.Title>
                    <Card.Text>
                      If the final product requires multiple components, they are assembled using welding, fasteners, adhesives, or other joining methods. Inspect the finished components for dimensional accuracy, surface defects, and overall quality.
                    </Card.Text>

                  </Card.Body>
                </Card>

              </div>
            </Col>
            <Col lg={4} className='mb-1 mt-2 p-2'>
              <div>
                <Card style={{ width: '18rem' }}>
                  <Card.Img variant="top" src="https://media.istockphoto.com/id/1405272497/photo/warehouse-workers-loading-van-with-boxes.jpg?s=612x612&w=0&k=20&c=m0Ua0a-7Bomn6rE6_rsVggq9UaskWVGuHzOF8-W8FBk=" />
                  <Card.Body>
                    <Card.Title>Packing & Shipping</Card.Title>
                    <Card.Text>
                      Package the components appropriately for transportation and delivery to customers.
                    </Card.Text>

                  </Card.Body>
                </Card>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
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
