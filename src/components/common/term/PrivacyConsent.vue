<script setup>
import { ref } from 'vue'
import RadioButton from 'primevue/radiobutton'

// Props 정의
const props = defineProps({
    personalLabel: {
        type: String,
        default: '개인'
    },
    corporateLabel: {
        type: String,
        default: '법인'
    }
})

// 개인정보 수집 및 이용 동의
const personalTermsConsent = ref('personal2')
</script>

<template>
    <p class="term__title"><span class="essential">[필수]</span> 개인정보 수집 및 이용 동의</p>
    <div class="term__box">
        <p class="term__subTitle">제1조(개인정보의 처리 목적) "도로명주소 누리집"은 다음 각 호에서 열거한 목적을 위하여 최소한으로 개인정보를 처리하고 있습니다. 처리한 개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며, 이용 목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라 별도의 동의를 받는 등 필요한 조치를 이행하고 있습니다.</p>

        <ul class="term__list">
            <li>1. 주소정보의 제공 신청<br />도로명주소법 시행규칙 제53조제3항제2호,제3호에 따라 도로명주소 전자지도 및 위치(좌표) 정보가 포함된 주소정보의 제공을 요청하는 경우 제공되는 주소정보의 해외반출 금지, 목적외 사용 제한 및 기타 보안서약서 상의 내용 준수 실태 점검 등을 위해 이용</li>
            <li>2. 주소정보의 연계 신청<br />도로명주소법 시행규칙 제53조제3항제2호,제3호에 따른 도로명주소 전자지도 및 위치(좌표) 정보가 포함된 주소정보를 「주소정보 제공에 관한 규정」 제9조에 따라 원격 정보제공서비스로 연계하여 제공받으려는 경우 주소정보의 해외반출 금지, 목적외 사용 제한 및 기타 보안서약서 상의 내용 준수 실태 점검, 이용기간의 연장 및 이용 수수료 안내 등을 위해 이용</li>
            <li>3. 도로명주소 누리집 서비스 향상 및 정책평가<br />신규 서비스 및 원스톱·맞춤형·선제적 서비스 개발, 인구통계학적 특성에 따른 서비스 분석 및 서비스의 유효성 및 이용 통계 확인 등</li>
        </ul>

        <p class="term__subTitle">제2조(처리하는 개인정보 항목) "도로명주소 누리집"이 처리하는 개인정보 항목은 다음 각 호와 같습니다.</p>
        <ul class="term__list">
            <li>1. 도로명주소 누리집 개인정보
                <ul>
                    <li>① 주소정보의 제공 및 연계서비스 신청인 정보<br />- 필수항목 : 성명(법인명), 생년월일(법인등록번호), 전화번호, 주소(전자우편)</li>
                    <li>② 주소정보의 제공 인수 확인 수령인 정보<br />- 필수항목 : 성명(법인명), 생년월일(법인등록번호), 전화번호, 주소(전자우편)</li>
                </ul>
            </li>
        </ul>

        <p class="term__subTitle">제3조(개인정보의 처리 및 보유기간) "도로명주소 누리집"에서 처리하는 개인정보는 수집·이용 목적으로 명시한 범위 내에서 처리하며, 개인정보보호법 및 관련 법령에서 정하는 보유기간을 준용하여 이행하고 있습니다.</p>
        <ul class="term__list">
            <li>
                1. 주소정보의 제공 요청
                <ul>
                    <li>- 수집근거 : 정보주체의 동의, 도로명주소법 시행규칙 제53조제1항</li>
                    <li>- 보유기간 : 3년</li>
                </ul>
            </li>
            <li>
                2. 주소정보의 연계 신청
                <ul>
                    <li>- 수집근거 : 정보주체의 동의, 도로명주소법 시행규칙 제53조제1항</li>
                    <li>- 보유기간 : 서비스 이용기간 종료 후 3년까지</li>
                </ul>
            </li>
        </ul>

        <p class="text">※ 개인정보파일 등록사항 공개는 개인정보보호위원회 개인정보보호 포털(www.privacy.go.kr) → 개인정보민원 → 개인정보열람 등 요구 → 개인정보파일 목록검색 메뉴를 활용해주시기 바랍니다.</p>

        <p class="term__subTitle">제4조(동의를 거부할 권리가 있다는 사실과 동의 거부에 따른 불이익 내용) 이용자는 "도로명주소 누리집"에서 수집하는 개인정보에 대해 동의를 거부할 권리가 있으며, 동의 거부 시에는 주소정보의 제공 요청, 주소정보의 연계 신청 서비스가 제한됩니다.</p>

    </div>
    
    <div class="term__checkBox">
        <p class="term__checkBoxTitle">개인정보 수집 및 이용에 대한 약관을 읽고 동의합니다.</p>

        <ul class="term__checkBoxRadio">
            <li>
                <RadioButton v-model="personalTermsConsent" value="tre02" inputId="tre02" />
                <label for="tre02">{{ personalLabel }}</label>
            </li>
            <li>
                <RadioButton v-model="personalTermsConsent" value="tre04" inputId="tre04" />
                <label for="tre04">{{ corporateLabel }}</label>
            </li>
        </ul>
    </div>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/contents/box/term';
@use '@/assets/scss/contents/input/input_radio.scss';
</style> 