import "./historyview.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Historyview() {
  const [conversionList, setConversionList] = useState([]);
  useEffect(() => {
    axios
      .get(
        `http://localhost:3000/convertions`
      )
      .then((res) => {
        
        setConversionList(res.data);
      });
  }, []);
  return (
    <div className="history-background">
      <div className="image-css">
        <img width="10%" height="5%" alt="hatch-title" src="/hatch-logo.png" />
      </div>
      
      <h5 className="back-style"><Link to="/">{"<"} Go back </Link></h5>
      <div className="table-header">
        <span className="header-style">Date</span>
        <span className="header-style">From</span>
        <span className="header-style">To</span>
      </div>
      <div className="table-container">
      {conversionList.map((value, index) => {
                return <div className="box" key={index}>
                <span className="box-style">{value.date}</span>
                <span className="box-style">{value.fromcurrency}</span>
                <span className="box-style">{value.tocurrency}</span>
              </div>;
              })}
       
        
        
        
        
        
      </div>
    </div>
  );
}

export default Historyview;
