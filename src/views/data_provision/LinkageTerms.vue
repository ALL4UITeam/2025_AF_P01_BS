<script setup>
	import { ref, onMounted, computed, defineAsyncComponent } from 'vue'
    import Checkbox from 'primevue/checkbox';

	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'
    import PersonalTerms from '@/components/common/term/PersonalTerms.vue'
    import PrivacyConsent from '@/components/common/term/PrivacyConsent.vue'

	const handleList = () => {
		// 목록으로 이동
	}

	const handleEdit = () => {
		// 수정 처리
	}

    const allOk = ref(false);
</script>

<template>
	<HeaderTitle title="주소정보 데이터 연계" />

	<div class="term__header">
		<Checkbox v-model="allOk" inputId="allOk" :binary="true" />
		<label for="allOk">모두 동의합니다.</label>
	</div>
	<p class="term__text">서비스 이용약관 및 개인정보 수집 및 이용 동의 항목에 대해 모두 동의합니다.<br />각 사항에 대한 동의 여부를 개별적으로 선택하실 수 있습니다.</p>
	<div class="commonBox">
		<h4 class="commonBox__title">서비스 이용약관</h4>
        <PersonalTerms 
            personalLabel="동의안함" 
            corporateLabel="동의함" 
        />
	</div>
	<div class="commonBox">
		<h4 class="commonBox__title">개인정보 수집 및 이용 동의</h4>
        <PrivacyConsent 
            personalLabel="동의안함" 
            corporateLabel="동의함" 
        />
	</div>
    <DetailBottomButtons
        type="both"
        :leftButtons="[
            { text: '목록으로', onClick: handleList, class: 'secondary' }
        ]"
        :rightButtons="[
            { text: '다음으로', onClick: handleEdit, class: 'primary' },
        ]"
    />
</template>


<style lang="scss" scoped>
	@use '@/assets/scss/contents/box/box';
	@use '@/assets/scss/contents/box/term';
    @use '@/assets/scss/contents/input/input_checkbox.scss';
</style>