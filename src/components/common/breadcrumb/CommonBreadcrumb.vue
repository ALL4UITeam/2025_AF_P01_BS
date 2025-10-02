<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const breadcrumbs = computed(() => {
    const items = [];
    
    // 홈 메뉴
    items.push({
        type: 'link',
        href: '/',
        content: '<img src="/src/assets/images/common/icon/icon_home.svg" alt="메인" /> 홈'
    });

    // 현재 경로의 매칭된 라우트 정보 사용
    const matchedRoutes = route.matched;
    
    matchedRoutes.forEach((matchedRoute, index) => {
        // 루트 경로('/')는 건너뛰기
        if (matchedRoute.path === '/') return;
        
        // 현재 경로에서 해당 라우트의 실제 경로 추출
        const path = matchedRoute.path;
        const fullPath = matchedRoute.redirectedFrom || path;
        
        // 메타 정보에서 뎁스 정보 가져오기
        const depth2 = matchedRoute.meta?.depth2;
        const depth3 = matchedRoute.meta?.depth3;
        
        if (index === matchedRoutes.length - 1) {
            if (depth2) {
                const currentRoute = matchedRoutes[matchedRoutes.length - 1];
                const firstPageRoute = router.getRoutes().find(route => 
                    route.meta?.depth2 === depth2 && route.meta?.firstpage
                );
                const href = firstPageRoute ? firstPageRoute.path : fullPath;
                items.push({
                    type: 'link',
                    href: href,
                    content: depth2,
                    firstpage: currentRoute.meta?.firstpage || false
                });
            }
            
            if (depth3) {
                items.push({
                    type: 'text',
                    content: depth3
                });
            }
        }
    });

    return items;
});
</script>

<template>
    <ul class="breadcrumbBox">
        <li v-for="(item, index) in breadcrumbs" :key="index">
            <template v-if="item.type === 'link'">
                <a :href="item.href" v-html="item.content" :title="item.content.replace(/<[^>]*>/g, '') + ' 이동'" />
            </template>
            <template v-else>
                {{item.content}}
            </template>
            <span v-if="index < breadcrumbs.length - 1" class="separator">
                <img src="@/assets/images/common/icon/icon_breadcrumbs.svg" alt=">">
            </span>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
.breadcrumbBox {
    display: flex;
    align-items: center;
    margin-top:56px;
}

.breadcrumbBox li {
    display: flex;
    align-items: center;
}
.separator {
    display: flex;
    align-items: center;
    padding:0 4px;
}
</style>

