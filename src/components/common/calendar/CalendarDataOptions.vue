<script setup>
import { ref, watch, computed } from "vue";
import Button from 'primevue/button';
import RadioButton from 'primevue/radiobutton';

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

const handlePeriodClick = (periodType) => {
  selectedPeriodType.value = periodType;
};

// 표시할 데이터
const showAllDataOnly = computed(() => 
  props.dataOptions.showAllData && !props.dataOptions.showChangeData
);

const showChangeDataOnly = computed(() => 
  !props.dataOptions.showAllData && props.dataOptions.showChangeData
);

const showBothData = computed(() => 
  props.dataOptions.showAllData && props.dataOptions.showChangeData
);

// 표시할 기간
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
    <div class="calendar__checkboxGroup" v-if="showAllDataOnly || showChangeDataOnly || showBothData">
      <div class="calendar__checkboxItem" v-if="dataOptions.showAllData">
        <RadioButton 
          class="p-radiobutton xsmall"
          v-model="selectedDataType" 
          value="all"
          inputId="allData"
          title="전체 데이터 선택"
        />
        <label for="allData">전체 데이터</label>
      </div>
      <div class="calendar__checkboxItem" v-if="dataOptions.showChangeData">
        <RadioButton 
          class="p-radiobutton xsmall"
          v-model="selectedDataType" 
          value="change"
          inputId="changeData"
          title="변동 데이터 선택"
        />
        <label for="changeData">변동 데이터</label>
      </div>
    </div>

    <!-- 기간 버튼 -->
    <div class="calendar__periodButtons" v-if="showMonthlyOnly || showDailyOnly || showBothPeriods">
      <Button 
        v-if="periodOptions.showMonthly"
        class="button-krds tertiary xsmall calendar__dayButton" 
        :class="{ active: selectedPeriodType === 'monthly' }"
        @click="handlePeriodClick('monthly')"
        title="월별 데이터 조회"
      >
        월별
      </Button>
      <Button 
        v-if="periodOptions.showDaily"
        class="button-krds tertiary xsmall calendar__dayButton" 
        :class="{ active: selectedPeriodType === 'daily' }"
        @click="handlePeriodClick('daily')"
        title="일별 데이터 조회"
      >
        일별
      </Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/contents/calendar/calendar';
@use '@/assets/scss/contents/input/input_radio';

</style> 