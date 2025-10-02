<script setup>
	import { ref, onMounted, computed } from 'vue'
	import DetailHeading from '@/components/common/detail/DetailHeading.vue'
	import DetailContent from '@/components/common/detail/DetailContent.vue'
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'

	const handleList = () => {
		// 목록으로 이동
	}

	const handleEdit = () => {
		// 수정 처리
	}

	const handleDelete = () => {
		// 삭제 처리
	}
	
</script>

<template>
	<div class="demo">

		<!-- Basic title -->
		<DetailHeading
			title="제목"
			titleType="basic"
		/>
		
		<!-- Question title -->
		<DetailHeading
			title="[제공하는주소] 도로명주소 건물 도형"
			titleType="question"
		/>
		
		<!-- Answer title -->
		<DetailHeading
			title="[제공하는주소] 도로명주소 건물 도형"
			titleType="answer"
		/>
		
		<!-- Category title with metadata -->
		<DetailHeading
			title="주소검색 API와 주소검색 솔루션, 뭐가 다를까?"
			titleType="category"
			categoryText="Tech&Tips"
			author="홍길동"
			date="2025.03.27"
			:viewCount="275"
		/>

		<DetailHeading
			title="주소검색 API와 주소검색 솔루션, 뭐가 다를까?"
			titleType="category"
			categoryText="dsds"
			date="2025.03.27"
			:viewCount="275"
		/>

    <DetailContent content="<p>일반 텍스트</p>" />

    <!-- 양쪽에 버튼이 있는 경우 -->
    <DetailBottomButtons
        type="both"
        :leftButtons="[
            { text: '목록으로', onClick: handleList, class: 'secondary' }
        ]"
        :rightButtons="[
            { text: '수정', onClick: handleEdit, class: 'primary' },
            { text: '삭제', onClick: handleDelete, class: 'danger' }
        ]"
    />

    <!-- 왼쪽 버튼만 있는 경우 -->
    <DetailBottomButtons
        type="left"
        :leftButtons="[
            { text: '목록으로', onClick: handleList, class: 'secondary' }
        ]"
    />

    <!-- 오른쪽 버튼만 있는 경우 -->
    <DetailBottomButtons
        type="right"
        :rightButtons="[
            { text: '수정', onClick: handleEdit, class: 'primary' },
            { text: '삭제', onClick: handleDelete, class: 'danger' }
        ]"
    />

    <!-- 가운데 버튼만 있는 경우 -->
    <DetailBottomButtons
        type="center"
        :centerButtons="[
            { text: '저장', onClick: handleSave, class: 'primary' }
        ]"
    />


	</div>
</template>

<style lang="scss" scoped>
.demo {
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.demo-row {
	display: flex;
	gap: 12px;
	align-items: center;
	flex-wrap: wrap;
}
</style>