
import React, { useEffect, useState } from 'react';
import '../Styles/AnimatedTransition.css'; 
import Home from './Home';

const AnimatedTransition = ({ onAnimationComplete }) => { 
    const [showNewPage, setShowNewPage] = useState(false);

    useEffect(() => {
        const animationTimeout = setTimeout(() => {
            setShowNewPage(true);
            onAnimationComplete();
        }, 8000);

        return () => clearTimeout(animationTimeout);
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

