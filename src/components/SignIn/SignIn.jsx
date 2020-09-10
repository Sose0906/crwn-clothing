import React, { useState } from "react";
import './_SignIn.scss'
import FormInput from "../FormInput/FormInput";
import CustomButton from "../CustomButton/CustomButton";
import { signInWithGoogle } from "../../firebase/firebase.utils";

const SignIn = () => {
    const [ credentials, setCredentials ] = useState({ email: "", password: '' });
    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setCredentials({ email: "", password: '' })
    };
    return (
        <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign In with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label="Email" onChange={handleChange} value={credentials.email} type="email" name="email"
                           id="email"
                           required/>
                <FormInput label="Password" onChange={handleChange} value={credentials.password} type="password"
                           name="password"
                           id="password"
                           required/>
                <div className="buttons">
                    <CustomButton type="submit">SignIn</CustomButton>
                    <CustomButton isGoogleSignIn onClick={signInWithGoogle} type="button">SignIn With
                        Google</CustomButton>
                </div>

            </form>

        </div>

    );


};
export default SignIn;