<script setup>
	import { ref, onMounted, computed } from 'vue'
	import Button from 'primevue/button';
	
	
</script>

<template>
	<div class="button-demo">
		<p>Type 사용자 과업, 플로우의 중요도에 따라 버튼 간 위계를 구분하여 사용한다.</p>

		<div class="button-row">
			<Button class="button-krds primary">Primary Button</Button>
			<Button class="button-krds secondary">secondary Button</Button>
			<Button class="button-krds tertiary">tertiary Button</Button>
		</div>

		<p>Size 콘텐츠 내에서 적합한 계층을 가진 크기로 사용한다.</p>

		<div class="button-row">
			<Button class="button-krds primary xlarge">xlarge Button</Button>
			<Button class="button-krds primary large">Large Button</Button>
			<Button class="button-krds primary middle">Medium Button</Button>
			<Button class="button-krds primary small">Small Button</Button>
			<Button class="button-krds primary xsmall">xsmall Button</Button>
		</div>

		<p>State 사용자의 상호작용 시 컬러가 변경된다.</p>
		<div class="button-row">
			<Button class="button-krds primary">Primary Default Button</Button>
			<Button class="button-krds secondary">secondary Default Button</Button>
			<Button class="button-krds tertiary">tertiary Default Button</Button>
		</div>
		<div class="button-row">
			<Button class="button-krds primary" disabled>Primary Default Button</Button>
			<Button class="button-krds secondary" disabled>secondary Default Button</Button>
			<Button class="button-krds tertiary" disabled>tertiary Default Button</Button>
		</div>
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