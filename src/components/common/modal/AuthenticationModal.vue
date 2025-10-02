<script setup>
import { ref, onMounted, onBeforeUnmount, nextTick, watch } from 'vue';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';

const visible = ref(false);
const lastFocusedElement = ref(null);
const modalRef = ref(null);
const dialogRef = ref(null);

const emit = defineEmits(['close']);

const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
let focusableContent = [];
let firstFocusableElement;
let lastFocusableElement;

const updateFocusableElements = () => {
    const dialogElement = document.querySelector('.p-dialog-content');
    if (!dialogElement) return;
    
    focusableContent = Array.from(dialogElement.querySelectorAll(focusableElements));
    firstFocusableElement = focusableContent[0];
    lastFocusableElement = focusableContent[focusableContent.length - 1];

    if (firstFocusableElement) {
        firstFocusableElement.focus();
    }
};

const handleTabKey = (e) => {
    if (!visible.value) return;
    
    const isTabPressed = e.key === 'Tab' || e.keyCode === 9;
    if (!isTabPressed) return;

    if (!focusableContent.length) {
        updateFocusableElements();
        if (!focusableContent.length) {
            e.preventDefault();
            return;
        }
    }

    if (e.shiftKey) {
        if (document.activeElement === firstFocusableElement) {
            e.preventDefault();
            lastFocusableElement.focus();
        }
    } 
    // Tab
    else {
        if (document.activeElement === lastFocusableElement) {
            e.preventDefault();
            firstFocusableElement.focus();
        }
    }
};

const setFocusTrap = async () => {
    await nextTick();
    updateFocusableElements();
};

const openModal = async () => {
    lastFocusedElement.value = document.activeElement;
    visible.value = true;
    
    await nextTick();
    setFocusTrap();
};

const closeModal = () => {
    visible.value = false;
    emit('close');
    
    if (lastFocusedElement.value && typeof lastFocusedElement.value.focus === 'function') {
        lastFocusedElement.value.focus();
    }
};

defineExpose({
    openModal
});

const handleAuthentication = (type) => {
    console.log(`Selected authentication type: ${type}`);
};

watch(() => visible.value, async (newValue) => {
    if (newValue) {
        await nextTick();
        const dialogElement = document.querySelector('.p-dialog-content');
        if (dialogElement) {
            dialogElement.addEventListener('keydown', handleTabKey);
        }
        updateFocusableElements();
    } else {
        const dialogElement = document.querySelector('.p-dialog-content');
        if (dialogElement) {
            dialogElement.removeEventListener('keydown', handleTabKey);
        }
    }
});
</script>

<template>
    <Dialog 
        v-model:visible="visible"
        modal 
        :closable="false"
        :style="{ width: '882px' }"
        @hide="closeModal"
        class="commonDialog"
        :closeOnEscape="true"
        ref="modalRef"
        role="dialog"
        aria-modal="true"
    >
        <div 
            ref="dialogRef"
            class="commonDialog__content"
            @keydown.esc="closeModal"
        >
            <div class="commonDialog__header">
                본인인증
            </div>
            <div class="commonDialog__linkBox" role="group" aria-labelledby="auth-modal-title">
                <a
                    class="commonDialog__link"
                    @click="handleAuthentication('personal')"
                    aria-label="본인 인증"
                >
                    <div class="commonDialog__linkTitle">본인 인증</div>
                    <p class="commonDialog__linkText">휴대폰 번호를 이용하여 로그인합니다.</p>
                </a>
                <a
                    class="commonDialog__link"
                    @click="handleAuthentication('simple')"
                    aria-label="간편 인증"
                >
                    <div class="commonDialog__linkTitle">간편 인증</div>
                    <p class="commonDialog__linkText">네이버, 카카오 등 전자서명 사업자가 제공하는 전자서명을 이용하여 로그인합니다.</p>
                </a>
                <a
                    class="commonDialog__link"
                    @click="handleAuthentication('ipin')"
                    aria-label="아이핀 인증"
                >
                    <div class="commonDialog__linkTitle">아이핀 인증</div>
                    <p class="commonDialog__linkText">본인 명의의 아이핀 계정으로 인증하여 로그인합니다.</p>
                </a>
            </div>
            <Button 
                icon="pi pi-times" 
                class="commonDialog__close" 
                @click="closeModal"
                aria-label="Close dialog"
            />
        </div>
    </Dialog>
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/popup/commonPopup';
</style> 