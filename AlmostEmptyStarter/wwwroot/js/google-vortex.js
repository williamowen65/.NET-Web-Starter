
/*
William Owen - 1/13/2025
Animation logic for vortex
*/

console.log("Google Vortex Script loaded")

document.addEventListener("DOMContentLoaded", googleVortex)

const REPEAT_AFTER_MS = 1000
function googleVortex() {
    // Select all elements
    const allElem = Array.from(document.querySelector('#google-page').querySelectorAll("*:not(.no-vortex)"))

    // Get the center of the screen
    const screenWidth = (window.innerWidth / 2);
    const screenHeight = (window.innerHeight / 2)

    allElem.forEach((el, i) => {

        // setup animation
        const elemAnimations = [
            { transform: "rotate(0deg) translateX(0)" },


        ]
        const elemTiming = {
            duration: 20000,
            //iterations: Infinity,
            easing: 'ease-in-out', // Apply easing
        };

        const numSpeedVariations = 5;
        const mod = i % numSpeedVariations

        switch (mod) {
            case 0: {
                elemTiming.duration = 10000; // Faster animation
                break;
            }
            case 1: {
                elemTiming.duration = 15000; // Medium speed animation
                break;
            }
            case 2: {
                elemTiming.duration = 20000; // Default speed animation
                break;
            }
            case 3: {
                elemTiming.duration = 25000; // Slower animation
                break;
            }
            case 4: {
                elemTiming.duration = 30000; // Slowest animation
                break;
            }
            default:
                break;
        }

        switch (mod % 2) {
            case 0: {
                // rotate right
                elemAnimations.push({ transform: "rotate(360deg) translateX(0)" })
                break;
            }
            case 1: {
                // rotate left
                elemAnimations.push({ transform: "rotate(-360deg) translateX(0)" })
                break;
            }
        }

        //console.log({ elemAnimations, elemTiming })

        // Apply animation
        const animation = el.animate(elemAnimations, elemTiming)

        // Check when the last element finishes animating
        if (i === allElem.length - 1) {
            animation.onfinish = () => {
                console.log("Last element finished animating")
                // Add any additional actions here
                setTimeout(() => {
                    googleVortex()
                }, REPEAT_AFTER_MS)
            }
        }
    })

}
