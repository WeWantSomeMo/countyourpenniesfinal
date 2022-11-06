import React from 'react'
import {Link} from 'react-router-dom'
import {FaRegMoneyBillAlt} from 'react-icons/fa'
import {BsPiggyBank} from 'react-icons/bs'
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';


export default function NewGoals() {


  return (
<>
            <Link to='/'>
                <button>Log out</button>
            </Link>

    <Card>
        <Card.Text>
        Goal Name: 
        <input className='box' type="text" name="name" />
        </Card.Text>
        <Card.Text>
        <FaRegMoneyBillAlt/> Amount to Goal: 
        <input className='box' type="number" name="name" />
        </Card.Text>
        <Card.Text>
        <BsPiggyBank/>: 
        <input className='box' type="number" name="name" />
        </Card.Text>
        <Card.Text>
        Input Time Frame 
        <input className='box' type="number" name="name" />
        </Card.Text>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Weeks</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Months</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Years</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>

        <Link to='/allgoals'>
            <button>Submit Goal</button>
        </Link>

    </Card>


</>
  )
}
