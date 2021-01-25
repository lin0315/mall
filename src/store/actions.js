import {
  ADD_COUNTER,
  ADD_TO_CART
} from './mutation-types'

export default {
  addCart(context, payLoad) {
    return new Promise((resolve, reject) => {
      // 1查找之前数组中有没有该商品
      let oldProduct = context.state.cartList.find(item => item.id === payLoad.id)
      if (oldProduct) {
        context.commit(ADD_COUNTER, oldProduct)
        resolve('当前商品数量加一')
      } else {
        payLoad.count = 1
        context.commit(ADD_TO_CART, payLoad)
        resolve('加入购物车成功')

      }
    })
  }
}