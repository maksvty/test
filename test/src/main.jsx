import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './components/Router.jsx';
import './assets/styles/global.css';
import AuthProvider from "./providers/AuthProvider.jsx";
import Header from "./components/Header/Header.jsx";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <Router />
    </AuthProvider>
  </React.StrictMode>
);
