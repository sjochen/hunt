import "./App.css";
import React, { useState } from 'react';
import clue from './images/clue.png';
import confetti from "canvas-confetti";



export default function App() {
  const [count, setCount] = useState(0);
  const [answerIn, setAnswerIn] = useState(null);


  let answers = ["78", "110", "53", "39", "422", "152", "278", "922", "370"];

  const fireConfetti = () => {
    confetti({
      particleCount: 800,
      spread: 150,
      origin: { y: 0.2 }
    });
  };

  const checkAnswer = () => {
    answers.forEach(e => {
      if(answerIn === e){
        console.log("good");
        setCount(count + 1);
        setAnswerIn("");
        console.log(count);
        fireConfetti();
        
      }else{
        
      }
    });
  }

  function reset(){
    setCount(0);
  }
   
  return (
    <div className="App">
      <div class="snowflakes" aria-hidden="true">
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❆
          </div>
          <div class="snowflake">
          ❄
          </div>
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❆
          </div>
          <div class="snowflake">
          ❄
          </div>
          <div class="snowflake">
          ❅
          </div>
          <div class="snowflake">
          ❆
          </div>
          <div class="snowflake">
          ❄
          </div>
        </div>
    
      {(() => {
        switch (count) {
          
          case 0:
              
            return <h1>Silver Surfer</h1>
            
          case 1:
              return <h1>"You must be the hot guys"</h1>

          case 2:
              return <><h1>Find Where am I?</h1><img src={clue} height="300" width="300"/></>

          case 3:
              return <h1>The most delicous monster lives here</h1>

          case 4:
              return <h1>A first happened here (well for one of us)</h1>

          case 5:
              return <h1>You are dating the king of swing, just ask my dad</h1>

          case 6:
              return <h1>Nothing runs like a Deere</h1>

          case 7:
              return <h1>What do Alexsei Sytsevich, Africa, and the farm have in common</h1>

          case 8:
              return <><h1>The Office Season 9 Episode 26 </h1> <h3>Time: 17 min 03 seconds</h3></>


          default:
              console.log(count);
            return <div><h1>You Did It</h1> <button onClick ={()=> reset()}>RESET</button></div>
                  
        }
      })()}
      <input value = {answerIn} type = "number" onChange = {e => setAnswerIn(e.target.value)} />
        <button onClick = {() => checkAnswer()}>Enter Answer</button>
    </div>
  );
}

