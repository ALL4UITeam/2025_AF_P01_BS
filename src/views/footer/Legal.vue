<script setup>
    import { ref, onMounted, computed } from "vue";
    import Button from 'primevue/button';
    import Breadcrumb from 'primevue/breadcrumb'
    import HeaderTitle from '@components/title/HeaderTitle.vue';


    // 브레드크럼
    const breadcrumbs = [
        {
            label:'메인',
            title:'메인으로 이동',
            url: '/',
        },
        {
            label:'법령정보',
            title:'법령정보 이동',
            url: '/',
        },
    ]

    const items = ref([
        {
            title: '도로명주소법',
            details: [
                {label:'시행', text: '2021.6.9'},
                {label:'법률', text: '제17574호'},
            ],
            link: 'http://example.com'
        },
        {
            title: '도로명주소법 시행령',
            details: [
                {label:'시행', text: '2021.6.9'},
                {label:'대통령령', text: '제31726호'},
            ],
            link: 'http://example.com'
        },
        {
            title: '도로명주소법 시행규칙',
            details: [
                {label:'시행', text: '2022.3.30'},
                {label:'행정안전부령', text: '제324호'},
            ],
            link: 'http://example.com'
        },
        {
            title: '주소정보시설규칙',
            details: [
                {label:'시행', text: '2016.6.9'},
                {label:'행정안전부령', text: '제256호'},
            ],
            link: 'http://example.com'
        },
    ])

</script>

<template>
    <Breadcrumb :model="breadcrumbs" aria-label="네비게이션">
        <template #item="{ item }">
            <a :href="item.url" :title="item.title">{{item.label}}</a>
        </template>
    </Breadcrumb>

    <HeaderTitle title="법령정보" />

    <div class="common__box legalInformation__wrap">

        <ul class="legalInformation">
            <li v-for="(item, index) in items" :key="index">
                <p class="legalInformation__title">{{item.title}}</p>
                <ul class="legalInformation__list">
                    <li v-for="(detail, datailIndex) in item.details" :key="datailIndex">
                        <strong class="legalInformation__listTitle">{{detail.label}}</strong>
                        <span class="legalInformation__listText">{{detail.text}}</span>
                    </li>
                </ul>
                <div class="legalInformation__button">
                    <Button @click="goToLink(item.link)" class="commonButton__button" title="법령 확인하기">
                        <span class="commonButton__text">확인하기</span>
                        <i aria-hidden="true" class="bi bi-box-arrow-up-right" />
                    </Button>
                </div>
            </li>
        </ul>
    </div>
    
</template>