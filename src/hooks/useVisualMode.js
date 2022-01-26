import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]); 
  // pass newMode as a param
  const transition = function(newMode, replace = false) {
    setMode(newMode)
    if (replace) {
      setHistory((prev => [...prev]))
    } else {
      // take newMode and add it to history array
      setHistory((prev => [...prev, newMode]))
    }
  }
  const back = function() {
    // removes newMode from array
    if (history.length > 1) {
      setMode(history[history.length-2])
      setHistory((prev) => prev.slice(0, prev.length-1))
    }
  }
  return { mode, transition, back };
}