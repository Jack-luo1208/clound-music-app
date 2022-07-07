<template>
  <div class="home">
    <div v-for="(v, i) in arr" :key="i">
      <span>{{ v }}</span>
      1231313132 222
    </div>
    <button @click="aa">test</button>
  </div>
</template>

<script>
import { defineComponent, toRefs, ref, reactive, onMounted, nextTick, onUnmounted } from 'vue';
import axios from 'axios';
// import { test } from '@/api/allApi';
export default defineComponent({
  setup() {
    // let arr = 232123;
    const ss = 12313;
    const arr = [1, 2, 3, 4, 5];
    const aa = async () => {
      // const { data } = await test();
    };

    return { arr, aa };
  }
});
</script>

<style>
.home {
  height: 100%;
}
</style>
