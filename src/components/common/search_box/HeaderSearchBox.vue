<script setup>
  import { ref, watch } from "vue";
	import InputText from 'primevue/inputtext'
	import Button from 'primevue/button';

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

  const resultViewClick = () => {
    emit('resultViewClick');
  }
  const emit = defineEmits(['update:modelValue', 'resultViewClick']);

  const clearInput = () => {
    modelValue.value = '';
    emit('update:modelValue', '');

    setTimeout(() => {
      const inputElement = document.querySelector('.searchBox input');
      if (inputElement) {
        inputElement.focus();
      }
    }, 0);
  };

  watch(() => props.modelValue, (newValue) => {
    modelValue.value = newValue
  })

  const modelValue = ref(props.modelValue);

  const inputValue = ref('');


  const handleFocusOut = (event) => {
    const relatedTarget = event.relatedTarget;
    const isInRecentSearchesElement = relatedTarget && event.currentTarget.querySelector('.recentSearches').contains(relatedTarget);
    const isInput = relatedTarget === event.currentTarget.querySelector('input');

    if (!isInRecentSearchesElement && !isInput) {
        isCurrent.value = false;
    }
  }
    //검색영역 최근검색어 토글기능
    const subHeaderIsActiveRecentSearches = ref(false);
    const subHeaderToggleActiveRecentSearches = () => {
        subHeaderIsActiveRecentSearches.value = !subHeaderIsActiveRecentSearches.value;
    }

</script>

<template>
  <div :class="['searchBox', {current : subHeaderIsActiveRecentSearches}]"
  >
    <label for="headerSearch"><span class="blind">검색어 입력</span></label>
    <InputText 
      v-model="modelValue"
      :placeholder="placeholder"
      :title="title"
      id="headerSearch"
      autocomplete="off"
    />
    <Button v-if="modelValue" @click="clearInput" class="clearButton" title="삭제">
      <span class="blind">삭제</span>
      <i aria-hidden="true" class="bi bi-x" />
    </Button>
    <Button class="searchBox__recentSearchesButtonMore" :title="subHeaderIsActiveRecentSearches ? '최근검색어 보기' : '최근검색어 닫기'" @click="subHeaderToggleActiveRecentSearches">
        <span class="blind">{{ subHeaderIsActiveRecentSearches ? '최근검색어 보기' : '최근검색어 닫기' }}</span>
        <i aria-hidden="true" class="bi bi-caret-down-fill" />
    </Button>
    <div class="recentSearches" @focusin="handleFocusIn">
        <div class="recentSearches__box">
          <p class="recentSearches__title">최근검색어</p>
          <ul class="recentSearches__list">
            <li>
              <Button class="recentSearches__text" title="">
                <span class="recentSearches__searchText">한강로 2가</span>
              </Button>
              <span class="recentSearches__date">09.23</span>
              <Button class="recentSearches__button" title="검색어 삭제">
                <i aria-hidden="true" class="bi bi-x" />
                <span class="blind">검색어 삭제</span>
              </Button>
            </li>
            <li>
              <Button class="recentSearches__text">
                <span class="recentSearches__searchText">여의동도 동사당대로1 동사당대로1 동사당대로1 동사당대로1 동사당대로1</span>
              </Button>
              <span class="recentSearches__date">09.23</span>
              <Button class="recentSearches__button" title="검색어 삭제">
                <i aria-hidden="true" class="bi bi-x" />
                <span class="blind">검색어 삭제</span>
              </Button>
            </li>
          </ul>
        </div>
        <div class="recentSearches__recentSearchesfunction">
            <Button class="recentSearches__recentSearchesfunctionButton">전체삭제</Button>
            <div>
                <Button class="recentSearches__recentSearchesfunctionButton">검색이력 끄기</Button>
                <Button class="recentSearches__recentSearchesfunctionButton">닫기</Button>
            </div>
        </div>
    </div>
    <Button class="searchButton" title="검색" @click="resultViewClick">
      <i aria-hidden="true" class="bi bi-search" />
      <span class="irText">검색</span>
    </Button>
  </div>
</template>
