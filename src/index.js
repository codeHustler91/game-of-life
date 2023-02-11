import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.scss';
import Layout from './pages/layout/Layout';
import { Home } from './pages/home/Home';
import { NoPage } from './pages/nopage/NoPage';
import { SignIn } from './pages/signin/SignIn';
import { About } from './pages/about/About';
import { Intro } from './pages/newplayer/intro/Intro';
import { Identify } from './pages/newplayer/identify/Identify';
import { Prioritize } from './pages/newplayer/prioritize/Prioritize';
import { Execute } from './pages/newplayer/execute/Execute';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="intro" element={<Intro />} />
        <Route path="identify" element={<Identify />} />
        <Route path="prioritize" element={<Prioritize />} />
        <Route path="execute" element={<Execute />} />
        <Route path="signin" element={<SignIn />} />
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
