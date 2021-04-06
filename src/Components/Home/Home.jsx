import React, { useEffect, useState } from 'react';
import "./Home.css"
import Data from "../Data/Data.json"
import Product from '../Product/Product';
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
        fetch("http://localhost:5000/products")
        .then(res => res.json()) 
        .then(product => setData(product)) 
    },[])  
    return (
        
            <div className="hero-image">
                <div className="products d-flex">
                    {
                        data.map(dt => <Product key = {dt.id} data = {dt}></Product>)
                    }
                </div>
            </div>
        
    );
};

export default Home;