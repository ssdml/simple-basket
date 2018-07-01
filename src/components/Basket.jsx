import React, { Component } from 'react';
import Item from '../components/Item'
import UndoRedo from '../components/UndoRedo'

class Basket extends Component {
    constructor() {
        super()
        this.moreItems = this.moreItems.bind(this)
        this.lessItems = this.lessItems.bind(this)
        this.setCouponHandler = this.setCouponHandler.bind(this)
        this.undo = this.undo.bind(this)
        this.redo = this.redo.bind(this)
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
    redo() {
        this.props.redo()
    }
    undo() {
        this.props.undo()
    }
    render() {
        let self = this
        let items = this.props.basket.current.map(function (element) {
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
                <UndoRedo undoHandler={this.undo} redoHandler={this.redo}/>
            </div>
        )
    }
}

export default Basket;