import Vue from 'vue';
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    addCart(state, payLoad) {
      let oldProduct = null;
      for (let item of state.cartList) {
        if (item.iid === payLoad.iid) {
          oldProduct = item
        }
      }

      if (oldProduct) {
        oldProduct.count += 1
      } else {
        payLoad.count = 1
        payLoad.checked = true
        state.cartList.push(payLoad)
      }
    }
  },
  getters,

})

export default store
