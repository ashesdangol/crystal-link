require("dotenv").config();
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const User = require("./models/user.model")
const path = require('path');

const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs")


const port = process.env.PORT || 8000;

mongoose.connect(process.env.mongoURL, {useNewUrlParser : true})
.then(res => console.log(`Connection Successful ${res}`))
.catch(err => console.log(`Connection failed ${err}`));

const app = express();
const bodyParser = require('body-parser');

const whitelist = ['http://localhost:3000','http://localhost:8000', 'https://demo-login-register.herokuapp.com'];
const corsOptions = {
    origin: function (origin, callback){
        console.log("**Origin of request "+ origin)
        if(whitelist.indexOf(origin)!==-1 || !origin){
            console.log("Orgin acceptable")
            callback(null, true)
        }else{
            console.log("Origin Rejected")
            callback(new Error("Not allowed by CORS"))
        }
    }
};

app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());





app.post('/api/register', async (req, res) =>{
    
    const getUserEmail =  req.body.email
    const user = await User.findOne({
        email:getUserEmail,
        // password:req.body.password
    })
    if(!user){
        const newPassword = await bcrypt.hash(req.body.password, 10)
        await User.create({
            email:req.body.email,
            password:newPassword
        })
        .then(()=> res.json({status : 'ok'}))
        .catch((error)=>{
            console.log(error);
            res.json({status : 'error', error:"Registration Failed"})
        })
    }else{
        console.log(user.email)
        console.log("Username already exists");
        res.json({status : 'error', error:"Registration Failed"})
    }
   
    // console.log(req.body)
    // console.log(req.body.email)
    
       

})
app.post('/api/login', async (req, res) =>{
   
       const user = await User.findOne({
            email:req.body.email,
            // password:req.body.password
        })

        if(!user){return {status: 'error', error : 'Invalid login'}}

        const isPasswordValid = await bcrypt.compare(
            req.body.password, 
            user.password
            )

        if(isPasswordValid){
            const token = jwt.sign({ 
                email:req.body.email,
                password:req.body.password 
            }, process.env.secretKEY);
            return res.json({status : 'ok', user:token})
        }else{
            return res.json({status : 'ok', user:false})
        }
       
  
})

app.get('/api/quote', async (req, res) =>{
   const token = req.headers['x-access-token']
   try {
    const decoded = jwt.verify(token, process.env.secretKEY)
    const email = decoded.email
    const user = await User.findOne({email:email})
    // console.log(user)
    res.json({status:'ok', quote:user.quote})
    // return{
    //     status:'ok', quote:user.quote
    // }

   } catch (error) {
    console.log(error);
    res.json({status:'error', error:'invalid token'})
   } 

})
app.post('/api/quote', async (req, res) =>{
    const token = req.headers['x-access-token']
    try {
     const decoded = jwt.verify(token, process.env.secretKEY)
     const email = decoded.email
     await User.updateOne(
        {email:email},
        {$set:{quote:req.body.quote}}
        )
    //  console.log(user)
     return{
         status:'ok', quote:User.quote
     }
 
    } catch (error) {
     console.log(error);
     res.json({status:'error', error:'invalid token'})
    } 
 
 })
// THIS IS NECESSARY TO SERVE REACT IN THE BROWSER ON HEROKU
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'front-end/build')));
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
        res.sendFile(path.join(__dirname, 'front-end/build', 'index.html'));
    });
}
app.listen(port, ()=>{
    console.log(`server is listening on ${port}`);
})
