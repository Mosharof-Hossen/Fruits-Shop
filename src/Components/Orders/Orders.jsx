import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';

const Orders = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const [bookings, setBookings] = useState()
    useEffect(() => {
        fetch("http://localhost:5000/bookings?email=" + loggedInUser.email)
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [])
    return (
        <div>
            <div className="container mt-5">
                    <h3>Your Selected Fruits</h3>
                    
                    <Table striped bordered hover className = "table" >
                        <thead>
                            <tr>
                                <th>Fruits Name</th>
                                <th>Price</th>
                            </tr>
                        </thead>
                        {
                            bookings?.map(book => 
                            <tbody key = {book._id}>
                                <tr>
                                    <td>{book.name}</td>
                                    <td>{book.price}</td>
                                </tr>

                            </tbody>)
                        }
                        
                    </Table>
                </div>
        </div>
    );
};

export default Orders;