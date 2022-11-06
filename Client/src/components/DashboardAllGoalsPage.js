import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';

function DashboardPage(){
  // let {logout} = useParams();
  // console.log("This is logout", logout)

  return(
    <>
      <h1>Welcome to the Goal Dashboard!</h1>
      


      <Link to='/newgoals/true'>
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
