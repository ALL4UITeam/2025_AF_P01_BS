<!-- src/views/main/index.vue -->
<script setup>
import { ref, computed, defineAsyncComponent, nextTick } from 'vue'
import DataInfoSection from './DataInfoSection.vue'
import DataRecommendSection from './DataRecommendSection.vue'
import DataNewjusoSection from './DataNewjusoSection.vue'
import DataTechSection from './DataTechSection.vue'

const tabs = [
    { key: 'intro', label: '서비스 소개' },
    { key: 'recommend', label: '서비스 추천하기' },
    { key: 'trial', label: '서비스 체험하기' },
    { key: 'use', label: '서비스 활용하기' },
]
const active = ref('intro')

const panes = {
    intro: defineAsyncComponent(() => import('./tabs/IntroPane.vue')),
    recommend: defineAsyncComponent(() => import('./tabs/RecommendPane.vue')),
    trial: defineAsyncComponent(() => import('./tabs/TrialPane.vue')),
    use: defineAsyncComponent(() => import('./tabs/UsePane.vue')),
}
const CurrentPane = computed(() => panes[active.value])

const tabRefs = ref([])
const panelEl = ref(null)

function focusTabByIndex(i) {
    tabRefs.value[i]?.focus()
}
function indexOfActive() {
    return tabs.findIndex(t => t.key === active.value)
}
async function activateAndFocusPanel(key) {
    active.value = key
    await nextTick()
    panelEl.value?.focus()
}
function onTabKeydown(e) {
    const i = indexOfActive()
    if (e.key === 'ArrowRight') { e.preventDefault(); const ni = (i + 1) % tabs.length; active.value = tabs[ni].key; focusTabByIndex(ni) }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); const ni = (i - 1 + tabs.length) % tabs.length; active.value = tabs[ni].key; focusTabByIndex(ni) }
    else if (e.key === 'Home') { e.preventDefault(); active.value = tabs[0].key; focusTabByIndex(0) }
    else if (e.key === 'End') { e.preventDefault(); const ni = tabs.length - 1; active.value = tabs[ni].key; focusTabByIndex(ni) }
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); activateAndFocusPanel(tabs[i].key) }
}
</script>

<template>
    <section class="visual">
        <div class="visual__wrap">
            <div class="tabs--wrap">
                <nav class="tabsbar" role="tablist" aria-label="서비스 탭" aria-orientation="horizontal"
                    @keydown="onTabKeydown">
                    <button v-for="(t, i) in tabs" :key="t.key" ref="tabRefs" class="tabsbar__btn" :id="`tab-${t.key}`"
                        role="tab" :aria-selected="active === t.key" :tabindex="active === t.key ? 0 : -1"
                        :aria-controls="`panel-${t.key}`" type="button" @click="activateAndFocusPanel(t.key)">
                        <span>{{ t.label }}</span>
                    </button>
                </nav>
            </div>

            <div class="visual__pane" :id="`panel-${active}`" role="tabpanel" :aria-labelledby="`tab-${active}`"
                tabindex="-1" ref="panelEl">
                <KeepAlive>
                    <Suspense>
                        <component :is="CurrentPane" />
                        <template #fallback>
                            <div class="skeleton">로딩 중…</div>
                        </template>
                    </Suspense>
                </KeepAlive>
            </div>
        </div>
    </section>
    <div class="main--container">
        <!-- 데이터 소개 섹션 / DataInfoSection.vue -->
        <DataInfoSection />
        <!-- 데이터 추천 섹션 / DataRecommendSection.vue -->
        <DataRecommendSection />
        <!-- 주소정보 신규 데이터 섹션 / DataNewjusoSection.vue -->
        <DataNewjusoSection />
        <!-- Tech&Tips 섹션 / DataTechSection.vue -->
        <DataTechSection />
    </div>
</template>

<style scoped lang="scss">
.visual {
    position: relative;
    width: 100%;
    min-height: 60vh;
    background-image: url('@/assets/images/main/visual-bg.png');
    background-repeat: no-repeat;
    background-size: cover;
}

.tabs--wrap{
    width: 100%;
    position: absolute;
    bottom: 0;
    background: #1b46cb;
}

.tabsbar {
    width: 728px;
    margin: auto;
    grid-column: 1 / -1;
    grid-row: 3;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap:22px;
    &__btn {
        position: relative;
        padding: 16px 10px;
        background: transparent;
        width: 160px;
        color: #eaf2ff;
        border: 0;
        height: 70px;
        font-weight: 700;
        cursor: pointer;
        transition: all .2s;
        font-size: 18px;
        
        span{
            position: relative;
            z-index: 2;
        }
        &:hover {
            opacity: .9;
        }

        &[aria-selected="true"] {
            color: #fff;
            &:after{
                position: absolute;
                left: 0;
                bottom: 0;
                display: block;
                content:'';
                width: 100%;
                height: 90px;
                background-image: url('@/assets/images/main/banner-tab-active.png');
                box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
            }
        }
    }
}

.visual__pane {
    height: 820px;
    padding-bottom: 92px;
}

.skeleton {
    height: 120px;
    background: repeating-linear-gradient(90deg, #f2f5fb 0 16px, #e8eef9 16px 32px);
    border-radius: 12px;
}
.main--container{
    background-image: url('@/assets/images/main/curve-bg.png');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover 100%;
}

</style>
