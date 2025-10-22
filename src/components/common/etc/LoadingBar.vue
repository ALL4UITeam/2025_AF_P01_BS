<template>
    <div class="preloader" role="status" aria-live="polite" aria-label="페이지 로드 중">
        <img class="symbol" :src="symbolUrl" alt="" />
        <span class="sr-only">페이지 로드 중...</span>
    </div>
</template>

<script setup lang="ts">
    import symbolUrl from '@/assets/images/etc/symbol.svg'
</script>

<style scoped>
.preloader {
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, .3);
    z-index: 2147483647;
}

.symbol {
    width: 64px;
    height: 64px;
    animation: pulse 1.6s ease-in-out infinite;
}

@keyframes pulse {
    0% {
        transform: scale(0.98);
        opacity: 0.85;
    }

    50% {
        transform: scale(1.02);
        opacity: 1;
    }

    100% {
        transform: scale(0.98);
        opacity: 0.85;
    }
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

@media (prefers-reduced-motion: reduce) {
    .symbol {
        animation: none;
    }
}
</style>
