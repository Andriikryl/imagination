"use client"

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Counter() {
    const [counter, setCounter] = useState(0)
    function incrementCounter(){
        setCounter(() => counter + 1)
    }
    function decrimentCounter(){
        setCounter(() => counter - 1)
    }
    return (
      <div>
        <h1>
        Counter
        </h1>
        <div>
            <p>{counter}</p>
        </div>
        <div className="flex items-center gap-4">
            <Button onClick={incrementCounter}>Icremant</Button>
            <Button onClick={decrimentCounter}>Decriment</Button>
        </div>
      </div>
    );
  }
  