import "./converterform.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Converterform() {
  const [convertValue, setConvertValue] = useState(0);
  const [firstCurrency, setFirstCurrency] = useState('USD');
  const [secondCurrency, setSecondCurrency] = useState('EUR');
  const [currencyList, setCurrencyList] = useState([]);
  const [result, setResult] = useState(0);
  useEffect(() => {
    axios
      .get(
        `http://api.currencylayer.com/list?access_key=8122ebcb8643d4b4ebe0a9a0993b5601`
      )
      .then((res) => {
        setCurrencyList(Object.keys(res.data.currencies));
      });
  }, []);
  const convert= () => {
    var today = new Date();
    var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    
    axios.get("http://apilayer.net/api/live?access_key=8122ebcb8643d4b4ebe0a9a0993b5601&currencies="+firstCurrency+","+secondCurrency+"&source=USD&format=1").then(
      (res)=>{
        setResult((convertValue*Object.values(res.data.quotes)[1]/Object.values(res.data.quotes)[0]).toFixed(2))
        const myreq ={
          "fromcurrency":convertValue+" "+firstCurrency,
          "tocurrency":(convertValue*Object.values(res.data.quotes)[1]/Object.values(res.data.quotes)[0]).toFixed(2)+" "+secondCurrency,
          "date":date
        }
        axios.post("http://localhost:3000/convertions",myreq)
      }
    )
  }
  return (
    <div className="form-style">
      <div className="form-css">
        <div className="form-container">
          <div className="champ">
            <label className="label-style">Amount</label>
            <input
              type="number"
              onChange={(e) => setConvertValue(e.target.value)}
              className="input-style"
            />
          </div>
          <div className="champ">
            <label className="label-style">from</label>
            <select className="option-style" onChange={(e)=>setFirstCurrency(e.target.value)}>
              {currencyList.map((value, index) => {
                return <option key={index}>{value}</option>;
              })}

               
            </select>
          </div>
          <img width="2%" height="10%" alt="hatch-title" src="/switcher.png" />
          <div className="champ">
            <label className="label-style">to</label>
            <select className="option-style" onChange={(e)=>setSecondCurrency(e.target.value)} >
            {currencyList.map((value, index) => {
                return <option key={index}>{value}</option>;
              })}
            </select>
          </div>
          <button
            className="dropbtn"
            onClick={() => {
              convert()
            }}
          >
            convert
          </button>
        </div>
        <h5 className="link-style">
          <Link to="/history"> view conversion history {">"}</Link>
        </h5>
      </div>
      {(convertValue === undefined || convertValue === "") && (
        <h3 className="pre-result-style">0 {firstCurrency}=</h3>
      )}
      {convertValue !== undefined && convertValue !== "" && (
        <h3 className="pre-result-style">{convertValue} {firstCurrency}= </h3>
      )}
      {(result === undefined || result === "") && (
        <h1 className="result-style">0 {secondCurrency}</h1>
      )}
      {result !== undefined && result !== "" && (
        <h1 className="result-style">{result} {secondCurrency}</h1>
      )}
    </div>
  );
}

export default Converterform;
