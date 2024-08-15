// // src/components/Register.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//     const [email, setEmail] = useState('');
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const navigate = useNavigate();

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//         await axios.post('http://localhost:8080/registered', { email, username, password }, {
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         });
//         console.log('Registration successful, navigating to login');
//         navigate('/login');  // Navigate to the login page
//     } catch (error) {
//         console.error('Error registering user', error.response?.data || error.message);  // Log error response
//     }
// };



//     return (
//         <form onSubmit={handleSubmit}>
//             <h2>Register</h2>
//             <label>
//                 Email:
//                 <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//             </label>
//             <label>
//                 Username:
//                 <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
//             </label>
//             <label>
//                 Password:
//                 <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//             </label>
//             <button type="submit">Register</button>
//         </form>
//     );
// };

// export default Register;

// src/components/Register.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './styles.css'; // Import global styles

const Register = () => {

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await axios.post('http://localhost:8080/registered', { email, username, password }, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log('Registration successful, navigating to login');
        navigate('/login');  // Navigate to the login page
    } catch (error) {
        console.error('Error registering user', error.response?.data || error.message);  // Log error response
    }
};

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <h2>Register</h2>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </label>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
