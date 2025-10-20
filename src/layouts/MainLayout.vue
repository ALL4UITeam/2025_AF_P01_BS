<script setup>
	import { ref } from 'vue'
	import DefaultHeader from '@/layouts/DefaultHeader.vue'
  import DefaultFooter from '@/layouts/DefaultFooter.vue'

</script>
<template>
<!-- searchResultType -->
  <div class="layout" >
			<DefaultHeader />
			<RouterView />
			<DefaultFooter />
  </div>
</template>
<style lang="scss" scoped>

</style>
