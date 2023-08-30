import { useState } from 'react'
import './App.css'
import { Container, Grid } from '@mui/material'
import Profile from './components/Profile'
import NavMenu from './components/NavMenu'
import Portfolio from './pages/Portfolio'
import Resume from './pages/Resume'
import Contact from './pages/Contact'
import Footer from './components/Footer'
function App() {

  return (
    <Container>
      <Grid container>
        <Grid item xs={12} md={4} lg={3} >
          <Profile />
        </Grid>
        <Grid item xs >
          <NavMenu />
          <Resume />
          <Portfolio />
          <Contact />
          <Footer />
        </Grid>
      </Grid>
    </Container >
  )
}

export default App
