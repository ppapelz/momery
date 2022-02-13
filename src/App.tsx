import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';

const GamePage = React.lazy(() => import('./pages/Games/Games'));

const App = () => (
    <Router>
        <Routes>
            <Route path="/" element={GamePage} />
            <Route
                path="game/*"
                element={
                    <Suspense fallback={<>...</>}>
                        <GamePage />
                    </Suspense>
                }
            />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </Router>
);

export default App;
