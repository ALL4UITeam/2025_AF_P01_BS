<script setup>
	import { ref, onMounted, computed } from 'vue'
    import CustomDropdown from '@components/common/dropdown/CustomDropdown.vue';
    import CustomInputText from '@components/common/input/CustomInputText.vue';
	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'

    //인풋
    const currentAddress = ref('');
    //셀렉트박스
	const selectedItem02 = ref(null);
    const items02 = ref([
        {label:'제목', value:'subject'},
        {label:'reme', value:'content'},
    ]);


	const handleList = () => {
		// 목록으로 이동
	}

	const handleEdit = () => {
		// 수정 처리
	}

</script>

<template>
	<HeaderTitle title="주소정보 문의하기" />

	<div class="commonBox">
		<h4 class="commonBox__title">문의하기</h4>
		<p class="commonBox__tip"><span class="commonBox__essential">*</span> 표시는 필수 입력 사항입니다</p>

		<h5 class="commonBox__subTitle">제목 <span class="commonBox__essential">*</span></h5>
		<div class="commonBox__form">
			<CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="현 주소를 입력해주세요" title="현 주소를 입력해주세요" /> 
		</div>
		<div class="commonBox__counting">
			<span class="commonBox__number">0</span>/60byte
		</div>

		<h5 class="commonBox__subTitle">유형 <span class="commonBox__essential">*</span></h5>
		<div class="commonBox__form">
			<CustomDropdown inputId="inputId02" :options="items02" v-model="selectedItem02" title="유형 선택하기기" placeholder="유형형" />
		</div>

		<h5 class="commonBox__subTitle">내용 <span class="commonBox__essential">*</span></h5>
		<div class="commonBox__form">
			에디터
		</div>
		<div class="commonBox__counting">
			<span class="commonBox__number">0</span>/4000byte
		</div>

	</div>

	<DetailBottomButtons
        type="both"
        :leftButtons="[
            { text: '취소하기', onClick: handleList, class: 'tertiary' }
        ]"
        :rightButtons="[
            { text: '등록하기', onClick: handleEdit, class: 'primary' },
        ]"
    />
</template>

<style lang="scss">
	@use '@/assets/scss/contents/box/box';
</style>