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
	<HeaderTitle title="주소정보 공지사항" />

    <DetailHeading
        title="PC용 주소검색기를 제공합니다."
		titleType="basic"
        date="2025.03.27"
        :viewCount="275"
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