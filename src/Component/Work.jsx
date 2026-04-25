import { motion } from "framer-motion"
import { useState } from "react";
import { WorkItems } from "./WorkItems";
import { BrotatoGame } from "./Brotato";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { animate } from "animejs";


const MotionLink = motion(Link)

export const Work = () => {
    const websiteDetails = [
        {
            image: '/assets/StarBucksImg.png',
            link: 'https://star-bucks-clone-two.vercel.app/',
            title: 'Starbucks Website Clone',
            text: 'Starbucks | Full-Stack',
            overview: 'A visually appealing and responsive website clone of the Starbucks website.',
            techStack: 'React, Tailwind CSS, Node JS, Express, MongoDB.',
            highlight1: "Re-engineered the application from an Appwrite-managed backend to a custom REST API using Node.js and Express for enhanced server-side control.",
            highlight2: "Developed a robust authentication system using JWT and HTTP-only cookies with SameSite=None and Secure flags for reliable session management across Vercel deployments.",
            highlight3: "Built a responsive, component-driven interface with React and Bootstrap, maintaining high performance and cross-device consistency.",
            highlight4: "Managed user data and persistence using MongoDB and Mongoose, ensuring a scalable and efficient data structure."
        },
        {
            image: '/assets/PrimeInspireImg.png',
            link: 'https://prime-inspire-clone.vercel.app/',
            title: 'Prime Inspire Website Clone',
            text: 'Prime Inspire | Full-Stack',
            overview: 'A comprehensive full-stack recreation of the Prime Inspire platform.',
            techStack: 'React, Bootstrap, Node JS, Express, MongoDB.',
            highlight1: "Re-engineered the application from an Appwrite-managed backend to a custom REST API using Node.js and Express for enhanced server-side control.",
            highlight2: "Developed a robust authentication system using JWT and HTTP-only cookies with SameSite=None and Secure flags for reliable session management across Vercel deployments.",
            highlight3: "Built a responsive, component-driven interface with React and Bootstrap, maintaining high performance and cross-device consistency.",
            highlight4: "Managed user data and persistence using MongoDB and Mongoose, ensuring a scalable and efficient data structure."
        },
    ];

    const GameDetails = [
        {
            image: '/assets/Jolly Img.png',
            link: '/assets/Jolly/Jolly-Roger.html?v=1.3',
            title: 'Jolly 2D Pirate Game',
            text: 'Jolly Roger | Godot',
            overview: 'A vibrant, 2D pixel-art pirate adventure game built from the ground up.',
            techStack: 'Godot Engine, GDScript',
            highlight: "A 2D pixel-art game developed in the Godot Engine. This project highlights my ability to manage complex application states, handle 2D physics, and build interactive, user-friendly main menus and scene transitions outside of traditional web environments."
        },
        {
            image: '/assets/Brotato Img.png',
            link: '/assets/Brotato/Brotato.html?v=1.3',
            title: 'Brotato 2D Wave Game',
            text: 'Brotato | Godot',
            overview: 'A fast-paced, top-down 2D wave survival shooter.',
            techStack: 'Godot Engine, GDScript',
            highlight: "A top-down, arena-survival game featuring wave-based combat. Built with Godot, this project showcases advanced logic handling, including enemy AI pathfinding, real-time collision detection, and dynamic UI state management for health and scoring."
        },
    ];


    const [isCopied, setIsCopied] = useState(false);
    const email = 'ozairk.work@gmail.com';

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(email)

            setIsCopied(true)
            setTimeout(() => setIsCopied(false), 2000);
        } catch (err) {
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
                        <div className="col-xl-4 col-md-10 text-break">
                            <div className="card-sticky">
                                <motion.div animate={{ x: [-500, 0], opacity: [0, 0.5, 1] }} transition={{ duration: 1, type: 'spring' }} whileHover={{ scale: 1.01 }} whileTap={{ scale: 1.03 }}>
                                    <div className="card bg-black rounded-4">
                                        <div className="card-body">
                                            <div class="card-header border-0 p-5 rounded-top position-relative overflow-hidden bg-card d-flex align-items-center justify-content-center" style={{ height: "320px" }}>
                                                <div class="shape-1"></div>
                                                <div class="shape-2"></div>

                                                <div class="glass-plate d-flex align-items-center justify-content-center shadow-lg">
                                                    <span class="text-white fw-semibold display-6" style={{ letterSpacing: "5px" }}>O.K</span>
                                                </div>
                                            </div>
                                            <div className="card-title mt-4 fs-3 text-white">
                                                <p className="fw-bold">{splitName}</p>
                                            </div>
                                            <div className="card-text mt-2 pe-5">
                                                <p style={{ color: "rgba(240, 242, 245, 0.7)" }}>A <span className="fw-bold text-white">MERN Stack Developer</span> & <span className="text-white fw-bold">Game Developer</span> passionate about building interactive web and game experiences</p>
                                            </div>
                                            <div className="card-footer p-0 d-flex flex-wrap gap-3">
                                                <MotionLink to='/Contact' whileHover={{ backgroundColor: "#1A1F2C" }} transition={{ duration: 0 }} className="btn border-0 p-3 rounded-3 d-inline-flex align-items-center gap-2 text-white fw-bold" style={{ backgroundColor: "#0D6EFD" }}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-trending-up-icon lucide-trending-up"><path d="M16 7h6v6" /><path d="m22 7-8.5 8.5-5-5L2 17" /></svg>
                                                    Contact
                                                </MotionLink>
                                                <motion.button whileHover={{ backgroundColor: "#0D6EFD" }} transition={{ duration: 0 }} className="btn border-1 p-3 d-inline-flex align-items-center gap-2 text-white" style={{ borderColor: "#1A1F2C" }} onClick={handleCopy}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-copy-icon lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2" /><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" /></svg>
                                                    {isCopied ? 'Email Copied' : 'Copy Email'}
                                                </motion.button>
                                                {isCopied && (
                                                    <motion.span animate={{ y: [0, -10, 0] }} transition={{ type: "tween" }} className="badge position-absolute d-none d-lg-flex d-md-flex z-3 fw-bold fs-5" style={{ right: '110px', bottom: '70px', backgroundColor: "#1A1F2C" }}>Copied</motion.span>
                                                )}
                                            </div>
                                            <div className="card-footer p-0 mt-2 py-3">
                                                <ul className="p-0 m-0 list-row d-flex flex-wrap gap-3">
                                                    <li className="list-unstyled">
                                                        <motion.a href="https://www.facebook.com/ozair.khan.352476" target="_blank" whileHover={{ backgroundColor: "#0D6EFD", color: "white" }} transition={{ duration: 0 }} className="btn border-2" style={{ color: "#64748B", backgroundColor: "#0E1018" }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                                                        </motion.a>
                                                    </li>
                                                    <li className="list-unstyled">
                                                        <motion.a href="https://github.com/Ozair-Khan1" target="_blank" whileHover={{ backgroundColor: "#0D6EFD", color: "white" }} transition={{ duration: 0 }} className="btn border-2" style={{ color: "#64748B", backgroundColor: "#0E1018" }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-github-icon lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                                                        </motion.a>
                                                    </li>
                                                    <li className="list-unstyled">
                                                        <motion.a href="https://www.instagram.com/ozair_nvm/" target="_blank" whileHover={{ backgroundColor: "#0D6EFD", color: "white" }} transition={{ duration: 0 }} className="btn border-2" style={{ color: "#64748B", backgroundColor: "#0E1018" }}>
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" strokeLinejoin="round" class="lucide lucide-instagram-icon lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                                                        </motion.a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="card context-card bg-black rounded-4">
                                <div className="card-body p-5">
                                    <div className="top-info">
                                        <div className="text d-flex flex-column gap-2">
                                            <h1 className="text-white fw-semibold">Check Out My <span className="text-primary">Projects</span></h1>
                                            <p className="fs-5" style={{ color: 'rgba(240, 242, 245, 0.7)' }}>I am a Web Developer passionate about building robust, end-to-end web applications. I combine my expertise in MERN stack architecture with my game development background to create highly interactive, scalable, and engaging user experiences.</p>
                                        </div>
                                    </div>
                                    <div className="row g-4 mt-2">
                                        <h2 className="text-white">Web Application <span className="text-primary">Projects</span></h2>
                                        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className="col-lg-12">
                                            <div className="items">
                                                <div className="image">
                                                    <img src='/assets/Glimpse.png' alt="Image" className="img-fluid rounded-4" />
                                                </div>
                                                <div className="text d-flex flex-column flex-lg-row flex-xl-row gap-2 gap-lg-0 gap-xl-0 gap-md-0 justify-content-between p-4">
                                                    <div className="info d-flex flex-column">
                                                        <motion.a
                                                            href='https://glimpse-pearl.vercel.app/'
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
                                                                Glimpse
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
                                                        <p style={{ color: '#576076' }} className="fw-semibold m-0">Glimpse | Full-Stack Pictures Sharing Platform</p>
                                                        <div className="d-flex flex-column mt-2 gap-2 mb-3 mb-lg-0 mb-xl-0">
                                                            <p className="m-0" style={{ color: 'rgba(240, 242, 245, 0.7)' }}><span className="fw-semibold text-white">Overview: </span>A sophisticated, full-stack social ecosystem built to facilitate seamless visual storytelling. Glimpse enables users to share media, engage with a dynamic community, and experience real-time social interactions through a high-performance, responsive interface.</p>
                                                            <p className="m-0" style={{ color: 'rgba(240, 242, 245, 0.7)' }}><span className="fw-semibold text-white">Tech Stack: </span>Next JS, Tailwind CSS, Node JS, Express, MongoDB.</p>
                                                            <p className="m-0" style={{ color: 'rgba(240, 242, 245, 0.7)' }}><span className="fw-semibold text-white">Dynamic Content Engine: </span>Developed a multi-format content system supporting permanent posts and ephemeral "Stories," utilizing CSS scroll-snapping and optimized rendering for a fluid user experience.</p>
                                                            <p className="m-0" style={{ color: 'rgba(240, 242, 245, 0.7)' }}><span className="fw-semibold text-white">Complex Social Logic: </span>Engineered a scalable backend architecture to manage relational data, including bi-directional follow systems, interactive engagement (likes/comments), and personalized user feeds.</p>
                                                            <p className="m-0" style={{ color: 'rgba(240, 242, 245, 0.7)' }}><span className="fw-semibold text-white">End-to-End Security: </span>Implemented a robust authentication layer using JWT and HTTP-only cookies, ensuring secure session management and cross-origin data protection for cloud-based deployments.</p>
                                                            <p className="m-0" style={{ color: 'rgba(240, 242, 245, 0.7)' }}><span className="fw-semibold text-white">Adaptive UI/UX: </span>Crafted a "mobile-first" interface using Tailwind CSS, featuring a responsive navigation system and component-driven architecture that maintains high performance across all devices.</p>
                                                        </div>
                                                    </div>
                                                    <div className="visit w-50 d-inline-flex h-100 justify-content-start justify-content-lg-end justify-content-xl-end">
                                                        <motion.a href='https://glimpse-pearl.vercel.app/' target="_blank" whileHover={{ backgroundColor: '#0D6EFD' }} transition={{ duration: 0 }} className="btn border-0 p-3 text-white text-nowrap" style={{ backgroundColor: '#0E1018' }}>Visit Site
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-up-right-icon lucide-arrow-up-right"><path d="M7 7h10v10" /><path d="M7 17 17 7" /></svg>
                                                        </motion.a>
                                                    </div>
                                                </div>
                                            </div>
                                        </motion.div>
                                        {websiteDetails.map((item, index) => (
                                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className="col-lg-12" key={index}>
                                                <WorkItems
                                                    title={item.title}
                                                    text={item.text}
                                                    link={item.link}
                                                    image={item.image}
                                                    btnText={'Visit Site'}
                                                    overview={item.overview}
                                                    techStack={item.techStack}
                                                    highlight1={item.highlight1}
                                                    highlight2={item.highlight2}
                                                    highlight3={item.highlight3}
                                                    highlight4={item.highlight4}
                                                />
                                            </motion.div>
                                        ))}
                                        <h2 className="text-white">2D Game <span className="text-primary">Projects</span></h2>
                                        {GameDetails.map((item, index) => (
                                            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5 }} className="col-lg-12" key={index}>
                                                <BrotatoGame
                                                    title={item.title}
                                                    text={item.text}
                                                    link={item.link}
                                                    image={item.image}
                                                    overview={item.overview}
                                                    techStack={item.techStack}
                                                    highlight={item.highlight}
                                                />
                                            </motion.div>
                                        ))}
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