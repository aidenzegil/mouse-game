function winConditions(size, currentGem) {
  const x = [];
  const y = [];
  for (let i = 0; i < size; i++) {
    const validWinX = currentGem.props.style.left + i;
    const validWinY = currentGem.props.style.top + i;
    x.push(validWinX);
    y.push(validWinY);
  }
  return { x, y };
};

export default winConditions;
