const ShopCard = ({ key, card }: IShopCard) => {
    return (
        <li className="shop-card" key={key}>
            <h2 className="shop-card-title">{card.name}</h2>
            <span className="shop-card-color">{card.color}</span>
            <img src={card.img} alt={card.name} className="shop-card-img" />
            <div className="price-and-btn">
                <span className="shop-card-price">{"$" + card.price}</span>
                <button className="add-to-card-btn" type="button">ADD TO CARD</button>
            </div>
        </li>
    )
}

export default ShopCard;