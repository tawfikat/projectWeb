import React, { useState } from 'react';
import './Login.css';
import logo from './logo.jpeg';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }

            const result = await response.text();
            window.location.href = '/dash';
        } catch (error) {
            console.error('Error:', error);
            alert('Login failed!');
        }
    };

    return (
        <div className="container">
            <div className="form">
                <div className="head">
                    <h1>LOAN MANAGEMENT SYSTEM</h1>
                </div>
                <img src={logo} height="150px" width="200px" className="logo" alt="Logo" />
                <div className="input">
                    <form onSubmit={handleSubmit}>
                        <table>
                            <tbody>
                                <tr>
                                    <td><input type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required /></td>
                                </tr>
                                <tr>
                                    <td><input type="password" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} required /></td>
                                </tr>
                                <tr>
                                    <td><button type="submit">LOG IN</button></td>
                                </tr>
                                <tr>
                                    <td>Don't have an account? <a href="reg">Sign up</a></td>
                                </tr>
                            </tbody>
                        </table>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
