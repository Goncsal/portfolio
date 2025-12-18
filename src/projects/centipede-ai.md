# Centipede AI Agent

Project Summary: A sophisticated AI agent for the classic Centipede game, featuring predictive pathfinding, defensive positioning, and strategic shooting logic.

## Overview

This project is a Python-based clone of the classic arcade game Centipede, designed as a teaching platform for AI development. I developed a sophisticated AI agent that plays the game autonomously, prioritizing survival and strategic efficiency.

## Architecture

The application uses a client-server architecture:
- **Server**: Manages game state and coordinates clients.
- **Client**: Connects to the server and sends player commands.
- **Game Engine**: Contains all game logic and entities.
- **Student AI**: My implementation of the autonomous agent.

## AI Implementation

The agent is built with a defensive-first, opportunistic shooter philosophy. Key systems include:

### 1. Centipede Movement Prediction Engine
- Simulates centipede behavior multiple steps ahead.
- Tracks direction, body segments, and handles wall/mushroom collisions.
- Generates a "danger map" to anticipate future threats.

### 2. Movement Evaluation System
- Ranks potential positions based on a defensive score.
- Prioritizes distance from danger, preservation of escape routes, and avoiding corners.

### 3. Multi-Mode Strategy
- **Early Defense**: Cautious movement and restricted shooting to survive the initial swarm.
- **Hunting Mode**: Aggressive alignment and predictive shooting when safe.
- **Retreat Mode**: Uses BFS pathfinding to escape upward when overwhelmed by incoming centipedes.

### 4. Smart Shooting Logic
- **Predictive Shooting**: Calculates bullet paths and intersects them with predicted centipede positions.
- **Safety Checks**: Verifies that shooting won't leave the agent in a vulnerable position.
- **Column Clearing Analysis**: Simulates the impact of destroying mushrooms before firing.

### 5. Advanced Navigation
- **BFS Pathfinding**: Navigates complex mushroom mazes and avoids predicted danger zones.
- **Stuck Centipede Detection**: Identifies and prioritizes targets trapped in tight oscillations.

## Game Mechanics
- **Map Size**: 40x24 cells.
- **Entities**: BugBlaster, Centipedes, Spiders, Fleas, and Mushrooms.
- **Scoring**: Points for eliminating enemies and clearing obstacles.
- **Performance**: Runs at 10 FPS with real-time predictions.

## Key Learnings
- **Prediction is Key**: Simulating future states is essential for high-performance AI.
- **Defense > Offense**: Survival-focused strategies consistently outperform purely aggressive ones.
- **Heuristic Tuning**: Balancing multiple objectives through weighted scoring systems.
