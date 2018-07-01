import { connect } from 'react-redux';
import Shop from '../components/Shop';
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
const ShopContainer = connect(
    mapStateToBasket,
    mapDispatchToProps
)(Shop);

export default ShopContainer;