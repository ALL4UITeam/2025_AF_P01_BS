<template>
  <div class="Intropnae">
    <div class="grid">
      <!-- Hero (좌측 대형 영역) -->
      <section class="hero">
        <h2>주소정보산업지원서비스는</h2>
        <p class="subtitle">
          주소정보 활용을 통한 새로운 비즈니스 모델 개발과<br />
          누구나 쉽고 편리하게 주소정보를 활용할 수 있는 개발환경을 지원합니다.
        </p>
      </section>

      <!-- 상단 우측 2카드 -->
      <router-link class="address--card card--sky" aria-label="사물주소란 박스">
        <h2>사물주소란?</h2>
        <p><span class="tag"># 버스정류장</span>의<br />위치가 궁금하신가요?</p>
        <i class="sky-bg" aria-hidden="true"></i>
      </router-link>

      <router-link class="address--card card--purple" aria-label="기초번호란 박스">
        <h2>기초번호란?</h2>
        <p><span class="tag"># 국회대로</span>의 위치 정보가<br />궁금하신가요?</p>
        <i class="purple-bg" aria-hidden="true"></i>
      </router-link>

      <!-- 하단 3카드 -->
      <router-link class="address--card card--white card--wide" aria-label="입체주소란 박스">
        <h2>입체주소란?</h2>
        <p><span class="tag blue"># 잠실역 중앙통로</span>의<br />주소가 궁금하신가요?</p>
      </router-link>

      <router-link class="address--card card--navy" aria-label="국가지점번호란 박스">
        <h2>국가지점번호란?</h2>
        <p>
          <span class="tag blue"># 설악산 대청봉</span>의<br />
          위치가 정보가 궁금하신가요?
        </p>
        <i class="navy-bg" aria-hidden="true"></i>
      </router-link>

      <router-link class="address--card card--beige" aria-label="장소지능정보란 박스">
        <h2>장소지능정보란?</h2>
        <p><span class="tag"># 건물 출입구</span>의<br />장소 정보가 궁금하신가요?</p>
        <i class="beige-bg" aria-hidden="true"></i>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Intropnae {
  width: 1200px;
  margin: 0 auto;
  padding: 60px 0;
  box-sizing: border-box;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr 280px 280px;
  grid-template-rows: 302px 302px;
  grid-template-areas:
    "hero hero card1 card2"
    "card3 card3 card4 card5";
  gap: 24px;
  height: calc(100% - 0px);
}

.address--card{
  position: relative;
  border-radius: 24px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  overflow: hidden;
}

/* Hero */
.hero {
  grid-area: hero;
  padding-top: 95px;
  color: #ffffff;
  background: transparent;
  h2 {
    font-size: 40px;
    line-height: 1.1;
    margin: 0 0 20px 0;
    letter-spacing: -0.5px;
  }
  .subtitle {
    font-size: 17px;
    line-height: 1.6;
  }
}

/* Card base */
.address--card {
  padding: 28px 28px 24px;
  h2 {
    font-size: 19px;
    margin: 0 0 10px 0;
    line-height: 1.2;
  }
  p {
    margin: 0;
    font-size: 17px;
    line-height: 1.5;
  }

  .tag {
    font-weight: 700;
    &.blue{
      color:#325ee6;
    }
  }

  .sky-bg,
  .purple-bg,
  .navy-bg,
  .beige-bg {
    position: absolute;
    right: 30px;
    bottom: 30px;
  }
  .sky-bg{
    width: 193px;
    height: 140px;
    background-image: url('@/assets/images/main/banner01-01.png');
  }
  .purple-bg{
    width: 152px;
    height: 117px;
    background-image: url('@/assets/images/main/banner01-02.png');
  }
  .navy-bg{
    width: 87px;
    height: 141px;
    background-image: url('@/assets/images/main/banner01-04.png');
  }
  .beige-bg{
    width: 160px;
    height: 129px;
    background-image: url('@/assets/images/main/banner01-05.png');
  }
}

/* Themed cards */
.card--sky {
  grid-area: card1;
  background-color: #a0e8ff;
  color: #1d1d1d;
}

.card--purple {
  grid-area: card2;
  background-color: #7b67ff;
  color: #ffffff;
}

.card--white {
  background-color: #ffffff;
  color: #1d1d1d;
  background-image: url('@/assets/images/main/banner01-03.png');
  background-position: right bottom;
  background-repeat: no-repeat;
  h2{
    font-size: 25px;
  }
  p{
    color:#555555;
  }
}

.card--navy {
  grid-area: card4;
  background-color: #233a8b;
  color: #ffffff;

  .sign {
    mix-blend-mode: normal;
    background: repeating-linear-gradient(
      90deg,
      rgba(255, 255, 255, 0.12),
      rgba(255, 255, 255, 0.12) 8px,
      rgba(255, 255, 255, 0.03) 8px,
      rgba(255, 255, 255, 0.03) 16px
    );
  }
}

.card--beige {
  grid-area: card5;
  background: #ffe4b6;
  color: rgba(0, 0, 0, 0.88);
}

.card--wide {
  grid-area: card3;

  .map-illu {
    width: 48%;
    height: 58%;
  }
}

/* minor spacing tweak */
.card h2 + p .tag {
  margin-right: 4px;
}
</style>
