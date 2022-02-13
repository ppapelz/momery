import { Route, Routes } from 'react-router-dom';

import StartGame from './pages/StartGame/StartGame';
import NotFound from '../../NotFound';

import './assets/styles/variables.css';
import './assets/styles/momery.scss';

const Momery = () => (
    <Routes>
        <Route path="/" element={<StartGame />} />
        <Route path="/start-game" element={<StartGame />} />
        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default Momery;
