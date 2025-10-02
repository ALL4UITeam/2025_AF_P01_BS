<script setup>
  import { ref, onMounted } from 'vue'
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'

  const items = ref([])
	
	const handleDel = () => {
		console.log('삭제');
	}	
	const handleList = () => {
		console.log('목록');
	}

onMounted(() => {
  // TODO: 다운로드 대기 데이터 조회 로직 구현
})
</script>

<template>
  다운로드대기
</template>

<style lang="scss" scoped>
.waiting-download-tab {
  padding: 20px;
}
</style> 