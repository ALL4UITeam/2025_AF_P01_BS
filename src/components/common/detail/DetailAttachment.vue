<script setup>
import { defineProps } from 'vue'
import Button from 'primevue/button'

const props = defineProps({
  attachments: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<template>
  <div class="attachment" v-if="attachments.length > 0">
    <div class="attachment__title">첨부파일</div>
    <div class="attachment__contents">
      <ul class="attachment__list">
        <li v-for="(file, index) in attachments" :key="index" class="attachment__item">
          {{ file.name }} ({{ file.type }}, {{ file.size }})
        </li>
      </ul>
      <div class="attachment__download">
        <Button class="button-krds tertiary small">
          <span class="attachment__button">전체 압축 파일 받기</span>
        </Button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.attachment {
  display: flex;
  gap:24px;
  padding:40px 0;
  border-bottom:1px solid #B1B8BE;
  
  &__title {
    color:#1d1d1d;
    font-size:17px;
    font-weight: bold;
  }

  &__item {
      color:#1d1d1d;
      font-size:17px;
  }

  &__download {
    margin-top:8px;
  }

  &__button {
    display: inline-block;
    padding-right:20px;
    background: url('@images/common/button/btn_download.svg') no-repeat right 7px;
    
  }
}
</style> 