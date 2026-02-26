import { motion } from "framer-motion"

export const WorkItems = ({image, link, title, text}) => {

    return (
        <>
            <div className="items">
                <div className="image">
                    <img src={image} alt="Image" className="img-fluid rounded-4"/>
                </div>
                <div className="text d-flex flex-column flex-lg-row flex-xl-row gap-2 gap-lg-0 gap-xl-0 gap-md-0 justify-content-between p-4">
                    <div className="info d-flex flex-column">
                        <motion.a 
                        href={link}
                        target="_blank" 
                        className="text-decoration-none fs-4 d-inline-block"
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        style={{ 
                        color: 'rgba(240, 242, 245, 0.7)', 
                        position: 'relative',
                        width: 'fit-content'
                        }}
                    >
                        <motion.span
                        variants={{
                            rest: { color: 'rgba(240, 242, 245, 0.7)', x: 0 },
                            hover: { color: '#0D6EFD', x: 5 }
                        }}
                        transition={{ duration: 0.3 }}
                        className="fw-semibold">
                        {title}
                        </motion.span>

                        <motion.div
                        variants={{
                            rest: { width: "0%" },
                            hover: { width: "100%" }
                        }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        style={{
                            height: '2px',
                            background: '#0D6EFD',
                            position: 'absolute',
                            bottom: 0,
                            left: 0
                        }}
                        />
                    </motion.a>
                        <p style={{color : '#576076'}} className="fw-semibold">{text}</p>
                    </div>
                    <div className="visit">
                        <motion.a href={link} target="_blank" whileHover={{backgroundColor : '#0D6EFD'}} transition={{duration : 0}} className="btn border-0 p-3 text-white" style={{backgroundColor : '#0E1018'}}>Visit Site
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10"/><path d="M7 17 17 7"/></svg>
                        </motion.a>
                    </div>
                </div>
            </div>
        </>
    )
}