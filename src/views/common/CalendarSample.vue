<script setup>
import { ref } from "vue";
import BasicCalendar from '@/components/common/calendar/BasicCalendar.vue';
import MonthCalendar from '@/components/common/calendar/MonthCalendar.vue';
import MultipleCalendar from '@/components/common/calendar/MultipleCalendar.vue';
import CalendarDataOptions from '@/components/common/calendar/CalendarDataOptions.vue';

// 샘플용 상태 관리
const sampleDataType = ref('all');
const samplePeriodType = ref('monthly');

// 데이터 타입 변경 핸들러
const handleSampleDataTypeChange = (dataType) => {
  sampleDataType.value = dataType;
  console.log('샘플 데이터 타입 변경:', dataType);
};

// 기간 타입 변경 핸들러
const handleSamplePeriodTypeChange = (periodType) => {
  samplePeriodType.value = periodType;
  console.log('샘플 기간 타입 변경:', periodType);
};
</script>

<template>
  <div class="calendar-sample">
    <h2>캘린더 컴포넌트 샘플</h2>
    
    <!-- 1. BasicCalendar 샘플 -->
    <section class="sample-section">
      <h3>1. BasicCalendar (전체+변동 데이터, 월별+일별)</h3>
      <div class="sample-description">
        <p>• 데이터 옵션: 전체 데이터 + 변동 데이터 (라디오 버튼)</p>
        <p>• 기간 버튼: 월별 + 일별 (토글 버튼)</p>
      </div>
      <div class="sample-container">
        <BasicCalendar />
      </div>
    </section>

    <!-- 2. MonthCalendar 샘플 -->
    <section class="sample-section">
      <h3>2. MonthCalendar (전체+변동 데이터, 월별만)</h3>
      <div class="sample-description">
        <p>• 데이터 옵션: 전체 데이터 + 변동 데이터 (라디오 버튼)</p>
        <p>• 기간 버튼: 월별만</p>
      </div>
      <div class="sample-container">
        <MonthCalendar />
      </div>
    </section>

    <!-- 3. MultipleCalendar 샘플 -->
    <section class="sample-section">
      <h3>3. MultipleCalendar (전체+변동 데이터, 일별만)</h3>
      <div class="sample-description">
        <p>• 데이터 옵션: 전체 데이터 + 변동 데이터 (라디오 버튼)</p>
        <p>• 기간 버튼: 일별만</p>
      </div>
      <div class="sample-container">
        <MultipleCalendar />
      </div>
    </section>

    <!-- 4. CalendarDataOptions 개별 샘플들 -->
    <section class="sample-section">
      <h3>4. CalendarDataOptions 개별 옵션 샘플</h3>
      
      <!-- 4-1. 전체 데이터만 -->
      <div class="option-sample">
        <h4>4-1. 전체 데이터만</h4>
        <div class="sample-description">
          <p>• 데이터 옵션: 전체 데이터만</p>
          <p>• 기간 버튼: 월별 + 일별</p>
        </div>
        <div class="sample-container">
          <CalendarDataOptions 
            :dataOptions="{ showAllData: true, showChangeData: false }"
            :periodOptions="{ showMonthly: true, showDaily: true }"
            :initialDataType="sampleDataType"
            :initialPeriodType="samplePeriodType"
            @dataTypeChange="handleSampleDataTypeChange"
            @periodTypeChange="handleSamplePeriodTypeChange"
          />
        </div>
      </div>

      <!-- 4-2. 변동 데이터만 -->
      <div class="option-sample">
        <h4>4-2. 변동 데이터만</h4>
        <div class="sample-description">
          <p>• 데이터 옵션: 변동 데이터만</p>
          <p>• 기간 버튼: 월별 + 일별</p>
        </div>
        <div class="sample-container">
          <CalendarDataOptions 
            :dataOptions="{ showAllData: false, showChangeData: true }"
            :periodOptions="{ showMonthly: true, showDaily: true }"
            :initialDataType="sampleDataType"
            :initialPeriodType="samplePeriodType"
            @dataTypeChange="handleSampleDataTypeChange"
            @periodTypeChange="handleSamplePeriodTypeChange"
          />
        </div>
      </div>

      <!-- 4-3. 전체+변동 데이터 -->
      <div class="option-sample">
        <h4>4-3. 전체 데이터 + 변동 데이터</h4>
        <div class="sample-description">
          <p>• 데이터 옵션: 전체 데이터 + 변동 데이터</p>
          <p>• 기간 버튼: 월별 + 일별</p>
        </div>
        <div class="sample-container">
          <CalendarDataOptions 
            :dataOptions="{ showAllData: true, showChangeData: true }"
            :periodOptions="{ showMonthly: true, showDaily: true }"
            :initialDataType="sampleDataType"
            :initialPeriodType="samplePeriodType"
            @dataTypeChange="handleSampleDataTypeChange"
            @periodTypeChange="handleSamplePeriodTypeChange"
          />
        </div>
      </div>

      <!-- 4-4. 월별만 -->
      <div class="option-sample">
        <h4>4-4. 월별 버튼만</h4>
        <div class="sample-description">
          <p>• 데이터 옵션: 전체 데이터 + 변동 데이터</p>
          <p>• 기간 버튼: 월별만</p>
        </div>
        <div class="sample-container">
          <CalendarDataOptions 
            :dataOptions="{ showAllData: true, showChangeData: true }"
            :periodOptions="{ showMonthly: true, showDaily: false }"
            :initialDataType="sampleDataType"
            :initialPeriodType="samplePeriodType"
            @dataTypeChange="handleSampleDataTypeChange"
            @periodTypeChange="handleSamplePeriodTypeChange"
          />
        </div>
      </div>

      <!-- 4-5. 일별만 -->
      <div class="option-sample">
        <h4>4-5. 일별 버튼만</h4>
        <div class="sample-description">
          <p>• 데이터 옵션: 전체 데이터 + 변동 데이터</p>
          <p>• 기간 버튼: 일별만</p>
        </div>
        <div class="sample-container">
          <CalendarDataOptions 
            :dataOptions="{ showAllData: true, showChangeData: true }"
            :periodOptions="{ showMonthly: false, showDaily: true }"
            :initialDataType="sampleDataType"
            :initialPeriodType="samplePeriodType"
            @dataTypeChange="handleSampleDataTypeChange"
            @periodTypeChange="handleSamplePeriodTypeChange"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.calendar-sample {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;

  h2 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 30px;
    color: #333;
    border-bottom: 2px solid #007bff;
    padding-bottom: 10px;
  }

  .sample-section {
    margin-bottom: 50px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    padding: 20px;
    background-color: #fafafa;

    h3 {
      font-size: 18px;
      font-weight: bold;
      margin-bottom: 15px;
      color: #007bff;
    }

    .sample-description {
      background-color: #f8f9fa;
      padding: 15px;
      border-radius: 5px;
      margin-bottom: 20px;
      border-left: 4px solid #007bff;

      p {
        margin: 5px 0;
        color: #666;
        font-size: 14px;
      }
    }

    .sample-container {
      border: 1px solid #ddd;
      border-radius: 5px;
      padding: 20px;
      background-color: white;
    }
  }

  .option-sample {
    margin-bottom: 30px;
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 5px;
    background-color: white;

    h4 {
      font-size: 16px;
      font-weight: bold;
      margin-bottom: 10px;
      color: #495057;
    }

    .sample-description {
      background-color: #f8f9fa;
      padding: 10px;
      border-radius: 3px;
      margin-bottom: 15px;
      border-left: 3px solid #28a745;

      p {
        margin: 3px 0;
        color: #666;
        font-size: 13px;
      }
    }

    .sample-container {
      border: 1px solid #e9ecef;
      border-radius: 3px;
      padding: 15px;
      background-color: #fafafa;
    }
  }
}
</style> 