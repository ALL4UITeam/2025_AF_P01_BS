<!-- src/views/main/index.vue -->
<script setup>
import {
    ref, computed, nextTick, defineComponent, defineAsyncComponent, onMounted, onBeforeUnmount, h, KeepAlive, Suspense
} from 'vue'

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

const visualEl = ref(null)
const visualBgLoaded = ref(false)
let visualObs
onMounted(() => {
    visualObs = new IntersectionObserver((entries) => {
        if (entries.some(e => e.isIntersecting)) {
            visualBgLoaded.value = true
            visualObs.disconnect()
        }
    }, { threshold: 0.01 })
    if (visualEl.value) visualObs.observe(visualEl.value)
})
onBeforeUnmount(() => visualObs?.disconnect())

const LazyOnView = defineComponent({
    name: 'LazyOnView',
    props: {
        importer: { type: Function, required: true },   // () => import('...vue')
        rootMargin: { type: String, default: '300px' },
        once: { type: Boolean, default: true },
        placeholderClass: { type: String, default: '' },
        keepAlive: { type: Boolean, default: true },
    },
    setup(props) {
        const host = ref(null)
        const shouldLoad = ref(false)
        let io
        const AsyncComp = defineAsyncComponent({ loader: () => props.importer(), timeout: 0 })
        onMounted(() => {
            io = new IntersectionObserver((entries) => {
                if (entries.some(e => e.isIntersecting)) {
                    shouldLoad.value = true
                    if (props.once) io.disconnect()
                }
            }, { root: null, rootMargin: props.rootMargin, threshold: 0.01 })
            if (host.value) io.observe(host.value)
        })
        onBeforeUnmount(() => io?.disconnect())
        return () => {
            const fallbackNode = () => h('div', { class: props.placeholderClass, 'aria-hidden': 'true' })
            const suspenseNode = () =>
                h(Suspense, null, { default: () => h(AsyncComp), fallback: fallbackNode })

            return h('div', { ref: host },
                shouldLoad.value
                    ? (props.keepAlive ? h(KeepAlive, null, { default: suspenseNode }) : suspenseNode())
                    : fallbackNode()
            )
        }
    }
})

</script>

<template>
    <section class="visual" :class="{ 'bg-loaded': visualBgLoaded }" ref="visualEl">
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
                            <div class="skeleton">Loading</div>
                        </template>
                    </Suspense>
                </KeepAlive>
            </div>
        </div>
    </section>
    <div class="main--container">
        <!-- 데이터 소개 섹션 / DataInfoSection.vue -->
        <LazyOnView :importer="() => import('./DataInfoSection.vue')" root-margin="300px"
            placeholder-class="skel-hero" />
        <!-- 데이터 추천 섹션 / DataRecommendSection.vue -->
        <LazyOnView :importer="() => import('./DataRecommendSection.vue')" root-margin="300px"
            placeholder-class="skel-block" />
        <!-- 주소정보 신규 데이터 섹션 / DataNewjusoSection.vue -->
        <LazyOnView :importer="() => import('./DataNewjusoSection.vue')" root-margin="300px"
            placeholder-class="skel-block" />
        <!-- Tech&Tips 섹션 / DataTechSection.vue -->
        <LazyOnView :importer="() => import('./DataTechSection.vue')" root-margin="300px"
            placeholder-class="skel-block" />
    </div>
</template>

<style scoped lang="scss">
.visual {
    position: relative;
    width: 100%;
    min-height: 60vh;
    background: linear-gradient(180deg, #1638a9 0%, #1b46cb 100%); // 초기 가벼운 배경

    &.bg-loaded {
        background-image: url('@/assets/images/main/visual-bg.png');
        background-repeat: no-repeat;
        background-size: cover;
    }
}

.skel-hero,
.skel-block {
    border-radius: 12px;
    background: repeating-linear-gradient(90deg, #f2f5fb 0 16px, #e8eef9 16px 32px);
}

.skel-hero {
    height: 560px;
}

.skel-block {
    height: 480px;
}

.tabs--wrap {
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
    gap: 22px;

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

        span {
            position: relative;
            z-index: 2;
        }

        &:hover {
            opacity: .9;
        }

        &[aria-selected="true"] {
            color: #fff;

            &:after {
                position: absolute;
                left: 0;
                bottom: 0;
                display: block;
                content: '';
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

.main--container {
    background-image: url('@/assets/images/main/curve-bg.png');
    background-repeat: no-repeat;
    background-position: top center;
    background-size: cover 100%;
}
</style>
