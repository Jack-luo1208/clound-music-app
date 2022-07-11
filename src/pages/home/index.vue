<template>
  <div class="home">
    <button @click="aa">test</button>
  </div>
</template>

<script>
import { defineComponent, toRefs, ref, reactive, onMounted, nextTick, onUnmounted } from 'vue';
import axios from 'axios';
// import { test } from '@/api/allApi';
export default defineComponent({
  setup() {
    const aa = async () => {
      // const { data } = await test();
    };

    return { aa };
  }
});
</script>

<style>
.home {
  height: 100%;
}
</style>
