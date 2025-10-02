<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  // Basic title text
  title: {
    type: String,
    required: true
  },
  titleType: {
    type: String,
    default: 'basic',
    validator: (value) => ['basic', 'question', 'answer', 'category'].includes(value)
  },
  // 카테고리 ('category')
  categoryText: {
    type: String,
    default: ''
  },
  author: {
    type: String,
    default: ''
  },
  date: {
    type: String,
    default: ''
  },
  viewCount: {
    type: Number,
    default: 0
  },
  noGap: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div class="detailHeading" :class="{ 'gap01': noGap }">
    <h4 class="detailHeading__title" v-if="titleType === 'basic'">{{ title }}</h4>
    
    <h4 class="detailHeading__title" v-else-if="titleType === 'question'">
      <img width="17" height="20" src="@images/common/img_q.png" alt="질문" /> {{ title }}
    </h4>
    
    <h4 class="detailHeading__title" v-else-if="titleType === 'answer'">
      <img width="18" height="17" src="@images/common/img_a.png" alt="답변" /> {{ title }}
    </h4>
    
    <h4 class="detailHeading__title" v-else-if="titleType === 'category'">
      <span class="detailHeading__type">{{ categoryText }}</span> {{ title }}
    </h4>

    <ul class="detailHeading__list" v-if="author || date || viewCount">
      <li v-if="author">
        작성자: {{ author }}
      </li>
      <li v-if="date">
        작성일: {{ date }}
      </li>
      <li v-if="viewCount">
        조회수: {{ viewCount }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.detailHeading {
  margin-top:48px;
  padding:40px 0;
  border-top:1px solid #1d1d1d;
  border-bottom:1px solid #B1B8BE;

  &.gap01 {
    margin-top:0;
  }

  &__title {
    display: flex;
    align-items: center;
    font-size:24px;
    font-weight: 700;
    
    img {
      margin-right: 16px;
    }
  }

  &__type {
    display: inline-flex;
    align-items: center;
    height: 24px;
    margin-right:16px;
    padding:0 8px;
    border-radius: 4px;
    background-color: #ECF2FE;
    color:#325ee6;
    font-size:15px;
    font-weight: 400;
  }

  &__list {
    display: flex;
    margin-top:10px;

    li {
      padding-left:17px;
      background: url('@images/common/bg_line.png') no-repeat 9px 7px;
      color:#1d1d1d;
      font-size: 17px;

      &:first-child {
        padding:0;
        background: none;
      }
    }
  }
}
</style> 