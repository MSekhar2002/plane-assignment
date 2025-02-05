import { useState } from "react";

const useUndoRedo = () => {
  const [logs, setLogs] = useState([]);
  const [undoStack, setUndoStack] = useState([]);

  const addLog = (action) => {
    setLogs((prev) => [...prev, action]);
    setUndoStack([]); // Clear redo stack on new action
  };

  const undo = () => {
    if (logs.length === 0) return;
    const lastAction = logs.pop();
    setUndoStack((prev) => [...prev, lastAction]);
    setLogs([...logs]);
  };

  const redo = () => {
    if (undoStack.length === 0) return;
    const lastUndo = undoStack.pop();
    setLogs((prev) => [...prev, lastUndo]);
    setUndoStack([...undoStack]);
  };

  return { logs, addLog, undo, redo, canUndo: logs.length > 0, canRedo: undoStack.length > 0 };
};

export default useUndoRedo;
