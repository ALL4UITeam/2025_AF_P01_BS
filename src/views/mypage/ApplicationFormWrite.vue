<script setup>
	import { ref, onMounted, computed } from 'vue'
	import DataTable from 'primevue/datatable'
    import Column from 'primevue/column';
    import RadioButton from 'primevue/radiobutton';
    import Checkbox from 'primevue/checkbox';
	import Button from 'primevue/button'

    import CustomDropdown from '@components/common/dropdown/CustomDropdown.vue';
    import CustomInputText from '@components/common/input/CustomInputText.vue';
	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'
    import PersonalTerms from '@/components/common/term/PersonalTerms.vue'
    import PrivacyConsent from '@/components/common/term/PrivacyConsent.vue'

    //인풋
    const currentAddress = ref('');
    //셀렉트박스
	const selectedItem02 = ref(null);
    const items02 = ref([
        {label:'제목', value:'subject'},
        {label:'reme', value:'content'},
    ]);
    
    // 신청서 불러오기 체크박스
    const loadApplication = ref(false);
    
    // 신청기관 유형 라디오 버튼
    const organizationType = ref('personal');
    // 시스템 개요 라디오 버튼
    const systemOverview = ref('internet');


	const handleList = () => {
		// 목록으로 이동
	}

	const handleEdit = () => {
		// 수정 처리
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
            caption.textContent = '제공하는 주소(이용자료) 테이블입니다. 데이터명, 데이터유형, 데이터항목을 제공합니다.';
            dataTableEl.prepend(caption);
        }

    })

    //테이블
    const dataTableRef = ref(null);
    const sales = ref([
        {
            name:'도로명주소 출입구 정보',
            type:'.shp', 
            item:['2025-05-14', '2025-05-15', '2025-05-16'], 
        },
        {
            name:'도로명주소 출입구 정보',
            type:'.shp', 
            item:['2025-05-17', '2025-05-18'], 
        },
    ]);
