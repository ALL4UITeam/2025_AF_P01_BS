<script setup>
import KrdsButton from './commmon/Button.vue'
</script>

<template>
  <div class="button-sample">
    <h2>KRDS 버튼 스타일 가이드</h2>
    
    <section class="sample-section">
      <h3>기본 버튼</h3>
      <div class="button-row">
        <KrdsButton type="primary" size="medium">기본 버튼</KrdsButton>
      </div>
    </section>

    <section class="sample-section">
      <h3>크기 변형</h3>
      <div class="button-row">
        <KrdsButton type="primary" size="small">Small 버튼</KrdsButton>
        <KrdsButton type="primary" size="medium">Medium 버튼</KrdsButton>
        <KrdsButton type="primary" size="large">Large 버튼</KrdsButton>
      </div>
    </section>

    <section class="sample-section">
      <h3>타입 변형</h3>
      <div class="button-row">
        <KrdsButton type="primary" size="medium">Primary 버튼</KrdsButton>
        <KrdsButton type="secondary" size="medium">Secondary 버튼</KrdsButton>
        <KrdsButton type="outline" size="medium">Outline 버튼</KrdsButton>
        <KrdsButton type="text" size="medium">Text 버튼</KrdsButton>
      </div>
    </section>

    <section class="sample-section">
      <h3>상태 변형</h3>
      <div class="button-row">
        <KrdsButton type="primary" size="medium">활성화 버튼</KrdsButton>
        <KrdsButton type="primary" size="medium" disabled>비활성화 버튼</KrdsButton>
      </div>
    </section>

    <section class="sample-section">
      <h3>실제 사용 예시</h3>
      <div class="button-row">
        <KrdsButton type="primary" size="medium">저장하기</KrdsButton>
        <KrdsButton type="secondary" size="medium">취소</KrdsButton>
        <KrdsButton type="outline" size="medium">목록으로</KrdsButton>
        <KrdsButton type="text" size="medium">더보기</KrdsButton>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.button-sample {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;

  h2 {
    font-size: 24px;
    margin-bottom: 30px;
    color: #333;
  }

  .sample-section {
    margin-bottom: 40px;

    h3 {
      font-size: 18px;
      margin-bottom: 16px;
      color: #666;
    }
  }

  .button-row {
    display: flex;
    gap: 16px;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style> 