<template>
  <form class="cardWrapper" v-bind:style="{ backgroundImage: 'url(' + bgImage + ')' }">
    <label for='front'></label>
    <input id='front' v-model="data.front"/>
    <label for='back'></label>
    <input id='back' v-model="data.front"/>
  </form>
</template>

<script>
export default {
  name: 'ChocoForm',
  data () {
    return {
      data: {
        front: 'el front',
        back: 'el bacl'
      }
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
