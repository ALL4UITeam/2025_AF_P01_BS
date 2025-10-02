<script setup>
import { defineProps, computed } from 'vue'

const props = defineProps({
  steps: {
    type: Array,
    required: true,
    default: () => []
  }
})

// 마지막 li 바로 전에 line 클래스 추가
const getStepClass = (index) => {
  if (index === props.steps.length - 2) {
    return 'line'
  }
  return ''
}
</script>

<template>
  <ol class="stepperContainer">
    <li 
      v-for="(step, index) in steps" 
      :key="index"
      :class="getStepClass(index)"
    >
      <p class="stepperContainer__header">
        <strong class="stepperContainer__number">{{ index + 1 }}</strong>
        <span class="stepperContainer__title">{{ step.title }}</span> 
        <span v-if="step.type" class="stepperContainer__type">{{ step.type }}</span>
      </p>
      <div class="stepperContainer__content">
        <slot :name="`step-${index + 1}`" :step="step" :index="index">
          <!-- 기본 슬롯 내용 -->
        </slot>
      </div>
    </li>
  </ol>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/contents/list/stepper';
</style> 