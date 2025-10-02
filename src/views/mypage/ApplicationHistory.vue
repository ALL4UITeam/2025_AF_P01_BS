<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'

	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import SearchForm from '@/components/common/search/SearchForm.vue'
	import TabApplicationHistory from '@/components/content/tab/TabApplicationHistory.vue'
	import CommonTab from '@/components/common/tab/CommonTab.vue'

	const buttonItems = [
		{ label: '전체 데이터', count: 8 },
		{ label: '공개하는 주소', count: 8 },
		{ label: '제공하는 주소', count: 8 }
	]

	const handleButtonClick = (item) => {
		console.log('선택된 항목:', item)
	}

	const handleSearch = ({ searchText, period, dateRange }) => {
		console.log('검색어:', searchText)
		console.log('선택된 기간:', period ? `${period}개월` : '사용자 지정 기간')
		console.log('시작일:', dateRange.start)
		console.log('종료일:', dateRange.end)
	}

	const tabConfig = [
		{
			header: '전체 (32)',
			component: defineAsyncComponent(() => import('@/components/content/tab/ApplicationHistory/TotalTab.vue'))
		},
		{
			header: '다운로드대기 (12)',
			component: defineAsyncComponent(() => import('@/components/content/tab/ApplicationHistory/WaitingDownloadTab.vue'))
		},
		{
			header: '다운로드완료 (8)',
			component: defineAsyncComponent(() => import('@/components/content/tab/ApplicationHistory/CompletedDownloadTab.vue'))
		},
		{
			header: '승인대기 (12)',
			component: defineAsyncComponent(() => import('@/components/content/tab/ApplicationHistory/WaitingApprovalTab.vue'))
		}
	]
</script>

<template>
	<HeaderTitle title="다운로드 신청내역" :mypage="true" />
	<TabApplicationHistory :items="buttonItems" @click="handleButtonClick" />
	<SearchForm type01 @search="handleSearch" />

	<CommonTab :tabs="tabConfig" />
</template>
