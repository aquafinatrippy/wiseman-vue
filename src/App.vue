<template>
  <div class="app">
    <div class="sideNav"><Navbar /></div>
    <div class="mainContent">
      <router-view />
    </div>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  components: { Navbar },
};
</script>

<style lang="scss">
body {
  font-family: Open Sans;
  background: #3a3d57;
  background-position-x: 0%;
  background-position-y: 0%;
  background-repeat: repeat;
  background-attachment: scroll;
  background-image: none;
  background-size: auto;
  background-image: url(./assets/left.svg), url(./assets/right.svg);
  background-repeat: no-repeat;
  background-position: left bottom, right top;
  background-size: 150px, 250px;
  background-attachment: fixed;
}
.app {
  background-color: #efefef;
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
  display: flex;
  min-height: 100%;
}
.mainContent {
  padding: 0 60px;
  position: relative;
  flex-grow: 1;
}
</style>
