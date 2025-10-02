<script setup>
import { ref, onMounted, watch, nextTick } from 'vue';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const props = defineProps({
    isOpen: {
        type: Boolean,
        default: false
    }
});

const emit = defineEmits(['close']);

const swiper = ref(null);

const initSwiper = () => {
    if (swiper.value) {
        swiper.value.destroy();
    }
    
    swiper.value = new Swiper('.alarmPopup__swiper', {
        modules: [Navigation, Pagination],
        slidesPerView: 'auto',
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        observer: true,
        observeParents: true
    });
};

watch(() => props.isOpen, (newValue) => {
    if (newValue) {
        nextTick(() => {
            initSwiper();
        });
    }
});

onMounted(() => {
    if (props.isOpen) {
        initSwiper();
    }
});

const closePopup = () => {
    emit('close');
};
</script>

<template>
    <div v-if="isOpen" class="alarmPopup">
        <div class="alarmPopup__inner">
            <div class="alarmPopup__content">
                <div class="swiper alarmPopup__swiper">
                    <div class="swiper-wrapper">
                        <div class="swiper-slide">
                            <div class="alarmPopup__item">
                                <p class="alarmPopup__text">새로운 알림이 있습니다.</p>
                                <span class="alarmPopup__date">2024.03.21</span>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="alarmPopup__item">
                                <p class="alarmPopup__text">시스템 점검이 예정되어 있습니다.</p>
                                <span class="alarmPopup__date">2024.03.20</span>
                            </div>
                        </div>
                        <div class="swiper-slide">
                            <div class="alarmPopup__item">
                                <p class="alarmPopup__text">새로운 기능이 추가되었습니다.</p>
                                <span class="alarmPopup__date">2024.03.19</span>
                            </div>
                        </div>
                    </div>
                    <div class="swiper-pagination"></div>
                    <div class="swiper-button-prev"></div>
                    <div class="swiper-button-next"></div>
                </div>
            </div>
            
            <button type="button" class="alarmPopup__close" @click="closePopup" title="닫기">
                <i class="bi bi-x-lg"></i>
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    @use '@/assets/scss/contents/layout/alarm.scss';
</style> 