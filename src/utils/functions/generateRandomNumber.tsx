export const generateRandomNumber = (min, max, setRandomNumber, setHistory) => {
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(random);
    setHistory(history => [...history, random]);
  };

export default generateRandomNumber;