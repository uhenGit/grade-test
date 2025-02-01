<template>
  <div class="flex loader-outer">
    <div class="loader-inner"></div>
  </div>
</template>
<style scoped>
.loader-outer {
  position: absolute;
  inset: 0;
  z-index: 10;
}
.loader-inner {
  width: 15px;
  aspect-ratio: 1;
  position: relative;
}
.loader-inner::before,
.loader-inner::after {
  content: "";
  position: absolute;
  inset: 0;
  border-radius: 50%;
  background: var(--background-light-32);
}
.loader-inner::before {
  box-shadow: -25px 0;
  animation: l8-1 1s infinite linear;
}
.loader-inner::after {
  transform: rotate(0deg) translateX(25px);
  animation: l8-2 1s infinite linear;
}

@keyframes l8-1 {
  100%{transform: translateX(25px)}
}
@keyframes l8-2 {
  100%{transform: rotate(-180deg) translateX(25px)}
}
</style>
<script setup lang="ts">
</script>