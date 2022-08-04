import { useNavigate } from "react-router-dom";
import "./Backbutton.css";

function Backbutton() {
  const navigate = useNavigate();
  return (
    <button type="button" className="back-btn" onClick={() => navigate(-1)}>
      back to projects
    </button>
  );
}

export default Backbutton;
