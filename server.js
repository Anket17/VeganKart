require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const fileUplaod = require('express-fileupload');
const cookieParser = require('cookie-parser');
const Razorpay = require('razorpay');
const shortid = require('shortid');
const path = require('path'); 

const razorpay = new Razorpay({
    key_id : 'rzp_test_v8g0nz8rhhdJxD',
    key_secret: 'gODTTb3DaIcTgdvCyavD0r35',
})

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use(fileUplaod({
    useTempFiles: true
}))
//app.use(express.static(path.join(__dirname, "./client/build")))

app.use('/user', require('./routes/userRouter'))
app.use('/api', require('./routes/categoryRouter'))
app.use('/api', require('./routes/upload'))
app.use('/api', require('./routes/productRouter'))
app.use('/api', require('./routes/paymentRouter'))

app.post('/razorpay', async (req, res)=>{

    const payment_capture = 1
    const amount = 500
    const currency = 'INR'

    const options = {amount:amount * 100, currency, receipt: shortid.generate(), payment_capture}
    const response = await razorpay.orders.create(options)
    console.log(response)
    res.json({
        id:response.id,
        currency: response.currency,
        amount: response.amount
    })

})

// app.get("/*", (req, res) => {
//     res.sendFile(path.join(__dirname, "/client/build/index.html"))
// });

const URI = process.env.MONGODB_URL
mongoose.connect(URI,{
    useCreateIndex: true, 
    useFindAndModify: false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}, err =>{
    if(err) throw err;
    console.log('Connected to MongoDB')
})


if(process.env.NODE_ENV === 'production'){
    app.use(express.static('client/build'))
    app.get('*', (req, res)=>{
        res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'))
    })
    console.log('Mode production')
}

const PORT = process.env.PORT || 8080
app.listen(PORT,()=>{
    console.log('server is running on port', PORT)
})