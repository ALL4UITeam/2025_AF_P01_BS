<script setup>
  import { nextTick, ref, watch,  } from "vue";
	import Button from 'primevue/button';
	import CalendarDataOptions from './CalendarDataOptions.vue';
	
    import { Calendar as VCalendar, DatePicker } from 'v-calendar'
    import 'v-calendar/style.css'

	// 데이터 타입과 기간 타입 상태
	const selectedDataType = ref('all');
	const selectedPeriodType = ref('daily');
	
	// 선택된 날짜 상태
	const selectedDates = ref([]);
	
	// 캘린더 컬럼 수 설정
	const columns = ref(2);
	
	// 특정 날짜에 표시할 텍스트 속성
	const calendarAttributes = ref([
		{
			key: 'july-1',
			dot: true, 
			dates: new Date(new Date().getFullYear(), 5, 5), 
			popover: {
				label: '데이터 업데이트: 1개 파일 추가됨'
			}
		},
		{
			key: 'july-2',
			dot: true, 
			dates: new Date(new Date().getFullYear(), 5, 15),
			popover: {
				label: '새로운 데이터: 2개 파일 업로드됨'
			}
		},
		{
			key: 'july-3',
			dot: true, 
			dates: new Date(new Date().getFullYear(), 5, 24),
			popover: {
				label: '주요 업데이트: 3개 파일 수정됨'
			}
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

</script>

<template>
	<div class="calendar type01">
		<CalendarDataOptions 
			:dataOptions="{ showAllData: true, showChangeData: true }"
			:periodOptions="{ showMonthly: false, showDaily: true }"
			:initialDataType="selectedDataType"
			:initialPeriodType="selectedPeriodType"
			@dataTypeChange="handleDataTypeChange"
			@periodTypeChange="handlePeriodTypeChange"
		/>
		
		<VCalendar 
			:attributes="calendarAttributes"
			:min-date="new Date()"
			:max-date="new Date(Date.now() + 365 * 24 * 60 * 60 * 1000)"
			:is-double-paned="true"
			:first-day-of-week="1"
			:columns="columns"
			locale="ko"
			class="multiple"
			:masks="{ title: 'YYYY년 MMMM' }"
			:today="new Date()"
			:update-on-input="false"
			:show-adjacent-months="true"
		/>
		
		<div class="calendar__selectionBox">
			<div class="calendar__selectionData">
				선택한 데이터 
				<strong>21</strong>개 
				<strong class="count">0</strong>
				<span class="type">GB/20GB</span>
			</div>
			<div class="calendar__selectionButtons">
				<Button 
					class="button-krds secondary xlarge" 
					title="장바구니"
				>
				장바구니
				</Button>
				<Button 
					class="button-krds primary xlarge" 
					title="신청하기"
				>
				신청하기
				</Button>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/calendar/calendar';
	// @use '@/assets/scss/contents/calendar/multipleCalendar';
    @use '@/assets/scss/contents/input/input_checkbox';
</style>