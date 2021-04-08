import React, { useEffect, useState } from 'react';
import "./Home.css"
import Data from "../Data/Data.json"
import Product from '../Product/Product';
import { Spinner } from 'react-bootstrap';
const Home = () => {
    const [data , setData] = useState([])
    // useEffect(() => {
    //     setData(Data)
    //     fetch("http://localhost:5000/addProduct",{
    //             method : "POST",
    //             headers : {
    //                 "Content-Type" : "application/json"
    //             },
    //             body : JSON.stringify(Data[0])
    //         })
    // },[])
    // const handleAddProduct = ()=>{
        // fetch("http://localhost:5000/addProduct",{
        //     method : "POST",
        //     headers : {
        //         "Content-Type" : "application/json"
        //     },
        //     body : JSON.stringify(Data[0])
        // })
    // }
    useEffect(() =>{
        fetch("https://mighty-scrubland-12520.herokuapp.com/products")
        .then(res => res.json()) 
        .then(product => setData(product)) 
    },[])  
    return (
        
            <div className="hero-image">
                <div className="products d-flex">
                    {
                        data.length === 0 && <div className="mt-5"><h2>Loading...<Spinner animation="border" variant="primary" /></h2></div>
                    }
                    {
                        data.map(dt => <Product key = {dt.id} data = {dt}></Product>)
                    }
                </div>
            </div>
        
    );
};

export default Home;