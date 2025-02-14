import useStore from "../store/store";
import "../styles/welcome.css";

export default function Welcome() {
    const { username } = useStore();

    return (
        <div className="page-content">
            <div className="welcome-container">
                <h1>Welcome, {username}!</h1>
                <p>Enjoy reading and expressing your thoughts.</p>
            </div>
        </div>
    );
}
