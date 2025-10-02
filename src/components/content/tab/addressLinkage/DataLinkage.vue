<script setup>
    import { ref, onMounted, watch } from 'vue'
    import Button from 'primevue/button'
	import StepperContainer from '@/components/common/list/StepperContainer.vue'

	// 스테퍼 데이터 정의
	const stepperSteps = ref([
		{
			title: '연계신청',
			type: '신청기간'
		},
		{
			title: '대상자 통합조사 및 심사',
			type: '신청기간'
		},
		{
			title: '회신 공문 발송',
			type: '한국지역정보개발원'
		},
		{
			title: '회신 공문 발송',
			type: '신청기간'
		},
		{
			title: '수신 프로그램 설치 및 설정작업',
			type: '신청기간'
		},
		{
			title: '연계신청 데이터 제공',
			type: '신청자'
		}
	])

</script>

<template>
	<div class="commonBox">
        <h4 class="commonBox__title">데이터 연계 절차</h4>
        <div class="commonBox__download">
            <p class="commonBox__downloadTitle">연계 신청서 및 가이드</p>
            <Button class="commonBox__downloadButton" title="다운로드받기">다운로드</Button>
        </div>
        
        <StepperContainer :steps="stepperSteps">
            <!-- 1단계: 연계신청 -->
            <template #step-1>
                <p class="stepperContainer__text">신규 신청 시 연계 신청서를 작성합니다.</p>
            </template>

            <!-- 2단계: 대상자 통합조사 및 심사 -->
            <template #step-2>
                <ul class="stepperContainer__list">
                    <li>신청기관에서 한국지역정보개발원에 정보연계 요청 공문을 발송합니다.(신규신청에 한함) 
                        <span class="stepperContainer__related">수신처 : 한국지역정보개발원 위치지능데이터부</span>
                    </li>
                </ul>
            </template>

            <!-- 3단계: 회신 공문 발송 -->
            <template #step-3>
                <ul class="stepperContainer__list">
                    <li>보유근거 : 「사회보장급여의 이용‧제공 및 수급권자 발굴에 관한 법률」 7조 
                        <span class="stepperContainer__related">첨부 : 조치계획을 정의한 연계 승인 공문</span>
                    </li>
                </ul>
            </template>

            <!-- 4단계: 회신 공문 발송 -->
            <template #step-4>
                <ul class="stepperContainer__list">
                    <li>신청기관은 행정정보공동이용센터에 대량정보유통시스템 사용신청 공문을 발송합니다.
                        <span class="stepperContainer__related">수신처 : 행정안전부 디지털정부국 공공데이터정책관 공공데이터유통과</span>
                        <div class="stepperContainer__tipBox">
                            <p>행정정보공동이용센터 사용신청 공문에 첨부해야 하는 문서</p>
                            <ol class="stepperContainer__tipBoxList">
                                <li>1. 대량정보유통시스템 신규사용신청 공문(가이드 6페이지 [붙임3] 참조)</li>
                                <li>2. 행정정보유통서비스 신청서(가이드 7페이지 [붙임4] 참조)</li>
                                <li>3. 시스템연계도, 송수신자료(가이드 8페이지 [붙임5] 참조)</li>
                                <li>4. 제공기관으로부터 받은 회신공문(승인공문)</li>
                            </ol>
                        </div>
                    </li>
                    <li>신청기관은 행정정보공동이용센터 포털 사이트(www.share.go.kr)에서 신규신청정보 등록합니다.
                        <ol>
                            <li>1. 포털(www.share.go.kr)사이트를 통한 사용신청 등록</li>
                            <li>2. 포털에 접속(개인용 행정전자서명인증서(GPKI)를 이용하여 로그인) 후, [이용협약] ▷ '기관정보 등록신청' 을 선택</li>
                            <li>3. 담당자, 인프라, 대상기관 및 송수신자료 등 신청정보 입력</li>
                        </ol>
                        <div class="stepperContainer__tipBox">
                            <p>신청 화면의 "연계문서 첨부"에 파일형태로 첨부해야 하는 문서</p>
                            <ol class="stepperContainer__tipBoxList">
                                <li>1. 대량정보유통시스템 신규사용신청 공문(가이드 6페이지 [붙임3] 참조)</li>
                                <li>2. 행정정보유통서비스 신청서(가이드 7페이지 [붙임4] 참조)</li>
                                <li>3. 시스템연계도, 송수신자료(가이드 8페이지 [붙임5] 참조)</li>
                                <li>4. 제공기관으로부터 받은 회신공문(승인공문)</li>
                            </ol>
                        </div>
                    </li>
                    <li>신청기관은 행정정보공동이용센터에서 부여받은 연계기관ID를 한국지역정보개발원에 전달합니다.
                        <div class="stepperContainer__tipBox type01">
                            <div>
                                <strong>참고</strong>
                            </div>
                            <p class="stepperContainer__tipBoxText">「초중등교육법」 제2조에 따른 학교에 특수학교의 전공과정도 포함됩니다. 자세한 내용은 법령을 참고하세요.</p>
                        </div>
                    </li>
                </ul>
            </template>

            <!-- 5단계: 수신 프로그램 설치 및 설정작업 -->
            <template #step-5>
                <ul class="stepperContainer__list">
                    <li>신청기관은 행정정보공동이용센터 자료 수신 프로그램 설치 및 설정작업을 수행합니다.</li>
                </ul>
            </template>

            <!-- 6단계: 연계신청 데이터 제공 -->
            <template #step-6>
                <ul class="stepperContainer__list">
                    <li>연계신청 데이터를 제공받을 수 있습니다.</li>
                </ul>
            </template>
        </StepperContainer>

    </div>

</template>


<style lang="scss" scoped>
	@use '@/assets/scss/contents/table/datatable';
	@use '@/assets/scss/contents/page/downloadRequestDetails';
	@use '@/assets/scss/contents/badge/commonBadge';
	@use '@/assets/scss/contents/input/input_checkbox';
	@use '@/assets/scss/contents/box/box';
	@use '@/assets/scss/contents/list/stepper';


</style> 