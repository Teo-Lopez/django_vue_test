<template>
  <div class="cardWrapper" v-bind:style="{ backgroundImage: 'url(' + bgImage + ')' }">
    <h1>{{ frontText }}</h1>
    <h1>{{ backText }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      frontText: 'Introduce here the front text',
      backText: 'Here goes the backtext, make it big!',
      bgImage: screen.width > 2000 ? require('../assets/womenInField_2400x1800.jpg') : require('../assets/womenInField_1920x1440.jpg')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cardWrapper {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 90vh;
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
