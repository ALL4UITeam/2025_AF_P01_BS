<script setup>
  import { ref, watch, onMounted, computed, nextTick } from "vue";
	import InputText from 'primevue/inputtext'
	import Button from 'primevue/button';
  import Dialog from 'primevue/dialog';
  import DataTable from 'primevue/datatable'
  import Column from 'primevue/column';
  import ColumnGroup from 'primevue/columngroup';
  import HeaderTitle from '@components/title/HeaderTitle.vue';
  import ContentTitle from '@components/title/ContentTitle.vue';

    const props = defineProps({
        modelValue : {
          type: String,
          required: true,
        },
        placeholder : {
          type: String,
          default : '입력하세요.'
        },
        title : {
          type: String,
          default : ''
        }
    });

    const emit = defineEmits(['update:modelValue']);

    const clearInput = () => {
      modelValue.value = '';
      emit('update:modelValue', '');

      setTimeout(() => {
        const inputElement = document.querySelector('#AddressSearchBoxForm');
        if (inputElement) {
          inputElement.focus();
        }
      }, 0);
    };

    watch(() => props.modelValue, (newValue) => {
      modelValue.value = newValue
    })

    const modelValue = ref(props.modelValue);
    const dialogVisible = ref(false);

    const onShowDialog = async(item) => {
        dialogVisible.value = true;
        setTimeout(() => {
        document.querySelector('#myHomeAddressDialogFocus').focus();
        }, 0);
        nextTick(() => {
          const headers = document.querySelectorAll('th[role="columnheader"]');
          headers.forEach(header => {
              header.setAttribute('scope', 'col');
          })
          const dataTableEl = dataTableReResult.value.$el.querySelector('.p-datatable-table');
          if (dataTableEl) {
              const caption = document.createElement('caption');
              caption.textContent = '도로명 정보조회 화면 입니다.  시/도, 시/군/구, 도로명, 본번, 부번, 고시일자, 효력발생일, 읍/면/동, 구분 값을 제공합니다.';
              dataTableEl.prepend(caption);
          }
        })
    }

    const closeDialog = () => {
        dialogVisible.value = false;
        document.querySelector('#myHomeAddress').focus();
    }

    const modelValueResultItem = ref('');
    const innerClearInput = () => {
      modelValueResultItem.value = '';

      setTimeout(() => {
        const inputElement = document.querySelector('#innerSearch');
        if (inputElement) {
          inputElement.focus();
        }
      }, 0);
    };
    //테이블
    const dataTableReResult = ref(null);
    const dataTableReResultItem = ref([
        {
            number:'1', 
            address:'용인서울고속도로', 
            postnumber:'123231',
        },
        {
            number:'1', 
            address:'용인서울고속도로', 
            postnumber:'123231',
        },
    ]);

    const totalCount = computed(() => {
        return dataTableReResultItem.value.length;
    })

</script>

<template>
  <div class="addressSearchBox">
    <div class="addressSearchBox__inner">
      <label class="blind" for="AddressSearchBoxForm">검색어 입력</label>
      <InputText 
        v-model="modelValue"
        :placeholder="placeholder"
        :title="title"
        id="AddressSearchBoxForm"
      />
      <Button v-if="modelValue" @click="clearInput" class="clearButton" title="삭제">
        <span class="blind">삭제</span>
        <i aria-hidden="true" class="bi bi-x" />
      </Button>
      <Button id="myHomeAddress" class="searchButton" title="검색" @click.prevent="onShowDialog(item)">
        <i aria-hidden="true" class="bi bi-search" />
        <span class="irText">검색</span>
      </Button>
    </div>
  </div>
  <Dialog 
        class="commonDialog"
        id="dlg" 
        :visible="dialogVisible" 
        modal 
        :closable="false" 
        :aria-controls="dialogVisible ? 'dlg' : null"
        :aria-expanded="dialogVisible ? true : false"
    >
        <template #header>      
          <Button id="myHomeAddressDialogFocus" class="dialogCloseButton" @click="closeDialog">
              <i aria-hidden="true" class="bi bi-x" /><span class="blind">팝업닫기</span>
          </Button>
        </template>
        <ContentTitle title="도로명주소찾기" fontSize="30px" marginTop="0" mobileFontSize="20px" />
        
        <div class="innerContentSearch">
          <label class="blind" for="search">검색어 입력</label>
          <InputText 
            v-model="modelValueResultItem"
            id="innerSearch"
          />
          <Button v-if="modelValueResultItem" @click="innerClearInput" class="clearButton" title="삭제">
            <span class="blind">삭제</span>
            <i aria-hidden="true" class="bi bi-x" />
          </Button>
          <Button class="searchButton" title="검색">
            <i aria-hidden="true" class="bi bi-search" />
            <span class="irText">검색</span>
          </Button>
        </div>
        <p class="innerSerchText">검색어 예)도로명(서울특별시 서초구 반포대로 58), 지번(서울특별시 강남구 삼성동 25)</p>
        <div class="dataTable__caption rightType">
            <div class="dataTable__count">
            총 <strong class="bold">{{totalCount}}</strong>건
            </div>
        </div>
        <DataTable 
          class="tableStyle01 noneLine gapStyle01"
          :value="dataTableReResultItem"
          ref="dataTableReResult"
        > 
            <Column header="No." field="number" style="width:10%;" />
            <Column header="주소" field="address" class="alignLeft" />
            <Column header="우편번호" field="postnumber" style="width:20%;" />
        </DataTable>
    </Dialog>
</template>


<style lang="scss" scoped>
@use '@/assets/scss/common/_mixin';

.addressSearchBox {
    display: flex;
    justify-content: center;
    margin-top:50px;
    padding:20px 0;
    border-radius: 20px;
    background: #eaedf2;
}
.addressSearchBox__inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 720px;
  height: 70px;
  border-radius: 45px;
  border:1px solid #2b6ae5;
  background: #fff;

  input {
    width: calc(100% - 106px);
    height: 100%;
    font-size:18px;
    padding-left:20px;
  }
}
.clearButton {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 22px;
  height: 22px;
  min-width: 22px;
  border-radius: 50%;
  margin-left:14px;
  background: #e1e4ea;
  color:#333;

  i {
    width: auto;
    height: auto;
    font-size:17px;
    font-weight: bold;
    margin:1px 0 0 1px;
  }
}
.searchButton {
  position: relative;
  width: 26px;
  min-width: 26px;
  height: 100%;
  margin-left:14px;

  i {
    width: auto;
    height: auto;
    color:#2b6ae5;
    font-size: 24px;
  }
}

.innerContentSearch {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top:20px;
  padding:10px 20px;
  border-radius: 12px;
  border:1px solid #ddd;
  input {
    flex:1;
  }
}

.innerSerchText {
  margin-top:10px;
  color:#333;
  font-size:17px;
}

@include mixin.breakpoint-tablet {
  .addressSearchBox {
      margin-top:20px;
      padding:0;
      border-radius: 0;
      background: none;
  }
  .addressSearchBox__inner {
    width: 100%;
    max-width: 100%;
    height: 60px;
    border-radius: 30px;
    box-shadow: 1px 2.8px 15px 0 rgba(0,0,0,0.05);

    input {
      width: calc(100% - 70px);
      height: 100%;
      font-size:15px;
    }
  }

  .innerContentSearch {
  display: flex;
  align-items: center;
  width: 100%;
  margin-top:20px;
  padding:5px 10px;
  border-radius: 12px;
}

.innerSerchText {
  font-size:13px;
}

}
</style>