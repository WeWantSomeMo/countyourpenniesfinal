import { Link } from "react-router-dom";
import Table from 'react-bootstrap/Table';
import './dashboard.css'
function DashboardPage(){
  // let {logout} = useParams();
  // console.log("This is logout", logout)
  return(
    <>
      <h1>Welcome to the Goal Dashboard!</h1>
      <div className="container">
      <Link to='/newgoals/true'>
        <button className="btnGoal">Submit New Goal</button>
      </Link>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Goal Name</th>
              <th>$ Amount Goal</th>
              <th>Scheduled Savings</th>
              <th>Time Estimate</th>
            </tr>
          </thead>
            <tr>
              <td className="name"></td>
              <td className="amount"></td>
              <td className="schedule"></td>
              <td className="time"></td><br/><button className="delete">Delete</button>
            </tr>
            <tr>
              <td className="name"></td>
              <td className="amount"></td>
              <td className="schedule"></td>
              <td className="time"></td><button className="delete">Delete</button>
            </tr>
            <tr>
              <td className="name"></td>
              <td className="amount"></td>
              <td className="schedule"></td>
              <td className="time"></td><button className="delete">Delete</button>
            </tr>
        </Table>
      </div>
  </>
)}
export default DashboardPage;
