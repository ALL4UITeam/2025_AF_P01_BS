<script setup>
    import { onMounted, ref, onBeforeUnmount, watch, defineAsyncComponent } from "vue";
    const SearchResult = defineAsyncComponent(() => import('./SearchResult.vue'));
    const isUseSearchResult = ref(false);
    // 검색결과 열기
    const fnIsUseSearchResult = () => {
      if (!isUseSearchResult.value){
        isUseSearchResult.value = true;
      }
    };

    const clearInput = () => {
        modelValue.value = '';
        setTimeout(() => {
            const inputElement = document.querySelector('.mainSearchBox input');
            if (inputElement) {
                inputElement.focus();
            }
        }, 0);
    };

    const modelValue = ref('');
    const inputValue = ref('');
    const isFixed = ref(false);
    const isMobile = ref(false);

    watch(modelValue, (newValue) => {
        console.log('modelValue changed:', newValue);
    });

    const handleMouseDown = (event) => {
        const recentSearchesArea = document.querySelector('.recentSearches');
        const clickedElement = event.target;
        
        if (clickedElement.closest('input') || 
            clickedElement.closest('.mainSearchBox__recentSearchesButtonMore')) {
            return;
        }
        
        if (recentSearchesArea && clickedElement) {
            if (recentSearchesArea.contains(clickedElement) || 
                clickedElement.closest('.mainSearchBox')) {
                subHeaderIsActiveRecentSearches.value = true;
            } else {
                subHeaderIsActiveRecentSearches.value = false;
            }
        }
    }

    const handleScroll = () => {
      isFixed.value = window.scrollY > 20;
    }

    const checkWindowSize = () => {
      isMobile.value = window.innerWidth <= 1080;
    }

    onMounted(() => {
        document.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('scroll', handleScroll);
        checkWindowSize();
        window.addEventListener('resize', checkWindowSize);
    });

    onBeforeUnmount(() => {
        document.removeEventListener('mousedown', handleMouseDown);
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', checkWindowSize);
    });

    //검색영역 최근검색어 토글기능
    const subHeaderIsActiveRecentSearches = ref(false);
    const subHeaderToggleActiveRecentSearches = () => {
        subHeaderIsActiveRecentSearches.value = !subHeaderIsActiveRecentSearches.value;
    }

    //우편주소 표기방법
    const postActive = ref(false);

    const postToggleActive = () => {
        postActive.value = !postActive.value;
    }

    //변동이력 검색
    const changeHistoryDialogVisible = ref(false);

    const changeHistorydialogActive = ref('');

    const changeHistoryOnShowDialog = async(id) => {
        changeHistoryDialogVisible.value = true;

        setTimeout(() => {
        document.querySelector('#changeHistoryDialogFocus').focus();
        }, 0);
        await nextTick();
        const headers = document.querySelectorAll('th[role="columnheader"]');
        headers.forEach(header => {
            header.setAttribute('scope', 'col');
        })

        const dataTableEl = dataTableRef.value.$el.querySelector('.p-datatable-table');
        if (dataTableEl) {
            const caption = document.createElement('caption');
            caption.textContent = '변동이력 테이블입니다. 변동일자, 주소, 고시여부, 읍면동, 변동구분을 제공합니다.';
            dataTableEl.prepend(caption);
        }
    }

    const changeHistoryCloseDialog = () => {
        changeHistoryDialogVisible.value = false;
        document.querySelector('#changeHistoryOnShow').focus();
    }

    const changeHistoryOnHideDialog = async() => {
        await nextTick();
    }

    //테이블
    const dataTableRef = ref(null);

    //검색영역 최근검색어 토글기능
    const searchCurrent = ref(false);
    const searchCurrentRecentSearches = () => {
        searchCurrent.value = !searchCurrent.value;
    }
    //검색결과 샘플 코드
    const recentSearchesResult = ref(false);
    const recentSearchesResultRef = () => {
        recentSearchesResult.value = true;
        isMainDesign.value = true;
    }

    const isMainDesign = ref(false);  // mainDesign 클래스 상태 관리를 위한 ref 추가

    // 닫기 버튼 클릭 핸들러
    const closeRecentSearches = () => {
        subHeaderIsActiveRecentSearches.value = false;
    }

    // 검색 결과 닫기 함수
    const closeSearchResult = () => {
        recentSearchesResult.value = false;
        isMainDesign.value = false;
    }
    const selectedCategories = ref(['AAA']);
    const selectedCategoriesResult = ref([]);
    const categoriesResult = ref([
        { key: 'address', label: '사물주소 검색' },
        { key: 'abolition', label: '폐지된 주소정보 포함' },
        { key: 'coordinate', label: '좌표 검색' },
        { key: 'auto', label: '자동완성 사용 안함' }
    ]);
