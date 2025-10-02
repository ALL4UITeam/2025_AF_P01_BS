<script setup>
	import { ref, onMounted, watch } from 'vue'
	import Button from 'primevue/button'
	import Checkbox from 'primevue/checkbox'
	import DataTable from 'primevue/datatable'
	import Column from 'primevue/column'
	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import TabApplicationHistory from '@/components/content/tab/TabApplicationHistory.vue'
  
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
const buttonItems = [
	{ label: '전체 데이터', count: 8 },
]
</script>

<template>
	<HeaderTitle title="장바구니" :mypage="true"  />
    <div class="shoppingCart">

		<div class="shoppingCart__address">
			<TabApplicationHistory :items="buttonItems" />
			<div class="downloadRequestDetails__total">
				<div class="downloadRequestDetails__totalAll">
				<Checkbox v-model="selectAll" :binary="true" inputId="selectAll" class="small" />
				<label for="selectAll">전체 선택</label>
				</div>
				<Button class="button-krds tertiary xsmall" title="전체 삭제">삭제</Button>
			</div>
			<ul class="downloadRequestDetails__list">
				<li v-for="item in items" :key="item.id" class="downloadRequestDetails__listItem">
					<div class="downloadRequestDetails__header">
						<div class="downloadRequestDetails__selectBox">
							<div class="downloadRequestDetails__type">
								<Checkbox v-model="selectedItems" :value="item.id" :inputId="'selectItem_' + item.id" />
								<label class="blind" :for="'selectItem_' + item.id">선택</label>
							</div>
							<div class="downloadRequestDetails__badge type01">
								<span v-for="(badge, index) in item.badges" 
									:key="index" 
									:class="['badge', badge.type]">
								{{ badge.text }}
								</span>
							</div>
						</div>
						<div class="downloadRequestDetails__deleteBox">
							<Button class="downloadRequestDetails__delete" title="항목 삭제">
								<span class="blind">삭제</span>
							</Button>
						</div>
					</div>
					<p class="downloadRequestDetails__category">{{ item.category }}</p>
					<div class="downloadRequestDetails__function">
						<Button class="downloadRequestDetails__more" title="상세 테이블 보기" @click="toggleDetail(item.id)">신청 날짜 상세보기</Button>
					</div>
					<div v-if="expandedItems.has(item.id)" class="downloadRequestDetails__tableBox">
						<DataTable 
							class="tableStyle01"
							:value="item.tableData"
							v-model:selection="selectedTableRows[item.id]"
							dataKey="type"
						>
							<Column selectionMode="multiple"style="width:40px;" />
							<Column header="데이터 종류" field="type" class="alignLeft" style="width:186px;">
							<template #body="slotProps">
								{{slotProps.data.type}} 
							</template>
							</Column>
							<Column header="날짜" field="date" style="width:130px;" />
							<Column header="삭제" style="width:92px;">
							<template #body="slotProps">
								<Button 
									title="삭제"
									@click="handleFileDownload(slotProps.data, item)"
									class="button-krds tertiary xsmall"
									:disabled="!slotProps.data.canDownload"
								>
									삭제
								</Button>
							</template>
							</Column>
						</DataTable>
					</div>
				</li>
			</ul>

		</div>

		<div class="shoppingCart__information commonBox noGap">
			<p class="shoppingCart__organize">제공하는 주소 <span class="color01">4</span>건</p>
			<dl class="shoppingCart__total">
				<dt>데이터셋 개수</dt>
				<dd><strong>35</strong>개</dd>
				<dt>총 데이터 개수</dt>
				<dd><strong>35</strong>개</dd>
			</dl>
			<div class="shoppingCart__application">
				<Button class="shoppingCart__applicationButton button-krds primary middle">신청하기</Button>
			</div>
		</div>
	</div>
</template>


<style lang="scss" scoped>
	@use '@/assets/scss/contents/table/datatable';
	@use '@/assets/scss/contents/page/downloadRequestDetails';
	@use '@/assets/scss/contents/badge/commonBadge';
	@use '@/assets/scss/contents/input/input_checkbox';
    @use '@/assets/scss/contents/page/shoppingCart.scss';
	@use '@/assets/scss/contents/box/box';
</style> 