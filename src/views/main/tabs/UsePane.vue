<!-- src/views/main/UsePane.vue -->
<template>
  <div class="UsePane">
    <div class="visual--info">
      <h3>주소정보산업지원서비스는</h3>
      <p>주소정보 활용을 통한 새로운 비즈니스 모델 개발과<br>누구나 쉽고 편리하게 주소정보를 활용할 수 있는 개발환경을 지원합니다.</p>
    </div>
    <div class="Use--cards">
      <!-- 1. 주소정보 다운로드 -->
      <section class="Use--card">
        <h3 class="Use--card__title">주소정보 다운로드</h3>
        <p class="Use--card__desc">
          매월 업데이트되는 주소정보를<br />다운로드 받을 수 있습니다.
        </p>
        <div class="Use--card__icon" aria-hidden="true"></div>

        <div class="Use--card__actions">
          <a class="btn btn--ghost" href="/apply/download" aria-label="주소정보 다운로드 서비스 신청하기">
            서비스 신청하기 <span aria-hidden="true">›</span>
          </a>
        </div>
      </section>

      <!-- 2. 도로명주소연계 -->
      <section class="Use--card">
        <h3 class="Use--card__title">도로명주소연계</h3>
        <p class="Use--card__desc">
          매일 변경되는 최신 도로명주소<br />변동자료를 제공합니다.
        </p>
        <div class="Use--card__icon Use--card__icon--mesh" aria-hidden="true"></div>

        <div class="Use--card__actions">
          <a class="btn btn--ghost" href="/apply/linkage" aria-label="도로명주소연계 서비스 신청하기">
            서비스 신청하기 <span aria-hidden="true">›</span>
          </a>
        </div>
      </section>

      <!-- 3. 주소정보 API 연계 -->
      <section class="Use--card">
        <h3 class="Use--card__title">주소정보 API 연계</h3>
        <p class="Use--card__desc">
          데이터 구축 없이 최신 도로명<br />주소를 활용할 수 있습니다.
        </p>
        <div class="Use--card__icon Use--card__icon--api" aria-hidden="true"></div>

        <div class="Use--card__actions">
          <a class="btn btn--ghost" href="/apply/api" aria-label="주소정보 API 연계 서비스 신청하기">
            서비스 신청하기 <span aria-hidden="true">›</span>
          </a>
        </div>
      </section>

      <!-- 4. 주소검색솔루션 -->
      <section class="Use--card">
        <h3 class="Use--card__title">주소검색솔루션</h3>
        <p class="Use--card__desc">
          별도의 설치 없이 최신데이터 및<br />다양한 주소검색기능을<br /> 제공합니다.
        </p>
        <div class="Use--card__icon Use--card__icon--code" aria-hidden="true"></div>

        <div class="Use--card__actions">
          <a class="btn btn--ghost" href="/apply/search" aria-label="주소검색솔루션 서비스 신청하기">
            서비스 신청하기 <span aria-hidden="true">›</span>
          </a>
        </div>
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.UsePane {
  width: 1200px;
  margin: 0 auto;
  padding: 120px 0;
  box-sizing: border-box;
}

.visual--info {
  text-align: center;
  margin-bottom: 70px;
  h3 {
    font-size: 40px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 20px;
    line-height: 1;
  }
  p {
    color: #fff;
    font-size: 17px;
    line-height: 1.5;
  }
}
.Use--cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

/* 카드 베이스 */
.Use--card {
  position: relative;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 30px 50px;
  padding: 40px 32px 32px 32px;
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
  min-height: 340px;
  border: 1px solid #e1e1e1;
  &__title{
    font-size: 25px;
    line-height: 1.25;
    margin-bottom: 20px;
    color: rgba(0, 0, 0, 1);
  }
  &__desc{
    font-size: 17px;
    line-height: 1.4;
    color: #555555;
    letter-spacing: -1px;;
    height: 80px;
  }
  &__icon{
    text-align: right;
    width: 90%;
    height: 80px;
    background-image: url('@/assets/images/main/banner04-01.png');
    background-repeat: no-repeat;
    background-position: bottom right;
  }
  &__actions{
    margin-top: auto;
    padding-top: 18px;
    text-align: right;
  }
}

/* 각 카드 분위기 변형 */
.Use--card__icon--mesh {
  background-image: url('@/assets/images/main/banner04-02.png');
}
.Use--card__icon--api {
  background-image: url('@/assets/images/main/banner04-03.png');
}
.Use--card__icon--code {
  background-image: url('@/assets/images/main/banner04-04.png');
} 

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  padding: 12px 16px;
  border-radius: 999px;
  font-size: 15px;
  line-height: 1;
  text-decoration: none;
  cursor: pointer;
  border: 1.5px solid #325ee6;
  background: #ffffff;
  color: #325ee6;
  box-shadow: 0 3px 10px rgba(28, 57, 200, 0.15);
}
.btn span {
  font-size: 20px;
  transform: translateY(-1px);
}

/* 포커스 가시성 */
.btn:focus-visible,
.Use--card a:focus-visible {
  outline: 2px solid #325ee6;
  outline-offset: 2px;
}
</style>