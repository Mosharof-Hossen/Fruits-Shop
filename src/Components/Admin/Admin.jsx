import { Link } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import { Button, Table } from 'react-bootstrap';
import  logo from "./../image/delete.png"
import "./Admin.css"
import { UserContext } from '../../App';



const Admin = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [bookings, setBookings] = useState()
    useEffect(() => {
        fetch("http://localhost:5000/bookings?email=" + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])

    const handleDelete = (e ,id)=>{
        e.target.parentNode.parentNode.parentNode.parentNode.style.display = "none"
        console.log("handleDelete",id)
        fetch(`http://localhost:5000/delete/${id}`,{
            method : "DELETE"
        })
        .then(res => res.json())
        .then(result => {
            console.log("delete successfully")
        })
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-3 managerBtn">
                    <Link className="" to="/admin"><Button variant="outline-primary">Manage Fruits</Button></Link><br />
                    <Link className="" to="/addBook"><Button variant="outline-primary">Add Fruits</Button></Link><br />
                    <Link className="" to="/"><Button variant="outline-primary">Edit Fruits</Button></Link>
                </div>
                <div className="col-9 manager">
                    <h3>Your Selected Fruits</h3>
                    
                    <Table striped bordered hover className = "table" >
                        <thead>
                            <tr>
                                <th>Fruits Name</th>
                                <th>Price</th>
                                <th>Action(Delete)</th>
                            </tr>
                        </thead>
                        {
                            bookings?.map(book => 
                            <tbody key = {book._id}>
                                <tr>
                                    <td>{book.name}</td>
                                    <td>{book.price}</td>
                                    <td><Link to ="/admin" onClick = {(e)=>handleDelete(e,book._id)}><img  className = "image" src= {logo} alt=""></img></Link></td>
                                </tr>

                            </tbody>)
                        }
                        
                    </Table>
                </div>
            </div>
        </div>
    );
};

export default Admin;