import React from 'react';
import { createRoot } from 'react-dom/client';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import { AuthProvider, useAuth } from './context/AuthContext';
import "./index.css"

const container = document.getElementById("root");

if (!container) throw new Error("div with id root does not exist");

const root = createRoot(container);



const App: React.FC = () => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <ProfilePage /> : <LoginPage />;
};



const AppWrapper: React.FC = () => (
    <AuthProvider>
        <App />
    </AuthProvider>
);

root.render(<AppWrapper/>);
