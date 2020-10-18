<template>
  <div id="app">
    <div>
      <h1>PackageMedia</h1>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
body {
  background-color: rgba(165, 214, 243, 0.5);
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 10vh;
}

.link {
  background-color: rgba(165, 214, 243, 0.5);
  display: inline-block;
  padding: 5px 10px;
  font-weight: 600;
  color: rgba(10,10,10,.8);
  text-transform: uppercase;
  /* background: #ffffff; */
  text-decoration: none;
  padding: 20px;
  border: 4px solid rgba(165, 214, 243, 0.9);
  border-radius: 6px;
  display: inline-block;
  transition: all 0.3s ease 0s;
}
.link:hover {
  color: #494949 ;
  border-radius: 50px;
  border-color: #494949 ;
  transition: all 0.3s ease 0s;
  text-decoration: underline;
}
</style>
