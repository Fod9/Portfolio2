import React, {useEffect} from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {

    useEffect(() => {

        const progressBars = document.querySelectorAll(".progress .progress-bar")
        let progressBarsWidth: Array<string> = []

        const SkillBars = document.querySelectorAll(".progress")

        progressBars.forEach((progressBar) => {
            progressBarsWidth.push(progressBar.getAttribute("aria-valuenow") + "%")
        })

        const tl = gsap.timeline({
            delay: 0.3,
            scrollTrigger: {
                trigger: "#Skills",
                start: "top 80%",
                once: true,
            },
        });

        SkillBars.forEach((progress, index) => {
            const label = `label${index}`;
            tl.addLabel(label, index * 0.5); // Ajoute un label à la timeline

            tl.fromTo(progress,
                {
                    scale: 0,
                    duration: 0.3,
                    ease: "power3.inOut",
                },
                {
                    scale: 1,
                    duration: 0.3,
                    ease: "power3.inOut",
                },
                label// Utilisation du label pour le timing
            ).to(progress,
                {
                    scale: 1.1,
                    duration: 0.6, // Augmentation de la durée pour un effet plus linéaire
                    ease: "power3.inOut",
                },
                label
            ).fromTo(progress.children[0],
                {
                    width: "0%",
                },
                {
                    width: progressBarsWidth[index],
                    duration: 0.5,
                    ease: "power3.in",
                },
                label
            ).to(progress,
                {
                    scale: 1,
                    delay: 0.2,
                    duration: 0.3,
                    ease: "power3.inOut",
                }
            )
        })


        return () => {
            tl.kill();
        }
    }, [])

    return (
        <div id={"Skills"} className={"container"}>
            <h2>My Skills</h2>
            <div className={"row col-md"}>
                <div className={"col-sm"}>
                    <ProgressBar now={90} label={`HTML / CSS`}/>
                    <ProgressBar now={70} label={`Python`}/>
                    <ProgressBar now={50} label={`Tensorflow`}/>
                </div>
                <div className={"col-sm"}>
                    <ProgressBar now={70} label={`Javascript`}/>
                    <ProgressBar now={70} label={`NODE / REACT`}/>
                    <ProgressBar now={60} label={`SKLEARN`}/>
                </div>
            </div>
        </div>
    );
};

export default Skills;