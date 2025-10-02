<script setup>
import { ref } from 'vue'
import InputText from 'primevue/inputtext'
import Button from 'primevue/button'
import Calendar from 'primevue/calendar'

const props = defineProps({
  placeholder: {
    type: String,
    default: '검색어를 입력해주세요.'
  },
  type01: {
    type: Boolean,
    default: false
  }
})

const searchText = ref('')
const selectedPeriod = ref(null)
const startDate = ref(null)
const endDate = ref(null)

const handleSearch = () => {
  emit('search', { 
    searchText: searchText.value, 
    period: selectedPeriod.value,
    dateRange: {
      start: startDate.value,
      end: endDate.value
    }
  })
}

const handleClear = () => {
  searchText.value = ''
  selectedPeriod.value = null
  startDate.value = null
  endDate.value = null
}

const emit = defineEmits(['search'])
</script>

<template>
  <div class="searchForm" :class="{ 'type01': type01 }" role="search" aria-label="검색">
    <div class="searchForm__periodSelector">
      <div class="searchForm__periodGroup" role="group" aria-label="검색 기간 선택">
          <Button 
            class="searchForm__button"
            :class="{'active': selectedPeriod === '1'}"
            @click="selectedPeriod = selectedPeriod === '1' ? null : '1'"
            label="1개월"
            aria-label="1개월 선택"
            :aria-pressed="selectedPeriod === '1'"
          />
          <Button 
            class="searchForm__button"
            :class="{'active': selectedPeriod === '3'}"
            @click="selectedPeriod = selectedPeriod === '3' ? null : '3'"
            label="3개월"
            aria-label="3개월 선택"
            :aria-pressed="selectedPeriod === '3'"
          />
          <Button 
            class="searchForm__button"
            :class="{'active': selectedPeriod === '6'}"
            @click="selectedPeriod = selectedPeriod === '6' ? null : '6'"
            label="6개월"
            aria-label="6개월 선택"
            :aria-pressed="selectedPeriod === '6'"
          />
      </div>
      <div class="searchForm__dateRange">
        <Calendar 
          v-model="startDate" 
          inputId="startDate"
          :showIcon="true"
          :maxDate="endDate"
          dateFormat="yy.mm.dd"
          placeholder="YYYY.MM.DD"
          aria-label="시작 날짜"
        />
        <label class="blind" for="startDate">시작일</label>
        <span class="searchForm__dateRangeGap">-</span>
        <Calendar 
          v-model="endDate" 
          inputId="endDate"
          :showIcon="true"
          :minDate="startDate"
          dateFormat="yy.mm.dd"
          placeholder="YYYY.MM.DD"
          aria-label="종료 날짜"
        />
        <label class="blind" for="endDate">종료일</label>
      </div>
    </div>
    <div class="searchForm__inputBox">
      <label class="blind" for="headerSearch">{{ placeholder }}</label>
      <InputText 
        v-model="searchText"
        id="headerSearch"
        autocomplete="off"
        aria-label="검색어 입력"
      />
      <Button @click="handleClear" v-show="searchText" class="clearButton" title="삭제">
        <span class="blind">삭제</span>
        <i aria-hidden="true" class="bi bi-x" />
      </Button>
      <Button 
        class="searchForm__searchButton" 
        @click="handleSearch"
        aria-label="검색 실행"
      >
        <span class="blind">검색</span>
      </Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/search/search_form';

</style> 