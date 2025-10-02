<script setup>
	import { ref, onMounted, computed } from 'vue'
	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
    import CustomDropdown from '@components/common/dropdown/CustomDropdown.vue';
    import CustomInputText from '@components/common/input/CustomInputText.vue';
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'
	
    //인풋
    const currentAddress = ref('');
    //셀렉트박스
	const selectedItem02 = ref(null);
    const items02 = ref([
        {label:'제목', value:'subject'},
        {label:'reme', value:'content'},
    ]);

	const handleCancle = () => {
		console.log('취소');
	}
	const handleSave = () => {
		console.log('저장');
	}



</script>

<template>
	<HeaderTitle title="나의 문의글" :mypage="true"  />

	<div class="commonBox noGap">
		<h4 class="commonBox__title">문의하기 수정</h4>
		<p class="commonBox__tip"><span class="commonBox__essential">*</span> 표시는 필수 입력 사항입니다</p>

		<h5 class="commonBox__subTitle">제목 <span class="commonBox__essential">*</span></h5>
		<div class="commonBox__form">
			<CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="도로명주소 건물도형" title="도로명주소 건물도형" /> 
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
            { text: '취소하기', onClick: handleCancle, class: 'tertiary xlarge' }
        ]"
        :rightButtons="[
            { text: '저장하기', onClick: handleSave, class: 'primary xlarge' },
        ]"
    />
</template>

<style lang="scss">
	@use '@/assets/scss/contents/box/box';
</style>