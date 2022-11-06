import { useParams , Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';



function NavbarSetup() {

  const userAuth = useParams(null)

  return (
    <Navbar bg="primary" variant="dark" className="p-4">
      <Container>
        <Navbar.Brand href="#home">Count your Pennies</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {userAuth.login &&
            <Navbar.Text>
              <Link to = "/">
                <Button variant="success">logout</Button>{' '}
              </Link>
            </Navbar.Text>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarSetup;