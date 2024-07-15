export interface Card {
    title: string;
    image: string;
    description: string;
    background: string;
    onClick: () => void;
    buttonText: string;
}

export interface CardsProps {
    cards: Card[];
}
