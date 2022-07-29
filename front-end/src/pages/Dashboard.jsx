import React from "react";
import {useJwt} from 'react-jwt';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

// import axios from "axios";


function Dashboard(){
    const tokenString = localStorage.getItem('token');
    const {decodedToken, isExpired } = useJwt(tokenString);
    const navigate = useNavigate();

    // async function populatecode(){
    //     const req = await axios.get('/api/quote',{
    //         headers:{
    //             'x-access-token':localStorage.getItem('token')
    //         },
    //     })
    //    console.log(req);

    // }


    useEffect(()=>{
        if(decodedToken){
            localStorage.removeItem('token')
            navigate('/register')
        }else{
            console.log('test')
        }
    },[])
    return <h1>hello world</h1>
}
export default Dashboard;