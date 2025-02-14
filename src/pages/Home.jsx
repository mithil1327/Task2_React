import { useState } from "react";
import "../styles/home.css";

export default function Home() {
    const [showPopup, setShowPopup] = useState(false);
    return (
        <div className="page-content">
            <div className="home-container">
                <div className="text-box">
                    <h1>Venmegha Kirukalgal</h1>
                    <h2>🌸 வெண்மேகக் கிருக்கல்கள் 🌸</h2>
                    <p>
                        A space for thoughts, poetry, and personal writings. 
                        Here, words flow like clouds, shaping emotions, memories, and dreams. 
                        Whether it's a poem, a deep thought, or a creative expression, 
                        this is where words find their true meaning.
                    </p>
                    <p>தமிழ் கவிதைகளின் தாயகம் - உங்கள் எண்ணங்களை வார்த்தைகளால் வெளிப்படுத்த ஒரு களஞ்சியம்!</p>

                    <div className="links">
                        <p>Follow us:</p>
                        <a href="https://venmekakirukkalkal.blogspot.com/" target="_blank" rel="noopener noreferrer">🌐 Visit Blog</a>
                        <a href="https://www.youtube.com/channel/UCkUgUitX5d5DrHEc3zRJ45A" target="_blank" rel="noopener noreferrer">🎥 YouTube Channel</a>
                        <a href="https://www.instagram.com/venmegha_kirukalgal" target="_blank" rel="noopener noreferrer">📸 Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
