import React, { Component } from 'react'
import CatalogItem from '../components/CatalogItem'

class Catalog extends Component {
    constructor() {
        super()
        this.addToBasket = this.addToBasket.bind(this)
    }

    addToBasket(id, name, price) {
        console.log(id,name,price)
    }
    render () {
        let testItems = [
            {id: 1, name: 'Товар номер 1', price: 200},
            {id: 2, name: 'Item number 2', price: 400},
        ]
        let catalogItems = testItems.map((element) => {
            return (
                <CatalogItem addToBasketHandler={this.addToBasket} id={element.id} itemName={element.name} itemPrice={element.price} key={element.id}/>
            )
        })
        return (
            <div className="items-catalog">
                <div className="items-catalog__header">Каталог товаров</div>
                {catalogItems}
            </div>
        )
    }
}

export default Catalog