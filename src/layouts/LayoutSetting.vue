<script setup>
  import {computed, defineAsyncComponent} from 'vue';
  import {useRoute} from 'vue-router';

  import NoneLayout from '@/layouts/NoneLayout.vue'
  import MyPageLayout from '@/layouts/MyPageLayout.vue'

  const route = useRoute();
  const layouts = {
    NoneLayout,
    MyPageLayout
  };

  const layout = computed(() => {
    const { layout } = route.meta;
    const path = route.path;

    if (layout === 'none' || path === '/' || path === '/list') {
      return layouts['NoneLayout'];
    }

    if (layout === 'mypage') {
      return layouts['MyPageLayout'];
    }

    return defineAsyncComponent(() => import('@/layouts/DefaultLayout.vue'));
  });

</script>

<template>
  <component :is="layout"><RouterView /></component>
</template>