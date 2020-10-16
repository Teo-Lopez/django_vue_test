import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0,
    chocobarText: {
      front: '',
      back: ''
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    fillingChocoBar (state, payload) {
      alert('committing to global store')
      state.chocobarText = payload
    }
  }
})
