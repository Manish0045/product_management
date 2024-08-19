import React from 'react';
import "./SignUp.css";

const SignUp = () => {
    return (
        <div className="form_container">
            <div className="leftContainer">
                <img src="your-image-url-here" alt="Sign Up Illustration" className="signup_image" />
            </div>
            <div className="rightContainer">
                <h2>Sign Up </h2>
                <form action="#">
                    <input type="text" className='inputBox' placeholder="Username" />
                    <input type="email" className='inputBox' placeholder="Email" />
                    <input type="password" className='inputBox' placeholder="Password" />
                    <input type="password" className='inputBox' placeholder="Confirm Password" />
                    <input type="button" value="Register" className='btn' />
                </form>
            </div>
        </div>
    )
}

export default SignUp;
