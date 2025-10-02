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
            entrance:'11110101410028300001900004',
            legalcode:'10',
            provincename:'10',
            countyname:'10',
            villagename:'10',
            roadcode:'10',
            roadname:'10',
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
		</div>
		<DataTable 
			class="tableStyle01"
			:value="sales"
			ref="dataTableRef"
		>
			<Column header="도로명주소 출입구 정보" field="entrance" style="width:310px;" />
			<Column header="법정코드" field="legalcode" style="width:150px;" />
			<Column header="시도명" field="provincename" style="width:140px;" />
			<Column header="시군구명" field="countyname" style="width:120px;" />
			<Column header="법정읍면동명" field="villagename" style="width:110px;" />
			<Column header="도로명코드" field="roadcode" style="width:150px;"  />
			<Column header="도로명" field="roadname" style="width:150px;"  />
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