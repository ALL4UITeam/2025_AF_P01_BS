<script setup>
import { ref, onMounted } from 'vue'

const items = ref([])

onMounted(() => {
  // TODO: 승인 대기 데이터 조회 로직 구현
})
</script>

<template>
  승인대기
</template>

<style lang="scss" scoped>
.waiting-approval-tab {
  padding: 20px;
}
</style> 