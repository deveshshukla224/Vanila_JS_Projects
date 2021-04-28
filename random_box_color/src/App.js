import React from 'react';
import './styles.css';

const App = function () {
   const fontSize=Math.floor(Math.random()*50)+10;
   //const background=['red','green','blue','black'][Math.floor(Math.random()*4)];
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

   const backgroundBOX = function () {
       for(let i=0;i<6;i++)
           hexColor+=hex[Math.floor(Math.random()*hex.length)];
   };
   backgroundBOX();
return(
  <div className="container" style={{
      fontSize:`${fontSize}px`,
      backgroundColor:hexColor,
      }}
  >
      <h2>Random BOX</h2>
  </div>
);
};
export default App;