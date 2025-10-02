<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'

	import CommonTab from '@/components/common/tab/CommonTab.vue'
	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'

	const tabConfig = [
		{
			header: '도로명주소 데이터 연계 절차',
			component: defineAsyncComponent(() => import('@/components/content/tab/AddressLinkage/DataLinkage.vue'))
		},
		{
			header: '도로명주소 데이터 연계 활용 예제',
			component: defineAsyncComponent(() => import('@/components/content/tab/AddressLinkage/UsageExamples.vue'))
		}
	]

	const handleData = () => {
		// 데이터 연계신청
	}

</script>

<template>
	<HeaderTitle title="주소정보 데이터 연계" />
	<CommonTab :tabs="tabConfig" />
    <DetailBottomButtons
        type="right"
        :rightButtons="[
            { text: '데이터 연계신청', onClick: handleData, class: 'primary' },
        ]"
    />
</template>

