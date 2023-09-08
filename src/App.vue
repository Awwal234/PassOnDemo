<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Hanken+Grotesk:wght@100;200;300;400;500;600;700;800;900&family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap");

.hanken {
  font-family: "Hanken Grotesk", sans-serif;
}

.inter {
  font-family: "Inter", sans-serif;
}

main {
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
  background: #101828;
}

textarea::-webkit-scrollbar {
  width: 5px;
  background: transparent;
}
</style>
