import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import background from '../assets/background.png'
import {Link} from 'react-router-dom'

const Register = () => {
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
            <h3 className='fw-bold mb-3'>Register</h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Nama lengkap" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email/No Telepon</Form.Label>
                <Form.Control type="email" placeholder="Contoh: johndoe@gmail.com" />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label>Nomor Telepon</Form.Label>
                <Form.Control type="text" placeholder="+62 . " />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Buat password</Form.Label>  
                <Form.Control type="password" placeholder="Buat password" />
              </Form.Group>

              <Button type='submit' className='w-100 btns-long'>Daftar</Button>

              <p className='text-center mt-4'>Sudah punya akun?
                <Link to='/login' style={{textDecoration: 'none'}}>
                    <span className='fw-bold txt-primary'> Masuk di sini</span>
                </Link></p>
          </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Register