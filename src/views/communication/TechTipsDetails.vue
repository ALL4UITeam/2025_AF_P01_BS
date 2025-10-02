<script setup>
	import { ref, onMounted, computed } from 'vue'
	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import DetailHeading from '@/components/common/detail/DetailHeading.vue'
	import DetailContent from '@/components/common/detail/DetailContent.vue'
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'
	import DetailAttachment from '@/components/common/detail/DetailAttachment.vue'
	import CommentBox from '@/components/common/comment/CommentBox.vue'

	const authModalRef = ref(null);
	const isLoggedIn = ref(false);
	const userName = ref('김철*');
	const likeCount = ref(8);
	const isLiked = ref(false);

	const comments = ref([
		{
			id: 1,
			userName: '관리자',
			date: '2025.12.12 20:17',
			content: '주소검색 API와 주소검색 솔루션의 차이를 안내드리겠습니다. 주소검색 API는 특정 기능을 외부 시스템에 연결해 사용할 수 있게 제공하는 인터페이스입니다.\n주소검색 솔루션은 주소 검색 기능을 포함한 전체 패키지나 시스템입니다.',
			likes: 0,
			isLiked: false,
			showReplyForm: false,
			replies: [
				{
					id: 2,
					userName: '관리자',
					date: '2025.12.12 20:17',
					content: '주소검색 API와 주소검색 솔루션의 차이를 안내드리겠습니다. ',
					likes: 0,
					isLiked: false
				},
				{
					id: 3,
					userName: '관리자',
					date: '2025.12.12 20:17',
					content: '주소검색 API와 주소검색 솔루션의 차이를 안내드리겠습니다. 주소검색 API는 특정 기능을 외부 시스템에 연결해 사용할 수 있게 제공하는 인터페이스입니다.\n주소검색 솔루션은 주소 검색 기능을 포함한 전체 패키지나 시스템입니다.',
					likes: 0,
					isLiked: false
				},
				{
					id: 4,
					userName: '관리자',
					date: '2025.12.12 20:17',
					content: '주소검색 API와 주소검색 솔루션의 차이를 안내드리겠습니다. 주소검색 API는 특정 기능을 외부 시스템에 연결해 사용할 수 있게 제공하는 인터페이스입니다.\n주소검색 솔루션은 주소 검색 기능을 포함한 전체 패키지나 시스템입니다.',
					likes: 0,
					isLiked: false
				},
			]
		},
		{
			id: 5,
			userName: '관리자',
			date: '2025.12.12 20:17',
			content: '주소검색 API와 주소검색 솔루션의 차이를 안내드리겠습니다. 주소검색 API는 특정 기능을 외부 시스템에 연결해 사용할 수 있게 제공하는 인터페이스입니다.\n주소검색 솔루션은 주소 검색 기능을 포함한 전체 패키지나 시스템입니다.',
			likes: 5,
			isLiked: false,
			showReplyForm: false,
			replies: []
		},
	]);

	const handleList = () => {
		console.log('목록으로 이동');
	}

	const openAuthModal = () => {
		authModalRef.value.openModal();
	};

	const handleLogin = () => {
		openAuthModal();
	};

	const handleCommentSubmit = (content) => {
		// 댓글 제출 
		console.log('댓글', content);
	};

	const handleReplySubmit = ({ parentId, content }) => {
		// 답글 제출 
		console.log('답글:', { parentId, content });
	};

	const handleLikeComment = (commentId) => {
		// 좋아요 
		console.log('좋아요:', commentId);
	};

	//추천하기
	const handleContentLike = () => {
		isLiked.value = !isLiked.value;
		likeCount.value += isLiked.value ? 1 : -1;
	}

	const attachments = [
		{
			name: '주소검색 API와 솔루션의 기능별 차이점 및 도입 시 고려사항 정리자료 비교분석표.hwp',
			type: 'hwp',
			size: '58.5KB'
		},
		{
			name: '주소기반산업지원서비스 주소 검색 서비스 비교자료.hwp',
			type: 'hwp',
			size: '58.5KB'
		}
	]
</script>

<template>
	<HeaderTitle title="주소정보 개발자 소통창구" />
    
	<DetailHeading
		title="주소검색 API와 주소검색 솔루션, 뭐가 다를까?"
		titleType="category"
		categoryText="Tech&Tips"
		date="2025.03.27"
		:viewCount="275"
	/>

	<DetailAttachment :attachments="attachments" />
    
    <DetailContent 
		content="<div><img src='' alt='테스트' /></div><p>일반 텍스트</p>"
		:like-count="likeCount"
		:is-liked="isLiked"
		@like="handleContentLike"
	/>

	<CommentBox
		:totalComments="comments.length"
		:isLoggedIn="isLoggedIn"
		:userName="userName"
		:comments="comments"
		@login="handleLogin"
		@submit-comment="handleCommentSubmit"
		@submit-reply="handleReplySubmit"
		@like-comment="handleLikeComment"
	/>
        

    <DetailBottomButtons
        type="left"
        :leftButtons="[
            { text: '목록으로', onClick: handleList, class: 'tertiary xlarge' }
        ]"
    />
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/table/datatable';
</style>