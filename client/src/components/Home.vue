<template>
  <div class="cardWrapper" v-bind:style="{ backgroundImage: 'url(' + bgImage + ')' }">
    <div class="cardInner">
      <template>
        <div class="row">
          <form >
            <div   class="inputField">
              <label for='front'>Front</label>
              <input @focus="updateCover" isFront="true" id='front' v-model="data.front"/>
            </div>
            <div   class="inputField" >
              <label for='back'>Back</label>
              <textarea @focus="updateCover"  id='back' v-model="data.back"/>
            </div>
          </form>
          <div>
            <div v-if="showingFront" v-bind:style="{backgroundImage: 'url('+ chocoCover.front +')', height: '283px', width: '688px'}">
              <p style="padding: 20%; display: block"><strong>{{data.front ? data.front : 'Aquí irá tu texto de prueba'}}</strong></p>
            </div>
            <div v-else v-bind:style="{backgroundImage: 'url('+ chocoCover.back +')', height: '283px', width: '688px'}">
              <p style="padding: 20%; display: block"><strong>{{data.back ? data.back : 'PARTE DE ATRAS'}}</strong></p>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
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
      },
      updateCover: (e) => {
        console.log(e.currentTarget.getAttribute('isFront'))
        if (!!e.currentTarget.getAttribute('isFront') === true) this.showingFront = true
        else this.showingFront = false
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  display: flex;
  justify-content: center;
  align-items: center;
}
.inputField {
  padding: 5px;
  margin: 5px;
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
