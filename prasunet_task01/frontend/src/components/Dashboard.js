// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// const Dashboard = () => {
//     const [userData, setUserData] = useState(null);
//     const [loading, setLoading] = useState(true);
//     const [email, setEmail] = useState('rishi@gmail.com'); // Set the email you want to search for

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await axios.post('http://localhost:8080/dashboard', { email }, {
//                     withCredentials: true
//                 });
// console.log(response)
//                 setUserData(response.data);
//             } catch (error) {
//                 console.error('Error fetching user data', error);
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, [email]);

//     if (loading) return <p>Loading...</p>;

//     if (!userData) return <p>No user data found</p>;

//     return (
//         <div className="dashboard">
//             <h1>Welcome, {userData.email}!</h1>
//             <h2>Your Preferences:</h2>
//             <ul>
//                 {userData.preferences.length > 0 ? (
//                     userData.preferences.map((pref, index) => (
//                         <li key={index}>{pref}</li>
//                     ))
//                 ) : (
//                     <li>No preferences set</li>
//                 )}
//             </ul>
//             <h2>Your Recent Activities:</h2>
//             <ul>
//                 {userData.activities.length > 0 ? (
//                     userData.activities.map((activity, index) => (
//                         <li key={index}>{activity}</li>
//                     ))
//                 ) : (
//                     <li>No recent activities</li>
//                 )}
//             </ul>
//         </div>
//     );
// };

// export default Dashboard;


// src/components/Dashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css'; // Import global styles

const Dashboard = () => {
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.post('http://localhost:8080/dashboard', { email: 'rishi@gmail.com' }, {
                    withCredentials: true
                });
                setUserData(response.data);
            } catch (error) {
                console.error('Error fetching user data', error);
                setError('Failed to load user data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="dashboard">
            <h2>Dashboard</h2>
            <p>Email: {userData.email}</p>
            <p>Preferences: {userData.preferences.join(', ')}</p>
            <p>Activities: {userData.activities.join(', ')}</p>
        </div>
    );
};

export default Dashboard;
