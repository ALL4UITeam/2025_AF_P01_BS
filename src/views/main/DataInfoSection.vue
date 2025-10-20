<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, A11y, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'

const items = [
    { icon: '/src/assets/images/main/slide-data01.png', title: '건물', count: 76959 },
    { icon: '/src/assets/images/main/slide-data02.png', title: '상세주소', count: 65345 },
    { icon: '/src/assets/images/main/slide-data03.png', title: '출입구', count: 42750 },
    { icon: '/src/assets/images/main/slide-data04.png', title: '기초 번호', count: 36450 },
    { icon: '/src/assets/images/main/slide-data05.png', title: '구역경계', count: 23582 },
    { icon: '/src/assets/images/main/slide-data06.png', title: '사물주소', count: 1959 },
    { icon: '/src/assets/images/main/slide-data07.png', title: '지점번호', count: 658 },
    { icon: '/src/assets/images/main/slide-data07.png', title: '지점번호2', count: 658 },
]

const fmt = (n) => new Intl.NumberFormat('ko-KR').format(n)
</script>

<template>
    <section class="Data--Info">
        <div class="Data--Info__head">
            <h3 class="title">주소기반정보에서 보유한 데이터를 소개합니다.</h3>
            <p class="meta"><i class="icon i-mark"></i>기준일 (2025년 7월)</p>
        </div>

        <div class="slider">
            <button class="nav nav--prev" aria-label="이전"></button>
            <button class="nav nav--next" aria-label="다음"></button>

            <Swiper :modules="[Navigation, A11y, Keyboard]" :slidesPerView="7" :space-between="20"
                :keyboard="{ enabled: true }" :navigation="{ prevEl: '.nav--prev', nextEl: '.nav--next' }" 
                >
                <SwiperSlide v-for="(it, i) in items" :key="i">
                    <article class="slide--card" role="group" :aria-label="`${it.title} ${fmt(it.count)}건`">
                        <div class="slide--card__inner">
                            <div class="slide--card__thumb">
                                <img :src="it.icon" :alt="`${it.title} 아이콘`" />
                            </div>
                            <div class="slide--card__body">
                                <strong class="slide--card__name">{{ it.title }}</strong>
                            </div>
                        </div>
                        <span class="slide--card__count">{{ fmt(it.count) }}<small>건</small></span>
                    </article>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<style scoped lang="scss">
.Data--Info{
    padding: 120px 0 0;
    &__head{
        max-width: 1200px;
        margin: 0 auto 14px;
        padding: 0 24px;
        justify-content: center;
        .title {
            text-align: center;
            font-size: 40px;
            font-weight: 700;
            color: #112660;
            text-align: center;
            margin-bottom: 70px;
        }
        .meta {
            text-align: right;
            color: #555555;
            font-size: 17px;
            .i-mark{
                display: inline-block;
                width: 18px;
                height: 18px;
                background-image: url('@/assets/images/main/i-mark.png');
                background-repeat: no-repeat;
                background-position: center;
                vertical-align: middle;
                margin-right: 3px;
            }
        }
    }
    .slider {
        position: relative;
        max-width: 1200px;
        margin: 0 auto;
    }
    .nav {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 32px;
        height: 32px;
        border-radius: 999px;
        border: 0;
        cursor: pointer;
        background: #fff;
        box-shadow: 0 6px 18px rgba(16, 36, 77, .12);
        &::after {
            content: '';
            display: block;
            width: 8px;
            height: 8px;
            border-top: 2px solid #345;
            border-right: 2px solid #345;
            margin: 10px auto;
            transform: rotate(45deg)
        }
        &.nav--prev {
            left: -15px;
            z-index: 10;
            &::after {
                transform: rotate(225deg)
            }
        }
        &.nav--next {
            z-index: 10;
            right: -15px;
        }
    }

}


.slide--card {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    min-height: 200px;
    &__inner{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 150px;
        align-items: center;
        background: rgba(255,255,255,.6);
        border-radius: 20px;
        gap:20px;
    }
    &__name {
        display: block;
        font-size: 18px;
        color: #1d1d1d;
        margin-bottom: 6px;
    }
    &__count {
        color: #112660;
        font-weight: 700;
        font-size: 21px;

        small {
            margin-left: 2px;
            color: #6b7a99;
            font-weight: 600;
        }
    }
}
</style>