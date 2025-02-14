import Button from "../components/Button";
import "../styles/navigation.css";
import { useNavigate } from "react-router-dom";

function Navigation() {
    const navigate = useNavigate();

    return (
        <nav id="navigation">
            <Button name="Home" click={() => navigate("/")} />
            <Button name="About" click={() => navigate("/About")} />
            <Button name="Login" click={() => navigate("/Login")} />
        </nav>
    );
}

export default Navigation;
