import { InformationPanel } from './components/InformationPanel';
import { LessonScene } from './components/LessonScene';

export default function App() {
  return (
    <main className="app-shell">
      <LessonScene />
      <InformationPanel />
    </main>
  );
}
