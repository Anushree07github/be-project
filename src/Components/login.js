import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Login_Buttons from './Login_Buttons';


export default function Login(params) {
    
    return(
        <div className='flex h-screen items-center justify-center' >
            <Container className='w-2/5 border-2 rounded-xl bg-white border-gray-300 px-12'>
                <Row className='justify-center text-4xl font-bold my-8'>
                    Login
                </Row>
                <Row className="justify-center">
                    <Col>
                        <Form>
                            <Form.Group controlId="formBasicEmail" className='my-4'>
                                <Form.Control type="email" placeholder="Email" />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword" className='mt-4 mb-2'>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Remember me" />
                            </Form.Group>
                            <Row>
                                <Button className='text-blue-700 bg-transparent border-0 active:text-blue-700 hover:text-blue-700'>
                                    Forgot password?
                                </Button>
                            </Row>
                            <Row>
                                <Button className="bg-cyan-500 border-0 hover:bg-cyan-800 my-2" type="Login">
                                    Submit
                                </Button>
                            </Row>
                            <Row>
                                <p className='text-center align-middle'>Don't have an account?
                                    <button className='mx-1 bg-transparent border-0 text-blue-500'>
                                        Signup
                                    </button>
                                </p>
                            </Row>
                            <Row className='mt-4'>
                                <div className='flex items-center'>
                                    <hr className='flex-grow border-t border-gray-500' />
                                    <span className='mx-2 text-gray-400 font-semibold'>
                                        Or
                                    </span>
                                    <hr className='flex-grow border-t border-gray-500' />
                                </div>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                <Login_Buttons />
            </Container>
        </div>
    );

}