<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'
	import HorizontalBoard from '@/components/common/board/HorizontalBoard.vue'
	import CommonTab from '@/components/common/tab/CommonTab.vue'
	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import SubHeaderTitle from '@/components/common/title/SubHeaderTitle.vue'

	const techTips = ref([
		{
			id: 1,
			image: '',
			imageAlt: '',
			title: '도로명주소 공간데이터 활용가이드',
			description: '도로명주소 공간데이터를 '
		},
		{
			id: 2,
			image: '',
			imageAlt: '',
			title: '도로명주소 공간데이터 활용가이드 공간데이터 활용가이드 공간데이터 활용가이드',
			description: '도로명주소 공간데이터를 다운로드하여 GIS도구 에서 가져오는 방법, 심볼 및 라벨의 설정, 데이 ...'
		},
		{
			id: 3,
			image: '/src/assets/images/temp/sample01.jpg',
			imageAlt: 'sda',
			title: '도로명주소 공간데이터 활용가이드',
			description: '도로명주소 공간데이터를 다운로드하여 GIS도구 에서 가져오는 방법, 심볼 및 라벨의 설정, 데이 ...'
		}
	])

	const tabConfig = [
		{
			header: 'Tech&Tips',
			component: defineAsyncComponent(() => import('@/components/content/tab/communication/TechTipsContent.vue'))
		},
		{
			header: '토론',
			component: defineAsyncComponent(() => import('@/components/content/tab/communication/DiscussionContent.vue'))
		}
	]
</script>

<template>
	<HeaderTitle title="주소정보 개발자 소통창구" />
	<SubHeaderTitle title="추천글" />
	<HorizontalBoard 
		:items="techTips.map(tip => ({
			image: tip.image,
			imageAlt: tip.imageAlt,
			title: tip.title,
			description: tip.description
		}))"
	/>

	<CommonTab :tabs="tabConfig" />
</template>

<style lang="scss" scoped>

</style>