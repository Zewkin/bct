<template>
  <div :class="$style.container">
    <Header />
    <div :class="$style.contentWrapper">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from './client/components/Header.vue';
import Footer from './client/components/Footer.vue';
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style module>

.container {
  width: 1200px;
  min-height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1199px) {
    width: 100%;
    padding: 0 15px;
    box-sizing: border-box;
  }
}

.contentWrapper {
  flex: 1;
}
</style>

<style>
  /* @import url('https://fonts.cdnfonts.com/css/raleway-5'); */

  body {
    margin: 0;
    font-family: 'Open Sans', sans-serif;
    color: #272726;
  }

  html, body {
    overflow-x: hidden!important;
  }
</style>
