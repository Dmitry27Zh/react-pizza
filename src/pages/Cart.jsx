import CartEmpty from '../components/CartEmpty'
import CartItems from '../components/CartItems'

const Cart = () => {
  const isEmpty = false

  return <div className="container container--cart">{isEmpty ? <CartEmpty /> : <CartItems />}</div>
}

export default Cart
