import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Shopping from './routes/shopping';
import Register from './register';
import Login from './login';
import { AuthProvider } from './context/AuthProvider'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<App />} />
          <Route path="shop" element={<Shopping />} />
          <Route path="register" element={<Register/>} />
          <Route path="login" element={<Login></Login>} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
