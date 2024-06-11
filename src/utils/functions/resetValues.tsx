export const resetValues = (setMin, setMax, setRandomNumber, setHistory) => {
    setMin(1);
    setMax(100);
    setRandomNumber(null);
    setHistory([]);
  };

export default resetValues;