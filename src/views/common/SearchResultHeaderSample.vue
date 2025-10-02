<script setup>
import { ref } from 'vue'
import SearchResultHeader from '@/components/common/search_result/SearchResultHeader.vue'

// 실제 데이터 시뮬레이션
const searchData = ref({
  total: 1250,
  public: 850,
  provided: 400
})

// 동적 데이터
const dynamicData = ref({
  total: 100,
  public: 60,
  provided: 40
})

// 정렬 이벤트 핸들러
const handleSort = (sortValue) => {
  console.log('정렬 변경:', sortValue)
  alert(`정렬 기준이 "${sortValue}"로 변경되었습니다.`)
}

// 데이터 업데이트 함수
const updateCounts = () => {
  dynamicData.value = {
    total: Math.floor(Math.random() * 500) + 50,
    public: Math.floor(Math.random() * 300) + 30,
    provided: Math.floor(Math.random() * 200) + 20
  }
}

// 데이터 초기화 함수
const resetCounts = () => {
  dynamicData.value = {
    total: 100,
    public: 60,
    provided: 40
  }
}

// 다양한 정렬 옵션 정의
const sortOptions = {
  basic: [
    { label: '관련도순', value: 'relevance' },
    { label: '최신순', value: 'latest' },
    { label: '인기순', value: 'popular' }
  ]
}
</script>

