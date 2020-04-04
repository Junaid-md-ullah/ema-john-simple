import React from 'react';
import { useForm } from 'react-hook-form';
import './Shipment.css';
import { useAuth } from '../Login/useAuth';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';

const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const auth = useAuth();
    const onSubmit = data => { 

      const savedCart=getDatabaseCart();
      const orderDetail={email: auth.user.email, cart:savedCart};
      fetch('http://localhost:4200/placeOrder',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        
        body: JSON.stringify(orderDetail) // body data type must match "Content-Type" header
      })
      .then(res =>res.json())
      .then(data =>{
        console.log('order placed',data);
        alert('Successfully placed your order with order ');
        processOrder();
      })

     }
    

    console.log(watch('example')) // watch input value by passing the name of it
  
    return (
      <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
        
        
        {/* include validation with required or other standard HTML validation rules */}
        <input name="name" defaultValue={auth.user.name} ref={register({ required: true })} placeholder="Name"/>
        {/* errors will return when field validation fails  */}
        {
            errors.name && <span className="error">Name is required</span>
        }

        <input name="email" defaultValue={auth.user.email} ref={register({ required: true })} placeholder="Email"/>
        {/* errors will return when field validation fails  */}
        {errors.email && <span className="error">Email is required</span>}

        <input name="AddressLine1" ref={register({ required: true })} placeholder="Address Line 1" />
        {/* errors will return when field validation fails  */}
        {errors.AddressLine1 && <span className="error">Address is required</span>}

        <input name="AddressLine2" ref={register} placeholder="Address Line 2"/>
       

        <input name="city" ref={register({ required: true })} placeholder="city"/>
        {/* errors will return when field validation fails  */}
        {errors.city && <span className="error">City is required</span>}

        <input name="country" ref={register({ required: true })} placeholder="country" />
        {/* errors will return when field validation fails  */}
        {errors.country && <span className="error">Country is required</span>}

        <input name="zipcode" ref={register({ required: true })} placeholder="zipcode" />
        {/* errors will return when field validation fails  */}
        {errors.zipcode && <span className="error">Zip Code is required</span>}
        
        <input type="submit" />
      </form>
    )
};

export default Shipment;