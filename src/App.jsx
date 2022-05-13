import {useState} from "react";
function App() {
  const [cuenta, setCuenta] = useState(0);
  const [paso, setPaso] = useState(1);

  const handleClickresta =() => {
    console.log(paso);
    setCuenta(cuenta - paso);
  };
  const handleResetClick =() => {
    setCuenta(0);
    setPaso(1);
  };
  const handleClicksuma =() => {
    setCuenta(cuenta + paso);
  };
  const handleInputChange =(e) => {
    if (isNaN(e.target.value)){
      return;
    }
    setPaso(Number(e.target.value));
  };

  return (
    <div className="App">
    <h3>Contador</h3>
    <hr />
    <h2 className="text-center">0</h2>
    <hr />
    <div style={{display: "flex", 
    justifyContent: "flex-end", 
    marginRight: "5px",}}>
      <label>Paso<input id="paso" name="paso" type="text" onChange={handleInputChange}style={{marginLeft: "5px", width:"60px"}}/></label>
      <button type="button" className="btn btn-primary" onClick={handleClickresta} style={{marginLeft: "5px"}}>-1</button>
      <button type="button" className="btn btn-primary" onClick={handleResetClick} style={{marginLeft: "5px"}}>RESET</button>
      <button type="button" className="btn btn-primary" onClick={handleClicksuma} style={{marginLeft: "5px"}}>+1</button>
      </div>
    </div>
  );
}

export default App;
