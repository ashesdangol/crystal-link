import React, {useState} from "react";
import cssModule from '../assets/styles/Login.module.scss';
import InputLabel from "./common/InputLabel";

function Login(){
    // React States
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    // User Login info
    const database = [
        {
        username: "user1",
        password: "pass1"
        },
        {
        username: "user2",
        password: "pass2"
        },
        {
        username: "user3",
        password: "pass3"
        },
        {
        username:"Tenisha1",
        password:"August23"
        },

        {
        username:"sthatenisha2",
        password:"1614Ts"
        },
        
        {
        username: "user26",
        password: "*Tenisha123"
        },
        {
        username: "Ten1992",
        password: "123Md*",
        }
    ];
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
      };
     
    const handleSubmit = (e)=>{
        e.preventDefault();
        var { uname, pass } = document.forms[0];
        console.log(document.forms)

        // Find user login info
        const userData = database.find((user) => user.username === uname.value);

        // Compare user info
        if (userData) {
            if (userData.password !== pass.value) {
                // Invalid password
                setErrorMessages({ name: "pass", message: errors.pass });
            } 
            else {
                setIsSubmitted(true);
            }
        } 
        else {
            // Username not found
            setErrorMessages({ name: "uname", message: errors.uname });
        }
    };

    // Generate JSX code for error message
    const renderErrorMessage = (name) =>
    name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
    );
    

    // JSX code for login form
    const renderForm = (
        <div className="form">
            <form action="" onSubmit={handleSubmit}>
                <div className="input-container">
                    <InputLabel label="Email or mobile phone number" type="text" name="uname" required/>
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <InputLabel label="Password" type="password" name="pass" required/>
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <button type="submit"> Sign In</button>  
                </div>
            </form>
        </div>
    )
    return(
        <section className={cssModule.section__form}>  
            <div className="login-form">
                <div className="title">Logo</div>
                {isSubmitted ? <div>User is Successfully logged in</div> : renderForm}
            </div>
        </section>
    );
}

export default Login;