</script>
<template>
    <HeaderTitle title="장바구니" :mypage="true" />

    <div class="commonBox noGap">
        <h4 class="commonBox__title">제공하는 주소(이용자료)</h4>
        <DataTable class="tableStyle01" :value="sales" ref="dataTableRef">
            <Column header="데이터 명" field="name" class="alignLeft" style="width:270px;">
                <template #body="slotProps">
                    {{slotProps.data.name}}
                </template>
            </Column>
            <Column header="데이터 유형" field="type" style="width:130px;" />
            <Column header="데이터 항목" field="item" class="alignLeft" style="width:420px;">
                <template #body="slotProps">
                    <ul class="dataList">
                        <li v-for="(itemValue, index) in slotProps.data.item" :key="index">
                            {{itemValue}}
                            <Button class="del"><span class="blind">삭제</span></Button>
                        </li>
                    </ul>
                </template>
            </Column>
        </DataTable>
    </div>
    <div class="commonBox">
        <div class="commonBox__function">
            <h4 class="commonBox__title">신청서 작성</h4>
            <div class="commonBox__checkbox">
                <Checkbox v-model="loadApplication" inputId="loadApplication" :binary="true" />
                <label for="loadApplication">신청서 불러오기</label>
            </div>
        </div>
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
        <div class="Area-Box">
            <p class="info-desc">시도를 선택 후 시군구별로 선택하세요. 시도가 다른 시군구도 복수 선택이 가능합니다.</p>
            <div class="Area-Box__inner">
                <div class="row btn-flex">
                    <button class="is-active">서울특별시</button>
                    <button>부산광역시</button>
                    <button>대구광역시</button>
                    <button>인천 광역시</button>
                    <button>서울특별시</button>
                    <button>부산광역시</button>
                    <button>대구광역시</button>
                    <button>인천 광역시</button>
                </div>
            </div>
        </div>
        <div class="security-process">
            <div class="process__wrap">
                <section class="step-card">
                    <div class="step-card__badge">01</div>
                    <h3 class="step-card__title">보안심사 신청</h3>
                    <ul class="step-card__list">
                        <li>공간정보 사업자 등신청서 작성</li>
                        <li>제한제공 데이터 유형 선택</li>
                        <li>증빙자료 제출</li>
                    </ul>
                </section>

                <div class="process__arrow" aria-hidden="true"></div>

                <section class="step-card">
                    <div class="step-card__badge">02</div>
                    <h3 class="step-card__title">관리기관 확인</h3>
                    <ul class="step-card__list">
                        <li>행정안전부 주소생활공간과 신청 확인</li>
                        <li>보안심사 전문기관에 심사요청</li>
                    </ul>
                </section>

                <div class="process__arrow" aria-hidden="true"></div>

                <section class="step-card">
                    <div class="step-card__badge">03</div>
                    <h3 class="step-card__title">보안심사 실시</h3>
                    <ul class="step-card__list">
                        <li>보안심사 전문기관 보안심사 실시</li>
                        <li>보안심사 수수료는 관리기관이 부담</li>
                        <li>현장 또는 서면</li>
                    </ul>
                </section>

                <div class="process__arrow" aria-hidden="true"></div>

                <section class="step-card">
                    <div class="step-card__badge">04</div>
                    <h3 class="step-card__title">결과통보</h3>
                    <ul class="step-card__list">
                        <li>보안심사 결과통보</li>
                        <li>30일 이내 통보, 부득이한 경우 30일 연장</li>
                        <li>승인시 데이터 제공</li>
                        <li>유효기간 2년</li>
                    </ul>
                </section>
            </div>
        </div>
        <h5 class="commonBox__subTitle">업체(기관 명) <span class="commonBox__essential">*</span></h5>
        <div class="commonBox__form">
            <CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="한국지역정보개발원"
                title="한국지역정보개발원" />
        </div>

        <h5 class="commonBox__subTitle">시스템 명 <span class="commonBox__essential">*</span></h5>
        <div class="commonBox__form">
            <CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="도로명주소 유통 시스템"
                title="도로명주소 유통 시스템" />
        </div>

        <h5 class="commonBox__subTitle">URL(IP)</h5>
        <div class="commonBox__form">
            <CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="juso.go.kr"
                title="juso.go.kr" />
        </div>

        <h5 class="commonBox__subTitle">시스템 개요</h5>
        <div class="commonBox__form">
            <CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="도로명주소 유통 시스템입니다."
                title="도로명주소 유통 시스템입니다." />
        </div>

        <h5 class="commonBox__subTitle">이름</h5>
        <div class="commonBox__form">
            <CustomInputText v-model="currentAddress" disabled id="currentAddress" class="input" placeholder="홍길동"
                title="홍길동" />
        </div>

        <h5 class="commonBox__subTitle">생년월일(법인등록번호)</h5>
        <div class="commonBox__form">
            <CustomInputText v-model="currentAddress" disabled id="currentAddress" class="input"
                placeholder="000000-0000000" title="000000-0000000" />
        </div>

        <h5 class="commonBox__subTitle">연락처</h5>
        <div class="commonBox__form">
            <CustomInputText v-model="currentAddress" disabled id="currentAddress" class="input"
                placeholder="010-1234-5678" title="010-1234-5678" />
        </div>

        <h5 class="commonBox__subTitle">주소(전자우편)</h5>
        <div class="commonBox__form">
            <CustomInputText v-model="currentAddress" disabled id="currentAddress" class="input"
                placeholder="juso@email.com" title="juso@email.com" />
        </div>

        <h5 class="commonBox__subTitle">활용목적</h5>
        <div class="commonBox__form">
            <CustomDropdown inputId="inputId02" :options="items02" v-model="selectedItem02" title="선택"
                placeholder="선택" />
        </div>

        <h5 class="commonBox__subTitle">신청사유</h5>
        <div class="commonBox__form">
            <CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="입력 하세요."
                title="입력 하세요." />
        </div>

        <h5 class="commonBox__subTitle">시스템 개요</h5>
        <ul class="commonBox__radioList">
            <li>
                <RadioButton v-model="systemOverview" value="personal" inputId="personal" />
                <label for="personal">개인</label>
            </li>
            <li>
                <RadioButton v-model="systemOverview" value="corporate" inputId="corporate" />
                <label for="corporate">법인</label>
            </li>
        </ul>

    </div>

    <div class="commonBox">
        <h4 class="commonBox__title">추가 신청</h4>

        <h5 class="commonBox__subTitle">일변동자료</h5>
        <div class="commonBox__form">
            <CustomDropdown inputId="inputId02" :options="items02" v-model="selectedItem02" title="선택"
                placeholder="선택" />
        </div>
        <h5 class="commonBox__subTitle">공개제한자료</h5>
        <div class="commonBox__form">
            <CustomDropdown inputId="inputId02" :options="items02" v-model="selectedItem02" title="선택"
                placeholder="선택" />
        </div>
        <h5 class="commonBox__subTitle">공개제한자료 신청사유</h5>
        <div class="commonBox__form">
            <CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="입력 하세요."
                title="입력 하세요." />
        </div>
    </div>
    <div class="commonBox">
        <h4 class="commonBox__title">약관동의</h4>
        <PersonalTerms personalLabel="동의안함" corporateLabel="동의함" />
    </div>

    <DetailBottomButtons type="both" :leftButtons="[
            { text: '취소하기', onClick: handleList, class: 'tertiary' }
        ]" :rightButtons="[
            { text: '신청하기', onClick: handleEdit, class: 'primary' },
        ]" />
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/box/box';
	@use '@/assets/scss/contents/box/term';
    @use '@/assets/scss/contents/input/input_radio.scss';
    @use '@/assets/scss/contents/input/input_checkbox.scss';
	@use '@/assets/scss/contents/table/datatable';
</style>