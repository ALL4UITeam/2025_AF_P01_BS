<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'

	import CommonTab from '@/components/common/tab/CommonTab.vue'
	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'

	const tabConfig = [
		{
			header: '주소정보 다운로드',
			component: defineAsyncComponent(() => import('@/components/content/tab/addressInformation/AddressDownloadTab.vue'))
		},
		{
			header: '데이터 구성',
			component: defineAsyncComponent(() => import('@/components/content/tab/addressInformation/DataOrganization.vue'))
		},
		{
			header: '스키마 구성',
			component: defineAsyncComponent(() => import('@/components/content/tab/addressInformation/DiscussionContent.vue'))
		}
	]
</script>

<template>
	<HeaderTitle title="주소정보 다운로드" />
	<CommonTab :tabs="tabConfig" />
</template>

