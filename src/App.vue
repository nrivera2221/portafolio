<script setup>
import { RouterView } from 'vue-router'
import Nav from "./components/Nav.vue"
import Footer from "./components/Footer.vue"
</script>

<template>

  <div class="container-fluid">
    <div class=".container-fluid" style="margin-top: 70px;">
      <Nav />
      <RouterView />
    </div>
    <Footer />
  </div>

</template>

<style scoped></style>