export async function bubbleSort(
  array: number[],
  setArray: (arr: number[]) => void,
  delay: number,
  setActiveIndices: (indices: number[]) => void,
  reverse: boolean = false
) {
  let arr = [...array];
  const comparator = reverse
    ? (a: number, b: number) => a < b
    : (a: number, b: number) => a > b;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      // Highlight the two elements being compared
      setActiveIndices([j, j + 1]);
      if (comparator(arr[j], arr[j + 1])) {
        // Swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        setArray([...arr]);
      }
      await new Promise((resolve) => setTimeout(resolve, delay));
    }
  }
  setActiveIndices([]);
}
