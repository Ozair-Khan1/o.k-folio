import { motion } from "framer-motion"
import { Link } from "react-router-dom"

export const CounterItem = ({number, label}) => {
    return (
        <>
            <div className="counter-item">
                <Link to="/Work" className="text-decoration-none d-inline-block">
                <motion.div 
                initial="rest" 
                whileHover="hover"
                whileTap='hover' 
                animate="rest" 
                style={{ position: 'relative' }}
                >
                {/* The Number */}
                <motion.h3 
                    className="m-0 fs-1"
                    variants={{
                    rest: { color: '#fff', scale: 1 },
                    hover: { color: '#0D6EFD', scale: 1.05 }
                    }}
                    transition={{ duration: 0.3 }}
                >
                    {number}
                </motion.h3>

                {/* The Sliding Underline */}
                <motion.div
                    variants={{
                    rest: { width: 0 },
                    hover: { width: '100%' }
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    style={{
                    height: '2px',
                    background: '#0D6EFD',
                    position: 'absolute',
                    bottom: -1,
                    left: 0
                    }}
                />
                </motion.div>
                
                {/* The Label */}
            </Link>
            <p className="m-0" style={{ fontSize: '20px', color: '#576076' }}>
                {label}
            </p>
        </div>
        </>
    )
}