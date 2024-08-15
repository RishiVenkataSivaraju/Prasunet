// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// // Components (you would typically have these in separate files)
// const Register = () => <h1>Register Page</h1>;
// const Login = () => <h1>Login Page</h1>;
// const Dashboard = () => <h1>Dashboard Page</h1>;

// // Inline CSS styles
// const styles = {
//     navbar: {
//         backgroundColor: 'black',
//         padding: '10px',
//     },
//     navLinks: {
//         listStyle: 'none',
//         margin: '0',
//         padding: '0',
//         display: 'flex',
//         justifyContent: 'space-around',
//     },
//     navLink: {
//         color: 'white',
//         textDecoration: 'none',
//         padding: '10px',
//         display: 'block',
//         transition: 'border-bottom 0.3s',
//     },
//     navLinkHover: {
//         borderBottom: '3px solid hotpink',
//     },
//     main: {
//         padding: '20px',
//     },
// };

// const App = () => {
//     return (
//         <Router>
//             <div>
//                 <nav style={styles.navbar}>
//                     <ul style={styles.navLinks}>
//                         <li><Link to="/" style={styles.navLink} activeStyle={styles.navLinkHover}>Home</Link></li>
//                         <li><Link to="/register" style={styles.navLink} activeStyle={styles.navLinkHover}>Register</Link></li>
//                         <li><Link to="/login" style={styles.navLink} activeStyle={styles.navLinkHover}>Login</Link></li>
//                     </ul>
//                 </nav>
//                 <main style={styles.main}>
//                     <Routes>
//                         <Route path="/register" element={<Register />} />
//                         <Route path="/login" element={<Login />} />
//                         <Route path="/dashboard" element={<Dashboard />} />
//                         <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
//                     </Routes>
//                 </main>
//             </div>
//         </Router>
//     );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import './App.css'; // Import the CSS file for styling

const App = () => {
    return (
        <Router>
            <div className="app-container">
                <nav className="navbar">
                    <ul className="nav-links">
                        <li><Link className="nav-link" to="/">Home</Link></li>
                        <li><Link className="nav-link" to="/register">Register</Link></li>
                        <li><Link className="nav-link" to="/login">Login</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/register" element={<Register />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;




