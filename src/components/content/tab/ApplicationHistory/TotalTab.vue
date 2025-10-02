<script setup>
  import { ref, onMounted, watch } from 'vue'
  import Button from 'primevue/button'
  import Checkbox from 'primevue/checkbox'
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column'
  
  const items = ref([])
  const selectAll = ref(false)
  const selectedItems = ref([])
  const selectedTableRows = ref({}) // 각 항목별로 선택된 행들을 관리
  const expandedItems = ref(new Set()) // 각 아이템별로 테이블 표시 상태를 관리
	
  // 파일 다운로드 함수
  const handleFileDownload = (row, item) => {
    console.log('파일 다운로드:')
  }

  // 전체 선택 체크박스 변경 감지 (외부 항목만)
  watch(selectAll, (newValue) => {
    if (newValue) {
      selectedItems.value = items.value.map(item => item.id)
    } else {
      selectedItems.value = []
    }
  })

  // 상세보기 토글 함수
  const toggleDetail = (itemId) => {
    if (expandedItems.value.has(itemId)) {
      expandedItems.value.delete(itemId)
    } else {
      expandedItems.value.add(itemId)
    }
  }

  onMounted(() => {
    // 임시 데이터
    items.value = [
      { 
        id: 1, 
        date: '2025.03.21', 
        category: '사물주소', 
        updateDate: '2025.02.21',
        status: 'completed', // 'completed', 'waiting', 'pending' 중 하나
        badges: [
          { type: 'default', text: 'TXT' },
          { type: 'primary', text: '제공하는 주소' }
        ],
        tableData: [
          {
            type:'TXT', 
            date:'2025-12-31', 
            status:'다운로드 완료', 
            isdownload:'2025.12.11', 
            canDownload: true,
          },
          {
            type:'JSON', 
            date:'2025-12-31', 
            status:'다운로드 대기', 
            isdownload:'2025.12.11', 
            canDownload: true, 
          }
        ]
      },
      { 
        id: 2, 
        date: '2025.03.22', 
        category: '도로명주소', 
        updateDate: '2025.02.22',
        status: 'waiting',
        badges: [
          { type: 'tertiary', text: 'JSON' },
          { type: 'secondary', text: 'SHP' },
          { type: 'primary', text: '제공하는 주소' }
        ],
        tableData: [
          {
            type:'SHP', 
            date:'2025-12-30', 
            status:'다운로드 대기', 
            isdownload:'2025.12.11', 
            canDownload: false,
          }
        ]
      }
    ]


  })
</script>

<template>
  <div class="downloadRequestDetails__total">
    <div class="downloadRequestDetails__totalAll">
      <Checkbox v-model="selectAll" :binary="true" inputId="selectAll" class="small" />
      <label for="selectAll">전체 선택</label>
    </div>
    <Button class="downloadRequestDetails__totalDownload" title="전체 다운로드">다운로드</Button>
  </div>
  <ul class="downloadRequestDetails__list">
    <li v-for="item in items" :key="item.id" class="downloadRequestDetails__listItem">
      <div class="downloadRequestDetails__header">
        <div class="downloadRequestDetails__selectBox">
          <div class="downloadRequestDetails__type">
            <Checkbox v-model="selectedItems" :value="item.id" :inputId="'selectItem_' + item.id" />
            <label class="blind" :for="'selectItem_' + item.id">선택</label>
            <span v-if="item.status === 'completed'" class="badge senary">다운로드 완료</span>
            <span v-else-if="item.status === 'waiting'" class="badge quinary">다운로드 대기</span>
            <span v-else-if="item.status === 'pending'" class="badge quinary">승인대기</span>
          </div>
          <div class="downloadRequestDetails__badge">
            <span v-for="(badge, index) in item.badges" 
                  :key="index" 
                  :class="['badge', badge.type]">
              {{ badge.text }}
            </span>
          </div>
        </div>
        <div class="downloadRequestDetails__dateBox">
          다운로드 날짜 <span class="downloadRequestDetails__date">{{ item.date }}</span>
        </div>
      </div>
      <p class="downloadRequestDetails__category">{{ item.category }}</p>
      <div class="downloadRequestDetails__update">
        업데이트날짜 
        <span class="downloadRequestDetails__updateDate">{{ item.updateDate }}</span>
      </div>
      <div class="downloadRequestDetails__function">
        <Button class="downloadRequestDetails__more" title="상세 테이블 보기" @click="toggleDetail(item.id)">상세보기</Button>
        <Button class="button-krds tertiary xsmall" title="전체 다운로드">다운로드</Button>
      </div>
      <div v-if="expandedItems.has(item.id)" class="downloadRequestDetails__tableBox">
        <DataTable 
            class="tableStyle01"
            :value="item.tableData"
            v-model:selection="selectedTableRows[item.id]"
            dataKey="type"
          >
            <Column selectionMode="multiple"style="width:40px;" />
            <Column header="데이터 종류" field="type" class="alignLeft" style="width:216px;">
              <template #body="slotProps">
                  {{slotProps.data.type}} 
              </template>
            </Column>
            <Column header="선택날짜" field="date" style="width:150px;" />
            <Column header="상태" field="status" style="width:140px;">
              <template #body="slotProps">
                <span v-if="slotProps.data.status === '다운로드 대기'">
                  다운로드 대기
                </span>
                <span v-else-if="slotProps.data.status === '다운로드 완료'" class="pointerColor02">
                  다운로드 완료
                </span>
                <span v-else>
                  {{ slotProps.data.status }}
                </span>
              </template>
            </Column>
            <Column header="다운로드됨" field="isdownload" style="width:150px;" />
            <Column header="다운로드" style="width:120px;">
              <template #body="slotProps">
                  <Button 
                    title="파일 다운로드"
                    @click="handleFileDownload(slotProps.data, item)"
                    class="button-krds tertiary xsmall"
                    :disabled="!slotProps.data.canDownload"
                  >
                    다운로드
                  </Button>
              </template>
            </Column>
          </DataTable>
      </div>
    </li>
  </ul>

</template>


<style lang="scss" scoped>
	@use '@/assets/scss/contents/table/datatable';
	@use '@/assets/scss/contents/page/downloadRequestDetails';
	@use '@/assets/scss/contents/badge/commonBadge';
	@use '@/assets/scss/contents/input/input_checkbox';
</style> 