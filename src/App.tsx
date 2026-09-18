import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { SubjectsPage } from './pages/SubjectsPage';
import { StudyToolsPage } from './pages/StudyToolsPage';
import { StrategyPage } from './pages/StrategyPage';
import { CollegesPage } from './pages/CollegesPage';
import { ConnectPage } from './pages/ConnectPage';
import { FlashcardsPage } from './pages/FlashcardsPage';
import { AnalyticsPage } from './pages/AnalyticsPage';
import { QuizPage } from './pages/QuizPage';
import { MnemonicsPage } from './pages/MnemonicsPage';
import { PriorityMatrixPage } from './pages/PriorityMatrixPage';
import { JournalPage } from './pages/JournalPage';
import { DoubtsPage } from './pages/DoubtsPage';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}

export default function App() {
  const userEmail = 'varunt3443@gmail.com';

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-[#0e1015] text-[#e2e2e9] font-['Manrope',sans-serif] selection:bg-[#635bff] selection:text-white flex flex-col">
        {/* Fixed Top Navigation Bar */}
        <Header />

        {/* Dynamic Route Pages */}
        <main className="w-full flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/subjects" element={<SubjectsPage />} />
            <Route path="/tools" element={<StudyToolsPage />} />
            <Route path="/flashcards" element={<FlashcardsPage />} />
            <Route path="/analytics" element={<AnalyticsPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/mnemonics" element={<MnemonicsPage />} />
            <Route path="/matrix" element={<PriorityMatrixPage />} />
            <Route path="/journal" element={<JournalPage />} />
            <Route path="/doubts" element={<DoubtsPage />} />
            <Route path="/strategy" element={<StrategyPage />} />
            <Route path="/colleges" element={<CollegesPage />} />
            <Route path="/connect" element={<ConnectPage userEmail={userEmail} />} />
            {/* Fallback to Home */}
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer userEmail={userEmail} />
      </div>
    </Router>
  );
}
