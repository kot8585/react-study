import React, {useState} from "react";
import './AppXY.css'

export default function AppXY() {
  const [position, setPosition] = useState({ x:0, y:0, z:0 });

  function mousePoint(e) {
    setPosition(prev => ({...prev, x: e.clientX}));
  } 

  return (
    <div className="container" onPointerMove={(e) => mousePoint(e)}>
      <div className="pointer" style={{transform: `translate(${position.x}px, ${position.y}px)`}}></div>
    </div>
  )
}