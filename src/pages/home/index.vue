<template>
  <div class="home">
    <div>{{ store.state.user.count }}</div>
    <button @click="aa">test</button>
  </div>
</template>

<script>
import { defineComponent, toRefs, ref, reactive, onMounted, nextTick, onUnmounted } from 'vue';
import axios from 'axios';
import { useStore } from 'vuex';
// import { test } from '@/api/allApi';
export default defineComponent({
  setup() {
    const store = useStore();
    const aa = async a => {
      const obj = import.meta.globEager('./pages'); // 查找文件
      console.log(obj);
      // const { data } = await test();
    };
    return { aa, store };
  }
});
</script>

<style>
.home {
  height: 100%;
}
</style>