<template>
  <div class="searchResultHeaderSample">
    <div class="sample-container">
      <h1 class="sample-title">SearchResultHeader 컴포넌트 샘플</h1>
      
      <div class="sample-section">
        <h2 class="section-title">1. 단일 검색 결과 (기본)</h2>
        <div class="sample-item">
          <SearchResultHeader :totalCount="100" />
        </div>
      </div>

      <div class="sample-section">
        <h2 class="section-title">2. 공개하는 주소만 표시</h2>
        <div class="sample-item">
          <SearchResultHeader 
            :publicAddressCount="50" 
            resultType="public" 
          />
        </div>
      </div>

      <div class="sample-section">
        <h2 class="section-title">3. 제공하는 주소만 표시</h2>
        <div class="sample-item">
          <SearchResultHeader 
            :providedAddressCount="30" 
            resultType="provided" 
          />
        </div>
      </div>

      <div class="sample-section">
        <h2 class="section-title">4. 공개하는 주소와 제공하는 주소 모두 표시</h2>
        <div class="sample-item">
          <SearchResultHeader 
            :publicAddressCount="50" 
            :providedAddressCount="30" 
            resultType="both" 
          />
        </div>
      </div>

      <div class="sample-section">
        <h2 class="section-title">5. 통합 표시 (전체 + 세부)</h2>
        <div class="sample-item">
          <SearchResultHeader 
            :totalCount="80" 
            :publicAddressCount="50" 
            :providedAddressCount="30" 
            resultType="combined" 
          />
        </div>
      </div>

      <div class="sample-section">
        <h2 class="section-title">6. 기본 정렬 옵션 (관련도순, 최신순, 인기순)</h2>
        <div class="sample-item">
          <SearchResultHeader 
            :totalCount="150"
            :sortTypes="sortOptions.basic"
            defaultSort="relevance"
            @sort="handleSort"
          />
        </div>
      </div>

      <div class="sample-section">
        <h2 class="section-title">7. 2개 항목 정렬 옵션 (관련도순, 최신순)</h2>
        <div class="sample-item">
          <SearchResultHeader 
            :totalCount="120"
            :sortTypes="[
              { label: '관련도순', value: 'relevance' },
              { label: '최신순', value: 'latest' }
            ]"
            defaultSort="relevance"
            @sort="handleSort"
          />
        </div>
      </div>

      <div class="sample-section">
        <h2 class="section-title">8. 커스텀 정렬 옵션 (이름순, 등록일순, 조회수순)</h2>
        <div class="sample-item">
          <SearchResultHeader 
            :totalCount="150"
            :sortTypes="[
              { label: '이름순', value: 'name' },
              { label: '등록일순', value: 'date' },
              { label: '조회수순', value: 'views' }
            ]"
            defaultSort="name"
            @sort="handleSort"
          />
        </div>
      </div>

      <div class="sample-section">
        <h2 class="section-title">9. 실제 데이터 시뮬레이션</h2>
        <div class="sample-item">
          <SearchResultHeader 
            :totalCount="searchData.total"
            :publicAddressCount="searchData.public"
            :providedAddressCount="searchData.provided"
            resultType="combined"
            @sort="handleSort"
          />
        </div>
      </div>

      <div class="sample-section">
        <h2 class="section-title">10. 동적 데이터 변경</h2>
        <div class="sample-controls">
          <button @click="updateCounts" class="update-btn">데이터 업데이트</button>
          <button @click="resetCounts" class="reset-btn">초기화</button>
        </div>
        <div class="sample-item">
          <SearchResultHeader 
            :totalCount="dynamicData.total"
            :publicAddressCount="dynamicData.public"
            :providedAddressCount="dynamicData.provided"
            resultType="both"
            @sort="handleSort"
          />
        </div>
      </div>

      <div class="sample-section">
        <h2 class="section-title">11. 2번째 정렬 옵션 우선 활성화 (최신순)</h2>
        <div class="sample-item">
          <SearchResultHeader 
            :totalCount="150"
            :sortTypes="sortOptions.basic"
            :activeIndex="1"
            @sort="handleSort"
          />
        </div>
      </div>

      <div class="sample-section">
        <h2 class="section-title">12. 3번째 정렬 옵션 우선 활성화 (인기순)</h2>
        <div class="sample-item">
          <SearchResultHeader 
            :totalCount="150"
            :sortTypes="sortOptions.basic"
            :activeIndex="2"
            @sort="handleSort"
          />
        </div>
      </div>

      <div class="sample-section">
        <h2 class="section-title">13. 커스텀 정렬에서 2번째 옵션 우선 활성화 (등록일순)</h2>
        <div class="sample-item">
          <SearchResultHeader 
            :totalCount="150"
            :sortTypes="[
              { label: '이름순', value: 'name' },
              { label: '등록일순', value: 'date' },
              { label: '조회수순', value: 'views' }
            ]"
            :activeIndex="1"
            @sort="handleSort"
          />
        </div>
      </div>

      <div class="sample-section">
        <h2 class="section-title">14. 2개 항목 정렬에서 2번째 옵션 우선 활성화 (최신순)</h2>
        <div class="sample-item">
          <SearchResultHeader 
            :totalCount="120"
            :sortTypes="[
              { label: '관련도순', value: 'relevance' },
              { label: '최신순', value: 'latest' }
            ]"
            :activeIndex="1"
            @sort="handleSort"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.searchResultHeaderSample {
  padding: 40px;
  background-color: #f5f5f5;
  min-height: 100vh;

  .sample-container {
    max-width: 1200px;
    margin: 0 auto;
    background-color: white;
    border-radius: 8px;
    padding: 40px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }

  .sample-title {
    font-size: 28px;
    font-weight: 700;
    color: #1d1d1d;
    margin-bottom: 40px;
    text-align: center;
    border-bottom: 2px solid #004fd3;
    padding-bottom: 20px;
  }

  .sample-section {
    margin-bottom: 50px;
    padding: 30px;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #fafafa;

    &:hover {
      border-color: #004fd3;
      box-shadow: 0 2px 8px rgba(0, 77, 211, 0.1);
    }
  }

  .section-title {
    font-size: 20px;
    font-weight: 600;
    color: #1d1d1d;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
  }

  .sample-item {
    background-color: white;
    padding: 20px;
    border-radius: 6px;
    border: 1px solid #e8e8e8;
  }

  .sample-controls {
    margin-bottom: 20px;
    display: flex;
    gap: 10px;

    button {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;

      &.update-btn {
        background-color: #004fd3;
        color: white;

        &:hover {
          background-color: #003bb0;
        }
      }

      &.reset-btn {
        background-color: #6c757d;
        color: white;

        &:hover {
          background-color: #5a6268;
        }
      }
    }
  }
}
</style> 