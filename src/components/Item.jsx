import React, { Component } from 'react'

class Item extends Component {
    render () {
        return (
            <div className="basket__item item">
                <div className="item__field field">
                    <span className="field__name">Название</span>
                    <span className="field__value field__value_main">{this.props.name}</span>
                </div>
                <div className="item__field field">
                    <span className="field__name">Количество</span>
                    <span
                        className="field__value link"
                        onClick={(e) => this.props.moreItemsHandler(this.props.id, this.props.name, this.props.price, e)}>
                            +
                        </span>
                    <span className="field__value">{this.props.quantity}</span>
                    <span
                        className="field__value link"
                        onClick={(e) => this.props.lessItemsHandler(this.props.id, 1)}>
                            -
                    </span>
                </div>
                <div className="item__field field">
                    <span className="field__name">Цена</span>
                    <span className="field__value">{this.props.price} рублей</span>
                </div>
                <div className="item__field field">
                    <span className="field__name">Стоимость</span>
                    <span className="field__value">{this.props.cost} рублей</span>
                </div>
                <div className="item__field field">
                    <span className="field__name">Купон</span>
                    <input onChange={this.props.setCouponHandler} type="text" className="field__value" value={this.props.coupon}/>
                </div>
                <div className="item__field field">
                    <span onClick={(e) => this.props.lessItemsHandler(this.props.id, this.props.quantity)} className="field__small-link">удалить товар</span>
                </div>
            </div>
        )
    }
}
export default Item