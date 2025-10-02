<script setup>
    import { ref } from "vue";
    import Button from 'primevue/button'
    import Breadcrumb from 'primevue/breadcrumb'
    import HeaderTitle from '@components/title/HeaderTitle.vue';
    import InnorixFileDownload from '@components/InnorixFileDownload.vue';
    import InnorixFileUpload from '@components/InnorixFileUpload.vue';

    
    const breadcrumbs = [
        {
            label:'메인',
            title:'메인으로 이동',
            url: '/',
        },
        {
            label:'주소소통마당',
            title:'주소소통마당 이동',
            url: '/',
        },
        {
            label:'언론보도',
            title:'언론보도상세 이동',
            url: '/',
        },
    ]
</script>

<template>
    <Breadcrumb :model="breadcrumbs" aria-label="네비게이션">
        <template #item="{ item }">
            <a :href="item.url" :title="item.title">{{item.label}}</a>
        </template>
    </Breadcrumb>

    <HeaderTitle title="언론보도" />

    <div class="viewDetails">
        <div class="viewDetails__header">
            <p class="viewDetails__title">도로명 3D입체로 탈바꿈도로명 3D입체로 탈바꿈도로명 3D입체로 탈바꿈도로명 3D입체로 탈바꿈도로명 3D입체로 탈바꿈도로명 3D입체로 탈바꿈도로명 3D입체로 탈바꿈도로명 3D입체로 탈바꿈도로명 3D입체로 탈바꿈도로명 3D입체로 탈바꿈</p>
            <div class="viewDetails__date">2024-12-14</div>
        </div>
        <dl class="viewDetails__info">
            <dt>작성자</dt>
            <dd>관리자</dd>
            <dt>조회</dt>
            <dd>1603</dd>
            <dt>출처</dt>
            <dd>행안부</dd>
        </dl>
        <div>
            <InnorixFileDownload/>
        </div>
        <div>
            <InnorixFileUpload/>
        </div>


    </div>
    <div class="viewDetails__content">
        컨텐츠 내용
        <img />
    </div>
    <div class="viewDetails__button">
        <Button>목록<i aria-hidden="true" class="bi bi-arrow-right" /></Button>
    </div>
</template>


<style lang="scss" scoped>

</style>