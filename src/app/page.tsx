"use client";
import Image from 'next/image'
import {useState, useEffect, FunctionComponent} from 'react'
import CustomNav from "./components/nav";
import Expertise from "./components/expertise";
import Skills from "./components/skills";
import Projects from "./components/projects";
import PopUp from "./components/PopUp";
import {PopUpFunctionType, PopUpProps} from "./types/type";

export default function Home() {
    const [page, setPage] = useState(0)
    const [popUp, setPopUp] = useState(false)

    const [popUpProps, setPopUpProps] = useState<PopUpProps>()

    const PopUpFunction: PopUpFunctionType = (title, image, description, techno) => {
        if(popUpProps){
            setPopUpProps(undefined)
            setPopUp(false)
        }else {
            setPopUpProps({
                title: title || '',
                image: image || '',
                description: description || '',
                techno: techno || ''
            } as PopUpProps)
            setPopUp(true)
        }

    }


    return (
        <>
            <header>
                <CustomNav/>
            </header>
            <main>
                <>
                {popUp ? <div className={"overlay"}></div> : null}
                    {popUp && popUpProps ? <PopUp image={popUpProps.image} title={popUpProps.title} description={popUpProps.description} techno={popUpProps.techno} PopUpFunction={PopUpFunction} />
 : null}
                </>
                <div className={"short-desc"}>
                    <div className={"centered-text"}>
                        <h2>Tom Dernoncourt</h2>
                        <p>Student Developers and Data Scientists</p>
                    </div>
                </div>
                <Expertise/>
                <Skills/>
                <Projects PopUpFunc={PopUpFunction}/>
                <div id={"Contact"}>
                    <div className={"flex"}>
                        <h2>Contact</h2>
                        <p>tom.dernoncourt@ecoles-epsi.fr</p>
                        <p>06XXXXXXXX</p>
                    </div>
                </div>
            </main>
            <footer>
                <p>Copyright Tom Dernoncourt 2023 &copy;</p>
            </footer>
        </>
    )
}
