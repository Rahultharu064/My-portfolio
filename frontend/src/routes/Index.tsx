import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage';

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            {/* Add more routes here as needed, e.g., <Route path="/project/:id" element={<ProjectDetails />} /> */}
        </Routes>
    );
};

export default AppRoutes;
