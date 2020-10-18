<template>
  <div class='modalWrapper'>
    <div class='modal'>
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style>
h4 {
  color: black;
}
.modalWrapper {
  position: absolute;
  top: 10%;
  left: 20vh;
  width: 80%;
  height: 80vh;
  background-color: whitesmoke;
  box-shadow: inset 0 -3em 3em rgba(0,0,0,0.1), 0 0  0 2px rgb(255,255,255), 0.3em 0.3em 1em rgba(0,0,0,0.3);;
}

.modal {
  display: inline-block;
  margin: auto;
}
</style>
