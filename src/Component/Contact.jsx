import { useState } from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { animate } from "animejs";

export const Contact = () => {

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

        const [status, setStatus] = useState('');
        const [error, setError] = useState({
            name : false,
            email : false,
            message : false
        });

        const handleInput = (e) => {
            const {name, value} = e.target;
            setError((prev) => ({
                ...prev,
                [name]: value.trim() === "",
            }));
        }

        const handleSubmit = async (e) => {
            e.preventDefault()
            const form = e.target
            const data = new FormData(form)

            const name = data.get('name');
            const email = data.get('email');
            const message = data.get('message');
            
            const newErrors = {
                name : name.length < 3,
                email : !email.includes('@'),
                message : message.length < 10
            };

            setError(newErrors);

            if (newErrors.name || newErrors.email || newErrors.message) {
                return
            }

            const response = await fetch('https://formspree.io/f/xqedgnzq', {
                method : 'POST',
                body : data,
                headers : { 'Accept': 'application/json' }
            });

            if(response.ok) {
                setStatus('SUCCESS');
                form.reset();
                setError({name : false, email : false, message : false})
            }
        }

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
                delay: (el, i) => i * 300,
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
                                        <motion.button whileHover={{backgroundColor : "#0E1018"}} transition={{duration : 0}} className="btn border-0 p-3 rounded-3 d-inline-flex align-items-center gap-2 text-white fw-bold" style={{backgroundColor : "#0D6EFD"}}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-trending-up-icon lucide-trending-up"><path d="M16 7h6v6"/><path d="m22 7-8.5 8.5-5-5L2 17"/></svg>
                                            Contact
                                        </motion.button>
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
                        <div className="col-lg-8">
                            <div className="card bg-black p-4">
                                <div className="card-body">
                                    <div className="card-title">
                                        <h1 className="text-white">Lets Work <span className="text-primary">Together</span></h1>
                                        <p className="fs-5" style={{color : 'rgba(240, 242, 245, 0.7)'}}>Feel free to reach out for job opportunities, collaborations, or project discussions.</p>
                                    </div>
                                    <div className="contact-area">
                                        <div className="form-area p-5" style={{backgroundColor : '#0E1018'}}>
                                            <form onSubmit={handleSubmit}>
                                                <div className="row g-4">
                                                    <div className="col-md-6">
                                                        <p className="mb-2 text-white fw-bold">Name</p>
                                                        <div className="form-floating">
                                                            <motion.input type="text" name="name" id="NameInput" placeholder="Name" onChange={handleInput} className={`form-control border-0 text-white bg-black ${error.name ? 'is-invalid' : ''}`}/>
                                                            <label htmlFor="NameInput" className="form-label text-white">Your Name</label>
                                                            {error.name && (
                                                                <span className="text-danger">Name Must Be At Least 3 Characters.</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p className="mb-2 text-white fw-bold">Email</p>
                                                        <div className="form-floating">
                                                            <motion.input type="email" name="email" id="EmailInput" placeholder="Name" onChange={handleInput} className={`form-control border-0 text-white bg-black ${error.email ? 'is-invalid' : ''}`}/>
                                                            <label htmlFor="EmailInput" className="form-label text-white">Your Email</label>
                                                            {error.email && (
                                                                <span className="text-danger">Please Add Your Email</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <p className="mb-2 text-white fw-bold">Subject</p>
                                                        <div className="form-floating">
                                                            <motion.input type="text" id="SubjectInput" placeholder="Name" className="form-control border-0 text-white bg-black"/>
                                                            <label htmlFor="SubjectInput" className="form-label text-white">Your Subject</label>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <p className="mb-2 text-white fw-bold">Subject</p>
                                                        <div className="form-floating">
                                                            <textarea id="MessageInput" name="message" placeholder="Your Message Here" onChange={handleInput} className={`form-control bg-black text-white border-0 ${error.message ? 'is-invalid' : ''}`} style={{height : '130px'}}></textarea>
                                                            <label htmlFor="MessageInput" >Your Message</label>
                                                            {error.message && (
                                                                <span className="text-danger">Please Write A Bit More!</span>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                        <button className="btn btn-primary w-100 d-inline-flex align-items-center justify-content-center">Submit 
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="ms-1 lucide lucide-send-horizontal-icon lucide-send-horizontal"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"/><path d="M6 12h16"/></svg>
                                                        </button>
                                                    </div>
                                                    {status === 'SUCCESS' && (
                                                        <motion.div animate={{y : [-300, 0]}} className={`modal fade mt-0 show ${status === 'SUCCESS' ? 'd-block' : 'd-none'}`} tabIndex='-1' aria-hidden='true' style={{backdropFilter : 'blur(8px)'}}>
                                                        <div class="modal-dialog modal-dialog-centered">
                                                            <div class="modal-content bg-black">
                                                            <div class="modal-header border-0">
                                                                <h1 class="modal-title fs-2 fw-semibold text-white">O.k <span className="text-primary">Folio</span></h1>
                                                            </div>
                                                            <div class="modal-body text-white fs-5">
                                                                Thank You For Contacting Me ! 
                                                            </div>
                                                            <div class="modal-footer border-0">
                                                                <motion.button whileHover={{backgroundColor : '#0D6EFD'}} whileTap={{backgroundColor : '#0D6EFD'}} transition={{duration : 0}} type="button" class="btn w-100 text-white fw-bold" style={{backgroundColor : '#0E1018'}} onClick={() => setStatus('')}>Close</motion.button>
                                                            </div>
                                                            </div>
                                                        </div>
                                                    </motion.div>
                                                    )}
                                                </div>
                                            </form>
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