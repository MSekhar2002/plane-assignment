# Custom Right-Click Context Menu with Advanced Features

## Overview
This project is a custom right-click context menu with advanced features such as activity tracking, undo/redo functionality, and keyboard/mouse navigation. The menu dynamically appears at the cursor position upon right-click and offers an intuitive user experience.

## Features

### Context Menu Positioning
- The menu appears exactly where the user right-clicks.
- Prevents overflow beyond the viewport.

### Menu Options
- The menu contains 5 randomly generated options (e.g., "Open in new tab," "Copy link," etc.).

### Keyboard & Mouse Navigation
- The first option is automatically focused when the menu appears.
- Navigation options:
  - **Arrow keys (↑, ↓)** to move between options.
  - **Enter key** to select an option.
  - **Mouse click** to select an option.

### Activity Log (Sidebar)
- A sidebar displays all actions performed on the context menu.
- Tracks:
  - Navigation (e.g., "Moved to option 2").
  - Operations performed (e.g., "Copied link").

### Undo & Redo Functionality
- Undo feature to revert the last action.
- Redo feature to restore an undone action.
- A stack-based implementation to handle all actions performed within the context menu.

## Tech Stack
- **React** (Functional Components)
- **Hooks**: `useState`, `useEffect`
- **CSS** for basic styling

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/MSekhar2002/plane-assignment.git
   ```
2. Navigate to the project folder:
   ```sh
   cd plane-assignment
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Bonus Features 
- **Custom Hooks**: Implemented reusable logic for state management.
- **Accessibility Improvements**:
  - Used ARIA roles for better screen reader support.
  - Ensured proper focus management when navigating via keyboard.


