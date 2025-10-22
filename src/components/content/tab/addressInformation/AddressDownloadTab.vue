<script setup>
    import { ref, onMounted, watch } from 'vue'
    import { useRoute } from 'vue-router'
    import Button from 'primevue/button'
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'
	import MultipleCalendar from '@/components/common/calendar/MultipleCalendar.vue'


	const handleList = () => {
		// 목록으로 이동
	}

    const route = useRoute()      

</script>

<template>
	<div class="commonBox">
		<div class="commonBox__header">
            <div class="commonBox__function">
                <h4 class="commonBox__title">도로명주소 출입구 정보</h4>
                <Button class="button-krds secondary middle">체험하기</Button>
            </div>
            <p class="commonBox__text">도로명주소 기준의 출입구 좌표를 제공합니다.<br />※집합건물(예: 아파트)의 경우 주소기준의 주(보조)출입구 제공 / 건물단위제공 안함</p>
        </div>
        
        <dl class="commonBox__explanation">
            <dt>제공기관</dt>
            <dd>한국지역정보개발원</dd>
            <dt>담당부서 전화번호</dt>
            <dd>02-0000-0000</dd>
            <dt>데이터 분류</dt>
            <dd>제공하는 주소</dd>
            <dt>데이터 유형</dt>
            <dd>txt</dd>
            <dt>등록일자</dt>
            <dd>2022.04.15</dd>
            <dt>수정일자</dt>
            <dd>2022.04.15</dd>
        </dl>
    </div>
	<div class="commonBox">
		<div class="commonBox__header">
            <div class="commonBox__function">
                <h4 class="commonBox__title">데이터 다운로드</h4>
                <Button class="button-krds secondary middle">데이터 연계신청</Button>
            </div>
        </div>
        
		<MultipleCalendar />
    </div>
    <DetailBottomButtons
        v-if="!route.meta.hideDetailButtons"
        type="left"
        :leftButtons="[
            { text: '목록으로', onClick: handleList, class: 'tertiary' }
        ]"
    />

</template>


<style lang="scss" scoped>
	@use '@/assets/scss/contents/table/datatable';
	@use '@/assets/scss/contents/page/downloadRequestDetails';
	@use '@/assets/scss/contents/badge/commonBadge';
	@use '@/assets/scss/contents/input/input_checkbox';
	@use '@/assets/scss/contents/box/box';
</style> 