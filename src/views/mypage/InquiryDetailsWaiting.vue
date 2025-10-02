<script setup>
	import { ref, onMounted, computed } from 'vue'
	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import DetailHeading from '@/components/common/detail/DetailHeading.vue'
	import DetailContent from '@/components/common/detail/DetailContent.vue'
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'
	
	const handleList = () => {
		console.log('목록');
	}
	const handleModify = () => {
		console.log('수정');
	}



</script>

<template>
	<HeaderTitle title="나의 문의글" :mypage="true"  />
    
	<DetailHeading
		title="주소검색 API와 주소검색 솔루션, 뭐가 다를까?"
		titleType="question"
		author="홍길동"
		date="2025.03.27 11:30"
	/>

    <DetailContent 
		content=""
	/>

    <DetailBottomButtons
        type="both"
        :leftButtons="[
            { text: '목록으로', onClick: handleList, class: 'tertiary xlarge' }
        ]"
        :rightButtons="[
            { text: '수정하기', onClick: handleModify, class: 'primary xlarge' },
        ]"
    />
</template>

