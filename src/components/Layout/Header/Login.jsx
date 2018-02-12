import React from 'react';
import './Login.css';
import loginIcon from '../../../assets/login.svg';
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <Link className="Login" to="/login">
            <div className="icon">
                <img src={loginIcon} alt="Login icon"/>
            </div>
            <div className="text">Log in</div>
        </Link>
    );
}

export default Login;