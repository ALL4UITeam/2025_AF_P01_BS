<script setup>
	import { ref } from 'vue'
  import DefaultHeader from '@/layouts/DefaultHeader.vue'
  import DefaultFooter from '@/layouts/DefaultFooter.vue'

	import CommonBreadcrumb from '@components/common/breadcrumb/CommonBreadcrumb.vue';
</script>
<template>
<!-- searchResultType -->
  <div class="layout" >
    <DefaultHeader />
    <div class="content" id="content">
      <CommonBreadcrumb />
      <slot />
    </div>
    <DefaultFooter />
  </div>
</template>
<style lang="scss" scoped>

</style>
