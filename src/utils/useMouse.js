import {useState, useEffect} from 'react'

function useMouse() {
    const [mousePosition, setMousePosition] = useState({
      x: null,
      y: null,
    });
  
  
  
    useEffect(() => {
      function handleMove(e) {
        setMousePosition({
          x: e.pageX,
          y: e.pageY
        })
      }
      document.addEventListener("mousemove", handleMove);
      return () => document.removeEventListener("mousemove", handleMove)
    });
    return mousePosition;
  }

  export default useMouse