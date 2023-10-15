import React, {FC} from 'react';
import CustomCard from "./card";
import {PopUpFunctionType} from "../types/type";
interface ProjectsProps {
    PopUpFunc: PopUpFunctionType;
}



const Projects: FC<ProjectsProps> = ({PopUpFunc}) => {
    return (
        <div id={"Projects"}>
            <h2>My Projects</h2>
            <div className={"row"}>
                <div className={"col-sm-8 col-md-6 col-xl-4"}>
                    <CustomCard image={"gun-AI.jpeg"} title={"Gun detection"} description={"Fine tuning on YoLo model to detect a gun on an image"} techno={"YoLo / Tensorflow"} PopUpFunction={PopUpFunc}/>
                    <CustomCard image={"abel.png"} title={"Abel Bullying"} description={"PTDR abel tu crois tu va être top 5 ? donne la pizza la "} techno={"Bully"} PopUpFunction={PopUpFunc}/>
                </div>
                <div className={"col-sm-8 col-md-6 col-xl-4"}>
                    <CustomCard image={"AI-emotion-image.png"} title={"Detect an emotion on a face"} description={"Deep learning model who can detect an emotion on a human face"} techno={"Tensorflow"} PopUpFunction={PopUpFunc}/>
                    <CustomCard image={"ImmoPro.png"} title={"ImmoPro"} description={"Projet de site immobilier avec système d'offres et de mises en vente."} techno={"NodeJS / ReactJS"} PopUpFunction={PopUpFunc}/>
                </div>
                <div className={"col-sm-8 col-md-6 col-xl-4"}>
                    <CustomCard image={"AI-Emotion.png"} title={"Detect emotion of a sentence"} description={"Deep learning model who can detect an emotion in a sentence"} techno={"Tensorflow"} PopUpFunction={PopUpFunc}/>
                    <CustomCard image={"LaGrange.png"} title={"Location Gîte"} description={"Site de location de gite"} techno={"VueJS / NodeJS"} PopUpFunction={PopUpFunc}/>
                </div>
            </div>
        </div>
    );
};

export default Projects;