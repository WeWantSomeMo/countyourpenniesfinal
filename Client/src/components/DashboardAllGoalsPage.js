import {
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';

import './dashboard.css'

import Navbar from 'react-bootstrap/Navbar';
import Stack from 'react-bootstrap/Stack';




function DashboardPage(){
  return(

    <>
      <h1>Welcome to the Goal Dashboard!</h1>
      


      <Link to='/newgoals/true'>
        <button>Submit New Goal</button>
      </Link>


      <div className="container">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Goal Name</th>
              <th>$ Amount Goal</th>
              <th>Scheduled Savings</th>
              <th>Time Estimate</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td className="name"></td>
              <td className="amount"></td>
              <td className="schedule"></td>
              <td className="time"></td>        <button className="delete">Delete</button>
            </tr>

            <tr>
              <td className="name"></td>
              <td className="amount"></td>
              <td className="schedule"></td>
              <td className="time"></td>         <button className="delete">Delete</button>
            </tr>

            <tr>
              <td className="name"></td>
              <td className="amount"></td>
              <td className="schedule"></td>
              <td className="time"></td>         <button className="delete">Delete</button>
            </tr>

          </tbody>
        </Table>
      </div>
  </>

<>
<Navbar bg="primary" variant="dark">
      <Container>
      <Stack direction="horizontal" gap={3}>
        <Navbar.Brand></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-right">
          <Navbar.Text>
          <Link to ="/"><button variant="secondary"className="justify-right">Logout</button></Link>
          </Navbar.Text>
        </Navbar.Collapse>
        </Stack>
      </Container>
    </Navbar>

    <Link to='/newgoals'>
    <button>Submit New Goal</button>
    </Link>

    <Table striped bordered hover>
    <thead>
      <tr>
        <th>#</th>
        <th>Goal Name</th>
        <th>$ Amount Goal</th>
        <th>Scheduled Savings</th>
        <th>Time Estimate</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td></td>
      </tr>
    </tbody>
    </Table>
</>



)}



export default DashboardPage;

