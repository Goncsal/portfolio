# Sudoku PWA

Project Summary: A fully-featured, offline-first Sudoku puzzle game built as a Progressive Web App (PWA) with advanced gameplay features, auto-save, and a clean, responsive design.

## Overview

This Sudoku app is a fully-featured puzzle game that can be installed and works completely offline on any device (desktop or mobile). It offers a seamless user experience with both dark and light themes and comprehensive game management features.

## Key Features

### 🎮 Gameplay
- **Puzzle Generation**: Creates Sudoku puzzles at three difficulty levels: Easy, Medium, and Hard.
- **Interactive Controls**: Click to select cells, use number pad or keyboard (1-9) for input.
- **Annotations/Notes**: Toggle pencil mark mode to add multiple candidate numbers in cells.
- **Hint System**: Get help when stuck on a puzzle.
- **Real-time Validation**: Highlights conflicts and invalid moves as you play.
- **Timer**: Tracks how long you take to solve each puzzle.

### 💾 Game Management
- **Auto-save**: Progress automatically saved every 30 seconds.
- **Manual Save/Load**: Save and resume games anytime.
- **Undo/Redo**: Full history system to reverse or replay moves.
- **Statistics**: Tracks completion rates, average solving times, and progress.

### 📱 PWA Features
- **Offline First**: Fully functional without internet - generate puzzles, save games, everything works offline.
- **Installable**: Can be added to home screen on mobile or desktop like a native app.
- **Service Worker**: Caches all assets for offline use.
- **Responsive Design**: Adapts to all screen sizes.

### 🎨 User Experience
- **Dark/Light Themes**: Toggle between themes with saved preferences.
- **Keyboard Support**: Full navigation and input via keyboard.
- **Touch-friendly**: Optimized for mobile touch interactions.
- **Local Storage**: All data (games, settings, stats) stored locally using IndexedDB.
