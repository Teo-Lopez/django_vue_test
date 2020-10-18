import Vue from 'vue'
import Vuex from 'vuex'
import ChocobarService from '../services/ChocobarText.service.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chocobarText: {
      front: '',
      back: ''
    }
  },
  mutations: {
    fillingChocobar (state, payload) {
      alert('committing to global store')
      state.chocobarText = payload
    },
<<<<<<< HEAD
    postChocobar () {
      console.log('sending text')
=======
    postChocobar (state, payload) {
      const {front, back} = payload
>>>>>>> master
      const chocoService = new ChocobarService()
      chocoService.sendText({front, back}).then(x => console.log(x))
    }
  }
})
