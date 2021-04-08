import React, { useContext, useEffect, useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';

const CheckOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    const { name } = useParams()
    const [product, setProduct] = useState({})
    const [addedProduct , setAddSingleProduct] = useState(false)
    useEffect(() => {
        fetch("https://mighty-scrubland-12520.herokuapp.com/products/"+name )
            .then(res => res.json())
            .then(data => {
                const product = (data[0])
                const addPd = { ...product }
                addPd.email = loggedInUser.email
                setProduct(addPd)
            })
    }, [])


    // const product = fakeData.find(pd => pd.key === productKey)

    const handleCheckOut = () => {
        setAddSingleProduct(true)
        fetch("https://mighty-scrubland-12520.herokuapp.com/addSingleProduct", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(product)
        })
    }
    return (
        <div className="container mt-5">
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Fruits Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{product.name}</td>
                        <td>1</td>
                        <td>${product.price}</td>
                    </tr>
                    <tr>
                        <td colSpan="2">Total</td>
                        <td>${product.price}</td>
                    </tr>
                </tbody>
            </Table>
            <Button onClick={handleCheckOut} variant="outline-primary">Checkout</Button>
            {
                addedProduct && <h1>Your Product is Selected</h1>
            }
        </div>
    );
};

export default CheckOut;