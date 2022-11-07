import Form from 'react-bootstrap/Form';
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Signup() {
  return (
    <>
      <h2 className='p-3'>Fill out the form to create an account.</h2>
      <Container className='p-3'>
        <Row className="justify-content-md-center">
          <Col md={5} className="border">
              <Form className="p-4">
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  <Link to='/'>
                    <button>Submit</button>
                  </Link>
                  <br></br>
                  <Link to='/' className='p-3'>Already have an account? Log in</Link>
              </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Signup;