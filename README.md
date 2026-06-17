# DefenseGrid Learning Project

This project is starting slowly as a learning-first React Three Fiber experience.

Lesson 1 is intentionally tiny:

- One React application.
- One Three.js canvas.
- One camera.
- Two lights.
- One ground plane.
- One cube.

## Run

```bash
npm install
npm run dev
```

Open the local URL Vite prints, usually `http://127.0.0.1:5173/`.

## Current Files

- `src/App.tsx` puts the scene and information panel on the page.
- `src/components/LessonScene.tsx` creates the Three.js canvas, camera, lights, and controls.
- `src/components/Ground.tsx` draws the floor.
- `src/components/TrainingCube.tsx` draws the first cube.
- `src/components/InformationPanel.tsx` shows simple text over the scene.

The next lesson should add one small idea only, such as moving the cube or turning the floor into a grid.
