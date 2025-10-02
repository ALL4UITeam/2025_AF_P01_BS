<script setup>
  import { nextTick, ref, watch,  } from "vue";
	import Button from 'primevue/button';
    import { Calendar as VCalendar, DatePicker } from 'v-calendar'
    import 'v-calendar/style.css'
	import Checkbox from 'primevue/checkbox';
	import CalendarDataOptions from './CalendarDataOptions.vue';

	// 데이터 타입과 기간 타입 상태
	const selectedDataType = ref('all');
	const selectedPeriodType = ref('monthly');
	
	// 선택된 날짜 상태
	const selectedDate = ref(null);
	const selectedDates = ref([]);
	
	// 6월 26일부터 30일까지의 attributes 설정
	const calendarAttributes = ref([
		{
			key: 'june26-30',
			highlight: true,
			dates: {start: new Date(2025, 6, 16), end: new Date(2025, 6, 28)}
		}
	]);
	

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

	// 날짜 선택 이벤트 핸들러
	const onDateSelect = (date) => {
		console.log('선택된 날짜:', date);
		selectedDate.value = date;
	};

	// 날짜 범위 선택 이벤트 핸들러
	const onDatesSelect = (dates) => {
		console.log('선택된 날짜들:', dates);
		selectedDates.value = dates;
	};

	// 버튼 이벤트 핸들러
	const onReset = () => {
		console.log('초기화 버튼 클릭');
		selectedDate.value = null;
		selectedDates.value = [];
	};

	const onDownload = () => {
		console.log('다운로드 버튼 클릭');
		console.log('선택된 날짜:', selectedDate.value);
		console.log('선택된 날짜들:', selectedDates.value);
		console.log('데이터 타입:', selectedDataType.value);
		console.log('기간 타입:', selectedPeriodType.value);
	};

</script>

<template>
	<div class="calendar">
		<CalendarDataOptions 
			:dataOptions="{ showAllData: true, showChangeData: true }"
			:periodOptions="{ showMonthly: true, showDaily: true }"
			:initialDataType="selectedDataType"
			:initialPeriodType="selectedPeriodType"
			@dataTypeChange="handleDataTypeChange"
			@periodTypeChange="handlePeriodTypeChange"
		/>
		
		<VCalendar 
			v-model="selectedDates"
			:attributes="calendarAttributes"
			locale="ko"
			:masks="{ title: 'YYYY년 MMMM' }"
			:today="new Date()"
			:is-expanded="true"
			:is-range="true"
			@dayclick="onDateSelect"
			@update:modelValue="onDatesSelect"
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
</style>