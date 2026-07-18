const e=`# Sudoku PWA\r
\r
Project Summary: A fully-featured, offline-first Sudoku puzzle game built as a Progressive Web App (PWA) with advanced gameplay features, auto-save, and a clean, responsive design.\r
Year: 2024\r
Tech: PWA, TypeScript, IndexedDB, Service Worker\r
\r
## Overview\r
\r
This Sudoku app is a fully-featured puzzle game that can be installed and works completely offline on any device (desktop or mobile). It offers a seamless user experience with both dark and light themes and comprehensive game management features.\r
\r
## Key Features\r
\r
### Gameplay\r
- **Puzzle Generation**: Creates Sudoku puzzles at three difficulty levels: Easy, Medium, and Hard.\r
- **Interactive Controls**: Click to select cells, use number pad or keyboard (1-9) for input.\r
- **Annotations/Notes**: Toggle pencil mark mode to add multiple candidate numbers in cells.\r
- **Hint System**: Get help when stuck on a puzzle.\r
- **Real-time Validation**: Highlights conflicts and invalid moves as you play.\r
- **Timer**: Tracks how long you take to solve each puzzle.\r
\r
### Game Management\r
- **Auto-save**: Progress automatically saved every 30 seconds.\r
- **Manual Save/Load**: Save and resume games anytime.\r
- **Undo/Redo**: Full history system to reverse or replay moves.\r
- **Statistics**: Tracks completion rates, average solving times, and progress.\r
\r
### PWA Features\r
- **Offline First**: Fully functional without internet - generate puzzles, save games, everything works offline.\r
- **Installable**: Can be added to home screen on mobile or desktop like a native app.\r
- **Service Worker**: Caches all assets for offline use.\r
- **Responsive Design**: Adapts to all screen sizes.\r
\r
### User Experience\r
- **Dark/Light Themes**: Toggle between themes with saved preferences.\r
- **Keyboard Support**: Full navigation and input via keyboard.\r
- **Touch-friendly**: Optimized for mobile touch interactions.\r
- **Local Storage**: All data (games, settings, stats) stored locally using IndexedDB.\r
`;export{e as default};
