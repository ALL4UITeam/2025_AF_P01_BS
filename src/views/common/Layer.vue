<script setup>
	import { ref, onMounted, computed } from 'vue'
	import Button from 'primevue/button';
	import AuthenticationModal from '@/components/common/modal/AuthenticationModal.vue';
	
	const authModalRef = ref(null);
	
	const openAuthModal = () => {
		authModalRef.value?.openModal();
	};
	
	const handleModalClose = () => {
		console.log('인증 모달이 닫혔습니다.');
	};
</script>

<template>
	<div class="button-demo">
		<p>로그인</p>
		
		<div class="button-row">
			<Button 
				label="본인인증 모달 열기" 
				icon="pi pi-user" 
				@click="openAuthModal"
				class="button-krds primary xlarge"
			/>
		</div>
		
		<AuthenticationModal 
			ref="authModalRef"
			@close="handleModalClose"
		/>
	</div>
</template>

<style lang="scss" scoped>
.button-demo {
	padding: 20px;
	display: flex;
	flex-direction: column;
	gap: 20px;
}

.button-row {
	display: flex;
	gap: 12px;
	align-items: center;
	flex-wrap: wrap;
}
</style>