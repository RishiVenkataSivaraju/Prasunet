// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/login', { username, password });
            setMessage(response.data);
            navigate('/dashboard');
        } catch (error) {
            setMessage('Login failed');
            console.error('Error logging in', error);
        }
    };

    return (
<div className='form-container'>
        <form onSubmit={handleSubmit} className='form'>
            <h2>Login</h2>
            <label>
                Username:
                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </label>
            <label>
                Password:
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>
            <button type="submit">Login</button>
            {message && <p>{message}</p>}
        </form>
</div>
    );

};

export default Login;
// src/components/Login.js
// import React, { useState } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import './styles.css'; // Import global styles


// const Login = () => {
//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const navigate = useNavigate();

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await axios.post('http://localhost:8080/login', { username, password });
//             setMessage(response.data);
//             navigate('/dashboard');
//         } catch (error) {
//             setMessage('Login failed');
//             console.error('Error logging in', error);
//         }
//     };
//     return (
//         <div className="form-container">
//             <form onSubmit={handleSubmit} className="form">
//                 <h2>Login</h2>
//                 <label>
//                     Email:
//                     <input type="email" value={username} onChange={(e) => setEmail(e.target.value)} required />
//                 </label>
//                 <label>
//                     Password:
//                     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//                 </label>
//                 <button type="submit">Login</button>
//             </form>
//         </div>
//     );
// };

// export default Login;


