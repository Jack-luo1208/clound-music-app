<script setup lang="ts"></script>

<template>
  <div class="box">
    <img alt="Vue logo" src="@/assets/images/banner-content1.jpg" class="animation-test" />
  </div>
</template>
<script lang="ts">
export default {
  setup() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
html,
body {
  width: 100%;
  height: 100%;
}

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  // width: 1080px;
  height: 420px;
  background: url('@/assets/images/banner1.jpg');
  background-position: center center;
  background-size: 6000px;
  .animation-test {
    display: block;
    width: 730px;
    transition: ease-in;
    animation: banner 3.5s infinite;
  }
}

@keyframes banner {
  0% {
    transition: none 0s ease 0s;
    opacity: 1;
  }
  90% {
    transition: opacity 1s ease-in 0s;
    opacity: 0.2;
  }
  100% {
    transition: opacity 1s ease-out 0s;
    opacity: 1;
  }
}
</style>
