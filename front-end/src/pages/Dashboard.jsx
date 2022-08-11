import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

// import axios from "axios";


function Dashboard(){
    const tokenString = localStorage.getItem('token');
    const navigate = useNavigate();
    const [quote, setQuote] = useState('')

    async function populatecode(){
        const req = await axios.get('/api/quote',{
            headers:{
                'x-access-token':localStorage.getItem('token')
            },
        })
        console.log(req.data.status)
        if(req.data.status === 'ok'){
            setQuote(req.data.quote)
        }else{
            alert(req.data.error)
        }
    }
   

    useEffect(()=>{
        if(!tokenString){
            localStorage.removeItem('token')
            navigate('/register')
        }else{
            populatecode()
        }
    },[tokenString, navigate])
    // return <h1>Your quote:{quote || "No quote Found"} hello world</h1>
    return <h1 className="mt-10 text-center">Welcome to the Dashboard</h1>
}
export default Dashboard;