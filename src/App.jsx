import React from 'react'
import Page1 from './pages/page1'
import Page2 from './pages/page2'
import Header from './components/Header'
const App = () => {
  return (
    <>
      <div id="main">
        <Header />
        <Page1 />

        <Page2/>
      </div>
    </>
  )
}

export default App
