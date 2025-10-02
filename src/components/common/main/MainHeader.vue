<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import HeaderMenu from '@/components/common/HeaderMenu.vue'

const activeIndex = ref(-1);

const toggleSubmenu = (index) => {
    if (activeIndex.value === index) {
        activeIndex.value = null;
    } else {
        activeIndex.value = index;
    }
};

const handleClickOutside = (event) => {
    const gnbElement = document.querySelector('.header__gnb');
    if (gnbElement && !gnbElement.contains(event.target)) {
        activeIndex.value = -1;
    }
};

const handleFocusOut = (event) => {
    const gnbElement = document.querySelector('.header__gnb');
    if (gnbElement && !gnbElement.contains(event.relatedTarget)) {
        activeIndex.value = -1;
    }
};

onMounted(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('focusout', handleFocusOut);
});

onBeforeUnmount(() => {
    document.removeEventListener('mousedown', handleClickOutside);
    document.removeEventListener('focusout', handleFocusOut);
});

// ... existing code ...
</script>

<template>
    <div class="mainHeaderWrap headerHeight">
        <div class="header__wrap mainHeader">
            <div class="header__inner">
                <div class="header">
                    <h1 class="header__logo">
                        <a href="/openIndexPage.do"><img src="@images/common/img-logo@2x.png" alt="도로명주소 로고"></a>
                    </h1>
                    <div class="header__menu">
                        <button class="header__menuFunction" type="button">
                            <span class="blind">메뉴열기</span>
                        </button>
                    </div>
                    <div class="header__gnb">
                        <div class="header__mobileHeader">
                            <h1 class="header__logo">
                                <a href="/openIndexPage.do"><img src="@images/common/img-logo@2x.png" alt="도로명주소 로고"></a>
                            </h1>
                            <button class="header__mobileHeaderClear" type="button">
                                <i aria-hidden="true" class="bi bi-x-lg"></i>
                                <span class="blind">메뉴닫기</span>
                            </button>
                        </div>
                        
                        <HeaderMenu />

                        <div class="header__etc">
                            <div class="header__certification" id="timer" style="display: none;">본인인증 <span class="on">ON</span><span id="counter">00:00</span>
                                <button class="clear" type="button">인증해제</button>
                            </div>
                            <div class="header__etcFunction">
                                <a href="/openEngPage.do" class="language">EN</a>
                                <a href="https://business.juso.go.kr/addrlink/main.do?cPath=99JM" target="_blank" class="link" title="주소기반산업지원서비스 이동하기">주소기반산업지원서비스</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

