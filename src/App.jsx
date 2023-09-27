import { useState } from 'react'
import './App.css'
import { Container, Grid } from '@mui/material'
import Profile from './components/Profile'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Footer from './components/Footer'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NoPage from './components/NoPage'
function App() {

  return (
    <Container sx={{ marginTop: '7%' }}>
      <Grid container sx={{ gap: '4rem' }}>
        <Grid item xs={12} md={4} lg={3} >
          <Profile />
        </Grid>
        <Grid item xs>
          <Header />
          <Router>
            <Routes>
              <Route path='/' element={<Resume />} />
              <Route path='/portfolio' element={<Portfolio />} />
              <Route path="*" element={<NoPage />} />
            </Routes>
          </Router>
          <Footer />
        </Grid>
      </Grid>
    </Container >
  )
}

export default App
