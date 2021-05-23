import React from 'react'
import './Login.css'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

function Login() {
    return (
        <form className="login">
            <div className="login__input">
                <PersonOutlineOutlinedIcon />
                <input placeholder="Username..." /> 
            </div>
            <div className="login__input">
                <LockOutlinedIcon />
                <input placeholder="Password..." /> 
            </div>
            <button className="login__btn" type="submit">Sign in</button>
            <button className="login__btn" type="submit">Check in</button>
        </form>
    )
}

export default Login
