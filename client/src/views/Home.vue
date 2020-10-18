<template>
  <div class="mainWrapper">
    <div  class="welcome">
      <div @mouseover="applyRotation" style="display: inline-block">
        <router-link  class="link" to="/edit">Do you want to edit the chocobar?</router-link>
      </div>
    </div>
    <div class='chocobars'>
      <div @mouseover="applyRotation" class='side'>
        <img  :src='chocoCover.back'/>
        <h4>BACKSIDE</h4>
      </div>
      <div @mouseover="applyRotation" class='side'>
        <img  :src='chocoCover.front'/>
        <h4>FRONTSIDE</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      chocoCover: {
        front: require('../assets/chocoCoverFront.jpg'),
        back: require('../assets/chocoCoverBack.jpg')
      }
    }
  },
  methods: {
    applyRotation (e) {
      console.log('rotating!')
      const sideElements = document.querySelectorAll('.side')
      sideElements.forEach((elm) => !elm.classList.contains('rotated') ? elm.classList.add('rotated') : null)
    }
  }
}
</script>

<style>
.mainWrapper {
  background-color: rgba(250,250,250,0.3);
  width: 80%;
  margin: 0 auto;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 90vh;
}
.welcome {
  font-size: 1.5rem;
  padding: 30px 0;
}
.chocobars {
  position: relative;
}
.side {
  width: 688px;
  height: 283px;
  transform-origin: 0 20%;
  transition-duration: .7s;
  transition-timing-function: ease-in;
  position: absolute;
  top: calc(283px/1.3);
  left: calc(50% - 688px/2);
}
.side img  {
  position: absolute;
  top:0;
  left: 0;
  display: inline-block;
  z-index: 0;
}

.side h4 {
  position: absolute;
  color: white;
  font-size: 2em;
  text-align: center;
  top: calc(283px/2 - 2em);
  width: 100%;
}
.chocobars .side:first-child.rotated {
  top: calc(283px/1);
  transform: rotate(10deg);
}

.chocobars .side:last-child.rotated {
  top: calc(283px/1.6);
  transform: rotate(-10deg);
}

</style>
