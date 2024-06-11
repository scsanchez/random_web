export const generateRandomNumber = (
  min: number,
  max: number,
  setRandomNumber: React.Dispatch<React.SetStateAction<number>>,
  setHistory: React.Dispatch<React.SetStateAction<number[]>>
) => {
  const random = Math.floor(Math.random() * (max - min + 1)) + min;
  setRandomNumber(random);
  setHistory((history) => [...history, random]);
};

export default generateRandomNumber;
