import React, { useState, useEffect } from 'react';
import './Countdown.css';

const Countdown = () => {
        const calculateTimeLeft = () => {
            const difference = +new Date('2024-08-12') - +new Date();
            let timeLeft = {};

            if (difference > 0) {
                timeLeft = {
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                };
            }

            return timeLeft;
        };

        const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

        useEffect(() => {
            const timer = setTimeout(() => {
                setTimeLeft(calculateTimeLeft());
            }, 1000);

            return () => clearTimeout(timer);
        });

        const timerComponents = [];

        Object.keys(timeLeft).forEach((interval) => {
            timerComponents.push( <
                div key = { interval }
                className = "time-box angel" >
                <
                span className = "time-number" > { timeLeft[interval] } < /span> <
                span className = "time-label" > { interval } < /span> < /
                div >
            );
        });

        return ( <
            div className = "countdown" >
            <
            h1 className = "glitch demon" > PRÓXIMAMENTE < /h1> <
            div className = "timer-container" > {
                timerComponents.length ? timerComponents : < span > Time 's up!</span>} < /
                div > <
                /div>
            );
        };

        export default Countdown;