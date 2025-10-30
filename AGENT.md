You are assisting in building a personal portfolio website using Vite + React + TypeScript. TailwindCSS is installed.

✅ Goals

Create a futuristic, minimalistic portfolio UI using TailwindCSS.
The site should include:

🏠 Home Page

Hero with name, role, short tagline

Navigation links: Home | Projects | Writeups | Contact

Futuristic + minimal aesthetic (dark theme, cyber-accent glow)

📁 Projects Page

Projects are stored as markdown files inside /src/projects/.
Each project has:

A .md file named after the project, example: myproject.md

A thumbnail image in /public/ with the same basename (myproject.png or .jpg)

Inside each .md file there is a line starting with:
Project Summary: ...

🔧 Requirements:

Parse each .md file

Extract the sentence after Project Summary: as the short description

Show a grid of project cards:

Thumbnail from /public/<name>.<ext>

Title = filename (formatted)

Extracted summary

Clicking opens /project/<slug> page that fully renders the markdown

✍️ Writeups Page

Writeups are stored in /src/writeups/, also as .md files named after the challenge.

No thumbnail required.

Display a list where each item shows:

Writeup title (derived from filename)

One-sentence description extracted from the markdown (similar logic but no summary prefix needed)

Clicking opens /writeups/<slug> page that renders the markdown content

📄 Markdown Rendering

Use a markdown parser that supports:

Code blocks

Headings

Links

Lists

✨ UI Style Guide

Dark theme, neon accents, cyber-futuristic feel (inspired by Ghost in the Shell / Blade Runner / Tron)

Minimalistic layout

Rounded corners, smooth hover transitions

Neon cyan/purple color palette (Tailwind)

Use Tailwind utilities — no external CSS

📂 File Structure (expected)
/src/
  /components/
  /pages/
  /projects/*.md
  /writeups/*.md
/public/
  projectname.png

🎯 Deliverables Copilot Should Produce

React pages for Home, Projects, Project Detail, Writeups, Writeup Detail

MD file reader + front-end logic to extract first description line

Tailwind UI components

Routing (e.g., React Router)

Utility to get summary from .md files

Now generate the code and file structure to implement this.