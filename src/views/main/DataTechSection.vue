<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()

// 필요하면 API 연동으로 교체 가능
const items = [
    {
        id: 'guide-space',
        cover: '/src/assets/images/main/tech-thum01.png', // 썸네일/일러스트
        title: '도로명주소 공간데이터\n 활용가이드',
        desc: '도로명주소 공간데이터를 다운로드하여 GIS도구에서\n 가져오는 방법, 심볼 및 라벨의 설정, 데이터 조회 및\n 추출 등 다수의 예제 제공',
        to: '/tech/guide-space',
    },
    {
        id: 'proj4',
        cover: '/src/assets/images/main/tech-thum02.png',
        title: 'proj4j를 활용한\n 경위도 좌표전환 방법',
        desc: '정확한 위치 기반 서비스를 위해 Proj4j 라이브러리를\n활용한 경위도, 평면좌표 변환 방법을 안내합니다.',
        to: '/tech/proj4-transform',
    },
    {
        id: 'search-api-ui',
        cover: '/src/assets/images/main/tech-thum03.png',
        title: '도로명주소 검색API를 활용하여\n 팝업API 디자인 적용 샘플',
        desc: '도로명주소 검색 API에 사용자 친화적인 팝업 UI를\n적용한 샘플입니다. 간편한 주소 검색과 입력을\n한 번에 구현해보세요.',
        to: '/tech/search-api-ui',
    },
]

const go = (path) => router.push(path)
</script>

<template>
    <section class="tips">
        <div class="tips__head">
            <h3 class="tips__title">Tech&amp;Tips</h3>
            <p class="tips__desc">주소기반정보를 활용한 다양한 서비스 사례를 소개합니다.</p>
        </div>

        <ul class="tips__grid" role="list">
            <li v-for="it in items" :key="it.id" class="tips--card">
                <article class="tips--card__inner" role="group" :aria-label="it.title">
                    <div class="tips--card__cover">
                        <!-- 데모용 이미지: 프로젝트 자산 경로에 맞게 교체 -->
                        <img :src="it.cover" :alt="`${it.title} 표지`" />
                    </div>
                    <div class="tips--card__body">
                        <h4 class="tips--card__title">{{ it.title }}</h4>
                        <p class="tips--card__desc">{{ it.desc }}</p>
                        <div class="tips--card__cta">
                            <button type="button" class="btn-link" @click="go(it.to)">
                                자세히 보기
                                <span class="arr" aria-hidden="true">→</span>
                            </button>
                        </div>
                    </div>
                </article>
            </li>
        </ul>
    </section>
</template>

<style scoped lang="scss">
.tips {
    padding: 120px 0 120px;
    &__head {
        max-width: 1200px;
        margin: auto;
        padding-bottom: 80px;
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
        gap: 25px;
    }
}

.tips--card {
    list-style: none;
    &__inner {
        background: #fff;
        border-radius: 20px;
        height: 450px;
        overflow: hidden;
        box-shadow: 0 10px 28px rgba(16, 36, 77, .08);
        display: grid;
        align-content: space-between;
        grid-template-rows: 180px auto;
        transition: transform .15s ease, box-shadow .15s ease;
        border: 1px solid #325ee6;
    }
    &__inner:hover {
        transform: translateY(-2px);
        box-shadow: 0 14px 34px rgba(16, 36, 77, .12);
    }
    &__cover {
        background: #eef3ff;
        display: grid;
        place-items: center;
        min-height: 200px;
        img {
            object-fit: contain;
        }
    }
    &__body {
        height: 250px;
        padding: 30px 30px 30px 40px;
        display: grid;
        gap: 15px;
    }
    &__title {
        margin: 0;
        font-weight: 700;
        letter-spacing: -.01em;
        color: #0f244d;
        font-size: 21px;
        white-space: pre-line; 
    }
    &__desc {
        margin: 0;
        color: #4b5c7a;
        line-height: 1.6;
        font-size: 14px;
        min-height: 3.2em;
        white-space: pre-line; 
    }
    &__cta {
        margin-top: 6px;
        display: flex;
        justify-content: flex-end;
    }
}

.btn-link {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    border: 0;
    cursor: pointer;
    color:#555555;
    font-weight: 500;
    font-size: 15px;
    transition: background .12s ease, transform .08s ease;
    .arr {
        width: 40px;
        height: 40px;
        line-height: 40px;
        border-radius: 50%;
        background: #f0f1f4;
        transform: translateX(0);
        transition: transform .3s ease;
        font-weight: 300;
        font-size: 21px;
    
    }
}
.btn-link:hover {
    .arr {
        transform: translateX(2px);
    }
}
.btn-link:active {
    transform: translateY(1px);
}
</style>