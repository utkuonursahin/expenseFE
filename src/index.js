import React from 'react';
import ReactDOM from 'react-dom';
import { AuthProvider } from "./context/AuthContext";
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import './styles/main.scss';
import { CategoryProvider } from './context/CategoryContext';
import { ExpensesProvider } from './context/ExpensesContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CategoryProvider>
        <ExpensesProvider>
          <App />
        </ExpensesProvider>
      </CategoryProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

