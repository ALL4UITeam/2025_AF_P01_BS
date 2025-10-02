<script setup>
	import { ref, onMounted, computed } from 'vue'
	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import DetailHeading from '@/components/common/detail/DetailHeading.vue'
	import DetailContent from '@/components/common/detail/DetailContent.vue'
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'
	
	const handleDel = () => {
		console.log('삭제');
	}	
	const handleList = () => {
		console.log('목록');
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
		content="<div><img src='' alt='테스트' /></div><p>일반 텍스트</p>"
	/>

	<DetailHeading
		title="주소검색 API와 주소검색 솔루션, 뭐가 다를까?"
		titleType="answer"
		categoryText="Tech&Tips"
		author="홍길동"
		date="2025.03.27"
		:viewCount="275"
		noGap
	/>

    <DetailContent 
		content="<div><img src='' alt='테스트' /></div><p>일반 텍스트</p>"
	/>

    <DetailBottomButtons
        type="both"
        :leftButtons="[
            { text: '삭제하기', onClick: handleDel, class: 'tertiary xlarge' }
        ]"
        :rightButtons="[
            { text: '목록으로', onClick: handleList, class: 'primary xlarge' },
        ]"
    />
</template>

<style lang="scss" scoped>
	// @use '@/assets/scss/contents/table/datatable';
</style>