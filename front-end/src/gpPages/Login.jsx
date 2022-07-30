import React,{useState} from "react";
import cssModule from "../assets/styles/Signup.module.scss";
import {Label, TextInput, Button} from "flowbite-react";
import jsonData from '../gpAssets/gpDatas/userInfo.json'



function Login(){
    const [input, setInput] = useState({
        email: '',
        password: '',
    });
    
    const [loginMessage, setLoginMessage] = useState('')
    const [isSuccess, setIsSuccess]=useState(false);
    const [isVisible, setIsVisible] = useState(false)

    // show message after LogIn Submit
    const loginStatus = (isAuth)=> {
        if(isAuth){
            setIsSuccess(true)
            setLoginMessage("Congratulation! you are logged in")
            setIsVisible(true)
        }else{
            setIsSuccess(false)
            setLoginMessage("Please check your username and password")
            setIsVisible(true)
        }
    }
   

    // onSubmit
    function loginUser(event){
        event.preventDefault();
        const username = input.email;
        const password = input.password;
        const isAuth = verifyLogin(jsonData, username, password);
        loginStatus(isAuth);
    }
    // onInput Change
    function onInputChange(e){
        const { name, value } = e.target;
        setInput(prev => ({
          ...prev,
          [name]: value
        }));
    }
   
    // Check if user exists
    function userExists(userInfoJson, username){
        const userName = userInfoJson.find((obj)=>{
           return obj.username === username
        })
        return userName ? userName : null
    }

     // verify user and password
     function verifyLogin(userInfoJson,username,password){
        const userExist = userExists(userInfoJson, username)
        if(userExist){
            return (userExist.password === password) ? true : false
            
        }else{
            return false
        }
        

    }



    return(
        <section className={cssModule.section__signup}>
        <h1>Sign In</h1>
        <div className={(isVisible?"block":"hidden")+" px-4 py-3 rounded relative border mt-20 " +(isSuccess?" bg-teal-100 border-teal-400  text-teal-700 ":"bg-red-100  border-red-400 text-red-700 ") } role="alert">
            <span className="block sm:inline">{loginMessage}</span>
        </div>
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
                type="text"
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
            <div className="flex justify-center">
            <Button type="submit" >
                Sign in
            </Button>
            </div>
            
        </form>
    </section>
    );
}

export default Login;