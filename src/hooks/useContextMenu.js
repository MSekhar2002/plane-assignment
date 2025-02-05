import { useState, useEffect } from "react";

const useContextMenu = () => {
  const [menuPosition, setMenuPosition] = useState(null);

  const openMenu = (event) => {
    event.preventDefault();
    setMenuPosition({ x: event.clientX, y: event.clientY });
  };

  const closeMenu = () => setMenuPosition(null);

  useEffect(() => {
    const handleClickOutside = () => closeMenu();
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, []);

  return { menuPosition, openMenu, closeMenu };
};

export default useContextMenu;
