<!-- src/views/main/TrialPane.vue -->
<template>
  <div class="TrialPane">
    <div class="visual--info">
      <h3>주소기반 데이터를 쉽고 편리하게 체험해 보실 수 있습니다.</h3>
      <p>도로명 주소 속성정보, 공간정보, 신규 주소정책 등<br> 다양한 데이터를 체험하고 분석할 수 있습니다.</p>
    </div>
    <div class="feature--cards">
      <!-- 카드 1 -->
      <section class="feature--card">
        <h3 class="feature--card__title">입체주소</h3>
        <div class="feature--card__thumb" aria-hidden="true">
          <img src="@/assets/images/main/banner03-1.png" alt="입체주소 이미지">
        </div>

        <div class="feature--card__actions">
          <button type="button" class="btn btn--primary">체험하기</button>
          <a class="btn btn--ghost" href="" aria-label="입체주소 자세히 보기">
            자세히 보기 <span aria-hidden="true">›</span>
          </a>
        </div>
      </section>

      <!-- 카드 2 -->
      <section class="feature--card">
        <h3 class="feature--card__title">공간데이터</h3>
        <div class="feature--card__thumb feature--card__thumb--map" aria-hidden="true">
          <img src="@/assets/images/main/banner03-2.png" alt="공간데이터 이미지">
        </div>

        <div class="feature--card__actions">
          <button type="button" class="btn btn--primary">체험하기</button>
          <a class="btn btn--ghost" href="" aria-label="공간데이터 자세히 보기">
            자세히 보기 <span aria-hidden="true">›</span>
          </a>
        </div>
      </section>

      <!-- 카드 3 -->
      <section class="feature--card">
        <h3 class="feature--card__title">속성데이터</h3>
        <div class="feature--card__thumb feature--card__thumb--table" aria-hidden="true">
          <img src="@/assets/images/main/banner03-3.png" alt="속성데이터 이미지">
        </div>

        <div class="feature--card__actions">
          <button type="button" class="btn btn--primary">체험하기</button>
          <a class="btn btn--ghost" href="" aria-label="속성데이터 자세히 보기">
            자세히 보기 <span aria-hidden="true">›</span>
          </a>
        </div>
      </section>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
.TrialPane {
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

.feature--cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 23px;
}


/* 타이틀 */
.feature{
  &--card{
    background: #ffffff;
    border-radius: 30px 50px 30px 50px;
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
    padding: 40px 30px 15px 30px;
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid #e1e1e1;
    &__title{
      font-size: 22px;
      line-height: 1.2;
      margin-bottom: 12px;
      color: rgba(0, 0, 0, 0.9);
    }
    &__thumb{
    }
    &__actions{
      display: flex;
      justify-content: center;
      gap: 8px;
      padding: 16px 2px 4px 2px;
      align-items: center;
    }
  }
}

.btn {
  appearance: none;
  border: 0;
  outline: none;
  font-size: 14px;
  line-height: 1;
  padding: 12px 16px;
  border-radius: 999px;
  cursor: pointer;
  white-space: nowrap;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.btn--primary {
  color: #325ee6;
  background: #ffffff;
  border: 1.5px solid #325ee6;
  box-shadow: 0 3px 10px rgba(28, 57, 200, 0.15);
}

.btn--ghost {
  color: rgba(0, 0, 0, 1);
  background: #ffffff;
  border: 1px solid #e4e4e4;
}

.btn--ghost span {
  display: inline-block;
  margin-left: 6px;
  font-size: 20px;
  transform: translateY(-1px);
}

.btn:focus-visible,
.feature--card a:focus-visible {
  outline: 2px solid #005fcc;
  outline-offset: 2px;
}

.feature--card__actions .btn+.btn {
  margin-left: 4px;
}
</style>
