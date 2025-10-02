<script setup>
	import HeaderTitle from '@/components/common/title/HeaderTitle.vue';
import CustomDropdown from '@components/common/dropdown/CustomDropdown.vue';
import CustomInputText from '@components/common/input/CustomInputText.vue';
import { ref } from 'vue';
	// import InnorixFileUpload from '@components/common/file/InnorixFileUpload.vue';
    // import FileUpload from 'primevue/fileupload';
    // import RadioButton from 'primevue/radiobutton';
    import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue';
import ThumbnailList from '@/components/common/thumbnail/ThumbnailList.vue';

    //셀렉트박스
    const selectedItem = ref(null);
    const items = ref([
        {label:'제목', value:'subject'},
        {label:'reme', value:'content'},
    ]);
	const selectedItem02 = ref(null);
    const items02 = ref([
        {label:'제목', value:'subject'},
        {label:'reme', value:'content'},
    ]);

    //인풋
    const currentAddress = ref('');

    // 썸네일 선택
    const selectedThumbnail = ref('');
    
    // 파일 업로드 설정
    const uploadPath = '/api/upload';  // 실제 업로드 경로로 변경 필요
    const uploadedFiles = ref([]);

    // 파일 업로드 핸들러
    const onUpload = (event) => {
        const file = event.files[0];
        uploadedFiles.value.push(file);
        // 업로드 성공 시 처리
        console.log('파일 업로드 완료:', event);
    };

    // 파일 선택 핸들러
    const onSelect = (event) => {
        console.log('파일 선택됨:', event);
    };

    // 파일 제거 핸들러
    const onRemove = (event) => {
        console.log('파일 제거됨:', event);
    };

    // 드롭 핸들러
    const onDrop = (event) => {
        console.log('파일 드롭됨:', event);
    };

	const handleList = () => {
		// 목록으로 이동
	}

	const handleEdit = () => {
		// 수정 처리
	}

	const handleDelete = () => {
		// 삭제 처리
	}
</script>

<template>
	<HeaderTitle title="주소정보 개발자 소통창구" />

	<div class="commonBox">
		<h4 class="commonBox__title">글쓰기</h4>
		<p class="commonBox__tip"><span class="commonBox__essential">*</span> 표시는 필수 입력 사항입니다</p>

		<h5 class="commonBox__subTitle">카테고리 <span class="commonBox__essential">*</span></h5>
		<div class="commonBox__form">
			<CustomDropdown inputId="inputId" :options="items" v-model="selectedItem" title="카테고리 선택하기" placeholder="Tech&Tips" />
		</div>

		<h5 class="commonBox__subTitle">유형 <span class="commonBox__essential">*</span></h5>
		<div class="commonBox__form">
			<CustomDropdown inputId="inputId02" :options="items02" v-model="selectedItem02" title="유형 선택하기기" placeholder="유형형" />
		</div>
		<h5 class="commonBox__subTitle">썸네일 <span class="commonBox__essential">*</span></h5>
		<ThumbnailList v-model="selectedThumbnail" />

		<h5 class="commonBox__subTitle">제목 <span class="commonBox__essential">*</span></h5>
		<div class="commonBox__form">
			<CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="현 주소를 입력해주세요" title="현 주소를 입력해주세요" /> 
		</div>
		<div class="commonBox__counting">
			<span class="commonBox__number">0</span>/60byte
		</div>

		<h5 class="commonBox__subTitle">첨부파일</h5>
		<div class="commonBox__form">
            <!-- <InnorixFileUpload 
                :url="uploadPath"
                :multiple="true"
                accept="image/*"
                :maxFileSize="5000000"
                @upload="onUpload"
                @select="onSelect"
                @remove="onRemove"
                @drop="onDrop"
                :auto="true"
                chooseLabel="파일 선택"
                uploadLabel="업로드"
                cancelLabel="취소"
                class="custom-upload"
            >
            </InnorixFileUpload> -->
		</div>

		<h5 class="commonBox__subTitle">내용 <span class="commonBox__essential">*</span></h5>
		<div class="commonBox__form">
			에디터
		</div>
		<div class="commonBox__counting">
			<span class="commonBox__number">0</span>/4000byte
		</div>
		<!-- <div class="commonBox__form">
			<CustomInputText v-model="currentAddress" id="currentAddress" class="input" placeholder="제목을 입력해 주세요" title="제목을 입력해 주세요" /> 
		</div>
		<div class="commonBox__counting">
			<span class="commonBox__number">0</span>/60byte
		</div> -->

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