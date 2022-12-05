// import React from 'react';
import Tex2SVG from "react-hook-mathjax";

var React = require('react');
// var MathML = require('react-math');

function Radiomics() {
  return (
    <div className="App">
      <header className="App-header">
      {/* <MathML text='e^(i pi)=-1'/> */}
        <Tex2SVG display="inline" latex="\textit{energy} = \displaystyle\sum^{N_p}_{i=1}{(\textbf{X}(i) + c)^2}" />
      </header>
    </div>
  );
}

export default Radiomics;
