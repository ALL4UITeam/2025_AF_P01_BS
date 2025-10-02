<script setup>
import { ref } from 'vue'
import Button from 'primevue/button'

// active 상태 관리
const isActive = ref(false)

const props = defineProps({
  // 체크박스 관련 props
  showCheckbox: {
    type: Boolean,
    default: false
  },
  selectedItems: {
    type: Array,
    default: () => []
  },
  itemId: {
    type: [String, Number],
    default: null
  },
  
  // badge 관련 props
  badges: {
    type: Array,
    default: () => []
  },
  
  // 배경 타입 (type01 ~ type22)
  background: {
    type: String,
    default: '',
    validator: (value) => {
      if (!value) return true // 빈 값 허용
      return /^type(0[1-9]|1[0-9]|2[0-2])$/.test(value)
    }
  },
  
  // 카드 내용 관련 props
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  updateDate: {
    type: String,
    default: ''
  },
  
  // 버튼 관련 props
  showDownloadButton: {
    type: Boolean,
    default: true
  },
  showDetailButton: {
    type: Boolean,
    default: true
  },
  showLikeButton: {
    type: Boolean,
    default: true
  },
  
  // 이벤트 핸들러
  onCheckboxChange: {
    type: Function,
    default: null
  },
  onDownload: {
    type: Function,
    default: null
  },
  onDetail: {
    type: Function,
    default: null
  },
  onLike: {
    type: Function,
    default: null
  }
})

const emit = defineEmits(['checkbox-change', 'download', 'detail', 'like', 'update:selectedItems'])

const handleCheckboxChange = (event) => {
  // selectedItems가 배열이 아니거나 itemId가 null인 경우 처리
  if (!Array.isArray(props.selectedItems) || props.itemId === null) {
    return
  }
  
  const checked = event.target.checked
  const newSelectedItems = [...props.selectedItems]
  
  if (checked) {
    // 체크된 경우 아이템 추가
    if (!newSelectedItems.includes(props.itemId)) {
      newSelectedItems.push(props.itemId)
    }
  } else {
    // 체크 해제된 경우 아이템 제거
    const index = newSelectedItems.indexOf(props.itemId)
    if (index > -1) {
      newSelectedItems.splice(index, 1)
    }
  }
  
  if (props.onCheckboxChange) {
    props.onCheckboxChange(newSelectedItems)
  }
  emit('checkbox-change', newSelectedItems)
  emit('update:selectedItems', newSelectedItems)
}

const handleDownload = () => {
  if (props.onDownload) {
    props.onDownload()
  }
  emit('download')
}

const handleDetail = () => {
  if (props.onDetail) {
    props.onDetail()
  }
  emit('detail')
}

const handleLike = () => {
  // active 상태 토글
  isActive.value = !isActive.value
  
  if (props.onLike) {
    props.onLike()
  }
  emit('like')
}
</script>

<template>
  <div :class="['addressCard', background]">
    <div class="addressCard__selectFunction">
      <div class="addressCard__type">
        <template v-if="showCheckbox">
          <input 
            type="checkbox"
            :id="'selectItem_' + itemId"
            :checked="Array.isArray(selectedItems) && itemId !== null ? selectedItems.includes(itemId) : false"
            @change="handleCheckboxChange"
            class="p-checkbox"
          />
          <label class="blind" :for="'selectItem_' + itemId">선택</label>
        </template>
        
        <span 
          v-for="(badge, index) in badges.slice(0, 4)" 
          :key="index" 
          :class="['badge', badge.type]"
        >
          {{ badge.text }}
        </span>
      </div>
      
      <div v-if="showLikeButton" class="addressCard__likeBox">
        <Button 
          :title="isActive ? '좋아요 해제' : '좋아요 선택'" 
          :class="['addressCard__like', { active: isActive }]" 
          @click="handleLike"
        >
          <span class="blind">좋아요</span>
        </Button>
      </div>
    </div>
    
    <!-- 카드 제목 -->
    <div class="addressCard__titleBox">
      <span class="addressCard__title">{{ title }}</span>
    </div>
    
    <!-- 카드 설명 -->
    <p v-if="description" class="addressCard__text">{{ description }}</p>
    
    <!-- 업데이트 날짜 -->
    <div v-if="updateDate" class="addressCard__update">
      업데이트날짜 
      <span class="addressCard__updateDate">{{ updateDate }}</span>
    </div>
    
    <!-- 액션 버튼들 -->
    <div class="addressCard__function">
      <Button class="addressCard__download" v-if="showDownloadButton" @click="handleDownload">다운로드</Button>
      <Button class="addressCard__detail" v-if="showDetailButton" @click="handleDetail">자세히보기</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/contents/input/input_checkbox';
@use '@/assets/scss/contents/box/address_card';
@use '@/assets/scss/contents/badge/commonBadge';
</style> 