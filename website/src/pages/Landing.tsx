import { useNavigate } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      
      <div className="landing-text-container">
    
        <div className="landing-text">
          <div className="landing-welcome">
            Welcome to the AIG-NCII Ecosystem. This maps
            11 technologies 
            that facilitate AI-generated 
            non-consensual intimate images.
            <br /><br />
          </div>
          <div className="landing-warning">
            Content Warning: This site contains text descriptions of 
            topics relating to 
            image-based sexual abuse and gender-based violence.
          </div>
          <br />
        </div>
        <button
          className="enter-button"
          onClick={() => navigate("/home")}
        >
          <FiArrowRight className="arrow-icon" size={32} />
        </button>
      </div>
    </div>
  );
}

export default Landing;
