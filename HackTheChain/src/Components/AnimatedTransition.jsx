import React, { useEffect, useState } from 'react';
import '../Styles/AnimatedTransition.css'; 
import Home from './Home';

const AnimatedTransition = ({ onAnimationComplete }) => { 
    const [showNewPage, setShowNewPage] = useState(false);
    const [flickering, setFlickering] = useState(false);

    useEffect(() => {
        const animationTimeout = setTimeout(() => {
            // setFlickering(true);
            // const flickerInterval = setInterval(() => {
            //     setFlickering(prev => !prev);
            // }, 200);

            // setTimeout(() => {
            //     clearInterval(flickerInterval);
            //     setFlickering(false);
            //     document.getElementById("ui").style.opacity = 0;

                setTimeout(() => {
                    setShowNewPage(true);
                    onAnimationComplete(); 
                }, 1000);


        }, 8000);

        return () => clearTimeout(animationTimeout);
    }, [onAnimationComplete]);

    return (
        <div className='ayush'>
            <div className='ayush' id="ui" style={{ opacity: flickering ? 0.5 : 1 }}>
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

// const NewPage = () => {
//     return (
//         <div id="new-page">
//             <h1>Welcome to the New Page!</h1>
//             <p>This is the content of the new page.</p>
//         </div>
//     );
// };

export default AnimatedTransition;
