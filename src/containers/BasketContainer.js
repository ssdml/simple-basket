import { connect } from 'react-redux';
import Basket from '../components/Basket';
import { addItem, removeItem, undo, redo } from '../actions/'

const mapStateToBasket = (state) => ({
    basket: state.basket,
})

const mapDispatchToProps = dispatch => ({
    addItem: (id, name, price) => dispatch(addItem(id, name, price)),
    removeItem: (id, quantity) => dispatch(removeItem(id, quantity)),
    undo: () => dispatch(undo()),
    redo: () => dispatch(redo())
})
const BasketContainer = connect(
    mapStateToBasket,
    mapDispatchToProps
)(Basket);

export default BasketContainer;