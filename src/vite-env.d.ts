/// <reference types="vite/client" />

interface IProduct {
    name: string,
    price: string,
    color: string,
    img: string
}

interface IProducts {
    products: IProduct[]
}

interface IStoreState {
    isList: boolean
}

interface IIconSwitch {

    icon: string;
    onSwitch: () => void;
}

interface IListView {
    className: string,
    items: IProduct[]
}

interface ICardsView {
    className: string,
    cards: IProduct[]
}

interface IShopItem {
    key: number,
    item: IProduct
}

interface IShopCard {
    key: number,
    card: IProduct
}