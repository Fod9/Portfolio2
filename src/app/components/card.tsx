import React, {FC, FunctionComponent, useState} from 'react';
import Image from "next/image";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

interface PopUpFunctionType {
    (title: string, image: string, description: string, techno: string): void;
}

interface CardProps {
    image: string;
    title: string;
    description: string;
    techno: string;
    PopUpFunction: PopUpFunctionType;
}


const CustomCard: FC<CardProps> = ({image, title, description, techno, PopUpFunction }) => {
    return (
        <Card className="text-center">
            <Card.Img variant="top" src={`/img/${image}`}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary" onClick={() => PopUpFunction(title,image,description,techno)} >See project</Button>
            </Card.Body>
        </Card>
    );
};

export default CustomCard;