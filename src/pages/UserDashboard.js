import './UserDashboard.css';
import React from 'react';
import { Link } from 'react-router-dom';
const UserDashboard = () => {
    function logout(){
        if(window.confirm("Are you sure you want to logout")){
            window.location.href = 'login';
        }
    }
    return(
        <div class="dash-container">
        <div class="left-dash-container">
            <div class = "button">
                <button>Dashboard</button>
                <Link to = "/page"><button>Apply Loan</button></Link>
                <Link to = "/change"><button>Change Password</button></Link>
                <button onClick={logout}>Log out</button>
            </div>

        </div>
        <div class="right-dash-container">
            <div class="top-dash">
                <h1>Welcome <span>Tawfikat Khamis Kassim</span></h1>
            </div>
            <div class="down-dash">
            <div class="dashboard">
        <header class="dashboard-header">
            <h1>Loan Management System</h1>
        </header>
        <div class="dashboard-content">
            <div class="card">
                <h2>Total Loan Amount</h2>
                <p>50,000</p>
            </div>
            <div class="card">
                <h2>Total Paid Amount</h2>
                <p>20,000</p>
            </div>
            <div class="card">
                <h2>Loan Status</h2>
                <p>Active</p>
            </div>
        </div>
    </div>
            </div>
        </div>
    </div>
    );
}
export default UserDashboard;