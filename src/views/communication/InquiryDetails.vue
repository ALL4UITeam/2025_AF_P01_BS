<script setup>
	import { ref, onMounted, computed } from 'vue'
	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import DetailHeading from '@/components/common/detail/DetailHeading.vue'
	import DetailContent from '@/components/common/detail/DetailContent.vue'
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'

	const handleList = () => {
		console('목록으로 이동');
	}

</script>

<template>
	<HeaderTitle title="주소정보 개발자 소통창구" />

    <!-- 질문 -->
    <DetailHeading
        title="[제공하는주소] 도로명주소 건물 도형"
        titleType="question"
        author="홍길동"
        date="2025.03.27"
        :viewCount="275"
    />
    
    <DetailContent content="<p>일반 텍스트</p>" />
    
    <!-- 답변 -->
    <DetailHeading
        title="[제공하는주소] 도로명주소 건물 도형"
        titleType="answer"
        author="홍길동"
        date="2025.03.27"
        :viewCount="275"
        noGap
    />
    <DetailContent content="<p>일반 텍스트</p>" />
    
    <DetailBottomButtons
        type="left"
        :leftButtons="[
            { text: '목록으로', onClick: handleList, class: 'tertiary xlarge' }
        ]"
    />

</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/table/datatable';
</style>