 <template>
  <div class="row">
    <form >
      <div class="inputField">
        <label for='front'>Front</label>
        <input @focus="updateCover" isFront="true" id='front' v-model="data.front"/>
      </div>
      <div class="inputField" >
        <label for='back'>Back</label>
        <textarea @focus="updateCover" isFront=""  id='back' v-model="data.back"/>
      </div>
    </form>
    <div>
      <div v-if="showingFront" :style="{backgroundImage: 'url('+ chocoCover.front +')', height: '283px', width: '688px'}">
        <p style="padding: 20%; display: block"><strong>{{data.front ? data.front : 'Aquí irá tu texto de prueba'}}</strong></p>
      </div>
      <div v-else :style="{backgroundImage: 'url('+ chocoCover.back +')', height: '283px', width: '688px'}">
        <p style="padding: 20%; display: block"><strong>{{data.back ? data.back : 'PARTE DE ATRAS'}}</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChocoForm',
  data () {
    return {
      data: {
        front: '',
        back: ''
      },
      showingFront: true,
      frontText: 'Introduce here the front text',
      backText: 'Here goes the backtext, make it big!',
      chocoCover: {
        front: require('../assets/chocoCoverFront.jpg'),
        back: require('../assets/chocoCoverBack.jpg')
      }
    }
  },
  methods: {
    updateCover (e) {
      if (!!e.currentTarget.getAttribute('isFront') === true) this.showingFront = true
      else this.showingFront = false
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
