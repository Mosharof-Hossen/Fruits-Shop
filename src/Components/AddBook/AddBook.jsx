
import { Link } from 'react-router-dom';    
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const AddBook = () => {
    return (
        <div className = "container mt-5">
            <div className="row">
                <div className="col-3 managerBtn">
                    <Link className = "" to="/admin"><Button variant="outline-primary">Manage books</Button></Link><br/>
                    <Link className = "" to="/addBook"><Button variant="outline-primary">Add Book</Button></Link><br/>
                    <Link className = "" to="/"><Button variant="outline-primary">Add Book</Button></Link>
                </div>
                <div className="col-9 manager">
                    add book
                </div>
            </div>
        </div>
    );
};

export default AddBook;