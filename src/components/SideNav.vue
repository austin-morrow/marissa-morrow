<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="flex flex-col h-screen w-48 bg-slate-400">
    <RouterLink to="/" class="py-2">Home</RouterLink>
    <RouterLink to="/work" class="py-2">Work</RouterLink>
    <RouterLink to="/about" class="py-2">About</RouterLink>
    <RouterLink to="/contact" class="py-2">Contact</RouterLink>
  </div>
</template>