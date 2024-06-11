export const resetValues = (
  setMin: React.Dispatch<React.SetStateAction<number>>,
  setMax: React.Dispatch<React.SetStateAction<number>>,
  setRandomNumber: React.Dispatch<React.SetStateAction<number>>,
  setHistory: React.Dispatch<React.SetStateAction<number[]>>
) => {
  setMin(1);
  setMax(100);
  setRandomNumber(0);
  setHistory([]);
};

export default resetValues;
