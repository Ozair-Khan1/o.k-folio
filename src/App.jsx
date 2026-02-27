import './App.css'
import { easeInOut, motion } from 'framer-motion'
import { Navbar } from './Component/Navbar'
import { Home } from './Component/Home'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

function App() {
    const randomX = [0, 50, 20, 30, 40, 0]
  return (
    <>
        <Navbar/>
          <motion.div whileHover={{x : randomX, filter : "blur(1px)", scale : 1.05}} transition={{ duration : 2, repeat : Infinity, ease : easeInOut}} className='floating-ball d-none d-lg-block d-xl-block'>
          </motion.div>
          <motion.div whileHover={{x : randomX, filter : "blur(1px)", scale : 1.05}} transition={{ duration : 2, repeat : Infinity, ease : easeInOut}} className='floating-ball2 d-none d-lg-block d-xl-block'>
          </motion.div>
        <div className="bento-bg-container">
        </div>
        <div className='bento-body'>
         <Outlet/>
        </div>
        <footer className='d-flex justify-content-center align-items-center mt-2'>
          <p className='' style={{color : 'rgba(240, 242, 245, 0.7)'}}>@ O.K Folio 2024, Design By <Link to='/' className='text-decoration-none'><span>O.K Folio</span></Link></p>
        </footer>
    </>
  )
}

export default App
