# IML & IIML Compiler

Project Summary: A custom compiler and interpreter for Image Manipulation Languages (IML & IIML), featuring advanced pixel-by-pixel operations, 2D list indexing, and custom shape generation.

## Overview

This project involved the development of two specialized languages for image processing: **IML (Image Manipulation Language)** and **IIML (Interactive Image Manipulation Language)**. The goal was to create a robust system for programmatic image editing, supporting both batch processing and interactive shape placement.

## Key Features

### 1. Advanced IML Capabilities
- **Progressive Lighting**: Implemented a "Progressive Lighting" example (`example03.iml`) that increases pixel intensity until saturation, ensuring no overflow occurs.
- **2D List Indexing**: Added support for accessing elements in bidimensional lists and images using standard bracket notation (e.g., `j[0][1]`).
- **Pixel-by-Pixel Operations**: Expanded arithmetic operations to support lists, allowing for operations between images, lists of lists, and constants.
- **List Manipulation**: Integrated a `pop` method for removing specific sublists from a collection.

### 2. IIML Extensions
- **Interactive Interpreter**: Developed `run_iiml.py` to facilitate testing and execution of IIML scripts.
- **Custom Shapes**: Added support for new geometric primitives:
    - **Lines**: `place line (x1,y1) (x2,y2) with thickness T with intensity I`
    - **Stars**: `place star N R with thickness T with intensity I`
- **Architectural Separation**: Decoupled the semantic analyzer from the interpreter to improve code maintainability and clarity.

## Technical Implementation

- **Language Design**: Defined formal grammars for both IML and IIML.
- **Compiler Pipeline**: Implemented lexing, parsing, semantic analysis, and code generation/interpretation.
- **Image Processing**: Leveraged Python's ecosystem for efficient image loading (PGM support) and manipulation.

## Outcome

The compiler successfully handles complex image transformations, as demonstrated by the progressive lighting and advanced indexing examples. The system ensures robust data handling, preventing intensity "overflow" and providing a flexible interface for both developers and artists.

## Key Learnings
- **Compiler Construction**: Deepened understanding of the full compilation lifecycle.
- **Domain-Specific Languages (DSLs)**: Explored the power of creating specialized languages for niche tasks like image processing.
- **Semantic Integrity**: Prioritized rigorous semantic checks to ensure runtime stability.
