export function shuffleArray<T>(array: Array<T>): Array<T> {
  const getRandomNumber = () => Number(Math.random() - 0.5);
  const resultArr = [...array].sort(getRandomNumber);

  return resultArr;
}
