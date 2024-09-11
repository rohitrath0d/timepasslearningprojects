import React from 'react'
// import ReactDOM from 'react-dom'
import { useState } from 'react'
import Navbar from './Components/Navbar'
import Dashboard from './Components/Dashboard'
import Expensetracker from './Components/Expensetracker'
import Incomemanagement from './Components/Incomemanagement'
import Debtmanagement from './Components/Debtmanagement'
import Footer from './Components/Footer'
import './App.css'
import { Provider } from 'react-redux'
// import App from './App';
// import { configureStore } from '@reduxjs/toolkit';
import './index.css'
import Store from './Components/Store/Store'



function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
   <Provider store={Store}>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Dashboard />
          <Expensetracker />
          <Incomemanagement />
          <Debtmanagement />
        </main>
        <Footer />
      </div>
    </Provider>
    </>
  )
}

export default App
