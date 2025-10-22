<script setup>
	import { ref, onMounted, computed, watch, defineAsyncComponent  } from 'vue'
    import Button from 'primevue/button'
    import Checkbox from 'primevue/checkbox'
    import RadioButton from 'primevue/radiobutton'

	import CommonTab from '@/components/common/tab/CommonTab.vue'
	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import SubHeaderTitle from '@/components/common/title/SubHeaderTitle.vue'
	import SearchResultHeader from '@/components/common/search_result/SearchResultHeader.vue'
	import AddressCard from '@/components/common/box/AddressCard.vue'
	import AddressBasket from '@/components/common/box/AddressBasket.vue'
	import CustomPaginator from '@/components/common/paginator/CustomPaginator.vue'
	import BasicCalendar from '@/components/common/calendar/BasicCalendar.vue'
	import LoadingBar from '@/components/common/etc/LoadingBar.vue'
	// import MonthCalendar from '@/components/common/calendar/MonthCalendar.vue'

	const dataCateList = ref([
		{
			id: 'road_kor',
			title: '도로명주소 한글',
			badges: [
				{ text: 'TXT', type: '' },
			],
			description: '도로명주소한글DB는 도로명주소 기준의 DB입니다.',
			href: '#',
			
		},
		{
			id: 'road_eng',
			title: '도로명주소 영문',
			badges: [
				{ text: 'TXT', type: '' },
			],
			description: '도로명주소 영문 표기로 제공되는 데이터입니다.',
			href: '#'
		}
	])

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
		}
	])

	// 데이터 종류 옵션 (원하는 라벨/값으로 교체)
	const dataKindOptions = [
	{ value: 'public',   label: '공개하는 주소' },
	{ value: 'provided', label: '제공하는 주소' },
	]
	// 선택된 데이터 종류
	const selectedDataKind = ref(dataKindOptions[0].value)
	const selectDataKind = (value) => { selectedDataKind.value = value }

	const dataTypeOptions = ref([
		{ label: '전체', value: 'all' },
		{ label: 'TXT', value: 'txt' },
		{ label: 'SHP', value: 'shp' },
		{ label: 'JSON', value: 'json' }
	])

	const categoryOptions = ref([
		{ label: '전체', value: 'all' },
		{ label: '도로명주소 한글', value: 'road_korean' },
		{ label: '도로명주소 영문', value: 'road_english' },
		{ label: '상세주소 표시', value: 'detail_address' },
		{ label: '상세주소 동 표시', value: 'detail_dong' },
		{ label: '사물주소', value: 'object_address' },
		{ label: '도로명', value: 'road_name' },
		{ label: '건물 DB', value: 'building_db' },
		{ label: '주소 DB', value: 'address_db' },
		{ label: '사서함주소 DB', value: 'po_box_db' },
		{ label: '영문도로명주소 DB', value: 'english_road_db' },
		{ label: '상세주소 DB', value: 'detail_address_db' },
		{ label: '도로명주소 출입구 정보', value: 'entrance_info' }
	])

	const selectedAddressOptions = ref([
		{ label: '도로명주소 한글', value: 'road_korean' },
		{ label: '도로명주소 영문', value: 'road_english' },
		{ label: '상세주소 표시', value: 'detail_address' },
		{ label: '상세주소 동 표시', value: 'detail_dong' }
	])

	// 선택된 값들
	const selectedDataDivision = ref([])
	const selectedDataType = ref([])
	const selectedCategories = ref([])
	const selectedAddress = ref('')

	const badgeText = (badges = []) => badges.map(b => b.text).join(' · ')
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
	
	// 즐겨찾기
	const favorites = ref(new Set(JSON.parse(localStorage.getItem('favs') || '[]')))

	const isFav = (id) => favorites.value.has(id)
	const toggleFav = (id) => {
		const s = favorites.value
		s.has(id) ? s.delete(id) : s.add(id)
		localStorage.setItem('favs', JSON.stringify([...s]))
	}

	// 장바구니
	const open = ref(true)
	const items = ref([
		{ id: 1, title: '도로명주소 건물 도형', whole: ['2025.03', '2025.02'], change: '2025.04' },
		{ id: 2, title: '도로명주소 건물 도형', whole: ['2025.03', '2025.02'], change: '2025.04' },
		{ id: 3, title: '도로명주소 건물 도형', whole: ['2025.03', '2025.02'], change: '2025.04' },
		{ id: 4, title: '도로명주소 건물 도형', whole: ['2025.03', '2025.02'], change: '2025.04' },
	])

	function handleApply(selected) {
		console.log('apply:', selected)
	}

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
	<div class="addressDownload__header">
		<SubHeaderTitle title="주소정보 상세검색" />
		<div class="addressDownload__more">
			<span class="addressDownload__moreTip">데이터 상세검색이 필요하신가요?</span>
			<a href="#" class="addressDownload__link" title="큐레이션으로 보기">상세검색 바로가기</a>
		</div>
	</div>
	<div class="addressInformationType__filter">
		<div class="addressInformationType__desc">다운로드하려는 <strong>데이터 종류</strong>를 먼저 선택하세요.</div>
		<div class="addressInformationType__content" role="radiogroup" aria-label="데이터 종류 선택">
			<button v-for="opt in dataKindOptions" :key="opt.value" type="button" class="data-kind__btn" :class="[
				{ 'is-active': selectedDataKind === opt.value },`${opt.value}`]" :aria-pressed="selectedDataKind === opt.value" @click="selectDataKind(opt.value)">
				<span class="data-kind__icon" aria-hidden="true"></span>
				<span class="data-kind__label">{{ opt.label }}</span>
			</button>
		</div>
	</div>
	<div class="addressInformationDetails__filter">
		<div class="addressInformationDetails__category type01">
			<div class="addressInformationDetails__header">데이터 유형</div>
			<div class="addressInformationDetails__content">
				<ul class="addressInformationDetails__categoryList">
					<li v-for="option in dataTypeOptions" :key="option.value">
						<Checkbox class="small" v-model="selectedDataType" :value="option.value"
							:inputId="'dataType_' + option.value" />
						<label :for="'dataType_' + option.value">{{ option.label }}</label>
					</li>
				</ul>
			</div>
		</div>

		<div class="addressInformationDetails__category type02">
			<div class="addressInformationDetails__header">데이터 구분</div>
			<div class="addressInformationDetails__content">
				<ul class="addressInformationDetails__categoryView">
					<li v-for="item in dataCateList" :key="item.id">
						<div class="cate-item" :aria-label="item.title">
							<div class="cate-item__con">
								<div class="cate-item__titleRow">
									<button class="cate-item__star" :class="{ 'is-active': isFav(item.id) }"
										:aria-pressed="isFav(item.id)" :title="isFav(item.id) ? '즐겨찾기 해제' : '즐겨찾기 추가'"
										type="button" @click="toggleFav(item.id)">
									</button>
									<strong class="title">{{ item.title }}</strong>
									<span v-for="(badge, index) in item.badges.slice(0, 1)"
										:key="`${item.id}-${badge.text}-${index}`"
										:class="['badge', badge.type || 'default']">
										{{ badge.text }}
									</span>
								</div>
								<p class="cate-item__desc">{{ item.description }}</p>
							</div>

							<div class="cate-item__cta">
								<button type="button" class="ctaText" :aria-label="`${item.title} – 자세히 보기`"
									@click="onCta(item)">
									자세히 보기
								</button>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<div class="addressInformationDetails__category type03">
			<div class="addressInformationDetails__header">날짜 선택</div>
			<div class="addressInformationDetails__calendar">
				<BasicCalendar />
				<!-- <MonthCalendar /> -->
			</div>
		</div>
	</div>


	<div class="addressInformationDetails__viweTi">
		<h3>도로명이 부여된 도로 도형</h3>
		<div class="btn-inner">
			<button>데이터 연계신청</button>
			<button>서비스 체험하기</button>	
		</div>
	</div>
	<CommonTab :tabs="tabConfig" />

	
	<AddressBasket
		v-model="open"
		:items="items"
		title="제공하는 주소 장바구니"
		@update:items="items = $event"
		@apply="handleApply"
	/>


	<!-- <LoadingBar label="처리 중" />
	<LoadingBar :progress="42" label="업로드 중" /> -->
</template>



<style lang="scss" scoped>
	@use '@/assets/scss/contents/box/box';
	@use '@/assets/scss/contents/page/AddressDownload';
	@use '@/assets/scss/contents/page/addressInformationDetails';
    @use '@/assets/scss/contents/input/input_checkbox';
    @use '@/assets/scss/contents/input/input_radio';
	@use '@/assets/scss/contents/badge/commonBadge';
</style>