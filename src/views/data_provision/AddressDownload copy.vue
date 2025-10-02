<script setup>
	import { ref, onMounted, computed } from 'vue'
    import Button from 'primevue/button'

	import HeaderTitle from '@/components/common/title/HeaderTitle.vue'
	import SubHeaderTitle from '@/components/common/title/SubHeaderTitle.vue'

	const addressList = ref([
		{
			division: '공개하는 주소',
			badge: 'TXT',
			title: '도로명이 부여된 도로 도형',
			description: '도로명주소 기준의 DB 약 600만여 건의 한글 도로명주소로 구성',
			updateDate: '2025.04.21'
		}
	])
</script>

<template>
	<HeaderTitle title="주소정보 다운로드" />
	<div>
		<SubHeaderTitle>주소정보 큐레이션</SubHeaderTitle>
		<div>
			<Button title="큐레이션으로 보기">데이터 상세검색이 필요하신가요? <span>상세검색 바로가기</span></Button>
		</div>
	</div>

	<div class="addressInformationDetails__filter">
		<div class="addressInformationDetails__category">
			
			<div class="addressInformationDetails__header">데이터 구분</div>
			<div class="addressInformationDetails__content">
				<ul class="addressInformationDetails__categoryList">
					<li>전체</li>
					<li>공개하는 주소</li>
					<li>제공하는 주소</li>
				</ul>
			</div>

		</div>
		<div class="addressInformationDetails__category">
			<div class="addressInformationDetails__header">데이터 유형</div>
			<div class="addressInformationDetails__content">
				<ul class="addressInformationDetails__categoryList">
					<li>전체</li>
					<li>TXT</li>
					<li>SHP</li>
					<li>JSON</li>
				</ul>
			</div>
		</div>
		<div class="addressInformationDetails__category">
			<div class="addressInformationDetails__header">카테고리</div>
			<div class="addressInformationDetails__content">
				<ul class="addressInformationDetails__categoryList">
					<li>전체</li>
					<li>도로명주소 한글</li>
					<li>도로명주소 영문</li>
					<li>상세주소 표시</li>
					<li>상세주소 동 표시</li>
					<li>사물주소</li>
					<li>도로명</li>
					<li>건물 DB</li>
					<li>주소 DB</li>
					<li>사서함주소 DB</li>
					<li>영문도로명주소 DB</li>
					<li>상세주소 DB</li>
					<li>도로명주소 출입구 정보</li>
				</ul>
			</div>
		</div>
		<div class="addressInformationDetails__category">
			<div class="addressInformationDetails__header">선택한 주소 데이터</div>
			<div class="addressInformationDetails__content">
				<ul class="addressInformationDetails__categoryList">
					<li>도로명주소 한글</li>
					<li>도로명주소 영문</li>
					<li>상세주소 표시</li>
					<li>상세주소 동 표시</li>
				</ul>
			</div>
		</div>
		<div class="addressInformationDetails__category">
			<div class="addressInformationDetails__header">날짜 선택</div>
			<div class="addressInformationDetails__content">

			</div>
		</div>
	</div>

	<div class="addressInformationDetails__searchResults">
		<p class="addressInformationDetails__resultsText">공개하는 주소 <strong>2</strong>건, 제공하는 주소 <strong>2</strong>건이 검색되었습니다.</p>
		<div class="addressInformationDetails__resultsType">최신 업데이트순 ∨</div>
		<ul class="addressInformationDetails__list">
			<li v-for="(item, index) in addressList" :key="index">
				<div class="addressInformationDetails__badge">
					<span class="addressInformationDetails__badgeDivision">{{ item.division }}</span>
					<span class="addressInformationDetails__badge">{{ item.badge }}</span>
				</div>
				<div class="addressInformationDetails__like">좋아요</div>
				<dl class="addressInformationDetails__explanation">
					<dt>{{ item.title }}</dt>
					<dd>{{ item.description }}</dd>
				</dl>
				<div class="addressInformationDetails__date">
					업데이트 일자 {{ item.updateDate }}
				</div>
				<div class="addressInformationDetails__more">
					<Button title="">자세히 보기</Button>
				</div>
				<div class="addressInformationDetails__download">
					<Button title="">
						<span>다운로드</span>
					</Button>
				</div>
			</li>
		</ul>
	</div>

</template>
