import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from "./context/AuthContext";
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import './styles/main.scss';
import { CategoryProvider } from './context/CategoryContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CategoryProvider>
        <App />
      </CategoryProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

