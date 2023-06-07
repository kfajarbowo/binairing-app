import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import background from '../assets/background.png'
import {Link} from 'react-router-dom'

const Login = () => {
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
            <h3 className='fw-bold mb-3'>Masuk</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email/No Telepon</Form.Label>
                <Form.Control type="email" placeholder="Contoh: johndoe@gmail.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <div className="passwordLabel d-flex justify-content-between">
                    <Form.Label>Password</Form.Label>
                    <Form.Label>
                        <Link to='/resetpassword' style={{textDecoration: 'none', color: 'var(--darkblue-04)'}}>
                            Lupa kata sandi?
                        </Link>
                    </Form.Label>
                </div>
                <Form.Control type="password" placeholder="Masukkan password" />
              </Form.Group>

              <Button type='submit' className='w-100 btns-long'>Masuk</Button>

              <p className='text-center mt-4'>Belum punya akun?
                <Link to='/register' style={{textDecoration: 'none'}}>
                    <span className='fw-bold txt-primary'> Daftar di sini</span>
                </Link></p>
          </Form>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Login