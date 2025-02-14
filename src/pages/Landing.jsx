import { useNavigate } from "react-router-dom";
import "../styles/landing.css";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div className="page-content">
      <div className="landing-container">
        <h1>

        </h1>
        <p className="description">
          A sanctuary for poetry, emotions, and creativity.
          <br />
          Discover beautiful verses, immerse in deep thoughts, and get inspired.
        </p>

        {/* Pop-up info section */}
        <div className="pop-info">
          <p>📜 Read soulful Tamil poetry</p>
          <p>💭 Share your thoughts</p>
          <p>🎭 Connect with like-minded writers</p>
        </div>
      </div>
    </div>
  );
}
