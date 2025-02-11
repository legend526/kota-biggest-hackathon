import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import FAQs from './Components/FAQs';
import Home from './Components/Home';
import Sponsors from './Components/Sponsors';
import About from './Components/About';
import Prizes from './Components/Prizes.jsx';
import Timeline from './Components/Timeline.jsx';
import Stats from "./Components/Stats.jsx";
import Ending from "./Components/Ending.jsx";
import OurTeam from './Components/OurTeam.jsx';
import VideoBackground from "./Components/VideoBackground.jsx";
import './App.css';
import AnimatedTransition from './Components/AnimatedTransition';
import HamburgerMenu from './Components/HamBurgerMenu.jsx';

import ParticlesComponent from './Components/ParticleComponent.jsx';




function App() {
    return (
        <div>
            <ScreenOpen />
            
        </div>
    );
}

function ScreenOpen() {
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 935);

    useEffect(() => {
        const hasAnimationPlayed = sessionStorage.getItem("animationPlayed");
        if (hasAnimationPlayed) {
            setIsAnimationComplete(true);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 935);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleAnimationComplete = () => {
        sessionStorage.setItem("animationPlayed", "true");
        setIsAnimationComplete(true);
    };

    return (
        <div>
            
            {!isAnimationComplete ? (
                <div className="text-slicer">
                    <AnimatedTransition onAnimationComplete={handleAnimationComplete} />
                </div>
            ) : (
                <div className="content">
 


                    <VideoBackground  />

                    <ParticlesComponent id = "particles"/>

                    
                    <div className="absolute opacity-40 bg-black z-1 min-h-full flex items-center justify-center w-screen">

                    </div>
                    {isSmallScreen ? <HamburgerMenu /> : <Navbar />}
                    <div className="overlay-content">

                        <section id="home" className="home-section">
                            <div className="home-content">
                            <ParticlesComponent id = "particles"/>
                                <Home />
                            </div>
                        </section>
                        <section id="about-us">
                            <About />
                        </section>
                        <section id="timeline">
                            <Timeline />
                        </section>
                        <section id="stats">
                            <Stats />
                        </section>
                        <section id="prizes">
                            <Prizes />
                        </section>
                        <section id="sponsors">
                            <Sponsors />
                        </section>
                        <section>
                            <OurTeam />
                        </section>
                        <section id="faqs">
                            <FAQs />
                        </section>
                        <section id="contact">
                            <Ending />
                        </section>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
