import React, { Component } from 'react';
import Item from '../components/Item'

class Basket extends Component {
    constructor() {
        super()
        this.moreItems = this.moreItems.bind(this)
        this.lessItems = this.lessItems.bind(this)
        this.setCouponHandler = this.setCouponHandler.bind(this)
    }
    moreItems(id, name, price, e) {
        this.props.addItem(id, name, price)
    }
    lessItems(id, quantity = 1, e) {
        this.props.removeItem(id, quantity)
    }
    setCouponHandler(e) {
        console.log(e);
        console.log("set coupon")
    }
    render() {
        let self = this
        let items = this.props.basket.map(function (element) {
            return (
                <Item
                    id={element.id}
                    key={element.id}
                    name={element.name}
                    price={element.price}
                    quantity={element.quantity}
                    cost={element.cost}
                    coupon={element.coupon}
                    moreItemsHandler={self.moreItems}
                    lessItemsHandler={self.lessItems}
                    setCouponHandler={self.setCouponHandler}
                />
            )
        })
        return (
            <div className="basket">
                <div className="basket__title">Корзина</div>
                {(items.length < 1) ? 'Ваша корзина пуста' : ''}
                { items }
            </div>
        )
    }
}

export default Basket;