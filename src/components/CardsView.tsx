import ShopCard from "./ShopCard"

const CardsView = ({ className, cards }: ICardsView) => {

    return (
        <ul className={className}>
            {cards.map((card, indx) => (
                <ShopCard key={indx} card={card} />
            ))}
        </ul>
    )
}

export default CardsView