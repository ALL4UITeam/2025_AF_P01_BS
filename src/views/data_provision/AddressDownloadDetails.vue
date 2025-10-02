<script setup>
	import { ref, onMounted, computed, watch  } from 'vue'
    import Button from 'primevue/button'
    import Checkbox from 'primevue/checkbox'
    import RadioButton from 'primevue/radiobutton'

	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import SubHeaderTitle from '@/components/common/title/SubHeaderTitle.vue'
	import SearchResultHeader from '@/components/common/search_result/SearchResultHeader.vue'
	import AddressCard from '@/components/common/box/AddressCard.vue'
	import CustomPaginator from '@/components/common/paginator/CustomPaginator.vue'
	import BasicCalendar from '@/components/common/calendar/BasicCalendar.vue'
	// import MonthCalendar from '@/components/common/calendar/MonthCalendar.vue'

    

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

	// 체크박스 데이터
	const dataDivisionOptions = ref([
		{ label: '전체', value: 'all' },
		{ label: '공개하는 주소', value: 'public' },
		{ label: '제공하는 주소', value: 'provided' }
	])

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
		<SubHeaderTitle title="주소정보 상세검색" />
		<div class="addressDownload__more">
			<span class="addressDownload__moreTip">데이터 상세검색이 필요하신가요?</span> 
			<a href="#" class="addressDownload__link"  title="큐레이션으로 보기">상세검색 바로가기</a>
		</div>
	</div>

	<div class="addressInformationDetails__filter">
		<div class="addressInformationDetails__category type01">
			
			<div class="addressInformationDetails__header">데이터 구분</div>
			<div class="addressInformationDetails__content">
				<ul class="addressInformationDetails__categoryList">
					<li v-for="option in dataDivisionOptions" :key="option.value">
						<Checkbox
							class="small"
							v-model="selectedDataDivision"
							:value="option.value"
							:inputId="'dataDivision_' + option.value"
						/>
						<label :for="'dataDivision_' + option.value">{{ option.label }}</label>
					</li>
				</ul>
			</div>

		</div>
		<div class="addressInformationDetails__category type02">
			<div class="addressInformationDetails__header">데이터 유형</div>
			<div class="addressInformationDetails__content">
				<ul class="addressInformationDetails__categoryList">
					<li v-for="option in dataTypeOptions" :key="option.value">
						<Checkbox
							class="small"
							v-model="selectedDataType"
							:value="option.value"
							:inputId="'dataType_' + option.value"
						/>
						<label :for="'dataType_' + option.value">{{ option.label }}</label>
					</li>
				</ul>
			</div>
		</div>
		<div class="addressInformationDetails__category type03">
			<div class="addressInformationDetails__header">카테고리</div>
			<div class="addressInformationDetails__content">
				<ul class="addressInformationDetails__categoryList">
					<li v-for="option in categoryOptions" :key="option.value">
						<Checkbox
							class="small"
							v-model="selectedCategories"
							:value="option.value"
							:inputId="'category_' + option.value"
						/>
						<label :for="'category_' + option.value">{{ option.label }}</label>
					</li>
				</ul>
			</div>
		</div>
		<div class="addressInformationDetails__category type04">
			<div class="addressInformationDetails__header">선택한 주소 데이터</div>
			<div class="addressInformationDetails__content">
				<ul class="addressInformationDetails__categoryList">
					<li v-for="option in selectedAddressOptions" :key="option.value">
						<RadioButton
							class="small"
							v-model="selectedAddress"
							:value="option.value"
							:inputId="'selectedAddress_' + option.value"
						/>
						<label :for="'selectedAddress_' + option.value">{{ option.label }}</label>
					</li>
				</ul>
			</div>
		</div>
		<div class="addressInformationDetails__category type05">
			<div class="addressInformationDetails__header">날짜 선택</div>
			<div class="addressInformationDetails__calendar">
				<BasicCalendar />
				<!-- <MonthCalendar /> -->
			</div>
		</div>
	</div>

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
	@use '@/assets/scss/contents/page/addressInformationDetails';
    @use '@/assets/scss/contents/input/input_checkbox';
    @use '@/assets/scss/contents/input/input_radio';
</style>