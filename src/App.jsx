import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Manager from './components/Manager'
import Footer from './components/Footer'
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <div className='min-h-[91vh]'>
        <Manager />
      </div>
      <Footer />
    </>
  );
}

export default App;
