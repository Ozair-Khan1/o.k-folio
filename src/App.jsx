import './App.css'
import { easeInOut, motion } from 'framer-motion'
import { Navbar } from './Component/Navbar'
import { Home } from './Component/Home'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { clamp, createAnimatable, utils } from 'animejs'
function App() {
    const randomX = [0, 50, 20, 30, 40, 0]
    const orbContainerRef = useRef(null);

  useEffect(() => {
  const balls = createAnimatable('.orb', {
    x: 500,
    y: 500,
    ease: 'out(3)',
  });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;

    const xRange = (clientX / innerWidth - 0.5) * 60;
    const yRange = (clientY / innerHeight - 0.5) * 60;

    balls.x(xRange);
    balls.y(yRange);
  };

  window.addEventListener('mousemove', handleMouseMove);
  return () => window.removeEventListener('mousemove', handleMouseMove);
}, []);
  return (
    <>
        <Navbar/>
        <div ref={orbContainerRef} style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1 }}>
          <div className="orb floating-ball"/>
          <div className="orb floating-ball2"/>
        </div>
        <div className="bento-bg-container">
        </div>
        <div className='bento-body'>
         <Outlet/>
         <footer className='d-flex justify-content-center align-items-center mt-2'>
          <p className='' style={{color : 'rgba(240, 242, 245, 0.7)'}}>@ O.K Folio 2024, Design By <Link to='/' className='text-decoration-none'><span>O.K Folio</span></Link></p>
        </footer>
        </div>
    </>
  )
}

export default App
