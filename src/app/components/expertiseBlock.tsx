import React, {FC, useEffect, useRef, useState} from 'react';
import Image from 'next/image';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ExpertiseBlockProps {
    index: number;
    image: string;
    title: string;
    text: string;
}

const ExpertiseBlock: FC<ExpertiseBlockProps> = ({index, image, title, text}) => {

    const [textVisible, setTextVisible] = useState<string>("");
    const blockRef = useRef(null);

    const writeText = () => {
        let textToWrite = text;
        for (let i = 0; i < textToWrite.length; i++) {
            setTimeout(() => {
                setTextVisible((prevText) => prevText + textToWrite[i]);
            }, 30 * i);
        }
    };

    useEffect(() => {
        const delayPerBlock = .4; // Delay in seconds for each block
        const initialDelay = 0 // Initial delay in seconds

        const tl = gsap.timeline({
            delay: initialDelay + index * delayPerBlock,
            scrollTrigger: {
                trigger: "#expertise",
                start: "top 80%",
                once: true,
            },
        });

        tl.fromTo(blockRef.current,
            {
                opacity: 0,
                y: 100},
            {
                opacity: 1,
                y: 0,
                duration: 1,
                "--after-width": "100%",
            },
        ).add(writeText);

        return () => {
            tl.kill();
        }
    }, []);

    return (
        <div className={"expertise-block"} ref={blockRef}>
            <div className="flex">
                <Image src={`/img/${image}`} alt={`${image} icon`} width={50} height={50} className={"icon"}/>
                <h3>{title}</h3>
            </div>
            <p className={"writedText"}>{textVisible} <span className={"cursor"}></span></p>
        </div>
    );
};

export default ExpertiseBlock;
