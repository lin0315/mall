import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  addCart(context, payLoad) {
    let oldProduct = context.state.cartList.find(item => item.id === payLoad.id)
    if (oldProduct) {
      context.commit(ADD_COUNTER, oldProduct)
    } else {
      payLoad.count = 1
      context.commit(ADD_TO_CART, payLoad)
    }
  }
}