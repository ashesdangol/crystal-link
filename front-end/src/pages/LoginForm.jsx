import React, { useState } from "react";
import cssModule from "../assets/styles/Signup.module.scss";
import axios from "axios";
import {Label, TextInput, Button} from "flowbite-react";

function LoginForm(){

    const [input, setInput] = useState({
        email: '',
        password: '',
      });
    
     
      const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
          ...prev,
          [name]: value
        }));

      }
     

      const loginUser = async (e) => {
        e.preventDefault();
        const response = await axios.post("/api/login",input)
        if(response.data.user){
            alert('Login Succesfull')
            window.location.href='/dashboard'
            localStorage.setItem("token", response.data.user);
        
        }else{
            alert('Login Failed, Please checkout your email and password')
        }
        
      }

    return(
        <section className={cssModule.section__signup}>
            <h1>Login</h1>
            <form className="flex flex-col gap-4" onSubmit={loginUser}>
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="login_email"
                        value="Your email"
                    />
                    </div>
                    <TextInput
                    id="login_email"
                    type="email"
                    placeholder="name@crystal.com"
                    required={true}
                    shadow={true}
                    name="email"
                    value={input.email}
                    onChange={onInputChange}
                   
                    />
                    
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="login_password"
                        value="Your password"
                    />
                    </div>
                    <TextInput
                        id="login_password"
                        type="password"
                        required={true}
                        shadow={true}
                        value={input.password}
                        name="password"
                        onChange={onInputChange}
                    />
                    
                </div>
                
                <div className="flex items-center gap-2">
                    {/* <No Display Name id="agree" /> */}
                    <Label htmlFor="agree">
                    I agree with the{' '}
                    <a
                        href="/forms"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                        terms and conditions
                    </a>
                    </Label>
                </div>
                <Button type="submit">
                    Login
                </Button>
            </form>
        </section>
        
    )
}

export default LoginForm;