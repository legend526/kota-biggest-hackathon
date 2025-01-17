import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';
import FAQs from './Components/FAQs';
import Home from './Components/Home';
import Sponsors from './Components/Sponsors' ;
import About from './Components/About';
import Prizes from './Components/Prizes.jsx';
import Timeline from './Components/Timeline.jsx';
import Stats from "./Components/Stats.jsx";
import Ending from "./Components/Ending.jsx";
import OurTeam from './Components/OurTeam.jsx';

import './App.css';
import AnimatedTransition from './Components/AnimatedTransition';
import HamburgerMenu from './Components/HamBurgerMenu.jsx';

function App() {
    return (
        <div>
            <ScreenOpen />
        </div>
    );
}

function ScreenOpen() {
    const [isHomeVisible, setIsHomeVisible] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 935);

    useEffect(() => {
        const hasAnimationPlayed = sessionStorage.getItem('animationsPlayed');
        if (!hasAnimationPlayed) {
            setIsHomeVisible(false);
        } else {
            setIsHomeVisible(true);
        }
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 935);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleScreenOpen = () => {
        sessionStorage.setItem('animationPlayed', 'true');
        setIsHomeVisible(true);
    };

    return (
        <div>
            <div className="image-background"></div> {/* Static background */}
            
            {isHomeVisible ? (
                <div className="content">
                    {isSmallScreen ? <HamburgerMenu /> : <Navbar />}
                    <section id="Home">
                        <Home />
                    </section>
                    <section id="about">
                        <About />
                    </section>
                    <section id="timeline">
                        <Timeline />
                    </section>
                    <section id="stats1">
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
                    <section id="FAQs">
                        <FAQs />
                    </section>
                    <section id="contact">
                        <Ending />
                    </section>
                </div>
            ) : (
                <div className="text-slicer">
                    <AnimatedTransition onAnimationComplete={handleScreenOpen} />
                </div>
            )}
        </div>
    );
}

export default App;
