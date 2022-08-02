import { useNavigate } from "react-router-dom";
import "./Backbutton.css";

function Backbutton() {
  const navigate = useNavigate();
  return (
    <button type="button" onClick={() => navigate(-1)}>
      go back
    </button>
  );
}

export default Backbutton;
