import React, {FC} from 'react';

interface PopUpFunctionType {
    (title: string | undefined, image: string | undefined, description: string | undefined, techno: string | undefined): void;
}

interface PopUpProps {
    image: string;
    title: string;
    description: string;
    techno: string;
    PopUpFunc: PopUpFunctionType;
}

const PopUp: FC<PopUpProps> = ({image, title, description, techno, PopUpFunc}) => {
    return (
        <div className={"PopUp"}>
            <button onClick={() => PopUpFunc(undefined, undefined, undefined, undefined)}>
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
                        {techno.split(" / ").map((techno, index) => {
                            return (<img
                                src={`/img/${techno}.svg`}
                                alt={techno}
                                key={index}
                                onError={(e) => {
                                    e.target.style.display = 'none'
                                }}
                            />)
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PopUp;