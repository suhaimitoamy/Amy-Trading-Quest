import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AccessGate from './components/AccessGate';
import Home from './pages/Home';
import QuestMap from './pages/QuestMap';
import Materi from './pages/Materi';
import LessonReader from './pages/LessonReader';
import Quiz from './pages/Quiz';
import AiEvaluator from './pages/AiEvaluator';
import Progress from './pages/Progress';
import Journal from './pages/Journal';
import Settings from './pages/Settings';

function App() {
  return (
    <AccessGate>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quest" element={<QuestMap />} />
            <Route path="/materi" element={<Materi />} />
            <Route path="/lesson/:lessonId" element={<LessonReader />} />
            <Route path="/quiz/:quizId" element={<Quiz />} />
            <Route path="/ai" element={<AiEvaluator />} />
            <Route path="/progress" element={<Progress />} />
            <Route path="/journal" element={<Journal />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </Layout>
      </Router>
    </AccessGate>
  );
}

export default App;
