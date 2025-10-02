<script setup>
	import { ref, onMounted, computed } from 'vue'

    // import ShareFunction from '@components/button/ShareFunction.vue';
    // import PrintFunction from '@components/button/PrintFunction.vue';


	const policyList = ref([
		{
			title: '사물주소란?',
			description: '건물이 아닌 시설물 등에 사물의 위치를 특정하기 위해 도로명과 기초번호를 활용하여 부여된 주소',
			tags: ['버스정류장', '공원', '주차장'],
			text: '등의 시설물에 주소를 부여',
			linkTitle: '사물주소 자세히보기',
			href: '/addressusage/object'
		},
		{
			title: '입체주소란?',
			description: '입체도로와 내부도로를 포함하여 구체적으로 위치를 명시하는 주소 체계',
			tags: ['고가로', '지하도', '각 층의 통로'],
			text: '입체도로 : 고가로, 지하도 등\n내부도로 : 건물 각 층의 통로, 호수 등',
			linkTitle: '입체주소 자세히보기',
			href: '/addressusage/3d'
		},
		{
			title: '장소지능정보란?',
			description: '장소와 관련된 다양한 데이터를 수집하고 분석하여 유용한 정보',
			tags: ['다양한 출입구', '주차장 출입구'],
			text: '등의 장소 데이터를 수집하여 정확한 위치정보를 제공',
			linkTitle: '장소지능정보 자세히보기',
			href: '/addressusage/place-intelligence'
		},
		{
			title: '수상시설물이란?',
			description: '항 포구 해안가 인근 각종 수상 시설물에도 도로명 주소 부여',
			tags: ['양식장', '해상팬션', '해상낚시터'],
			text: '등의 수상 시설물에 주소를 부여',
			linkTitle: '사물주소 자세히보기',
			href: '/addressusage/water-facility'
		}
	])
</script>

<template>
	<div class="contentHeader">
		<h2>주소정보 활용정책 소개</h2>
		<div>
			<!-- <ShareFunction />
			<PrintFunction /> -->
		</div>
	</div>
	
	<ul class="policyIntroduction__list">
		<li v-for="(item, index) in policyList" :key="index">
			<dl class="policyIntroduction__explanation">
				<dt>{{ item.title }}</dt>
				<dd>{{ item.description }}</dd>
			</dl>
			<div class="policyIntroduction__tagList">
				<span v-for="(tag, tagIndex) in item.tags" :key="tagIndex" class="policyIntroduction__tag">#{{ tag }}</span>
			</div>
			<div class="policyIntroduction__text" v-html="item.text.replace('\n', '<br />')"></div>
			<a :href="item.href" class="policyIntroduction__link" :title="item.linkTitle">자세히 보기</a>
		</li>
	</ul>
</template>
