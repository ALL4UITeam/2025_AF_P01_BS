<script setup>
	import { ref, onMounted, computed } from 'vue'
	import DataTable from 'primevue/datatable'
    import Column from 'primevue/column';

	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import ContentSearchBox from '@/components/common/search_box/ContentSearchBox.vue'
	import SearchResultHeader from '@/components/common/search_result/SearchResultHeader.vue'
	import CustomPaginator from '@/components/common/paginator/CustomPaginator.vue'
	import SearchForm from '@/components/common/search/SearchForm.vue'

	const handleSearch = ({ searchText, period, dateRange }) => {
		console.log('검색어:', searchText)
		console.log('선택된 기간:', period ? `${period}개월` : '사용자 지정 기간')
		console.log('시작일:', dateRange.start)
		console.log('종료일:', dateRange.end)
	}


	const handleWrite = () => {
		console.log('글쓰기')
	}

	const searchResultCount = ref(162)

	const handleSort = (sortValue) => {
		console.log('정렬 방식:', sortValue)
	}

	const handlePageChange = (event) => {
		console.log('클릭');
	}

    //테이블
    onMounted(() => {
        //th에 scope달기
        const headers = document.querySelectorAll('th[role="columnheader"]');
        headers.forEach(header => {
            header.setAttribute('scope', 'col');
        })

        //캡션 추가
        const dataTableEl = dataTableRef.value.$el.querySelector('.p-datatable-table');
        if (dataTableEl) {
            const caption = document.createElement('caption');
            caption.textContent = '주소정보 공지사항 게시글입니다. 번호,제목,조회수,작성자,날짜를 제공합니다.';
            dataTableEl.prepend(caption);
        }

    })

    //테이블
    const dataTableRef = ref(null);
    const sales = ref([
        {
            status:'승인완료',
            system:'한국지역정보개발원 (주소기반산업지원서비스)', 
            overdue:'주소정보 (속성), 주소정보(좌표), 주소정보(도형)', 
            date:'2025.12.12', 
        },
        {
            status:'승인대기',
            system:'한국지역정보개발원<br/>(주소기반산업지원서비스)', 
            overdue:'홍길동', 
            date:'2025.12.12', 
        },
    ]);
</script>

<template>
	<HeaderTitle title="연계신청내역" :mypage="true" />
	<SearchForm @search="handleSearch" />
	<SearchResultHeader
        :totalCount="searchResultCount"
        @sort="handleSort"
    />
	<DataTable 
		class="tableStyle01"
		:value="sales"
		ref="dataTableRef"
	>
		<Column header="상태" field="status" style="width:100px;">
			<template #body="slotProps">
				<span
					:class="{ 'pointerColor': slotProps.data.status === '승인완료' }"
				>
					{{slotProps.data.status}} 
				</span>
			</template>
		</Column>
		<Column header="기관명(시스템명)" field="system" class="alignLeft" style="width:332px;">
			<template #body="slotProps">
				<a 
					href="#"
					v-html="slotProps.data.system"
				>
				</a>
			</template>
		</Column>
		<Column header="연체정보" field="overdue" class="alignLeft" style="width:332px;">
			<template #body="slotProps">
				<a 
					href="#"
				>
					{{slotProps.data.overdue}} 
				</a>
			</template>
		</Column>
		<Column header="신청날짜" field="date" style="width:114px;" />
	</DataTable>
    <CustomPaginator 
        :rows="10" 
        :totalRecords="100" 
        :pageLinkSize="8"
        @page="handlePageChange"
    />
</template>


<style lang="scss" scoped>
	@use '@/assets/scss/contents/table/datatable';
</style>