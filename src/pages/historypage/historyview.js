import "./historyview.css";

function Historyview() {
  return (
    <div>
      <div className="image-css">
        <img width="10%" height="5%" alt="hatch-title" src="/hatch-logo.png" />
      </div>
      <h5 className="back-style">{"<"} Go back </h5>
      <div className="table-header">
        <span className="header-style">Date</span>
        <span className="header-style">From</span>
        <span className="header-style">To</span>
      </div>
      <div className="table-container">
        <div className="box">
          <span className="box-style">FEB 25,2022</span>
          <span className="box-style">1.00 EUR</span>
          <span className="box-style">1.12392 USD</span>
        </div>
        <div className="box">
          <span className="box-style">FEB 25,2022</span>
          <span className="box-style">1.00 EUR</span>
          <span className="box-style">1.12392 USD</span>
        </div>
        <div className="box">
          <span className="box-style">FEB 25,2022</span>
          <span className="box-style">1.00 EUR</span>
          <span className="box-style">1.12392 USD</span>
        </div>
        <div className="box">
          <span className="box-style">FEB 25,2022</span>
          <span className="box-style">1.00 EUR</span>
          <span className="box-style">1.12392 USD</span>
        </div>
        <div className="box">
          <span className="box-style">FEB 25,2022</span>
          <span className="box-style">1.00 EUR</span>
          <span className="box-style">1.12392 USD</span>
        </div>
        <div className="box">
          <span className="box-style">FEB 25,2022</span>
          <span className="box-style">1.00 EUR</span>
          <span className="box-style">1.12392 USD</span>
        </div>
      </div>
    </div>
  );
}

export default Historyview;
