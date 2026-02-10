import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/Index';

const App: React.FC = () => {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <main>
                    <AppRoutes />
                </main>
                <Footer />
            </div>
        </Router>
    );
};

export default App;
