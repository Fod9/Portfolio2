export interface PopUpFunctionType {
    (title: string | undefined, image: string | undefined, description: string | undefined, techno: string | undefined): void;
}

export interface PopUpProps {
    image: string | undefined;
    title: string | undefined;
    description: string | undefined;
    techno: string | undefined;
    PopUpFunction: PopUpFunctionType;
}