import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from './pages/Home'
import DashboardPage from './pages/Dashboard'
import CoinPage from './pages/Coin'
import ComparePage from './pages/compare'
import WatchlistPage from './pages/watchlist'
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import Header from './components/Common/Header'
import Footer from './components/Common/Footer'

function App() {
  return (
    <div className='app'>
      <ToastContainer />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Dashboard" element={<DashboardPage />} />
          <Route path="/Coin/:id" element={<CoinPage />} />
          <Route path="/compare" element={<ComparePage />} />
          <Route path="/watchlist" element={<WatchlistPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App