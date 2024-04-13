<script setup>
import { RouterView } from 'vue-router';
import Header from './components/Header.vue';
</script>

<template>
  <div>
    <div>
      <Header></Header>
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

</style>
