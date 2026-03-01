import { easeInOut, motion } from "framer-motion"
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="d-block sticky-top" style={{ zIndex: 1020, top: 0 }}>
            <header className="header-area">
                <section>
                    <div className="container rounded-4 p-1 px-4 bg-black navbar-mg" style={{boxShadow : "0 2px 4px 0 rgba(20, 23, 32, 0.36)"}}>
                        <nav className="navbar bg-transparent">
                            <a href="#" className="navbar-brand d-inline-flex me-0 align-items-center gap-2 justify-content-center">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                    <path d="M0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0L9 0C9.39782 0 9.77936 0.158035 10.0607 0.43934C10.342 0.720644 10.5 1.10218 10.5 1.5V22.5C10.5 22.8978 10.342 23.2794 10.0607 23.5607C9.77936 23.842 9.39782 24 9 24H1.5C1.10218 24 0.720644 23.842 0.43934 23.5607C0.158035 23.2794 0 22.8978 0 22.5V1.5ZM13.5 1.5C13.5 1.10218 13.658 0.720644 13.9393 0.43934C14.2206 0.158035 14.6022 0 15 0L22.5 0C22.8978 0 23.2794 0.158035 23.5607 0.43934C23.842 0.720644 24 1.10218 24 1.5V9C24 9.39782 23.842 9.77936 23.5607 10.0607C23.2794 10.342 22.8978 10.5 22.5 10.5H15C14.6022 10.5 14.2206 10.342 13.9393 10.0607C13.658 9.77936 13.5 9.39782 13.5 9V1.5ZM13.5 15C13.5 14.6022 13.658 14.2206 13.9393 13.9393C14.2206 13.658 14.6022 13.5 15 13.5H22.5C22.8978 13.5 23.2794 13.658 23.5607 13.9393C23.842 14.2206 24 14.6022 24 15V22.5C24 22.8978 23.842 23.2794 23.5607 23.5607C23.2794 23.842 22.8978 24 22.5 24H15C14.6022 24 14.2206 23.842 13.9393 23.5607C13.658 23.2794 13.5 22.8978 13.5 22.5V15Z" class="logo-icon st-hover"></path>
                                </svg>
                                <span className="fw-semibold fs-2 text-white" style={{letterSpacing : '2px'}}>O.K<span className="fw-semibold fs-2 text-primary">Folio</span></span>
                            </a>
                            <div className="main justify-content-center d-none d-lg-flex d-xl-flex flex-grow-1">
                                <ul className="navbar-info d-flex align-items-center gap-5 mx-auto m-0">
                                    <li className="nav-item list-unstyled d-inline-flex m-0">
                                        <NavLink to='/Home'>
                                            {({isActive}) => (
                                                <motion.span  whileHover={{backgroundColor : "#0E1018", color : "white", padding : "20px"}} animate={{backgroundColor : isActive ? '#0E1018' : 'transparent', color : isActive  ? 'white' : '#8790a7', padding : isActive ? '20px' : '0px'}} transition={{duration : 0.2}} className="rounded-4 d-inline-flex gap-2 align-items-center fw-semibold" aria-current="page"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                                                </svg>Home
                                                </motion.span>
                                            )}
                                        </NavLink>
                                    </li>
                                    <li className="nav-item list-unstyled d-inline-flex m-0">
                                        <NavLink to='/About'>
                                            {({isActive}) => (
                                                <motion.span  whileHover={{backgroundColor : "#0E1018", color : "white", padding : "20px"}} animate={{backgroundColor : isActive ? '#0E1018' : 'transparent', color : isActive  ? 'white' : '#8790a7', padding : isActive ? '20px' : '0px'}} transition={{duration : 0.2}} className="nav-link rounded-4 d-inline-flex gap-2 align-items-center fw-semibold" aria-current="page" style={{color : "#8790a7"}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-circle-user-icon lucide-circle-user"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>
                                                About
                                                </motion.span>
                                            )}
                                        </NavLink>
                                    </li>  
                                    <li className="nav-item list-unstyled d-inline-flex m-0">
                                        <NavLink to='/Work'>
                                            {({isActive}) => (
                                                <motion.span  whileHover={{backgroundColor : "#0E1018", color : "white", padding : "20px"}} animate={{backgroundColor : isActive ? '#0E1018' : 'transparent', color : isActive  ? 'white' : '#8790a7', padding : isActive ? '20px' : '0px'}} transition={{duration : 0.2}} className="nav-link rounded-4 d-inline-flex gap-2 align-items-center fw-semibold" aria-current="page" style={{color : "#8790a7"}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-waypoints-icon lucide-waypoints"><path d="m10.586 5.414-5.172 5.172"/><path d="m18.586 13.414-5.172 5.172"/><path d="M6 12h12"/><circle cx="12" cy="20" r="2"/><circle cx="12" cy="4" r="2"/><circle cx="20" cy="12" r="2"/><circle cx="4" cy="12" r="2"/></svg> 
                                                Work
                                                </motion.span>
                                            )}
                                        </NavLink>
                                    </li>   
                                    <li className="nav-item list-unstyled d-inline-flex m-0">
                                        <NavLink to='/Contact'>
                                            {({isActive}) => (
                                                <motion.span  whileHover={{backgroundColor : "#0E1018", color : "white", padding : "20px"}} animate={{backgroundColor : isActive ? '#0E1018' : 'transparent', color : isActive  ? 'white' : '#8790a7', padding : isActive ? '20px' : '0px'}} transition={{duration : 0.2}} className="nav-link rounded-4 d-inline-flex gap-2 align-items-center fw-semibold" aria-current="page" style={{color : "#8790a7"}}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Contact
                                                </motion.span>
                                            )}
                                        </NavLink>   
                                    </li>    
                                </ul>
                                <div className="d-flex align-items-center d-none d-lg-flex d-xl-flex">
                                    <motion.a href="/assets\Ozair-Khan-CV.pdf" download="Ozair-Khan-CV.pdf" className="btn text-white border-0 py-3 px-4 d-inline-flex gap-2" whileHover={{backgroundColor : "#0D6EFD"}} transition={{duration : 0, ease : easeInOut}} style={{backgroundColor : "#0E1018"}}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg> Download CV
                                    </motion.a>
                                </div>
                            </div>
                            <div className="d-flex d-lg-none d-xl-none">
                                <button className="btn border-0" onClick={() => setIsOpen(true)}><span className="text-white"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-logs-icon lucide-logs"><path d="M3 5h1"/><path d="M3 12h1"/><path d="M3 19h1"/><path d="M8 5h1"/><path d="M8 12h1"/><path d="M8 19h1"/><path d="M13 5h8"/><path d="M13 12h8"/><path d="M13 19h8"/></svg></span></button>
                            </div>
                        </nav>
                    </div>
                    {isOpen && (
                            <div 
                            className="position-fixed d-flex overflow-visible top-0 w-100 h-100" 
                            style={{ backgroundColor: 'rgba(0,0,0,0.7)', zIndex: 1040 }}
                            onClick={() => setIsOpen(false)}
                            />
                            )}

                            <motion.div initial={{ y: '-100%', x : '-50%' }} animate={{ y: isOpen ? 0 : '-150%' }} transition={{ type: 'spring', damping: 18, stiffness: 200 }} className="position-fixed border-0 start-50 top-0 bg-black rounded-4 p-4" style={{ width: '100%', height : '550px', transform: 'translate(-50%, -50%)', zIndex: 1050 }}>
                            <div className="d-flex flex-column h-100 overflow-visible">
                                <div className="d-flex justify-content-between align-items-center mb-5 overflow-visible">
                                <a href="#" className="navbar-brand d-inline-flex me-0 align-items-center gap-2 justify-content-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentcolor" xmlns="http://www.w3.org/2000/svg" className="text-white">
                                        <path d="M0 1.5C0 1.10218 0.158035 0.720644 0.43934 0.43934C0.720644 0.158035 1.10218 0 1.5 0L9 0C9.39782 0 9.77936 0.158035 10.0607 0.43934C10.342 0.720644 10.5 1.10218 10.5 1.5V22.5C10.5 22.8978 10.342 23.2794 10.0607 23.5607C9.77936 23.842 9.39782 24 9 24H1.5C1.10218 24 0.720644 23.842 0.43934 23.5607C0.158035 23.2794 0 22.8978 0 22.5V1.5ZM13.5 1.5C13.5 1.10218 13.658 0.720644 13.9393 0.43934C14.2206 0.158035 14.6022 0 15 0L22.5 0C22.8978 0 23.2794 0.158035 23.5607 0.43934C23.842 0.720644 24 1.10218 24 1.5V9C24 9.39782 23.842 9.77936 23.5607 10.0607C23.2794 10.342 22.8978 10.5 22.5 10.5H15C14.6022 10.5 14.2206 10.342 13.9393 10.0607C13.658 9.77936 13.5 9.39782 13.5 9V1.5ZM13.5 15C13.5 14.6022 13.658 14.2206 13.9393 13.9393C14.2206 13.658 14.6022 13.5 15 13.5H22.5C22.8978 13.5 23.2794 13.658 23.5607 13.9393C23.842 14.2206 24 14.6022 24 15V22.5C24 22.8978 23.842 23.2794 23.5607 23.5607C23.2794 23.842 22.8978 24 22.5 24H15C14.6022 24 14.2206 23.842 13.9393 23.5607C13.658 23.2794 13.5 22.8978 13.5 22.5V15Z" class="logo-icon st-hover"></path>
                                    </svg>
                                <span className="text-white fs-2 fw-semibold">O.k <span className="fw-semibold fs-2 text-primary">Folio</span></span>
                                </a>
                                <button className="btn text-white rounded-pill bg-primary" onClick={() => setIsOpen(false)}>✕</button>
                                </div>

                                <ul className="nav flex-column gap-5 overflow-visible">
                                <li className="nav-item list-unstyled d-inline-flex m-0">
                                    <NavLink to='/Home'>
                                            {({isActive}) => (
                                                <motion.span  whileHover={{backgroundColor : "#0E1018", color : "white", padding : "20px"}} animate={{backgroundColor : isActive ? '#0E1018' : 'transparent', color : isActive  ? 'white' : '#8790a7', padding : isActive ? '20px' : '0px'}} transition={{duration : 0.2}} className="rounded-4 d-inline-flex gap-2 align-items-center fw-semibold" aria-current="page"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                                                <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z"/>
                                                </svg>Home
                                                </motion.span>
                                            )}
                                    </NavLink>
                                </li>
                                <li className="nav-item list-unstyled d-inline-flex m-0">
                                    <NavLink to='/About'>
                                            {({isActive}) => (
                                                <motion.span  whileHover={{backgroundColor : "#0E1018", color : "white", padding : "20px"}} animate={{backgroundColor : isActive ? '#0E1018' : 'transparent', color : isActive  ? 'white' : '#8790a7', padding : isActive ? '20px' : '0px'}} transition={{duration : 0.2}} className="nav-link rounded-4 d-inline-flex gap-2 align-items-center fw-semibold" aria-current="page" style={{color : "#8790a7"}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-circle-user-icon lucide-circle-user"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="10" r="3"/><path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/></svg>
                                                About
                                                </motion.span>
                                            )}
                                    </NavLink>
                                </li>  
                                <li className="nav-item list-unstyled d-inline-flex m-0">
                                    <NavLink to='/Work'>
                                            {({isActive}) => (
                                                <motion.span  whileHover={{backgroundColor : "#0E1018", color : "white", padding : "20px"}} animate={{backgroundColor : isActive ? '#0E1018' : 'transparent', color : isActive  ? 'white' : '#8790a7', padding : isActive ? '20px' : '0px'}} transition={{duration : 0.2}} className="nav-link rounded-4 d-inline-flex gap-2 align-items-center fw-semibold" aria-current="page" style={{color : "#8790a7"}}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-waypoints-icon lucide-waypoints"><path d="m10.586 5.414-5.172 5.172"/><path d="m18.586 13.414-5.172 5.172"/><path d="M6 12h12"/><circle cx="12" cy="20" r="2"/><circle cx="12" cy="4" r="2"/><circle cx="20" cy="12" r="2"/><circle cx="4" cy="12" r="2"/></svg> 
                                                Work
                                                </motion.span>
                                            )}
                                    </NavLink>
                                </li>   
                                <li className="nav-item list-unstyled d-inline-flex m-0">
                                    <NavLink to='/Contact'>
                                            {({isActive}) => (
                                                <motion.span  whileHover={{backgroundColor : "#0E1018", color : "white", padding : "20px"}} animate={{backgroundColor : isActive ? '#0E1018' : 'transparent', color : isActive  ? 'white' : '#8790a7', padding : isActive ? '20px' : '0px'}} transition={{duration : 0.2}} className="nav-link rounded-4 d-inline-flex gap-2 align-items-center fw-semibold" aria-current="page" style={{color : "#8790a7"}}> <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>
                                                Contact
                                                </motion.span>
                                            )}
                                    </NavLink>   
                                </li>  
                                </ul>
                                <div className="d-block mt-5">     
                                <NavLink to='/Contact'>
                                    <motion.button className="btn text-white border-0 py-3 px-4 d-inline-flex gap-2" whileTap={{backgroundColor : "#0D6EFD"}} transition={{duration : 0, ease : easeInOut}} style={{backgroundColor : "#0E1018"}}>
                                    Download CV <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-trending-up-icon lucide-trending-up"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg>
                                    </motion.button>
                                </NavLink>
                                </div>
                            </div>
                        </motion.div>
                    </section>
            </header>
        </div>
    )
}