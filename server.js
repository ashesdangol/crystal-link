require("dotenv").config();
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import User from './models/user.model';

const jwt = require('jsonwebtoken');


const port = process.env.PORT || 8000;

mongoose.connect(process.env.mongoURL, {useNewUrlParser : true})
.then(res => console.log(`Connection Successful ${res}`))
.catch(err => console.log(`Connection failed ${err}`));

const app = express();
const bodyParser = require('body-parser');

const whitelist = ['http://localhost:3000','http://localhost:8000', 'https://ashes-portfolio.herokuapp.com'];
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

    // console.log(req.body)
    // console.log(req.body.email)

    try {
        await User.create({
            email:req.body.email,
            password:req.body.password
        })
        res.json({status : 'ok'})
        // res.render('/dashb')
    } catch (error) {
        console.log(error);
        res.json({status : 'error', error:"Registration Failed"})
    }
})
app.post('/api/login', async (req, res) =>{
   
       const user = await User.findOne({
            email:req.body.email,
            password:req.body.password
        })

        if(user){
            const token = jwt.sign({ 
                email:req.body.email,
                password:req.body.password 
            }, 'shhhhh');
            return res.json({status : 'ok', user:token})
        }else{
            return res.json({status : 'ok', user:false})
        }
       
  
})

app.listen(port, ()=>{
    console.log(`server is listening on ${port}`);
})