import React, { useState, useEffect, useRef } from "react";
import "./ContextMenu.css";

const ContextMenu = ({ position, onClose, onAction }) => {
  const menuOptions = ["Open in new tab", "Copy link", "Save as", "Share", "Delete"];
  const [focusedIndex, setFocusedIndex] = useState(0);
  const menuRef = useRef(null);

  useEffect(() => {
    menuRef.current?.focus();

    const handleKeyDown = (e) => {
      let newIndex = focusedIndex;

      if (e.key === "ArrowDown") {
        newIndex = (focusedIndex + 1) % menuOptions.length;
      } else if (e.key === "ArrowUp") {
        newIndex = (focusedIndex - 1 + menuOptions.length) % menuOptions.length;
      } else if (e.key === "Enter") {
        onAction(menuOptions[focusedIndex]);
        return;
      } else if (e.key === "Escape") {
        onClose();
        return;
      }

      if (newIndex !== focusedIndex) {
        setFocusedIndex(newIndex);
        onAction(`Moved to option ${newIndex + 1}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [focusedIndex, onAction, onClose]);

  const style = {
    top: Math.min(position.y, window.innerHeight - 200),
    left: Math.min(position.x, window.innerWidth - 150),
  };

  return (
    <div
      className="context-menu"
      style={style}
      ref={menuRef}
      tabIndex="0"
      role="menu"
      aria-label="Context Menu"
    >
      {menuOptions.map((option, index) => (
        <div
          key={option}
          role="menuitem"
          className={`menu-item ${index === focusedIndex ? "focused" : ""}`}
          onClick={() => onAction(option)}
          onMouseEnter={() => setFocusedIndex(index)}
        >
          {option}
        </div>
      ))}
    </div>
  );
};

export default ContextMenu;
