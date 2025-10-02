<script setup>
  import { nextTick, ref, watch,  } from "vue";
	import Button from 'primevue/button';
	import Calendar from 'primevue/calendar';
	import Checkbox from 'primevue/checkbox';
	import CalendarDataOptions from './CalendarDataOptions.vue';
	
	// 데이터 타입과 기간 타입 상태
	const selectedDataType = ref('all');
	const selectedPeriodType = ref('monthly');
	
	const locale = {
		firstDayOfWeek: 0,
		dayNames: ['일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일'],
		dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
		dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
		monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
		today: '오늘',
		clear: '지우기'
	};

	// 데이터 타입 변경 핸들러
	const handleDataTypeChange = (dataType) => {
		selectedDataType.value = dataType;
		console.log('선택된 데이터 타입:', dataType);
	};

	// 기간 타입 변경 핸들러
	const handlePeriodTypeChange = (periodType) => {
		selectedPeriodType.value = periodType;
		console.log('선택된 기간 타입:', periodType);
	};

	// 월 선택 핸들러
	const onMonthSelect = (date) => {
		console.log('선택된 월:', date);
	};

	// 초기화 핸들러
	const onReset = () => {
		console.log('초기화');
	};

	// 다운로드 핸들러
	const onDownload = () => {
		console.log('다운로드');
		console.log('데이터 타입:', selectedDataType.value);
		console.log('기간 타입:', selectedPeriodType.value);
	};
</script>

<template>
<div class="calendar">
		<CalendarDataOptions 
			:dataOptions="{ showAllData: true, showChangeData: true }"
			:periodOptions="{ showMonthly: true, showDaily: false }"
			:initialDataType="selectedDataType"
			:initialPeriodType="selectedPeriodType"
			@dataTypeChange="handleDataTypeChange"
			@periodTypeChange="handlePeriodTypeChange"
		/>
		<Calendar 
			:locale="locale"
			:inline="true"
			view="month"
			dateFormat="yy-mm"
			:showButtonBar="false"
			:showIcon="false"
			@date-select="onMonthSelect"
			class="w-full"
		/>

		<div class="calendar__actionSection">
			<div class="calendar__dataSize">120GB</div>
			<div class="calendar__actionButtons">
				<Button 
					class="button-krds tertiary small" 
					@click="onReset" 
					title="선택된 날짜 초기화"
				>
				초기화
				</Button>
				<Button 
					class="button-krds primary small" 
					@click="onDownload" 
					title="선택된 데이터 다운로드"
				>
				다운로드
				</Button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/calendar/calendar';
	@use '@/assets/scss/contents/calendar/basicCalendar';
</style>