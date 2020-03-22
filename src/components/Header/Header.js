import React, { useState,useRef } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { useEffect } from 'react';


const usePrevious=value=>{
    const prev=useRef();
    useEffect(()=>{
        console.log(value);
        prev.current=value;
    },[value]);
    return prev.current;
}

const Header = () => {
    const [count,setCount]=useState(0);
    const previous=usePrevious(count);
    return (
        <div className="header">
            <h1>Count: {count} Previous: {previous}</h1>
            <button onClick={()=>setCount(count+1)}>
                +
            </button>
                
             <button onClick={()=>setCount(count-1)}>
                -
             </button>
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};


export default Header;