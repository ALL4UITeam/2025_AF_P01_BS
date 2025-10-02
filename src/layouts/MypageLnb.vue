<script setup>
	import { ref } from 'vue'

	const menuList = ref([
		{ title: '장바구니', link: '/mypage/cart' },
		{ title: '나의 즐겨찾기', link: '/mypage/favorites' },
		{ title: '다운로드 신청내역', link: '/mypage/downloads' },
		{ title: '연계신청내역', link: '/mypage/Connections' },
		{ title: 'API 인증키 관리', link: '/mypage/api-keys' },
		{ title: '나의 문의글', link: '/mypage/inquiries' }
	])
</script>
<template>
    <div class="mypageLnb">
        <h2 class="mypageLnb__title">마이페이지</h2>
        <ul class="mypageLnb__list">
            <li v-for="menu in menuList" :key="menu.title">
                <a :href="menu.link" 
                    class="mypageLnb__link" 
                    :title="`${menu.title} 페이지로 이동`"
                    :aria-label="`${menu.title} 페이지로 이동`">
                    {{ menu.title }}
                </a>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
.mypageLnb {
    width:248px;

    &__title {
        height:76px;
        padding:24px 0 0 8px;
        border-bottom:1px solid #8A949E;
        font-size:24px;
        font-weight:700;
    }

    &__list {
        li {
            border-bottom:1px solid #CDD1D5;
        }
    }
    &__link {
        display:flex;
        align-items: center;
        height:58px;
        padding:0 8px;
        font-size:17px;
        font-weight:700;
    }
}
</style>
