import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import './assets/styles/variables.css';
import './assets/styles/momery.scss';

const StartGame = React.lazy(() => import('./pages/StartGame/StartGame'));
const PlayGame = React.lazy(() => import('./pages/PlayGame/PlayGame'));
const NotFound = React.lazy(() => import('../../NotFound'));

const Momery = () => (
    <Routes>
        <Route path="/" element={<StartGame />} />
        <Route path="/start-game" element={<StartGame />} />
        <Route path="/play-game" element={<PlayGame />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default Momery;
