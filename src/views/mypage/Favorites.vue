<script setup>
	import { ref, onMounted, computed } from 'vue'
    import Button from 'primevue/button'
	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import CustomPaginator from '@/components/common/paginator/CustomPaginator.vue'
	import AddressCard from '@/components/common/box/AddressCard.vue'

	// 선택된 아이템들
	const selectedItems = ref([])
	
	// 샘플 데이터
	const favoritesData = ref([
		{
			id: 1,
			title: '도로명이 부여된 도로 도형',
			description: '도로명 주소 기준의 데이터베이스 대략 600만여 건의 한글 도로명 주소로 구성 되어있습니다.',
			updateDate: '2023.12.25',
			background: 'type01',
			badges: [
				{ text: 'TXT', type: '' },
				{ text: '제공하는 주소', type: 'primary' },
				{ text: 'JSON', type: 'tertiary' },
				{ text: 'SHP', type: 'secondary' }
			]
		},
        {
			id: 2,
			title: '도로명이 부여된 도로 도형',
			description: '도로명 주소 기준의 데이터베이스 대략 600만여 건의 한글 도로명 주소로 구성 되어있습니다.',
			updateDate: '2023.12.25',
			background: 'type02',
			badges: [
				{ text: 'TXT', type: '' },
				{ text: '제공하는 주소', type: 'primary' },
			]
		},
        {
			id: 3,
			title: '333도로명이 부여된 도로 도형',
			description: '도로명 주소 기준의 데이터베이스 대략 600만여 건의 한글 도로명 주소로 구성 되어있습니다.',
			updateDate: '2023.12.25',
			background: 'type02',
			badges: [
				{ text: 'TXT', type: '' },
				{ text: '제공하는 주소', type: 'primary' },
			]
		},
        {
			id: 4,
			title: '24421도로명이 부여된 도로 도형',
			description: '도로명 주소 기준의 데이터베이스 대략 600만여 건의 한글 도로명 주소로 구성 되어있습니다.',
			updateDate: '2023.12.25',
			background: 'type02',
			badges: [
				{ text: 'TXT', type: '' },
				{ text: '제공하는 주소', type: 'primary' },
			]
		},
	])

	const handlePageChange = (event) => {
		console.log('클릭');
	}

	// 체크박스 변경 이벤트
	const handleCheckboxChange = (event) => {
		console.log('체크박스 변경:', event);
	}

	// 다운로드 이벤트
	const handleDownload = (itemId) => {
		console.log('다운로드:', itemId);
	}

	// 자세히보기 이벤트
	const handleDetail = (itemId) => {
		console.log('자세히보기:', itemId);
	}

	// 좋아요 이벤트
	const handleLike = (itemId) => {
		console.log('좋아요:', itemId);
	}
</script>

<template>
	<HeaderTitle title="나의 즐겨찾기" :mypage="true" />
	<div class="contentList__total">전체 <span class="count">{{ favoritesData.length }}</span>건</div>
    <ul class="contentList">
        <li v-for="item in favoritesData" :key="item.id">
            <AddressCard
                :show-checkbox="false"
                v-model:selected-items="selectedItems"
                :item-id="item.id"
                :background="item.background"
                :badges="item.badges"
                :title="item.title"
                :description="item.description"
                :update-date="item.updateDate"
                :show-download-button="true"
                :show-detail-button="true"
                :show-like-button="true"
                @checkbox-change="handleCheckboxChange"
                @download="() => handleDownload(item.id)"
                @detail="() => handleDetail(item.id)"
                @like="() => handleLike(item.id)"
            />
        </li>
    </ul>
    <CustomPaginator 
        :rows="10" 
        :totalRecords="100" 
        :pageLinkSize="8"
        @page="handlePageChange"
    />
	<div class="empty-wrap">
		<img src="@/assets/images/etc/thumb_small_404.png" alt="즐겨찾기가 현재 비어있습니다.">
		<p>나의 즐겨찾기가 현재 비어있습니다.</p>
	</div>
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/list/card_list';
	@use '@/assets/scss/contents/list/Error';
</style>