import React from "react";
import { useState } from "react";
const App = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [message, setmessage] = useState("");
  const [bmi, setbmi] = useState("");





  let calcbmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("Please Enter a Valid Weight and Height!");
    }
    else{
      let bmi=((weight/height*height)*703);
      setbmi(bmi.toFixed(1));


      if(bmi<25){
        setmessage('You are underweight')
      }else if(bmi>= 25 && bmi<30){
        setmessage('You are Healthy!')
      }else{
        setmessage('You are overweight')
      }
    }
  }

  let reload=()=>{
    window.location.reload();
  }




  return (
    <div>
      <div className="container">
        <h2>BMI CALCULATOR</h2>
        <form onSubmit={calcbmi}>
          <div>
            <label>Weight (ibs)</label>
            <input
              type="text"
              placeholder="Enter weight value"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label>Height (ibs)</label>
            <input
              type="text"
              placeholder="Enter height value"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" type="submit" onClick={reload}>
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is : {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
