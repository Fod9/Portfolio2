import React, {FC} from 'react';
import {PopUpProps} from "../types/type";

const PopUp: FC<PopUpProps> = ({image, title, description, techno, PopUpFunction}) => {
    return (
        <div className={"PopUp"}>
            <button onClick={() => PopUpFunction(undefined, undefined, undefined, undefined)}>
                <img src="/img/Close.svg" alt=""/>
            </button>
            <h2>{title}</h2>
            <img src={`/img/${image}`} alt={title}/>
            <div>
                <h3>Description du projet : </h3>
                <p>{description}</p>
                <h3>Techno utilisés : </h3>
                <div className={"techno"}>
                    <p>{techno}</p>
                    <div className={"flex"}>
                        {techno ? techno.split(" / ").map((techno, index) => {
                            return (<img
                                src={`/img/${techno}.svg`}
                                alt={techno}
                                key={index}
                                onError={(e) => {
                                    (e.target as HTMLElement).style.display = 'none'
                                }}
                            />)
                        }): null}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUp;