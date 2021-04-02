import React from 'react'
import { Router } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';

import PokeProvider from './contexts/PokeContext'
import history from './services/history'
import Routes from './routes/routes'
import GlobalStyle from './styles/global'

const App = () => {
  return (
    <PokeProvider>
      <Router history={history}>
        <ToastContainer autoClose={3000}/>
        <GlobalStyle/>
        <Routes/>
      </Router>
    </PokeProvider>
  )
}

export default App;
