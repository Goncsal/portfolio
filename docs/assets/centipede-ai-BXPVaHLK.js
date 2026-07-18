const e=`# Centipede AI Agent\r
\r
Project Summary: A sophisticated AI agent for the classic Centipede game, featuring predictive pathfinding, defensive positioning, and strategic shooting logic.\r
Year: 2024\r
Tech: Python, BFS Pathfinding, Sockets\r
\r
## Overview\r
\r
This project is a Python-based clone of the classic arcade game Centipede, designed as a teaching platform for AI development. I developed a sophisticated AI agent that plays the game autonomously, prioritizing survival and strategic efficiency.\r
\r
## Architecture\r
\r
The application uses a client-server architecture:\r
- **Server**: Manages game state and coordinates clients.\r
- **Client**: Connects to the server and sends player commands.\r
- **Game Engine**: Contains all game logic and entities.\r
- **Student AI**: My implementation of the autonomous agent.\r
\r
## AI Implementation\r
\r
The agent is built with a defensive-first, opportunistic shooter philosophy. Key systems include:\r
\r
### 1. Centipede Movement Prediction Engine\r
- Simulates centipede behavior multiple steps ahead.\r
- Tracks direction, body segments, and handles wall/mushroom collisions.\r
- Generates a "danger map" to anticipate future threats.\r
\r
### 2. Movement Evaluation System\r
- Ranks potential positions based on a defensive score.\r
- Prioritizes distance from danger, preservation of escape routes, and avoiding corners.\r
\r
### 3. Multi-Mode Strategy\r
- **Early Defense**: Cautious movement and restricted shooting to survive the initial swarm.\r
- **Hunting Mode**: Aggressive alignment and predictive shooting when safe.\r
- **Retreat Mode**: Uses BFS pathfinding to escape upward when overwhelmed by incoming centipedes.\r
\r
### 4. Smart Shooting Logic\r
- **Predictive Shooting**: Calculates bullet paths and intersects them with predicted centipede positions.\r
- **Safety Checks**: Verifies that shooting won't leave the agent in a vulnerable position.\r
- **Column Clearing Analysis**: Simulates the impact of destroying mushrooms before firing.\r
\r
### 5. Advanced Navigation\r
- **BFS Pathfinding**: Navigates complex mushroom mazes and avoids predicted danger zones.\r
- **Stuck Centipede Detection**: Identifies and prioritizes targets trapped in tight oscillations.\r
\r
## Game Mechanics\r
- **Map Size**: 40x24 cells.\r
- **Entities**: BugBlaster, Centipedes, Spiders, Fleas, and Mushrooms.\r
- **Scoring**: Points for eliminating enemies and clearing obstacles.\r
- **Performance**: Runs at 10 FPS with real-time predictions.\r
\r
## Key Learnings\r
- **Prediction is Key**: Simulating future states is essential for high-performance AI.\r
- **Defense > Offense**: Survival-focused strategies consistently outperform purely aggressive ones.\r
- **Heuristic Tuning**: Balancing multiple objectives through weighted scoring systems.\r
`;export{e as default};
