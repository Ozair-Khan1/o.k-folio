import './App.css'
import { easeInOut, motion } from 'framer-motion'
import { Navbar } from './Component/Navbar'
import { Home } from './Component/Home'
import { Outlet } from 'react-router-dom'

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
    </>
  )
}

export default App
