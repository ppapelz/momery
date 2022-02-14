import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './assets/styles/main.scss';

const StartGame = React.lazy(() => import('./pages/StartGame/StartGame'));
const PlayGame = React.lazy(() => import('./pages/PlayGame/PlayGame'));
const NotFound = React.lazy(() => import('./pages/NotFound/NotFound'));

const App = () => (
    <React.Suspense fallback={<span>Loading...</span>}>
        <Router>
            <Routes>
                <Route path="/" element={<StartGame />} />
                <Route path="/play-momery" element={<PlayGame />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    </React.Suspense>
);

export default App;
