
"use client"; // Add this line to specify it's a client-side component
import React, { useState } from 'react'; // Import useState and React
import { FaUser, FaLock } from 'react-icons/fa'; // Import react-icons


const LoginPage = () => {
    const [activeTab, setActiveTab] = useState('student'); // State to track active tab

    const handleTabChange = (tab) => {
        setActiveTab(tab);
    };

    return (
        <div className="login-container">
            <div className="tabs">
                <button
                    className={`tab ${activeTab === 'student' ? 'active' : ''}`}
                    onClick={() => handleTabChange('student')}
                >
                    Student
                </button>
                <button
                    className={`tab ${activeTab === 'parent' ? 'active' : ''}`}
                    onClick={() => handleTabChange('parent')}
                >
                    Parent
                </button>
                <button
                    className={`tab ${activeTab === 'teacher' ? 'active' : ''}`}
                    onClick={() => handleTabChange('teacher')}
                >
                    Teacher
                </button>
                <button
                    className={`tab ${activeTab === 'admin' ? 'active' : ''}`}
                    onClick={() => handleTabChange('admin')}
                >
                    Admin
                </button>
            </div>
            <div className="login-form">
                <div className="input-group">
                    <FaUser className="input-icon" />
                    <input type="email" placeholder="Email Address" />
                </div>
                <div className="input-group">
                    <FaLock className="input-icon" />
                    <input type="password" placeholder="Password" />
                </div>
                <button className="login-button">Login</button>
                <a href="/forgot-password" className="forgot-password-link">
                    Forgot Password?
                </a>
            </div>
        </div>
    );
};

export default LoginPage;
