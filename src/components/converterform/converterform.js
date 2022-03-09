import "./converterform.css";

function Converterform() {
  return (
    <div className="form-style">
    <div className="form-css">
      <div className="form-container">
        <div className="champ">
          <label className="label-style">Amount</label>
          <input className="input-style" />
        </div>
        <div className="champ">
          <label className="label-style">from</label>
          <select className="option-style" name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <img width="2%" height="10%" alt="hatch-title" src="/switcher.png" />
        <div className="champ">
          <label className="label-style">to</label>
          <select className="option-style" name="cars" id="cars">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
        </div>
        <button class="dropbtn">convert</button>
      </div>
      <h5 className="link-style">view conversion history {">"}</h5>
    </div>
    <h3 className="pre-result-style">0 USD=</h3>
    <h1 className="result-style">0 EUR</h1>
    </div>
  );
}

export default Converterform;
