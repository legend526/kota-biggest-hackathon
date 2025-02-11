import React, { useEffect, useRef, useState } from 'react';
import '../Styles/AnimatedTransition.css'; 
import Home from './Home';

const AnimatedTransition = ({ onAnimationComplete }) => { 
    const [showNewPage, setShowNewPage] = useState(false);
    const audioRef = useRef(null); // Store the audio instance

    useEffect(() => {
        // Delay audio start by 1 second
        const audioStartTimeout = setTimeout(() => {
            audioRef.current = new Audio('/musicIntro.mp3'); // Adjust path if needed
            audioRef.current.play().catch(error => console.error("Audio play error:", error));

            // Stop audio after 2 seconds
            setTimeout(() => {
                if (audioRef.current) {
                    audioRef.current.pause();
                    audioRef.current.currentTime = 0; // Reset audio to the beginning
                }
            }, 5500);
        }, 2000);

        const animationTimeout = setTimeout(() => {
            setShowNewPage(true);
            onAnimationComplete();
        }, 8000);

        return () => {
            clearTimeout(audioStartTimeout);
            clearTimeout(animationTimeout);

            // Cleanup: Stop the music if the component unmounts early
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current.currentTime = 0;
            }
        };
    }, [onAnimationComplete]);

    return (
        <div className='ayush'>
            <div className='ayush' id="ui">
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    <div className="text ayush">Hack The Chain 3.0</div>
                    
                     
                    
            </div>
            {showNewPage && <Home />}
        </div>
    );
};

export default AnimatedTransition;
