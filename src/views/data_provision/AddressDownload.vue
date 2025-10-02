<script setup>
	import { ref, onMounted, computed } from 'vue'
    import Button from 'primevue/button'

	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import SubHeaderTitle from '@/components/common/title/SubHeaderTitle.vue'
	import SearchResultHeader from '@/components/common/search_result/SearchResultHeader.vue'
	import AddressCard from '@/components/common/box/AddressCard.vue'
	import CustomPaginator from '@/components/common/paginator/CustomPaginator.vue'

	const sampleData = ref([
		{
			id: 1,
			title: '체크박스 + 4개 badge 예시',
			description: '체크박스가 있고 4개의 badge가 있는 카드입니다.',
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
			title: '체크박스 없음 + 2개 badge 예시',
			description: '체크박스가 없고 2개의 badge만 있는 카드입니다.',
			updateDate: '2023.12.24',
			background: 'type02',
			badges: [
				{ text: 'PDF', type: 'primary' },
				{ text: '문서', type: 'secondary' }
			]
		},
		{
			id: 3,
			title: '1개 badge만 있는 예시',
			description: '1개의 badge만 있는 카드입니다.',
			updateDate: '2023.12.23',
			background: 'type03',
			badges: [
				{ text: 'EXCEL', type: 'tertiary' }
			]
		},
		{
			id: 4,
			title: '1개 badge만 있는 예시',
			description: '1개의 badge만 있는 카드입니다.',
			updateDate: '2023.12.23',
			background: 'type03',
			badges: [
				{ text: 'EXCEL', type: 'tertiary' }
			]
		}
	])

	// 이벤트 핸들러들
	const handleDownload = (itemId) => {
		console.log('다운로드:', itemId)
		alert(`다운로드: ${itemId}`)
	}

	const handleDetail = (itemId) => {
		console.log('자세히보기:', itemId)
		alert(`자세히보기: ${itemId}`)
	}

	const handleLike = (itemId) => {
		console.log('좋아요:', itemId)
		alert(`좋아요: ${itemId}`)
	}
</script>

<template>
	<HeaderTitle title="주소정보 다운로드" />
	<div class="addressDownload__header">
		<SubHeaderTitle title="주소정보 큐레이션" marginTop="0" />
		<div class="addressDownload__more">
			<span class="addressDownload__moreTip">데이터 상세검색이 필요하신가요?</span> 
			<a href="#" class="addressDownload__link"  title="큐레이션으로 보기">상세검색 바로가기</a>
		</div>
	</div>

	<ul class="addressDownload__category">
		<li>
			<Button class="addressDownload__button type01 active" title="전체보기">
				<img aria-hidden="true" src="@images/common/button/btn_que01.svg" alt="전체보기 아이콘" /><br />
				전체
			</Button>
		</li>
		<li>
			<Button class="addressDownload__button type02" title="주소보기">
				<img aria-hidden="true" src="@images/common/button/btn_que02.svg" alt="주소보기 아이콘" /><br />
				주소
			</Button>
		</li>
		<li>
			<Button class="addressDownload__button type03" title="도로보기">
				<img aria-hidden="true" src="@images/common/button/btn_que03.svg" alt="도로보기 아이콘" /><br />
				도로
			</Button>
			</li>
		<li><Button class="addressDownload__button type04" title="건물보기">
				<img aria-hidden="true" src="@images/common/button/btn_que04.svg" alt="건물보기 아이콘" /><br />
				건물
			</Button>
		</li>
		<li><Button class="addressDownload__button type05" title="출입구보기">
				<img aria-hidden="true" src="@images/common/button/btn_que05.svg" alt="출입구보기 아이콘" /><br />
				출입구
			</Button>
		</li>
		<li><Button class="addressDownload__button type06" title="사물보기">
				<img aria-hidden="true" src="@images/common/button/btn_que06.svg" alt="사물보기 아이콘" /><br />
				사물
			</Button>
		</li>
		<li><Button class="addressDownload__button type07" title="시설물보기">
				<img aria-hidden="true" src="@images/common/button/btn_que07.svg" alt="시설물보기 아이콘" /><br />
				시설물
			</Button>
		</li>
		<li><Button class="addressDownload__button type08" title="기타정보보기">
				<img aria-hidden="true" src="@images/common/button/btn_que08.svg" alt="기타정보 아이콘" /><br />
				기타정보
			</Button>
		</li>
	</ul>

	<SearchResultHeader 
		:publicAddressCount="50" 
		:providedAddressCount="30" 
		resultType="both" 
		:sortTypes="[
			{ label: '관련도순', value: 'relevance' },
			{ label: '최신순', value: 'latest' }
		]"
	/>

	<ul class="addressDownload__list">
		<li v-for="item in sampleData" :key="item.id">
			<AddressCard
				:show-checkbox="false"
				:background="item.background"
				:badges="item.badges"
				:title="item.title"
				:description="item.description"
				:update-date="item.updateDate"
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
    />
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/box/box';
	@use '@/assets/scss/contents/page/AddressDownload';

</style>