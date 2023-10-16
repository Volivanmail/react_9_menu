import { Route, Routes } from 'react-router-dom';
import Menu from './components/Menu';
import HomePage from './components/HomePage';
import DriftPage from './components/DriftPage';
import TimeAttackPage from './components/TimeAttackPage';
import ForzaPage from './components/ForzaPage';
import './App.css';

export default function App() {
  return (
    <div>
      <Menu />
      <Routes className="page">
        <Route path="/" exact element={ <HomePage /> } />
        <Route path="/drift" element={ <DriftPage /> } />
        <Route path="/timeattack" element={ <TimeAttackPage /> } />
        <Route path="/forza" element={ <ForzaPage /> } />
      </Routes>
    </div>
  )
}