</script>

<template>
    <div class="mainAddressSearch" :class="{ 'mainDesign': isMainDesign }">
        <div class="resultLayerPopup main">

            <div class="mainSearchBoxBasic">
                <div class="mainSearchBoxBasic__glass"><img aria-hidden="true" src="@images/main/img_glass.svg" class="mainSearchBoxBasic__searchAdressImage" alt="돋보기 이미지"></div>
                <div class="mainSearchBoxBasic__wrap">
                    <div id="searchBox" :class="['mainSearchBox', {current : subHeaderIsActiveRecentSearches}]">
                        <label for="mainHeaderSearch">
                            <span class="blind">검색어 입력</span>
                        </label>
                        <div class="inputWrap">
                            <input 
                                type="text"
                                v-model="modelValue"
                                placeholder="예) 도움6로 42, 국립중앙박물관, 상암동 1595, 초성검색" 
                                class="mainSearchBoxBasic__searchAdressTyping active ui-autocomplete-input" 
                                name="searchKeyword" 
                                id="mainHeaderSearch" 
                                maxlength="85" title="예) 도움6로 42, 국립중앙박물관, 상암동 1595, 초성검색" 
                                autocomplete="off"
                                @click="subHeaderToggleActiveRecentSearches"
                                @focusin="fnIsUseSearchResult"
                            />
                        </div>
                        <button v-if="modelValue" @click="clearInput" class="clearButton" title="삭제">
                            <span class="blind">삭제</span>
                            <i aria-hidden="true" class="clearIcon" />
                        </button>
                        <button class="mainSearchBox__recentSearchesButtonMore" :title="subHeaderIsActiveRecentSearches ? '최근검색어 닫기' : '최근검색어 보기'" @click="subHeaderToggleActiveRecentSearches">
                            <span class="blind">{{ subHeaderIsActiveRecentSearches ? '최근검색어 닫기' : '최근검색어 보기' }}</span>
                            <i aria-hidden="true" :class="['caretIcon', subHeaderIsActiveRecentSearches ? 'active' : '']" />
                        </button>
                        <div class="recentSearches">
                            <div class="recentSearches__box">
                                <p class="recentSearches__title">최근검색어</p>
                                <ul class="recentSearches__list">
                                    <li class="non-result"><span class="no-data">최근검색어 내역이 없습니다.</span></li>
                                </ul>
                            </div>
                            <div class="recentSearches__recentSearchesfunction">
                                <button class="recentSearches__recentSearchesfunctionButton">전체삭제</button>
                                <div>
                                    <button class="recentSearches__recentSearchesfunctionButton">검색이력 끄기</button>
                                    <button class="recentSearches__recentSearchesfunctionButton" @click="closeRecentSearches">닫기</button>
                                </div>
                            </div>
                        </div>
                        <button class="searchButton" title="검색" @click="recentSearchesResultRef">
                            <i aria-hidden="true" class="searchIcon" />
                            <span class="irText">검색</span>
                        </button>
                    </div>
                    <div class="resultLayerPopup__headerFunction mainResult">
                        <div class="resultLayerPopup__functionList" v-for="checkList of categoriesResult" :key="checkList.key">
                            <input type="checkbox" 
                                v-model="selectedCategoriesResult" 
                                :id="`checkbox-${checkList.key}`" 
                                name="checkListResult" 
                                :value="checkList.label" 
                            />
                            <label class="resultLayerPopup__functionLabel" :for="`checkbox-${checkList.key}`">
                                {{ checkList.label }}
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <SearchResult
                v-if="recentSearchesResult"
                :searchKeyword="modelValue"
                :totalCount="4"
                @closeSearchResult="closeSearchResult"
            />
            <div class="resultLayerPopup__close">
                <button class="resultLayerPopup__closeButton" type="button" title="검색 결과 닫기" v-show="recentSearchesResult" @click="closeSearchResult">
                    <i aria-hidden="true" class="clearIcon"></i>
                    <span class="blind">검색 결과 닫기</span>
                </button>
            </div>
        </div>

        <div :class="['mainSearchBoxBasic__quickMenu', {fixed: isFixed, mobileType: isMobile}]" v-show="!recentSearchesResult">
            <button class="mainSearchBoxBasic__quickButton" title="지도로 찾기">
                <span class="mainSearchBoxBasic__quickText pc">지도로<br>찾을래요.</span>
                <span class="mainSearchBoxBasic__quickText mo">지도보기</span>
            </button>
        </div>
    </div>
</template>