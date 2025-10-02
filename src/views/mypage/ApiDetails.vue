<script setup>
	import { ref, onMounted, computed } from 'vue'
	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'

	
	const handleList = () => {
		console.log('목록록');
	}
	const handleModify = () => {
		console.log('수정');
	}



</script>

<template>
	<HeaderTitle title="API 인증키 관리" :mypage="true"  />

	<div class="commonBox noGap">
		<h4 class="commonBox__title">기본정보</h4>
        <dl class="commonBox__explanation">
            <dt>API 종류</dt>
            <dd>도로명 API</dd>
            <dt>API 유형</dt>
            <dd>팝업 API</dd>
            <dt>상태</dt>
            <dd>승인완료</dd>
        </dl>
    </div>
	<div class="commonBox">
		<h4 class="commonBox__title">신청서 상세</h4>
        <dl class="commonBox__explanation">
            <dt>신청기관 유형</dt>
            <dd>개인</dd>
            <dt>업체(기관명)</dt>
            <dd>한국지역정보개발원</dd>
            <dt>시스템명</dt>
            <dd>도로명주소 유통 시스템</dd>
            <dt>URL(IP)</dt>
            <dd>juso.go.kr</dd>
            <dt>시스템 개요</dt>
            <dd>도로명주소 유통 시스템입니다.</dd>
            <dt>서비스망</dt>
            <dd>인터넷망</dd>
            <dt>CSS 파일 경로</dt>
            <dd>business.juso.go.kr.css</dd>
        </dl>
    </div>
    
	<div class="commonBox">
		<h4 class="commonBox__title">승인키</h4>
        <dl class="commonBox__explanation">
            <dt>승인키 정보</dt>
            <dd>devU01TX0FVVEgyMDI1MDQyOTE0NTcyNjExNTcwNjI=</dd>
        </dl>
        <p class="commonBox__tipBox">이후 절차는 ‘기술제공 > API신청 > 팝업API 또는 검색API’ 메뉴에서 제공하는 가이드를 참고하시기 바랍니다.</p>
    </div>
    <DetailBottomButtons
        type="both"
        :leftButtons="[
            { text: '목록으로', onClick: handleList, class: 'tertiary xlarge' }
        ]"
        :rightButtons="[
            { text: '수정하기', onClick: handleModify, class: 'primary xlarge' },
        ]"
    />
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/box/box';
</style>