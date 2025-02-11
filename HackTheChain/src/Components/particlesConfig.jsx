const particlesConfig = {
    particles: {
        number: {
            value: 100, // Reduced for better performance
            density: {
                enable: true,
                value_area: 1000,
            },
        },
        color: {
            value: ["#00ff00"], // Cyber/tech colors
        },
        shape: {
            type: ["circle"], // Multiple shapes for variety
            stroke: {
                width: 1,
                color: "#",
            },
            polygon: {
                nb_sides: 6, // Hexagonal shapes
            },
        },
        opacity: {
            value: 0.8,
            random: true,
            anim: {
                enable: true,   
                speed: 1.5,
                opacity_min: 0.1,
                sync: false,
            },
        },
        size: {
            value: 2,
            random: true,
            anim: {
                enable: true,
                speed: 6,
                size_min: 0.1,
                sync: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00ff00", // Matrix-style connections
            opacity: 0.5,
            width: 1,
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: true,
            straight: false,
            out_mode: "bounce", // Particles bounce off edges
            attract: {
                enable: true,
                rotateX: 1200,
                rotateY: 1200,
            },
        },
    },
    interactivity: {
        detect_on: "window",
        events: {
            onhover: {
                enable: true,
                mode: "grab",
            },
            onclick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
        modes: {
            grab: {
                distance: 200,
                line_linked: {
                    opacity: 1,
                },
            },
            bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8,
                speed: 3,
            },
            repulse: {
                distance: 200,
                duration: 0.4,
            },
            push: {
                particles_nb: 4,
            },
            remove: {
                particles_nb: 2,
            },
        },
    },
    retina_detect: true,
  };
  
  export default particlesConfig;