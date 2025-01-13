

/*

I once created a dummy project while messing 
around with writing Google Chrome Extensions
I came up with a simple script that grabbed elements from the screen
and animated with them.

I don't want you to need to have the chrome ext to experience it though.
So this is an example.

The Vortex is simply grabing EVERY element and 
iterates over them and performs a mod check

The mod number can be however many various of speeds you need
For purpose of this, I choose 4-5 different speeds.

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

    //// add a dot to center point
    //const centerDot = document.createElement('div');
    //centerDot.style.position = 'absolute';
    //centerDot.style.width = '10px';
    //centerDot.style.height = '10px';
    //centerDot.style.backgroundColor = 'red';
    //centerDot.style.borderRadius = '50%';
    //centerDot.style.left = `${screenWidth - 5}px`;
    //centerDot.style.top = `${screenHeight - 5}px`;
    //centerDot.classList.add('no-vortex')
    //document.body.appendChild(centerDot);


    allElem.forEach((el, i) => {

        // Set transform-origin to the center of the screen
        //el.style.transformOrigin = `${screenWidth}px ${screenHeight}px`;

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
                elemAnimations.push({ transform: "rotate(360deg) translateX(0)" })
                break;
                // rotate right
            }
            case 1: {
                // rotate left
                elemAnimations.push({ transform: "rotate(-360deg) translateX(0)" })
                break;

            }

        }

        console.log({ elemAnimations, elemTiming })

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





// 