import React from 'react';
import Cart from './cart'

const loadScript = (src) =>{
    return new Promise((resolve)=>{
    const script = document.createElement('script')
    script.src = src
    document.body.appendChild(script)
    script.onload = () =>{
        resolve(true)
    }
    script.onerror = () =>{
        resolve(false)
    }
    document.body.appendChild(script)
})
}

const __DEV__ = document.domain ==="localhost"



const Razorpay = () => {
   async function displayRazorpay(){

        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if(!res){
            alert('Are you online')
            return
        }

        const data = await fetch('http://localhost:5000/razorpay', {method :'POST'}).then((t)=>
            t.json()
        )
        
        console.log(data)
        const options = {
            key: __DEV__ ? "rzp_test_v8g0nz8rhhdJxD":"API N/A", // Enter the Key ID generated from the Dashboard
            currency: data.currency,
            amount : Cart.total,
            name: "The Vegan Kart",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: data.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            handler: function (response){
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9999999999"
            }
        };
        const paymentObject = new window.Razorpay(options);
        paymentObject.open()
    }

    return (
        <div>

                <button
                onClick={displayRazorpay}
                >Pay</button>
        </div>
    );
}

export default Razorpay;
