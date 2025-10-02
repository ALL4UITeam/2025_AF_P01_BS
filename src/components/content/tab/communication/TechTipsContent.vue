<script setup>
import { ref } from 'vue'
import ContentSearchBox from '@/components/common/search_box/ContentSearchBox.vue'
import SearchResultHeader from '@/components/common/search_result/SearchResultHeader.vue'
import BasicList from '@/components/common/list/BasicList.vue'
import CustomPaginator from '@/components/common/paginator/CustomPaginator.vue'

const searchTypes = [
    { label: '제목', value: 'title' },
    { label: '내용', value: 'content' },
    { label: '작성자', value: 'author' }
]

// 페이지네이션 관련 상태 추가
const currentPage = ref(1)
const itemsPerPage = ref(10)

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

const listItems = ref([
    {
        image: '/src/assets/images/temp/sample01.jpg',
        imageAlt: '알트값',
        category: '구분',
        title: '타이틀',
        description: '간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다.',
        date: '2025.03.27',
        views: 321,
        likes: 33,
        replies: 321
    },
    {
        image: '/src/assets/images/common/bg_image_basic02.png',
        imageAlt: '샘플',
        category: '구분',
        title: '타이틀',
        description: '간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다.',
        date: '2025.03.27',
        views: 321,
        likes: 33,
        replies: 321
    },
    {
        image: '',
        imageAlt: '',
        category: '구분',
        title: '타이틀',
        description: '간단한 설명이 들어가는 영역입니다. 최대 3줄까지 작성합니다. 간단한 설명이 들어가는 영역입니다. 간단한 설명이 들어가는 영역입니다.',
        date: '2025.03.27',
        views: 321,
        likes: 33,
        replies: 321
    },
])


const handlePageChange = (event) => {
    console.log('클릭');
}
</script>

<template>
    <ContentSearchBox
        :dropdownItems="searchTypes"
        @search="handleSearch"
        @write="handleWrite"
    />

    <SearchResultHeader
        :totalCount="searchResultCount"
        @sort="handleSort"
    />

    <BasicList :items="listItems" />

    <CustomPaginator 
        :rows="10" 
        :totalRecords="100" 
        :pageLinkSize="8"
        @page="handlePageChange"
    />
</template>

