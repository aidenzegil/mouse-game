import { ReactComponent as Gem } from "../svg/gem.svg";

function generateGems(size) {
  const validY = 0.82 * window.innerHeight;
  const validX = 0.82 * window.innerWidth;
  const x = Math.floor(Math.random() * validX);
  const y = Math.floor(Math.random() * validY);
  const style = {
    width: size,
    height: size,
    top: y,
    left: x,
    position: "absolute",
  };

  return (
    <div style={style}>
      <Gem />
    </div>
  );
}

export default generateGems;
