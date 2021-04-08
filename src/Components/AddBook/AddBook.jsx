import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { useForm } from "react-hook-form";
import FormTable from '../FormTable/FormTable';


const AddBook = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null)
    const [addedProduct , setAddSingleProduct] = useState(false)
    const onSubmit = data => {
        const eventData = {
            name: data.name,
            price: data.price,
            image: imageURL
        }
        console.log(eventData)
        setAddSingleProduct(true)
        fetch("http://localhost:5000/addProduct", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(eventData)
        })
            .then(res => console.log("server side response"))
    };



    const handleImageUpload = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData()
        imageData.set("key", "ac749b44cc45f3257ae3139ede1cbada")
        imageData.append("image", event.target.files[0])

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-3 managerBtn">
                    <Link className="" to="/admin"><Button variant="outline-primary">Manage books</Button></Link><br />
                    <Link className="" to="/addBook"><Button variant="outline-primary">Add Book</Button></Link><br />
                    <Link className="" to="/"><Button variant="outline-primary">Add Book</Button></Link>
                </div>
                <div className="col-9 manager">
                    {/* action="http://localhost:5000/addProduct" method="post" */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Fruits Name</Form.Label>
                            <Form.Control   {...register('name', { required: true })} placeholder="Enter fruit name" name="name" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Price</Form.Label>
                            <Form.Control placeholder="Price" name="price"{...register('price', { required: true })} />
                        </Form.Group>

                        <Form.Group controlId="formBasicCheckbox">
                            <Form.File onChange={handleImageUpload} id="exampleFormControlFile1" label="Example file input" />
                        </Form.Group>


                        <Button variant="primary" type="submit">Submit</Button>
                    </form>
                    {
                        addedProduct && <h1>Your Product has been sent to the database</h1>
                    }
                </div>
            </div>
        </div>
    );
};

export default AddBook;