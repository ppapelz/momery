import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import NotFound from '../NotFound';

const MomeryPage = React.lazy(() => import('./Momery/Momery'));

const Games = () => (
    <Routes>
        <Route path="/" element={<MomeryPage />} />
        <Route
            path="/momery/*"
            element={
                <Suspense fallback={<>...</>}>
                    <MomeryPage />
                </Suspense>
            }
        />
        <Route path="*" element={<NotFound />} />
    </Routes>
);

export default Games;
