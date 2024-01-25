<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
.plus {
  font-family: 'Plus Jakarta Sans', sans-serif;
}

.inter {
  font-family: "Inter", sans-serif;
}

html {
  height: 100%;
}

body {
  min-height: 100vh;
}

body::-webkit-scrollbar {
  width: 5px;
  background: transparent;
}

body::-webkit-scrollbar-track {
  width: 5px;
  background: transparent;
}

body::-webkit-scrollbar-thumb {
  width: 5px;
  background: #000;
}
</style>
