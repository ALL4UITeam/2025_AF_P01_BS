<script setup>
	import { ref } from 'vue'
  import DefaultHeader from '@/layouts/DefaultHeader.vue'
  import MypageLnb from '@/layouts/MypageLnb.vue'
  import DefaultFooter from '@/layouts/DefaultFooter.vue'

	import CommonBreadcrumb from '@components/common/breadcrumb/CommonBreadcrumb.vue';
</script>
<template>
<!-- searchResultType -->
  <div class="layout" >
    <DefaultHeader />
    <div class="content" id="content">
      <CommonBreadcrumb />
      <div class="mypageLayout">
        <MypageLnb />
        <div class="mypageLayout__content">
          <slot />
        </div>
      </div>
    </div>
    <DefaultFooter />
  </div>
</template>
<style lang="scss" scoped>
.mypageLayout {
  display:flex;
  position:relative;
  padding-top:148.5px;
  gap:64px;

  &__content {
    width:888px;
  }
}
</style>
