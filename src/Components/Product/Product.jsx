import React from 'react';
import {Button, Card } from "react-bootstrap"
import { Link, useParams } from 'react-router-dom';
import "./Product.css"

const Product = (props) => {
    
    let { price, name , image, _id} = props.data
    return (
        <div className = "my-3 mx-3">
            
            <Card style={{ width: '16rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title className = "text-center">{name}</Card.Title>
                    {/* <h3 className = "text-center">{date}</h3> */}
                </Card.Body>
                <div className = "product d-flex">
                    <h5>Price : ${price} </h5>
                    <Link className = "" to = {`/CheckOut/${name}`}><Button variant="outline-primary">Buy now</Button></Link>
                </div>
            </Card>
            
        </div>
    );
};

export default Product;