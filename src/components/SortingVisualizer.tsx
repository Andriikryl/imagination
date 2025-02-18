"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { bubbleSort } from "../../utils/sorting";

export default function SortingVisualizer() {
  const initialArray = [20, 10, 40, 5, 30, 15];
  const [array, setArray] = useState<number[]>(initialArray);
  const [sorting, setSorting] = useState(false);
  const [activeIndices, setActiveIndices] = useState<number[]>([]);

  // Reset the array to a new random state
  const resetArray = () => {
    setArray(initialArray.map(n => n)); // Or generate a new array
  };

  const startSorting = async (reverse: boolean = false) => {
    setSorting(true);
    await bubbleSort(array, setArray, 300, setActiveIndices, reverse);
    setSorting(false);
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <div className="flex items-end space-x-2">
        {array.map((value, idx) => {
          const isActive = activeIndices.includes(idx);
          return (
            <motion.div
              key={idx}
              style={{ height: `${value * 5}px` }}
              className={`w-10 rounded ${
                isActive ? "bg-red-500" : "bg-blue-500"
              }`}
              layout
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <span>
              {value}
              </span>
              </motion.div>
          );
        })}
      </div>

      <div className="flex gap-4">
        <button
          onClick={() => startSorting(false)}
          disabled={sorting}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Sort Ascending
        </button>
        <button
          onClick={() => startSorting(true)}
          disabled={sorting}
          className="px-4 py-2 bg-purple-500 text-white rounded"
        >
          Sort Descending
        </button>
        <button
          onClick={resetArray}
          disabled={sorting}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
