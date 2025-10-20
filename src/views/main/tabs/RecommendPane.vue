<!-- src/views/main/RecommendPane.vue -->
<template>
  <div class="RecommendPane">
    <div class="RecommendPane--Info">
      <h2>
        주소기반정보 데이터로<br>나만의 서비스를 만들어보세요.
      </h2>
      <p>
        주소기반정보는 사용자의 다양한 목적에 맞는 데이터를 제공하며,<br>사용자 환경에 최적화된 데이터를 추천합니다. 
      </p>
      <router-link>
        서비스 추천 받기
      </router-link>
    </div>
    <div cass="RecommendPane--Img">
      <img src="@/assets/images/main/banner02.png" alt="지도, 의료, 택배, 쇼핑, 주소DB, 건물검색 을 포함한 최적화된 데이터를 표현한 이미지">
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .RecommendPane {
    display: flex;
    width: 1200px;
    margin: 0 auto;
    padding: 60px 0;
    box-sizing: border-box;
    &--Info{
      padding-top: 60px;
      color:#fff;
      h2{
        font-size: 40px;
        line-height: 1.5;
        margin-bottom: 15px;
        letter-spacing: -1px;
      }
      p{
        font-size: 17px;
        margin-bottom: 35px;
      }
      a{
        display: inline-block;
        border-radius: 999px;
        width: 285px;
        height: 65px;
        text-align: center;
        line-height: 65px;
        background: #fff;
        color:#325ee6;
        font-size: 19px;
        font-weight: 700;
      }
    }
    &--Img{

    }
  }
</style>