<template>
  <div class="cardWrapper" :style="{ backgroundImage: 'url(' + bgImage + ')' }">
    <div class="cardInner">
     <ChocoForm/>
    </div>
  </div>
</template>

<script>
import ChocoForm from './ChocoForm'

export default {
  name: 'Home',
  data () {
    return {
      data: {
        front: '',
        back: ''
      },
      showingFront: true,
      frontText: 'Introduce here the front text',
      backText: 'Here goes the backtext, make it big!',
      bgImage: screen.width > 2000 ? require('../assets/womenInField_2400x1800.jpg') : require('../assets/womenInField_1920x1440.jpg'),
      chocoCover: {
        front: require('../assets/chocoCoverFront.jpg'),
        back: require('../assets/chocoCoverBack.jpg')
      }
    }
  },
  components: {ChocoForm}
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
