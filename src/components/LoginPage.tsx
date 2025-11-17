import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!login(username, password)) {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white bg-opacity-95 p-10 rounded-2xl shadow-2xl text-center w-96">
        <h1 className="text-2xl font-bold mb-6">Вход</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Логин"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
            placeholder="Пароль"
            required
          />
          {error && <div className="text-red-500 text-sm">{error}</div>}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600"
          >
            Войти
          </button>
        </form>
        <div className="mt-4 text-sm text-gray-600">
          <p>Логин: <strong>admin</strong></p>
          <p>Пароль: <strong>password</strong></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;