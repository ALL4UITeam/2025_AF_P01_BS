<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goRecommend = () => {
    // 라우팅 경로는 프로젝트에 맞게 수정
    router.push({ path: '/recommend' })
}
</script>

<template>
    <section class="svc--rec">
        <div class="svc--rec__head">
            <h3 class="svc--rec__title">다양한 서비스를 위한 데이터를 추천합니다.</h3>
            <p class="svc--rec__desc">
                주소기반정보를 통해 원하는 서비스를 쉽고 편리하게 만들 수 있습니다.
            </p>
        </div>

        <div class="svc--rec__grid">
            <!-- 카드 1 -->
            <article class="svc--card card--violet">
                <div class="svc--card__icon">
                    <img src="@/assets/images/main/recom-ico01.png" alt="" />
                </div>
                <div class="svc--card__body">
                    <h4 class="svc--card__title">
                        더 많은 <span class="em em--violet">데이터 연계</span>가 필요하신가요?
                    </h4>
                    <p class="svc--card__text">
                        도로명주소, 버스정류장, 사물주소 등<br> 다양한 분야의 데이터를 원하는 서비스에 맞게<br> 연계하실 수 있습니다.
                    </p>
                </div>
            </article>

            <!-- 카드 2 -->
            <article class="svc--card card--blue">
                <div class="svc--card__icon">
                    <img src="@/assets/images/main/recom-ico02.png" alt="" />
                </div>
                <div class="svc--card__body">
                    <h4 class="svc--card__title">
                        <span class="em em--blue">주소기반정보</span>를 처음 이용하시나요?
                    </h4>
                    <p class="svc--card__text">
                        주소기반정보에서 제공하는 다양한 데이터를 활용,<br>
                        위치 정보와 관련된 여러 속성을 분석하거나 결합하여<br>
                        사용자가 원하는 서비스를 만들 수 있습니다.
                    </p>
                </div>
            </article>

            <!-- 카드 3 -->
            <article class="svc--card card--green">
                <div class="svc--card__icon">
                    <img src="@/assets/images/main/recom-ico03.png" alt="" />
                </div>
                <div class="svc--card__body">
                    <h4 class="svc--card__title">
                        <span class="em em--green">API 연계</span>로 서비스를 만드시나요?
                    </h4>
                    <p class="svc--card__text">
                        도로명주 API, 영문주소 API 등 주소기반정보<br>
                        API 연계를 통해 보다 쉽고 편리한 서비스를<br>
                        구현할 수 있습니다.
                    </p>
                </div>
            </article>
        </div>

        <div class="svc--rec__cta">
            <button type="button" class="btn" >서비스 추천 받기</button>
        </div>
    </section>
</template>

<style scoped lang="scss">
.svc--rec {
    padding: 120px 0 120px;
    background-image: url('@/assets/images/main/city-bg.png');
    background-repeat: no-repeat;
    background-position: bottom center;
    background-size: cover 100%;
    &__head {
        max-width: 1200px;
        margin: 0 auto 80px;
        text-align: center;
    }
    &__title {
        font-size: 40px;
        font-weight: 700;
        color: #112660;
        text-align: center;
        margin-bottom: 20px;
    }
    &__desc {
        color: #555555;
        font-size: 17px;
        margin: 0;
    }
    &__grid {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        margin-bottom: 40px;
    }
    &__cta {
        display: grid;
        place-items: center;
    }
        
    .em {
        font-weight: 700;

        &--violet {
            color: #8c56ca;
        }

        &--blue {
            color: #325ee6;
        }

        &--green {
            color: #58c177;
        }
    }
    .btn {
        padding: 20px 74px;
        border: 0;
        border-radius: 999px;
        cursor: pointer;
        font-weight: 700;
        color: #fff;
        background: #325ee6;
        box-shadow: 0 10px 24px rgba(43, 100, 225, .24);
        transition: transform .08s ease, box-shadow .12s ease;
        font-size: 19px;
        &:hover {
            transform: translateY(-1px);
            box-shadow: 0 12px 28px rgba(43, 100, 225, .28);
        }

        &:active {
            transform: translateY(0);
            box-shadow: 0 8px 20px rgba(43, 100, 225, .2);
        }
    }
}

.svc--card {
    padding: 40px 33px;
    border-radius: 16px;
    background: #fff;
    border: 1px solid #e1e1e1;
    box-shadow: 0 8px 24px rgba(16, 36, 77, .08);
    &.card--violet {
        background: #f0f0f7;
    }

    &.card--blue {
        background: #e8edf2;
    }

    &.card--green {
        background: #eff4ef;
    }
    &__icon {
        width: 150px;
        height: 150px;
        border-radius: 50%;
        margin: 0 auto 30px;
        display: grid;
        place-items: center;
        background: #fff;
        img {
        }
    }

    &__title {
        margin: 4px 0 8px;
        font-weight: 700;
        font-size: 21px;
        color: #0f244d;
        letter-spacing: -1px;
    }

    &__text {
        margin: 0;
        color: #4b5c7a;
        line-height: 1.65;
        font-size: 14px;
    }
}



</style>