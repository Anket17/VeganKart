import React, {useContext, useState, useEffect} from 'react'
import {GlobalState} from '../../../GlobalState';

import axios from 'axios'
import PaypalButton from './PaypalButton'
import Razorpay from './Razorpay';

function Cart(){

    const state = useContext(GlobalState)
    const [cart, setCart] = state.userAPI.cart
    const [token] = state.token
    const [total, setTotal]= useState(0)



    useEffect(() => {
        const getTotal = () =>{
            const total = cart.reduce((prev, item) =>{
                return prev + (item.price * item.quantity)
            },0)
            setTotal(total)
        }
      getTotal()
    }, [cart]);

    const addToCart = async (cart) =>{
        await axios.patch('/user/addcart', {cart},{
            headers: {Authorization: token}
        })
    }

    const increment =(id) =>{
        cart.forEach(item =>{

            if(item._id === id){
                item.quantity += 1
            }
        })
        setCart([...cart])
        addToCart(cart)
    }

    const decrement =(id) =>{
        cart.forEach(item =>{

            if(item._id === id){
                item.quantity === 1 ? item.quantity = 1 : item.quantity -=1
            }
        })
        setCart([...cart])
        addToCart(cart)
    }

    const removeProduct = id =>{
        if(window.confirm("Do you want to Remove this Product?")){
           cart.forEach((item, index) =>{
               if(item._id=id){
                   cart.splice(index, 1)
               }
           }) 
           setCart([...cart])
           addToCart(cart)
        }
    }

    const tranSuccess = async(payment) =>{
       
        const {paymentID, address} = payment;

        await axios.post('/api/payment', {cart, paymentID, address},{
            headers: {Authorization: token}
        })
        setCart([])
        addToCart([])
        alert("you have successfully placed and order.")
       
    }



    if(cart.length === 0)
        return <h2 style={{textAlign: "center", fontSize: "5rem"}}>Cart Empty</h2>

    return(
        <div>
            {
           cart.map(product =>(
            <div className="detail cart" key={product._id}>
                <img src={product.images.url} alt="" />
                <div className="box-detail">
                <h2>{product.title}</h2>

                <span> &#8377; {product.price * product.quantity}</span>
                <p>{product.description}</p>
                <p>{product.content}</p>
                
                <div className="amount">
                    <button onClick = {()=> decrement(product._id)}> - </button>
                    <span>{product.quantity}</span>
                    <button onClick={() => increment(product._id)}> + </button>

                </div>
                    <div className="delete" onClick={()=> removeProduct(product._id)}>X</div>
                </div>
          </div>
           ))
            }
            <div className="total">
        <h3>Total: &#8377; {total}</h3>
                <PaypalButton 
                total={total} 
                tranSuccess={tranSuccess}/>
               <Razorpay />
            </div>
            
        </div>
    )
}

export default Cart