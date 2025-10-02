<script setup>
	import { ref, onMounted, computed } from 'vue'
	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
    import CustomDropdown from '@components/common/dropdown/CustomDropdown.vue';
    import CustomInputText from '@components/common/input/CustomInputText.vue';
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'
    import RadioButton from 'primevue/radiobutton';
	
    //인풋
    const currentAddress = ref('');
    //셀렉트박스
	const selectedItem02 = ref(null);
    const items02 = ref([
        {label:'제목', value:'subject'},
        {label:'reme', value:'content'},
    ]);
    
    // 신청기관 유형 라디오 버튼
    const organizationType = ref('personal');
    // 서비스망 라디오 버튼
    const serviceNetwork = ref('internet');

	const handleCancle = () => {
		console.log('취소');
	}
	const handleSave = () => {
		console.log('저장');
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
		<h4 class="commonBox__title">신청서 상세 수정</h4>
		<p class="commonBox__tip"><span class="commonBox__essential">*</span> 표시는 필수 입력 사항입니다</p>

		<h5 class="commonBox__subTitle">신청기관 유형 <span class="commonBox__essential">*</span></h5>
        <ul class="commonBox__radioList">
            <li>
                <RadioButton v-model="organizationType" value="personal" inputId="personal" />
                <label for="personal">개인</label>
            </li>
            <li>
                <RadioButton v-model="organizationType" value="corporate" inputId="corporate" />
                <label for="corporate">법인</label>
            </li>
        </ul>

		<h5 class="commonBox__subTitle">업체(기관 명) <span class="commonBox__essential">*</span></h5>
		<div class="commonBox__form">
			<CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="한국지역정보개발원" title="한국지역정보개발원" /> 
		</div>

        <h5 class="commonBox__subTitle">시스템 명 <span class="commonBox__essential">*</span></h5>
		<div class="commonBox__form">
			<CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="도로명주소 유통 시스템" title="도로명주소 유통 시스템" /> 
		</div>

        <h5 class="commonBox__subTitle">URL(IP)</h5>
		<div class="commonBox__form">
			<CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="juso.go.kr" title="juso.go.kr" /> 
		</div>

        <h5 class="commonBox__subTitle">시스템 개요</h5>
		<div class="commonBox__form">
			<CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="도로명주소 유통 시스템입니다." title="도로명주소 유통 시스템입니다." /> 
		</div>

        <h5 class="commonBox__subTitle">서비스망망</h5>
        <ul class="commonBox__radioList">
            <li>
                <RadioButton v-model="serviceNetwork" value="internet" inputId="internet" />
                <label for="internet">인터넷 망</label>
            </li>
            <li>
                <RadioButton v-model="serviceNetwork" value="administrative" inputId="administrative" />
                <label for="administrative">행정망(공공기관 또는 공기관망을 사용하는 업체)</label>
            </li>
        </ul>

        <h5 class="commonBox__subTitle">CSS 파일 경로</h5>
		<div class="commonBox__form">
			<CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="business.juso.go.kr.css" title="business.juso.go.kr.css" /> 
		</div>


	</div>

    <DetailBottomButtons
        type="both"
        :leftButtons="[
            { text: '취소하기', onClick: handleCancle, class: 'tertiary xlarge' }
        ]"
        :rightButtons="[
            { text: '저장하기', onClick: handleSave, class: 'primary xlarge' },
        ]"
    />
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/box/box';
    @use '@/assets/scss/contents/input/input_radio.scss';
</style>