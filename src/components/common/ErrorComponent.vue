<template>
    <div class="error-wrap">
        <img src="@/assets/images/etc/thumb_404.png" alt="404" />
        <p>
            현재 입력하신 주소의 페이지는 삭제되었거나, 다른 페이지로 변경되었습니다.<br />
            주소를 다시 확인해 주세요.
        </p>

        <a href="/">메인 페이지로 이동</a>
    </div>
</template>

<style lang="scss" scoped>
.error-wrap {
    text-align: center;
    padding: 100px;
    img{
        display: inline-block;
        
        padding-bottom: 50px;
    }
    p {
        font-size: 19px;
        padding-bottom: 50px;
        line-height: 1.5;
    }
    a {
        display: inline-block;
        color: #fff;
        background: #325EE6;
        border-radius: 6px;
        font-size: 19px;
        width: 260px;
        padding: 11px;
        text-decoration: none;
        background-image: url("@/assets/images/common/icon/icon_arrow_white.png");
        background-repeat: no-repeat;
        background-position: 90% center;
    }
}
</style>
