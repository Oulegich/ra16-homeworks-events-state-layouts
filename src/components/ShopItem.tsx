const ShopItem = ({ key, item }: IShopItem) => {
    return (
        <li className="shop-item" key={key}>
            <img src={item.img} alt="" className="shop-item-img" />
            <h2 className="shop-item-title">{item.name}</h2>
            <span className="shop-item-color">{item.color}</span>
            <span className="shop-item-price">{"$" + item.price}</span>
            <button className="add-to-card-btn" type="button">ADD TO CARD</button>
        </li>
    )
}

export default ShopItem;