import { PureComponent } from "react";
import IconSwitch from "./IconSwitch";
import ListView from "./ListView";
import CardsView from "./CardsView";

export default class Store extends PureComponent {
    private products: IProduct[] = [{
        name: "Nike Metcon 2",
        price: "130",
        color: "red",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "blue",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
    }, {
        name: "Nike Metcon 2",
        price: "130",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
    }, {
        name: "Nike free run",
        price: "170",
        color: "black",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
    }, {
        name: "Nike Metcon 3",
        price: "150",
        color: "green",
        img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
    }];

    public state: IStoreState = {
        isList: true
    }

    private onSwitch() {
        this.setState({ isList: !this.state.isList })
    }

    public render() {
        return (
            <div className="layouts">
                <IconSwitch icon={this.state.isList ? "view_module" : "view_list"} onSwitch={this.onSwitch.bind(this)} />
                <div className="cards">
                    {this.state.isList ?
                        (<ListView
                            className="list-view"
                            items={this.products}
                        />)
                        : (<CardsView
                            className="cards-view"
                            cards={this.products}
                        />)}
                </div>
            </div>
        )
    }
}