import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { CounterItem } from "./CounterItem";
import { animate } from "animejs";
import { useEffect } from "react";

const MotionLink = motion(Link)

export const About = () => {
    const [isCopied, setIsCopied] = useState(false);
        const email = 'ozairk.work@gmail.com';
    
        const handleCopy = async () => {
            try {
                await navigator.clipboard.writeText(email)
    
                setIsCopied(true)
                setTimeout(() => setIsCopied(false), 2000);
            } catch(err) {
                console.log("failed to copy", err)
            }
        };

        const OzairName = "Ozair Khan";
        
            const splitName = OzairName.split("").map((char, index) => (
            <span key={index} className="name-letter" style={{ display: 'inline-block' }}>
              {char === " " ? "\u00A0" : char}
            </span>
          ));
        
          useEffect(() => {
                animate('.name-letter', {
                    rotateX: [-90, 0],
                    translateZ: [100, 0],
                    opacity: [0, 1],
                    perspective: [500, 500],
                    ease: 'out(3)',
                    duration: 1000,
                    delay: (el, i) => i * 100
                });
            }, []);
        
            useEffect(() => {
            animate('.card', {
                opacity: [0, 1],
                scale: [0.85, 1],
                delay: (el, i) => i * 400,
                ease: 'outExpo',
                duration: 2000
            });
            }, []);
    return (
        <>
            <div className="mt-4">
                <div className="container p-0">
                    <div className="row g-4 justify-content-center">
                        <motion.div animate={{x : [-500, 0], opacity : [0, 0.5, 1]}} transition={{duration : 1, type : 'spring'}} whileHover={{scale : 1.03}} whileTap={{scale : 1.03}} className="col-xl-4 col-md-10 text-break">
                            <div className="card bg-black rounded-4 sticky-top" style={{top : '110px'}}>
                                <div className="card-body">
                                    <div class="card-header border-0 p-5 rounded-top position-relative overflow-hidden bg-card d-flex align-items-center justify-content-center" style={{height : "320px"}}>
                                        <div class="shape-1"></div>
                                        <div class="shape-2"></div>
                                        
                                        <div class="glass-plate d-flex align-items-center justify-content-center shadow-lg">
                                            <span class="text-white fw-semibold display-6" style={{letterSpacing: "5px"}}>O.K</span>
                                        </div>
                                    </div>
                                    <div className="card-title mt-4 fs-3 text-white">
                                        <p className="fw-bold">{splitName}</p>
                                    </div>
                                    <div className="card-text mt-2 pe-5">
                                        <p style={{color : "rgba(240, 242, 245, 0.7)"}}>A <span className="fw-bold text-white">Front End Developer</span> & <span className="text-white fw-bold">Game Developer</span> passionate about building interactive web and game experiences</p>
                                    </div>
                                    <div className="card-footer p-0 d-flex flex-wrap gap-3">
                                        <MotionLink to='/Contact' whileHover={{backgroundColor : "#1A1F2C"}} transition={{duration : 0}} className="btn border-0 p-3 rounded-3 d-inline-flex align-items-center gap-2 text-white fw-bold" style={{backgroundColor : "#0D6EFD"}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-trending-up-icon lucide-trending-up"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg>
                                            Contact
                                        </MotionLink>
                                        <motion.button whileHover={{backgroundColor : "#0D6EFD"}} transition={{duration : 0}} className="btn border-1 p-3 d-inline-flex align-items-center gap-2 text-white" style={{borderColor : "#1A1F2C"}} onClick={handleCopy}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>
                                            {isCopied ? 'Email Copied' : 'Copy Email'}
                                        </motion.button>
                                        {isCopied && (
                                            <motion.span animate={{y : [0, -10, 0]}} transition={{type : "tween"}} className="badge position-absolute d-none d-lg-flex d-md-flex z-3 fw-bold fs-5" style={{right : '110px', bottom : '70px', backgroundColor : "#1A1F2C"}}>Copied</motion.span>
                                        )}
                                    </div>
                                    <div className="card-footer p-0 mt-2 py-3">
                                        <ul className="p-0 m-0 list-row d-flex flex-wrap gap-3">
                                            <li className="list-unstyled">
                                                <motion.a href="https://www.facebook.com/ozair.khan.352476" target="_blank" whileHover={{backgroundColor : "#0D6EFD", color : "white"}} transition={{duration : 0}} className="btn border-2" style={{color : "#64748B", backgroundColor : "#0E1018"}}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                                                </motion.a>
                                            </li>
                                            <li className="list-unstyled">
                                                <motion.a href="https://github.com/Ozair-Khan1" target="_blank" whileHover={{backgroundColor : "#0D6EFD", color : "white"}} transition={{duration : 0}} className="btn border-2" style={{color : "#64748B", backgroundColor : "#0E1018"}}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                                                </motion.a>
                                            </li>
                                            <li className="list-unstyled">
                                                <motion.a href="https://www.instagram.com/ozair_nvm/" target="_blank" whileHover={{backgroundColor : "#0D6EFD", color : "white"}} transition={{duration : 0}} className="btn border-2" style={{color : "#64748B", backgroundColor : "#0E1018"}}>
                                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                                                </motion.a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        <div className="col-xl-8">
                            <div className="card context-card bg-black rounded-4">
                                <div className="card-body p-5">
                                    <div className="top-info d-flex justify-content-between flex-column-reverse flex-lg-row flex-xl-row gap-4 gap-lg-0 gap-xl-0">
                                        <div className="info-text">
                                            <h1 className="main-title text-white fw-bold">Hi, This is <span className="text-primary">Ozair Khan</span>
                                            <br />
                                            <span className="fs-4">Frontend Developer & Game Developer</span>
                                            </h1>
                                            <p className="fw-bold fs-4 text-wrap w-100 m-0" style={{color : '#f0f2f5b3'}}>I’m a passionate developer building interactive <span className="text-white fw-bolder">Games</span> and modern <span className="text-white fw-bolder">Websites</span>. I turn creative ideas into functional digital experiences, focusing on clean code, performance, and user-friendly design.</p>
                                        </div>
                                        <div className="d-block mb-3">
                                            <span className="p-3 fw-semibold text-primary d-flex align-items-center rounded-3 text-center hire-padding" style={{backgroundColor : '#0E1018'}}><i className="spinner-grow  me-2" style={{width : '8px', height : '8px'}} role="status"></i> Available For Hire</span>
                                        </div>
                                    </div>
                                    <div className="d-flex justify-content-between mt-5 flex-column flex-lg-row flex-xl-row align-items-start align-items-lg-center align-items-xl-center">
                                        <div className="counter-area d-flex flex-column flex-lg-row flex-xl-row gap-5">
                                            <CounterItem number={'2+'} label={'Websites Built'}/>
                                            <CounterItem number={'3+'} label={'Games Developed'}/>
                                            <CounterItem number={'6+'} label={'Projects Deployed'}/>
                                        </div>
                                        <div className="circle-img position-relative me-4 mt-5 mt-lg-0 mt-xl-0 d-none d-lg-block d-xl-block">
                                            <motion.img animate={{rotate : 360}} transition={{repeat : Infinity, duration : 5, ease : 'linear', delay : 0}} src="/assets\circle-text-light.svg" alt="Image" className="position-absolute text-white opacity-100" style={{width : '96px', height : '96px', top : '-12px', left : '-13px'}}/>
                                            <span className="text-white fw-bold d-flex align-items-center justify-content-center bg-primary rounded-pill" style={{width : '70px', height : '70px'}}><svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                                            </svg></span>
                                        </div>
                                    </div>
                                    <div className="circle-img position-relative me-4 mt-5 mt-lg-0 mt-xl-0 d-flex d-lg-none d-xl-none align-items-center justify-content-center">
                                        <motion.img animate={{rotate : 360}} transition={{repeat : Infinity, duration : 5, ease : 'linear', delay : 0}} src="/assets\circle-text-light.svg" alt="Image" className="position-absolute text-white opacity-100" style={{width : '96px', height : '96px'}}/>
                                        <span className="text-white fw-bold d-flex align-items-center justify-content-center bg-primary rounded-pill" style={{width : '70px', height : '70px'}}><svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" fill="currentColor" class="bi bi-arrow-down" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1"/>
                                        </svg></span>
                                    </div>
                                    <div className="technology-sec mt-5">
                                        <h1 className="m-0 text-white">Technoloies I Work With</h1>
                                        <div className="web-sec mt-3">
                                            <h3 className="text-white mt-4">Front End Developement</h3>
                                            <div className="items-container d-flex flex-wrap gap-4 mt-4">
                                                <div className="item rounded-4 d-flex align-items-center justify-content-center" style={{width : '80px', height : '80px', backgroundColor : '#0E1018'}}>
                                                    <img src="/assets/Html-Logo-trans-2.png" alt="Html" style={{width : '48px', height : '48px'}}/>
                                                </div>  
                                                <div className="item rounded-4 d-flex align-items-center justify-content-center" style={{width : '80px', height : '80px', backgroundColor : '#0E1018'}}>
                                                    <img src="/assets/Css logo 3.png" alt="Css" style={{width : '48px', height : '48px'}}/>
                                                </div> 
                                                <div className="item rounded-4 d-flex align-items-center justify-content-center" style={{width : '80px', height : '80px', backgroundColor : '#0E1018'}}>
                                                    <img src="/assets/JavaScript Logo.png" alt="JS" style={{width : '48px', height : '48px'}}/>
                                                </div>
                                                <div className="item rounded-4 d-flex align-items-center justify-content-center" style={{width : '80px', height : '80px', backgroundColor : '#0E1018'}}>
                                                    <img src="/assets/React-icon.svg.png" alt="React" style={{width : '48px', height : '48px'}}/>
                                                </div>
                                                <div className="item rounded-4 d-flex align-items-center justify-content-center" style={{width : '80px', height : '80px', backgroundColor : '#0E1018'}}>
                                                    <img src="/assets/Github Logo 3.png" alt="Github" className="rounded-pill" style={{width : '48px', height : '48px'}}/>
                                                </div>
                                                <div className="item rounded-4 d-flex align-items-center justify-content-center" style={{width : '80px', height : '80px', backgroundColor : '#0E1018'}}>
                                                    <img src="/assets/vercel logo 2.png" alt="Vercel" className="rounded-pill" style={{width : '48px', height : '48px'}}/>
                                                </div>
                                                <div className="item rounded-4 d-flex align-items-center justify-content-center" style={{width : '80px', height : '80px', backgroundColor : '#0E1018'}}>
                                                    <img src="/assets/Bootstrap icon.png" alt="Bootstrap" className="rounded-pill" style={{width : '48px', height : '48px'}}/>
                                                </div>
                                            </div>
                                            <h3 className="text-white mt-5">2D Game Developement</h3>
                                            <div className="items-container d-flex flex-wrap gap-4 mt-4">
                                                <div className="item rounded-4 d-flex align-items-center justify-content-center" style={{width : '80px', height : '80px', backgroundColor : '#0E1018'}}>
                                                    <img src="/assets/Godot icon.svg" alt="Html" style={{width : '48px', height : '48px'}}/>
                                                </div>  
                                                <div className="item rounded-4 d-flex align-items-center justify-content-center" style={{width : '80px', height : '80px', backgroundColor : '#0E1018'}}>
                                                    <img src="/assets/Gdevelop icon.jpg" alt="Html" style={{width : '48px', height : '48px'}}/>
                                                </div>  
                                            </div>
                                        </div>
                                    </div>
                                    <div className="work-together mt-5">
                                        <div className="card rounded-4" style={{backgroundColor : '#0E1018'}}>
                                            <div className="card-body">
                                                <div className="overflow-hidden p-2">
                                                    <motion.div animate={{x : ['98%', '-100%']}} transition={{repeat : Infinity,  duration : 8, repeatType : 'loop',  ease : 'linear', delay : 0}} className="card-slider overflow-hidden d-flex align-items-center gap-4 text-nowrap" style={{height : '46px', width : '1400px'}}>
                                                        <div className="slider-item d-flex align-items-center gap-4">
                                                            <Link to='/Contact' className="text-decoration-none"><motion.span  whileHover={{color : 'white'}} href="" className="m-0 fs-3 fw-bold text-decoration-none" style={{color : '#576076'}}>Lets Work Together</motion.span></Link>
                                                            <Link to='/Contact' className="text-decoration-none"><motion.span  whileHover={{color : 'white'}} href="" className="m-0 fs-3 fw-bold text-decoration-none" style={{color : '#576076'}}>Lets Work Together</motion.span></Link>
                                                            <Link to='/Contact' className="text-decoration-none"><motion.span  whileHover={{color : 'white'}} href="" className="m-0 fs-3 fw-bold text-decoration-none" style={{color : '#576076'}}>Lets Work Together</motion.span></Link>
                                                            <Link to='/Contact' className="text-decoration-none"><motion.span  whileHover={{color : 'white'}} href="" className="m-0 fs-3 fw-bold text-decoration-none" style={{color : '#576076'}}>Lets Work Together</motion.span></Link>
                                                            <Link to='/Contact' className="text-decoration-none"><motion.span  whileHover={{color : 'white'}} href="" className="m-0 fs-3 fw-bold text-decoration-none" style={{color : '#576076'}}>Lets Work Together</motion.span></Link>
                                                        </div>
                                                    </motion.div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}