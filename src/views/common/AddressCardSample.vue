<script setup>
import { ref } from 'vue'
import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
import AddressCard from '@/components/common/box/AddressCard.vue'

// 선택된 아이템들
const selectedItems = ref([])

// 다양한 샘플 데이터
const sampleData = ref([
  {
    id: 1,
    title: '체크박스 + 4개 badge 예시',
    description: '체크박스가 있고 4개의 badge가 있는 카드입니다.',
    updateDate: '2023.12.25',
    background: 'type01',
    badges: [
      { text: 'TXT', type: '' },
      { text: '제공하는 주소', type: 'primary' },
      { text: 'JSON', type: 'tertiary' },
      { text: 'SHP', type: 'secondary' }
    ]
  },
  {
    id: 2,
    title: '체크박스 없음 + 2개 badge 예시',
    description: '체크박스가 없고 2개의 badge만 있는 카드입니다.',
    updateDate: '2023.12.24',
    background: 'type02',
    badges: [
      { text: 'PDF', type: 'primary' },
      { text: '문서', type: 'secondary' }
    ]
  },
  {
    id: 3,
    title: '1개 badge만 있는 예시',
    description: '1개의 badge만 있는 카드입니다.',
    updateDate: '2023.12.23',
    background: 'type03',
    badges: [
      { text: 'EXCEL', type: 'tertiary' }
    ]
  },
  {
    id: 4,
    title: '좋아요 버튼 없는 예시',
    description: '좋아요 버튼이 없는 카드입니다.',
    updateDate: '2023.12.22',
    background: 'type04',
    badges: [
      { text: 'CSV', type: '' },
      { text: '데이터', type: 'primary' }
    ]
  },
  {
    id: 5,
    title: '배경 타입 type10 예시',
    description: 'type10 배경을 사용하는 카드입니다.',
    updateDate: '2023.12.21',
    background: 'type10',
    badges: [
      { text: 'XML', type: 'primary' },
      { text: 'API', type: 'secondary' }
    ]
  },
  {
    id: 6,
    title: '배경 타입 type22 예시',
    description: 'type22 배경을 사용하는 카드입니다.',
    updateDate: '2023.12.20',
    background: 'type22',
    badges: [
      { text: 'DB', type: 'tertiary' },
      { text: '데이터베이스', type: 'primary' }
    ]
  }
])

// 이벤트 핸들러들
const handleCheckboxChange = (event) => {
  console.log('체크박스 변경:', event)
}

const handleDownload = (itemId) => {
  console.log('다운로드:', itemId)
}

const handleDetail = (itemId) => {
  console.log('자세히보기:', itemId)
}

const handleLike = (itemId) => {
  console.log('좋아요:', itemId)
}
</script>

<template>
  <HeaderTitle title="AddressCard 컴포넌트 샘플" />
  
  <div class="sample-section">
    <h2>1. 체크박스 + 4개 badge</h2>
    <AddressCard
      :show-checkbox="true"
      :selected-items="selectedItems"
      :item-id="sampleData[0].id"
      :background="sampleData[0].background"
      :badges="sampleData[0].badges"
      :title="sampleData[0].title"
      :description="sampleData[0].description"
      :update-date="sampleData[0].updateDate"
      @checkbox-change="handleCheckboxChange"
      @download="() => handleDownload(sampleData[0].id)"
      @detail="() => handleDetail(sampleData[0].id)"
      @like="() => handleLike(sampleData[0].id)"
    />
  </div>

  <div class="sample-section">
    <h2>2. 체크박스 없음 + 2개 badge</h2>
    <AddressCard
      :show-checkbox="false"
      :background="sampleData[1].background"
      :badges="sampleData[1].badges"
      :title="sampleData[1].title"
      :description="sampleData[1].description"
      :update-date="sampleData[1].updateDate"
      @download="() => handleDownload(sampleData[1].id)"
      @detail="() => handleDetail(sampleData[1].id)"
      @like="() => handleLike(sampleData[1].id)"
    />
  </div>

  <div class="sample-section">
    <h2>3. 1개 badge만</h2>
    <AddressCard
      :show-checkbox="false"
      :background="sampleData[2].background"
      :badges="sampleData[2].badges"
      :title="sampleData[2].title"
      :description="sampleData[2].description"
      :update-date="sampleData[2].updateDate"
      @download="() => handleDownload(sampleData[2].id)"
      @detail="() => handleDetail(sampleData[2].id)"
      @like="() => handleLike(sampleData[2].id)"
    />
  </div>

  <div class="sample-section">
    <h2>4. 좋아요 버튼 없음</h2>
    <AddressCard
      :show-checkbox="false"
      :background="sampleData[3].background"
      :badges="sampleData[3].badges"
      :title="sampleData[3].title"
      :description="sampleData[3].description"
      :update-date="sampleData[3].updateDate"
      :show-like-button="false"
      @download="() => handleDownload(sampleData[3].id)"
      @detail="() => handleDetail(sampleData[3].id)"
    />
  </div>

  <div class="sample-section">
    <h2>5. 배경 타입 type10</h2>
    <AddressCard
      :show-checkbox="false"
      :background="sampleData[4].background"
      :badges="sampleData[4].badges"
      :title="sampleData[4].title"
      :description="sampleData[4].description"
      :update-date="sampleData[4].updateDate"
      @download="() => handleDownload(sampleData[4].id)"
      @detail="() => handleDetail(sampleData[4].id)"
      @like="() => handleLike(sampleData[4].id)"
    />
  </div>

  <div class="sample-section">
    <h2>6. 배경 타입 type22</h2>
    <AddressCard
      :show-checkbox="false"
      :background="sampleData[5].background"
      :badges="sampleData[5].badges"
      :title="sampleData[5].title"
      :description="sampleData[5].description"
      :update-date="sampleData[5].updateDate"
      @download="() => handleDownload(sampleData[5].id)"
      @detail="() => handleDetail(sampleData[5].id)"
      @like="() => handleLike(sampleData[5].id)"
    />
  </div>
</template>

<style lang="scss" scoped>
.sample-section {
  margin-bottom: 40px;
  
  h2 {
    margin-bottom: 20px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
}

</style> 