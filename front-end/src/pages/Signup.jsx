import React, { useState } from "react";
import cssModule from "../assets/styles/Signup.module.scss";
import axios from "axios";
import {Label, TextInput, Button} from "flowbite-react";
import { useNavigate } from "react-router-dom";


function Signup(){
    const navigate = useNavigate();
    const [input, setInput] = useState({
        email: '',
        password: '',
        confirmPassword: ''
      });
    
     
      const [error, setError] = useState({
        email: '',
        password: '',
        confirmPassword: ''
      })
     
      const onInputChange = e => {
        const { name, value } = e.target;
        setInput(prev => ({
          ...prev,
          [name]: value
        }));
        validateInput(e);
      }
     
      const validateInput = e => {
        let { name, value } = e.target;
        setError(prev => {
            const stateObj = { ...prev, [name]: "" };
        
            switch (name) {
            case "email":
                if (!value) {
                stateObj[name] = "Please enter Email.";
                }
                break;
        
            case "password":
                if (!value) {
                stateObj[name] = "Please enter Password.";
                } else if (input.confirmPassword && value !== input.confirmPassword) {
                stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
                } else {
                stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
                }
                break;
        
            case "confirmPassword":
                if (!value) {
                stateObj[name] = "Please enter Confirm Password.";
                } else if (input.password && value !== input.password) {
                stateObj[name] = "Password and Confirm Password does not match.";
                }
                break;
        
            default:
                break;
            }
        
            return stateObj;
        });
      }

 
      const registerUser = async (e) => {
        e.preventDefault();
        if(input.password === input.confirmPassword){
            const response = await axios.post("/api/register",input).then(res =>{
                // console.log(res)
                if(res.data.status === 'ok'){
                    navigate('/login');
                }else{
                    console.log('Error')
                }
            })
           
        }
       
      }

    return(
        <section className={cssModule.section__signup}>
         <h1>Register</h1>
            <form className="flex flex-col gap-4" onSubmit={registerUser}>
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="email2"
                        value="Your email"
                    />
                    </div>
                    <TextInput
                    id="signup_email"
                    type="email"
                    placeholder="name@flowbite.com"
                    required={true}
                    shadow={true}
                    name="email"
                    value={input.email}
                    onChange={onInputChange}
                    onBlur={validateInput}
                    />
                     {error.email && <span className='err'>{error.email}</span>}
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="signup_password"
                        value="Your password"
                    />
                    </div>
                    <TextInput
                    id="signup_password"
                    type="password"
                    required={true}
                    shadow={true}
                    value={input.password}
                    name="password"
                    onChange={onInputChange}
                    onBlur={validateInput}
                    />
                    {error.password && <span className='err'>{error.password}</span>}
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="repeat-password"
                        value="Repeat password"
                    />
                    </div>
                    <TextInput
                    id="repeat-password"
                    type="password"
                    required={true}
                    shadow={true}
                    value={input.confirmPassword}
                    name="confirmPassword"
                    onChange={onInputChange}
                    onBlur={validateInput}
                    />
                    {error.confirmPassword && <span className='err'>{error.confirmPassword}</span>}
                </div>
                <div className="flex items-center gap-2">
                    {/* <No Display Name id="agree" /> */}
                    {/* <Label htmlFor="agree">
                    I agree with the{' '}
                    <a
                        href="/forms"
                        className="text-blue-600 hover:underline dark:text-blue-500"
                    >
                        terms and conditions
                    </a>
                    </Label> */}
                </div>
                <div className="flex justify-center">
                <Button type="submit" >
                    Register
                </Button>
                </div>
            </form>
        </section>
        
    )
}

export default Signup;