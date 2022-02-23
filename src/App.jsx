import React from 'react'
import Router from './Router'
import { Header, Footer } from './Components'

const App = () => {
  return(
    <>
      <Header />
      <Router />
      <Footer />
    </>
  )
}

export default App;