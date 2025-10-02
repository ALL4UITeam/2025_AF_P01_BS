<script setup>
	import { ref, onMounted, computed } from 'vue'
	
    import DataTable from 'primevue/datatable'
    import Column from 'primevue/column';
    import Button from 'primevue/button'
    
	import DetailBottomButtons from '@/components/common/button/DetailBottomButtons.vue'
        
    //테이블
    onMounted(() => {
        //th에 scope달기
        const headers = document.querySelectorAll('th[role="columnheader"]');
        headers.forEach(header => {
            header.setAttribute('scope', 'col');
        })

        //캡션 추가
        const dataTableEl = dataTableRef.value.$el.querySelector('.p-datatable-table');
        if (dataTableEl) {
            const caption = document.createElement('caption');
            caption.textContent = '도로명이 부여된 도로유형 테이블입니다. 항목으로는 순번 ,칼럼,크기,형식,pk,비고가 있습니다.';
            dataTableEl.prepend(caption);
        }

    })
    const dataTableRef = ref(null);
    const sales = ref([
        {
            number:'10',
            column:'도로명주소관리번호', 
            size:'26', 
            format:'문자', 
            pk:'PK1', 
            note:'시군구코드(5) + 도로명번호(7)', 
        },
    ]);
	const handleList = () => {
		// 목록으로 이동
	}

</script>

<template>

	<div class="commonBox">
		<div class="commonBox__function">
			<h4 class="commonBox__title">도로명주소 출입구 정보</h4>
			<Button class="button-krds secondary middle">활용가이드 다운로드</Button>
		</div>
		<DataTable 
			class="tableStyle01"
			:value="sales"
			ref="dataTableRef"
		>
			<Column header="순번" field="number" style="width:100px;" />
			<Column header="컬럼명" field="column" style="width:300px;" />
			<Column header="크기" field="size" style="width:150px;" />
			<Column header="형식" field="format" style="width:160px;" />
			<Column header="PK" field="pk" style="width:120px;" />
			<Column header="비고" field="author" style="width:300px;"  />
		</DataTable>
    </div>
    <DetailBottomButtons
        type="left"
        :leftButtons="[
            { text: '목록으로', onClick: handleList, class: 'tertiary' }
        ]"
    />
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/table/datatable';
	@use '@/assets/scss/contents/box/box';
</style> 