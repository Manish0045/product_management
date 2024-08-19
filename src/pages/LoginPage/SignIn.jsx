import React from 'react';
import "./SignIn.css";

const SignIn = () => {
    return (
        <div className="form_container">
            <div className="leftContainer">
                <img src="your-image-url-here" alt="Sign Up Illustration" className="signup_image" />
            </div>
            <div className="rightContainer">
                <h2>Sign In</h2>
                <form action="#">
                    <input type="email" className='inputBox' placeholder="Email" />
                    <input type="password" className='inputBox' placeholder="Password" />
                    <input type="button" value="Register" className='btn' />
                </form>
            </div>
        </div>
    )
}

export default SignIn;
