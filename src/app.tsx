import React from 'react';
import LoginPage from './components/LoginPage';
import ProfilePage from './components/ProfilePage';
import { AuthProvider, useAuth } from './context/AuthContext';

const App: React.FC = () => {
    const { isAuthenticated } = useAuth();
    return isAuthenticated ? <ProfilePage /> : <LoginPage />;
};

const AppWrapper: React.FC = () => (
    <AuthProvider>
        <App />
    </AuthProvider>
);

export default AppWrapper;