<script setup lang="ts">
import { ref, watch, computed } from "vue";
import Button from 'primevue/button';

// Props 정의
const props = defineProps({
  // 데이터 옵션 표시 설정
  dataOptions: {
    type: Object,
    default: () => ({
      showAllData: true, 
      showChangeData: true,
    })
  },
  // 기간 버튼 표시 설정
  periodOptions: {
    type: Object,
    default: () => ({
      showMonthly: true,
      showDaily: true,
    })
  },
  // 초기 선택값 'all', 'change'  / 'monthly', 'daily'
  initialDataType: {
    type: String,
    default: 'all',
  },
  initialPeriodType: {
    type: String,
    default: 'monthly'
  }
});

const emit = defineEmits(['dataTypeChange', 'periodTypeChange']);

const selectedDataType = ref(props.initialDataType);
const selectedPeriodType = ref(props.initialPeriodType);

watch(selectedDataType, (newValue) => {
  emit('dataTypeChange', newValue);
});
watch(selectedPeriodType, (newValue) => {
  emit('periodTypeChange', newValue);
});

const handlePeriodClick = (periodType: 'monthly' | 'daily') => {
  selectedPeriodType.value = periodType;
};

// ✅ 추가: 데이터 타입 버튼 핸들러
const handleDataClick = (dataType: 'all' | 'change') => {
  selectedDataType.value = dataType;
};

// --- 표시 조건(기존 그대로) ---
const showAllDataOnly = computed(() =>
  props.dataOptions.showAllData && !props.dataOptions.showChangeData
);
const showChangeDataOnly = computed(() =>
  !props.dataOptions.showAllData && props.dataOptions.showChangeData
);
const showBothData = computed(() =>
  props.dataOptions.showAllData && props.dataOptions.showChangeData
);

const showMonthlyOnly = computed(() =>
  props.periodOptions.showMonthly && !props.periodOptions.showDaily
);
const showDailyOnly = computed(() =>
  !props.periodOptions.showMonthly && props.periodOptions.showDaily
);
const showBothPeriods = computed(() =>
  props.periodOptions.showMonthly && props.periodOptions.showDaily
);
</script>

<template>
  <div class="calendar__dataOptions">
    <!-- 데이터 옵션 (라디오 버튼) -->
    <div class="calendar__periodButtons" v-if="showAllDataOnly || showChangeDataOnly || showBothData">
      <Button v-if="dataOptions.showAllData" class="button-krds tertiary xsmall calendar__dayButton"
        :class="{ active: selectedDataType === 'all' }" :aria-pressed="selectedDataType === 'all'" type="button"
        title="전체 데이터 조회" @click="handleDataClick('all')">
        전체
      </Button>

      <Button v-if="dataOptions.showChangeData" class="button-krds tertiary xsmall calendar__dayButton"
        :class="{ active: selectedDataType === 'change' }" :aria-pressed="selectedDataType === 'change'" type="button"
        title="변동 데이터 조회" @click="handleDataClick('change')">
        변동
      </Button>
    </div>

    <!-- 기간 버튼 -->
    <div class="krds-switch" role="group" aria-label="기간 선택" @keydown.left.prevent="selectedPeriodType = 'monthly'"
      @keydown.right.prevent="selectedPeriodType = 'daily'" tabindex="0">
      <!-- 이동하는 하얀 'thumb' -->
      <div class="krds-switch__thumb" :class="selectedPeriodType === 'daily' ? 'is-right' : 'is-left'"
        aria-hidden="true"></div>

      <!-- 월별 -->
      <!-- 월별 -->
      <button type="button" class="krds-switch__btn" :class="{ 'is-active': selectedPeriodType === 'monthly' }"
        :aria-pressed="selectedPeriodType === 'monthly'" @click="handlePeriodClick('monthly')">
        <span class="krds-switch__check" aria-hidden="true" v-if="selectedPeriodType === 'monthly'"></span>
        <span>월별</span>
      </button>

      <!-- 일별 -->
      <button type="button" class="krds-switch__btn" :class="{ 'is-active': selectedPeriodType === 'daily' }"
        :aria-pressed="selectedPeriodType === 'daily'" @click="handlePeriodClick('daily')">
        <span class="krds-switch__check" aria-hidden="true" v-if="selectedPeriodType === 'daily'"></span>
        <span>일별</span>
      </button>
    </div>

  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/contents/calendar/calendar';

</style> 