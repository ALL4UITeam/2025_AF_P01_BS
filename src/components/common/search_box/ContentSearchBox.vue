<script setup>
  import { ref, watch } from "vue";
	import InputText from 'primevue/inputtext'
	import Button from 'primevue/button';
  import Dropdown from 'primevue/dropdown';
    
  const props = defineProps({
    dropdownItems: {
      type: Array,
      default: () => ([
        {label:'제목', value:'subject'},
        {label:'내용', value:'content'},
      ])
    },
    modelValue: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: '검색어를 입력하세요'
    },
    title: {
      type: String,
      default: '검색'
    },
    type: {
      type: String,
      default: 'default'
    }
  })

  //셀렉트박스
  const selectedItem = ref(props.dropdownItems[0]?.value || null);
  const searchInput = ref(null);
  const searchKeyword = ref('')

  const emit = defineEmits(['search', 'write', 'update:modelValue'])

  const handleSearch = () => {
    emit('search', { type: selectedItem.value, keyword: searchKeyword.value })
  }

  const handleWrite = () => {
    emit('write')
  }

  const clearInput = () => {
    searchKeyword.value = '';
    emit('update:modelValue', '');
    // 실제 input 엘리먼트에 포커스
    setTimeout(() => {
      const inputElement = searchInput.value?.$el;
      if (inputElement) {
        inputElement.querySelector('input')?.focus();
      }
    }, 0);
  }
</script>

<template>
  <div class="contentSearchBox" :class="`${type}`">
    <div class="contentSearchBox__filter">
      <Dropdown
        v-model="selectedItem"
        :options="dropdownItems"
        optionLabel="label"
        placeholder="전체"
        class="contentSearchBox__dropdown"
        appendTo="self"
      />

      <div class="contentSearchBox__inputText">
          <label class="blind" for="search">검색어 입력</label>
          <InputText 
            ref="searchInput"
            v-model="searchKeyword"
            :placeholder="placeholder"
            :title="title"
            id="search"
          />
          <Button v-if="searchKeyword" @click="clearInput" class="contentSearchBox__clearButton" title="검색어 삭제">
            <span class="blind">삭제</span>
            <i aria-hidden="true" class="bi bi-x" />
          </Button>
      </div>
      <Button class="" title="검색" @click="handleSearch">
        <i aria-hidden="true" class="bi bi-search" />
        <span class="irText">검색</span>
      </Button>
    </div>

    <div class="contentSearchBox__writeBox">
        <Button class="button-krds primary middle" @click="handleWrite">글쓰기</Button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.contentSearchBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top:40px;
  padding:40px;
  border-radius: 10px;
  background-color: #eef2f7;
  
  // type variants
  &.type01 {
    margin-top: 48px;
  }
  
  
  &__filter {
    display: flex;
    align-items: center;
    gap:16px;
  }
  &__dropdown {
    min-width: 160px;
    height: 48px;
    border:1px solid #717171;
    &::v-deep(.p-dropdown-label) {
      display: flex;
      align-items: center;
      padding:0 0 0 17px;
      color:#1d1d1d;
      font-size:17px;
    }
    &::v-deep(.p-dropdown-trigger) {
      * {
        fill:#000;
      }
    }
    &::v-deep(.p-dropdown-item) {
      height: 48px;
      padding-left:17px;
    }
  }
  &__inputText {
    display: flex;
    align-items: center;
    min-width: 400px;
    height: 48px;
    border-radius: 6px;
    border:1px solid #717171;
    background-color: #fff;

    &::v-deep(.p-inputtext) {
      width: 100%;
      flex:1;
      background: transparent;
      border:none;
      color: #1d1d1d;
      font-size:17px;

      &::placeholder {
        color:#8e8e8e;
      }
    }
  }

  &__clearButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 20px;
    height: 20px;
    min-width: 20px;
    border-radius: 50%;
    border:none;
    margin:0 10px 0 14px;
    background: #e1e4ea;
    color: #333;
    i {
        width: auto;
        height: auto;
        font-size: 17px;
        font-weight: bold;
    }
  }


  &__writeBox {

  }
}
</style>