
import Converterform from "../../components/converterform/converterform";
import "./converterview.css";

function Converterview() {
  return (
    <div className="converter-background" >
      <div className="image-css">
      <img width="10%" height="5%" alt="hatch-title" src="/hatch-logo.png" />
      </div>
      <div className="title-margin-css">
      <h1 className="title-css">Convert currencies in real-time.</h1>
      </div>
      
      <Converterform></Converterform>
    </div>
  );
}

export default Converterview;
