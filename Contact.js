import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import './Contact.css'

export default function Contact() {
  return (
    <>
      <Container className='mb-5'>
        <Row>
          <Col sm={3}>
            <div className='contact-text'>
              <h3>
                Let us work together!
              </h3>
              <p>
                My Email : admin@gre.com
              </p>
              <p>
                Contact : +91 999999999
              </p>
            </div>
          </Col>
          <Col sm={9}>
            <div className='contact-form mt-5'>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Full Name</label>
              <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Full name" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">Email address:</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">Your Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
            </div>
            <Button variant="dark"> Submit </Button>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
          <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d1012.9339412865875!2d78.59308443985059!3d17.493636795705008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTfCsDI5JzM2LjIiTiA3OMKwMzUnMzQuOSJF!5e0!3m2!1sen!2sin!4v1704914146827!5m2!1sen!2sin" width="100%" height="250" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"  title="myFrame"></iframe>
          </Col>
        </Row>
      </Container>
      <footer>
        <Container fluid className='mt-5'>
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
