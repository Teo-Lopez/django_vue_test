<template>
  <div class="cardWrapper" :style="{ backgroundImage: 'url(' + bgImage + ')' }">
    <div class="cardInner">
      <ChocoForm :closeForm="closeForm"/>
      <Modal v-if="showModal">
        <h4>¡Tu tableta se verá así!</h4>
        <div>
          <div class='bar' :style="{backgroundImage: 'url('+ chocoCover.front +')', backgroundSize: 'cover'  }">
            <p>{{completedBar.front}}</p>
          </div>
          <div class='bar' :style="{backgroundImage: 'url('+ chocoCover.back +')', backgroundSize: 'cover'  }" >
            <p>{{completedBar.back}}</p>
          </div>
          <router-link class='link' to='/filled'>Tercera página</router-link>
        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import ChocoForm from '../components/ChocoForm'
import Modal from '../slots/Modal'

export default {
  name: 'ChocoView',
  data () {
    return {
      showModal: false,
      bgImage: screen.width > 2000 ? require('../assets/background@x2.png') : require('../assets/background.png'),
      chocoCover: {
        front: require('../assets/chocoCoverFront.jpg'),
        back: require('../assets/chocoCoverBack.jpg')
      },
      completedBar: {
        front: '',
        back: ''
      }
    }
  },
  methods: {
    closeForm () {
      this.toggleModal()
      this.completeBar()
    },
    toggleModal () {
      this.$data.showModal = !this.$data.showModal
    },
    completeBar () {
      this.$data.completedBar = this.$store.getters.chocobarText
    }
  },
  components: {ChocoForm, Modal}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.cardWrapper {
  display: flex;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 90vh;
  justify-content: center;
  align-items: center;
}
.cardInner {
  background-color: rgba(240,240,240,0.10);
  padding: 20px;
  color: white;
  width: 50%;
}
.bar {
  height: 283px;
  width: 688px;
}

.bar p {
  max-width: 500px;
  height: 90px;
  word-wrap: break-word;
  padding: 13% 13% 22%;
  display: block;
  line-height: 1.2em;
  font-size: 1.2em;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
