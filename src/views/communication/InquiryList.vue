<script setup>
	import { ref, onMounted, computed } from 'vue'
	import DataTable from 'primevue/datatable'
    import Column from 'primevue/column';

	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import ContentSearchBox from '@/components/common/search_box/ContentSearchBox.vue'
	import SearchResultHeader from '@/components/common/search_result/SearchResultHeader.vue'
	import CustomPaginator from '@/components/common/paginator/CustomPaginator.vue'

	const searchTypes = [
		{ label: '제목', value: 'title' },
		{ label: '내용', value: 'content' },
		{ label: '작성자', value: 'author' }
	]

	const handleSearch = ({ type, keyword }) => {
		console.log('검색 타입:', type)
		console.log('검색 키워드:', keyword)
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
            caption.textContent = '주소정보 문의 게시글입니다. 번호,유형, 제목, 상태, 작성자,작성일을 제공합니다.';
            dataTableEl.prepend(caption);
        }

    })

    //테이블
    const dataTableRef = ref(null);
    const sales = ref([
        {
            number:'10',
            type:'기타', 
            subject:'제공하는 주소 승인 요청드립니다. 주소 승인 요청드립니다. 주소 승인 요청드립니다. 주소 승인 요청드립니다. 주소 승인 요청드립니다. 주소 승인 요청드립니다. 주소 승인 요청드립니다. 주소 승인 요청드립니다.', 
            status:'답변완료', 
            author:'홍길동', 
            date:'2025.12.12', 
        },
        {
            number:'10',
            type:'기타', 
            subject:'제공하는 주소 승인 요청드립니다.', 
            status:'답변대기', 
            author:'홍길동', 
            date:'2025.12.12', 
        },
    ]);

</script>

<template>
	<HeaderTitle title="주소정보 문의하기" />
    <ContentSearchBox
		type="type01"
        :dropdownItems="searchTypes"
        @search="handleSearch"
        @write="handleWrite"
    />

    <SearchResultHeader
        :totalCount="searchResultCount"
        @sort="handleSort"
    />
	<DataTable 
		class="tableStyle01"
		:value="sales"
		ref="dataTableRef"
	>
		<Column header="번호" field="number" style="width:80px;" />
		<Column header="유형" field="type" style="width:166px;" />
		<Column header="제목" field="subject" class="alignLeft" style="width:598px;">
			<template #body="slotProps">
				<a 
					href="#"
					class="ellipsis"
				>
					{{slotProps.data.subject}} 
				</a>
			</template>
		</Column>
		<Column header="상태" field="status" style="width:120px;">
			<template #body="slotProps">
				<span
					:class="{ 'pointerColor': slotProps.data.status === '답변완료' }"
				>
					{{slotProps.data.status}} 
				</span>
			</template>
		</Column>
		<Column header="작성자" field="author" style="width:110px;"  />
		<Column header="작성일" field="date" style="width:126px;" />
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