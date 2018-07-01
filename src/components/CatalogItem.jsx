import React from 'react'

const CatalogItem = (props) => {
    return (
        <div className="catalog-item">
            <div className="field">
                <span className="field__name">Название</span>
                <span className="field__value">{props.itemName}</span>
            </div>
            <div>
                <span className="field__name">Цена</span>
                <span className="field__value">{props.itemPrice}</span>
            </div>
            <button onClick={(e) => {props.addToBasketHandler(props.id, props.itemName, props.itemPrice, e)}}>Добавить в карзину</button>
        </div>
    )
}

export default CatalogItem