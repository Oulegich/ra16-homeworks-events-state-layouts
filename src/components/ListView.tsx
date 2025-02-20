import ShopItem from "./ShopItem";

const ListView = ({ className, items }: IListView) => {
    return (
        <ul className={className}>
            {items.map((item, indx) => (
                <ShopItem key={indx} item={item} />
            ))}
        </ul>
    )
}

export default ListView;