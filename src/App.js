import { useState } from "react";
import "./sass/App.css";
import useMouse from "./utils/useMouse";
import generateGems from "./utils/generateGems";
import isGemVisible from "./utils/isGemVisible";
import winConditions from "./utils/winConditions";

function App() {
  const [isFound, setIsFound] = useState(false);
  const [winCount, setWinCount] = useState(0);
  const [gemSize, setGemSize] = useState(100);
  const [savedGem, setSavedGem] = useState(generateGems(gemSize));
  const [gemVisibility, setGemVisibility] = useState(false);

  const { x, y } = useMouse();

  const visibility = {
    display: isGemVisible(gemVisibility),
  };


  function gemRender() {
    if (isFound === false) return savedGem;
    else {
      const newGem = generateGems(gemSize);
      setIsFound(false);
      setTimeout(() => {
        setWinCount(winCount + 1);
        setGemVisibility(false);
        setSavedGem(newGem);
      }, 3000);
    }
    return savedGem;
  }

  if (
    gemVisibility === false &&
    winConditions(gemSize, savedGem).x.includes(x) === true &&
    winConditions(gemSize, savedGem).y.includes(y) === true
  ) {
    setIsFound(true);
    setGemVisibility(true);
    setGemSize(0.92 * gemSize);
  }

  return (
    <div
      className="App"
      src="https://4.bp.blogspot.com/-I_t1RgmzlOg/UJmRLoVIAGI/AAAAAAAAD0g/lT4DmHmK9IE/s1600/Seamless+dirt+texture.jpg"
    >
      <div style={visibility}>{gemRender()}</div>
      <div className="Container">
        <p className="Header">
          Find The Gem to Move on to The Next Level!<br/>They Get Smaller Each Time!<br/>
          Enjoy!
        </p>
        <p className="SubHeader">
          Gem Size: {gemSize}px X {gemSize}px
        </p>
        <p className="SubHeader">Gems Found: {winCount}</p>
      </div>
    </div>
  );
}

export default App;
