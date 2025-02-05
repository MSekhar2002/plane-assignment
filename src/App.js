import React from "react";
import ContextMenu from "./components/ContextMenu/ContextMenu";
import ActivityLog from "./components/ActivityLog/ActivityLog";
import useContextMenu from "./hooks/useContextMenu";
import useUndoRedo from "./hooks/useUndoRedo";
import "./App.css";

const App = () => {
  const { menuPosition, openMenu, closeMenu } = useContextMenu();
  const { logs, addLog, undo, redo, canUndo, canRedo } = useUndoRedo();

  return (
    <div className="app" onContextMenu={openMenu}>
      {menuPosition && (
        <ContextMenu position={menuPosition} onClose={closeMenu} onAction={addLog} />
      )}
      <ActivityLog logs={logs} />
      <div className="undo-redo">
        <button onClick={undo} disabled={!canUndo}>Undo</button>
        <button onClick={redo} disabled={!canRedo}>Redo</button>
      </div>
    </div>
  );
};

export default App;
