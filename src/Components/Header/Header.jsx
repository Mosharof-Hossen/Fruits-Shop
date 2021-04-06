import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext } from 'react';
import { Nav, Navbar,Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser ,setLoggedInUser] = useContext(UserContext)
    return (
        <div style = {{color: 'white'}}>
            <Navbar  variant="light">
                <Navbar.Brand style = {{color:"red",fontWidth:"bold"}} href="/home">FRESH FRUITS</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link className = "mx-2" to="/home"><Button variant="outline-primary">Home</Button></Link>
                    <Link className = "mx-2" to="/order"><Button variant="outline-primary">Order</Button></Link>
                    <Link className = "mx-2" to="/admin"><Button variant="outline-primary">Admin</Button></Link>
                </Nav>
                <Form inline>
                    <h5 style = {{color:"blue"}}className = "px-2">{loggedInUser.name}</h5>
                    <Link to="/login"><Button variant="outline-primary">Login</Button></Link>
                </Form>
            </Navbar>
        </div>
    );
};

export default Header;
