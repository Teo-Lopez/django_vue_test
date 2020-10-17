import Vue from 'vue'
import Vuex from 'vuex'
import ChocobarService from '../services/ChocobarText.service.js'

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
    fillingChocobar (state, payload) {
      alert('committing to global store')
      state.chocobarText = payload
    },
    postChocobar () {
      console.log('sending text')
      const chocoService = new ChocobarService()
      chocoService.sendText().then(x => console.log(x))
    }
  }
})
