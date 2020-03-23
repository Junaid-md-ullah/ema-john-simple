import React, { useState,useRef } from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { useEffect } from 'react';
import { useAuth } from '../Login/useAuth';
import { Link } from 'react-router-dom';


// const usePrevious=value=>{
//     const prev=useRef();
//     useEffect(()=>{
//         console.log(value);
//         prev.current=value;
//     },[value]);
//     return prev.current;
// }

const Header = () => {
    const auth=useAuth();
    console.log(auth);
    // const [count,setCount]=useState(0);
    // const previous=usePrevious(count);
    return (
        <div className="header">
            {/* <h1>Count: {count} Previous: {previous}</h1>
            <button onClick={()=>setCount(count+1)}>
                +
            </button>
                
             <button onClick={()=>setCount(count-1)}>
                -
             </button> */}
            <img src={logo} alt=""/>
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
                {

                  auth.user && <span style={{color:'yellow'}}>Welcome, {auth.user.name} </span>
                  }
                  {
                      auth.user?
                      <a href="/login">Sign Out</a>
                      : <a href="/login">Sign In</a>
                  }
            </nav>
        </div>
    );
};


export default Header;