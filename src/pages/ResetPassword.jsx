import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import background from '../assets/background.png'

const ResetPassword = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={6} className='px-0'>
          <div className="loginLeft">
            <img src={background} alt="Login Background" className='img-fluid vh-100 w-100 object-fit-cover' />
          </div>
        </Col>
        <Col md={6} className='d-flex align-items-center justify-content-center'>
          <div className="loginForm w-75">
            <h3 className='fw-bold mb-3'>Reset Password</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Masukkan pasword baru</Form.Label>
                <Form.Control type="password" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Ulangi password baru</Form.Label>
                <Form.Control type="password" />
              </Form.Group>

              <Button type='submit' className='w-100 btns-long'>Simpan</Button>
          </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ResetPassword