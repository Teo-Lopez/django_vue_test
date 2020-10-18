 <template>
  <div class="row">
    <form @submit.prevent='checkSubmit'>
      <div class="inputField">
        <label for='front'>Front</label>
        <input @keydown.enter.prevent='changeInput' @focus="updateCover" maxlength="100" isFront="true" id='front' v-model="chocobarText.front"/>
      </div>
      <div class="inputField" >
        <label for='back'>Back</label>
        <textarea @focus="updateCover" maxlength="200" isFront=""  id='back' v-model="chocobarText.back"/>
      </div>
      <button>SUBMIT</button>
    </form>
    <div>
      <div class='bar' v-if="showingFront" :style="{backgroundImage: 'url('+ chocoCover.front +')' }">
        <p>{{chocobarText.front ? chocobarText.front : 'Aquí irá tu texto de prueba'}}</p>
      </div>
      <div class='bar' v-else :style="{backgroundImage: 'url('+ chocoCover.back +')' }" >
        <p><strong>{{chocobarText.back ? chocobarText.back : 'PARTE DE ATRAS'}}</strong></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ChocoForm',
  data () {
    return {
      chocobarText: {
        front: '',
        back: ''
      },
      showingFront: true,
      chocoCover: {
        front: require('../assets/chocoCoverFront.jpg'),
        back: require('../assets/chocoCoverBack.jpg')
      }
    }
  },
  methods: {
    isFormFilled () {
      return this.$data.chocobarText.front !== '' && this.$data.chocobarText.back !== ''
    },
    checkSubmit () {
      if (this.isFormFilled()) {
        this.$store.commit('fillingChocobar', this.$data.chocobarText)
        this.$store.commit('postChocobar', this.$data.chocobarText)
      } else alert('Tu tableta no está completa!')
    },
    updateCover (e) {
      if (!!e.currentTarget.getAttribute('isFront') === true) this.showingFront = true
      else this.showingFront = false
    },
    changeInput (e) {
      //  TO-DO improve ad-hoc solution
      e.currentTarget.parentElement.nextElementSibling.querySelectorAll('textArea')[0].focus()
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

textarea {
  height: 80px;
}
</style>
