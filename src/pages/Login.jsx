import { useNavigate } from "react-router-dom";
import useStore from "../store/store";
import "../styles/login.css";

export default function Login() {
    const { username, password, setUsername, setPassword } = useStore();
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (username && password) {
            navigate("/Landing");
        } else {
            alert("Please enter both username and password.");
        }
    };

    return (
        <div className="page-content">
            <div className="login-container">
                <h1>Login to Read Writings</h1>
                <form onSubmit={handleLogin}>
                    <label>Username:</label>
                    <input 
                        type="text" 
                        placeholder="Enter username" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                    />

                    <label>Password:</label>
                    <input 
                        type="password" 
                        placeholder="Enter password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                    />

                    <button id="lbt" type="submit">Login</button>
                </form>
            </div>
        </div>
    );
}
