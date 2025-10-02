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
            caption.textContent = '주소정보 공지사항 게시글입니다. 번호,제목,조회수,작성자,날짜를 제공합니다.';
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
            views:'213', 
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
	<HeaderTitle title="주소정보 공지사항" />
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
		<Column header="제목" field="subject" class="alignLeft" style="width:634px;">
			<template #body="slotProps">
				<a 
					href="#"
					class="ellipsis"
				>
					{{slotProps.data.subject}} 
				</a>
			</template>
		</Column>
		<Column header="조회수" field="views" style="width:162px;" />
		<Column header="작성자" field="author" style="width:162px;"  />
		<Column header="날짜" field="date" style="width:162px;" />
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