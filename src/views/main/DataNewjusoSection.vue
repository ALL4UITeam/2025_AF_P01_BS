<script setup>
import { ref, nextTick } from 'vue'

/** 카드 데이터: 각 카드별 서브탭 항목 포함 */
const items = [
    {
        key: 'space', title: '공간', month: '2월', total: 1750, changed: 1750,
        subtabs: [
            { key: 'road-en', label: '도로명주소 영문', payload: { total: 1750, changed: 1750 } },
            { key: 'road-ko', label: '도로명주소 한글', payload: { total: 1420, changed: 340 } },
            { key: 'detail-show', label: '상세주소 표시', payload: { total: 820, changed: 120 } },
            { key: 'detail-addr', label: '상세주소 동 표시', payload: { total: 360, changed: 80 } },
            { key: 'obj-addr', label: '사물주소', payload: { total: 360, changed: 80 } },
            { key: 'doro-addr', label: '도로명', payload: { total: 360, changed: 80 } },
        ],
    },
    {
        key: 'attr', title: '속성', month: '2월', total: 1420, changed: 340,
        subtabs: [
            { key: 'road-ko', label: '도로명주소 한글', payload: { total: 1420, changed: 340 } },
            { key: 'detail-show', label: '상세주소 표시', payload: { total: 980, changed: 210 } },
            { key: 'dong-show', label: '상세주소 동 표시', payload: { total: 640, changed: 110 } },
            { key: 'obj-addr', label: '사물주소', payload: { total: 300, changed: 55 } },
        ],
    },
]


const active = ref(0)
const subActive = ref(items.map(() => 0))

/** 포커스용 refs */
const panels = ref([])         
const subTabRefs = ref([])     

/** 숫자 포맷 */
const nf = new Intl.NumberFormat('ko-KR')

/** 메인 카드 전환 */
function activate(i) {
    active.value = i
    nextTick(() => panels.value[i]?.focus())
}

/** 서브탭 전환 */
async function subActivate(cardIdx, subIdx, opts = { focusPanel: false }) {
    subActive.value[cardIdx] = subIdx
    await nextTick()
    if (opts.focusPanel) {
        panels.value[cardIdx]?.focus()
    }
}

function onCardsClick(e) {
  // 클릭된 곳에서 가장 가까운 .New--card 찾기
  const cardEl = e.target.closest('.New--card')
  if (!cardEl) return

  // 컨테이너 안의 모든 카드들 중 index 구하기
  const allCards = Array.from(e.currentTarget.querySelectorAll('.New--card'))
  const idx = allCards.indexOf(cardEl)
  if (idx !== -1) activate(idx)
}

/** 서브탭 키보드*/
function onSubTabKeydown(e, cardIdx) {
    const tabs = items[cardIdx].subtabs
    const cur = subActive.value[cardIdx]
    const last = tabs.length - 1

    const focusTab = (idx) => {
        subActive.value[cardIdx] = idx
        nextTick(() => {
            const btn = subTabRefs.value?.[cardIdx]?.[idx]
            btn?.focus()
        })
    }

    if (e.key === 'ArrowRight') { e.preventDefault(); focusTab((cur + 1) % tabs.length) }
    else if (e.key === 'ArrowLeft') { e.preventDefault(); focusTab((cur - 1 + tabs.length) % tabs.length) }
    else if (e.key === 'Home') { e.preventDefault(); focusTab(0) }
    else if (e.key === 'End') { e.preventDefault(); focusTab(last) }
    else if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); subActivate(cardIdx, cur, { focusPanel: true }) }
}
</script>

<template>
    <section class="Newjuso">
        <div class="Newjuso--head">
            <h3 class="Newjuso--head__title">주소정보 신규 데이터를 확인하세요.</h3>
            <p class="Newjuso--head__desc">주기적으로 업데이트 되는 최신 정보를 다운로드 받아볼 수 있습니다.</p>
        </div>

        <div class="row">
            <div class="Newcards" role="listbox" aria-label="신규 데이터 분류" :aria-activedescendant="`card-${active}`" @click="onCardsClick">
                <article v-for="(it, i) in items" :key="it.key" :class="['New--card', `New--card${i}`, { 'is-active': active === i }]"
                    :id="`Newcard-${i}`"  role="option" :aria-selected="active === i">
                    <!-- 메인 카드 헤더 -->
                    <div class="New--card__head" :aria-expanded="active === i" :aria-controls="`panel-${i}`"
                        @keydown.left.prevent="activate((i - 1 + items.length) % items.length)"
                        @keydown.right.prevent="activate((i + 1) % items.length)" @keydown.enter.prevent="activate(i)"
                        @keydown.space.prevent="activate(i)">
                        <div class="ti">
                            <span class="badge"></span>
                            <strong class="name">{{ it.title }}</strong>
                        </div>
                        <ul class="subtabs" role="tablist" aria-label="세부 항목" @keydown="onSubTabKeydown($event, i)">
                                <li v-for="(st, si) in it.subtabs" :key="st.key">
                                    <button class="subtabs__btn" :class="{ 'is-active': subActive[i] === si }"
                                        role="tab" :id="`subtab-${i}-${si}`" :aria-selected="subActive[i] === si"
                                        :tabindex="subActive[i] === si ? 0 : -1" :aria-controls="`subpanel-${i}-${si}`"
                                        type="button" ref="subTabRefs" @click.stop="subActivate(i, si)">
                                        {{ st.label }}
                                    </button>
                                </li>
                            </ul>
                    </div>

                    <!-- 확장 패널 -->
                    <div class="New--card__panel" v-show="active === i" :id="`panel-${i}`" role="region"
                        :aria-labelledby="`New--card-${i}`" tabindex="-1" ref="panels">

                        <!-- 서브탭-->
                        <div class="subtabs-wrap">
                            
                            <!-- 탭패널 -->
                            <div v-for="(st, si) in it.subtabs" :key="st.key" v-show="subActive[i] === si"
                                class="subpanel" role="tabpanel" :id="`subpanel-${i}-${si}`"
                                :aria-labelledby="`subtab-${i}-${si}`">
                                <!-- 여기에 서브탭별 실제 콘텐츠를 배치 -->
                                <div class="subpanel__content">
                                    <ul class="subpanel__stats">
                                        <li>
                                            <i class="icon graph" aria-hidden="true"></i>
                                            <dl>
                                                <dt>2월 전체분</dt>
                                                <dd>{{ nf.format(st.payload.total) }}<span>건</span></dd>
                                            </dl>
                                            <button type="button" class="down"></button>
                                        </li>
                                        <li>
                                            <i class="icon chart" aria-hidden="true"></i>
                                            <dl>
                                                <dt>2월 변동분</dt>
                                                <dd>{{ nf.format(st.payload.changed) }}<span>건</span></dd>
                                            </dl>
                                            <button type="button" class="down"></button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- /subtabs -->
                    </div>
                    <!-- /panel -->
                </article>
            </div>
        </div>
    </section>
</template>


<style scoped lang="scss">
.Newjuso {
    padding: 120px 0;
    background: linear-gradient(180deg, #f5f7fb 0%, #eef3ff 100%);
    &--head {
        max-width: 1200px;
        margin: 0 auto 80px;
        text-align: center;
        &__title {
            font-size: 40px;
            font-weight: 700;
            color: #112660;
            margin-bottom: 20px;
            letter-spacing: -0.01em;
        }
        &__desc {
            color: #555;
            font-size: 17px;
            margin: 0;
        }
    }
    .row {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 80px;
        position: relative;
    }
}

.Newcards {
    display: flex;
    gap: 24px;
    align-items: stretch;    
}

.New--card {
    background-color: #fff;
    border: 1px solid #325ee6;
    flex: 0 0 100px;
    min-width: 0;
    transition: flex 0.25s ease, transform 0.2s ease, box-shadow 0.2s ease;
    box-sizing: border-box;
    border-radius: 32px;
    box-shadow: 0 10px 28px rgba(15, 36, 77, 0.2);
    cursor: pointer;
    padding: 30px 0;
    background-repeat: no-repeat;
    background-position: center bottom;
    &.is-active {
        overflow: hidden;
        background-repeat: no-repeat;
        background-position: center bottom;
        background-size: cover;
        padding: 32px 40px 60px 40px;
        flex: 1 1 auto;
        cursor: auto;
        .subtabs{
            display: flex;
        }
        .New--card__head{
            align-items: center;
            justify-content: space-between;
            flex-direction: row;
            gap: 10px;
            background: transparent;
            border: 0;
            color: inherit;
            text-align: left;
            cursor: pointer;
            margin-bottom: 40px;
            color:#fff;
            &>.ti{
                flex-direction: row;
            }
            .badge{
                background-color: #fff;
            }
            .name{
                writing-mode: lr;
                color:#fff;
                letter-spacing: -1px;
            }
        }
        &.New--card0{
            background-image: url('@/assets/images/main/new-card01-bg.png');
            .New--card__head{
                .badge{
                    background-image: url('@/assets/images/main/new-space-ico01.png');
                }
            }
        }
        &.New--card1{
            background-image: url('@/assets/images/main/new-card02-bg.png');
            .New--card__head{
                .badge{
                    background-image: url('@/assets/images/main/new-space-ico02.png');
                }
            }
        }
    }
    &.New--card0{
        background-image: url('@/assets/images/main/new-card01-bg-white.png');
        .New--card__head{
            .badge{
                background-image: url('@/assets/images/main/new-space-ico01-white.png');
            }
        }
    }
    &.New--card1{
        background-image: url('@/assets/images/main/new-card02-bg-white.png');
        .New--card__head{
            .badge{
                background-image: url('@/assets/images/main/new-space-ico02-white.png');
            }
        }
    }
    &__head {
        display: flex;
        flex-direction: column;
        &>.ti{
            display: flex;
            align-items: center;
            flex-direction: column;
            gap:15px;
        }
        .badge {
            display: inline-grid;
            place-items: center;
            width: 52px;
            height: 52px;
            border-radius: 999px;
            background-color: #325ee6;
            font-weight: 800;
            font-size: 12px;
            background-repeat: no-repeat;
            background-position: center;
        }
        .name {
            font-weight: 700;
            letter-spacing: 6px;
            font-size: 32px;
            writing-mode: vertical-rl; /* 또는 vertical-lr */
            /* 필요시 */
            color:#256ef4;
        }
        &:hover {
            filter: brightness(1.02);
        }
        &:focus-visible {
            outline: 3px solid #fff;
            outline-offset: 2px;
            border-radius: 12px;
        }
    }
    &__panel {
        &:focus-visible {
            box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.85) inset;
            border-radius: 12px;
        }
    }
}

.panel__grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 16px;
}

.panel__box {
    background: #fff;
    color: #0f244d;
    border-radius: 14px;
    padding: 16px;
    display: grid;
    grid-template-columns: 56px 1fr auto;
    gap: 12px;
    align-items: center;
    box-shadow: 0 8px 20px rgba(15, 36, 77, 0.08);
    .picon {
        width: 56px;
        height: 56px;
        border-radius: 14px;
        display: grid;
        place-items: center;
        background: #f1f5ff;
        font-size: 22px;
    }
    .plabel {
        font-weight: 800;
    }
    .pnum {
        justify-self: start;
        font-size: 22px;
        font-weight: 900;
        color: #2b64e1;
        small {
            margin-left: 2px;
            font-size: 12px;
            color: #6b7a99;
            font-weight: 700;
        }
    }
    .pbtn {
        justify-self: end;
        padding: 8px 12px;
        border: 0;
        border-radius: 10px;
        font-weight: 800;
        color: #fff;
        background: #2b64e1;
        cursor: pointer;
        &:hover {
            filter: brightness(1.05);
        }
        &:active {
            transform: translateY(1px);
        }
    }
    .pbtn--ghost {
        background: #e9efff;
        color: #2b64e1;
    }
}
.subtabs {
    display: none;
    flex-wrap: wrap;
    margin: 0 0 12px;
    padding: 0;
    list-style: none;
}

.subtabs__btn {
    padding: 8px 12px;
    border: 0;
    cursor: pointer;
    font-weight: 700;
    color: #d8e5fd;
    transition: background 0.12s ease, transform 0.08s ease;
    border-bottom: 4px solid rgba(255,255,255,0.1);
    &:active {
        transform: translateY(1px);
    }
    &.is-active,
    &[aria-selected="true"] {
        color: #fff;
        border-bottom: 4px solid rgba(255,255,255,1);
    }
    &:focus-visible {
        outline: 2px solid #fff;
        outline-offset: 2px;
    }
}

.subpanel {    
    color: #0f244d;
    border-radius: 12px;
    .subpanel__title {
        font-weight: 900;
        margin: 0 0 8px;
    }

    .subpanel__stats {
        display: flex;
        align-items: center;
        gap:25px;
        list-style: disc;
        li{
            position: relative;
            display: flex;
            align-items: center;
            gap:30px;
            flex:1;
            height: 169px;
            padding: 30px;
            background-repeat: no-repeat;
            background-size: cover;
            background-image: url('@/assets/images/main/new-item-bg.png');
            i{
                display: block;
                width: 80px;
                height: 80px;
                border-radius: 20px;
                background-repeat: no-repeat;
                background-position: center;
                background-color: #eef2f7;
                &.chart{
                    background-image: url('@/assets/images/main/new-ico-chart.png');
                }
                &.graph{
                    background-image: url('@/assets/images/main/new-ico-graph.png');
                }
            }
            dl{
                dt{
                    color:#325ee6;
                    font-size: 17px;
                    margin-bottom: 20px;
                    font-weight: bold;
                }
                dd{
                    color:#325ee6;
                    font-size: 40px;
                    font-weight: bold;
                    span{
                        font-weight: normal;
                        color: #555555;
                        font-size: 17px;
                    }
                }
            }
            .down{
                position: absolute;
                right: 0;
                bottom: 0;
                display: inline-block;
                width: 40px;
                height: 40px;
                background-image: url('@/assets/images/main/new-item-down.png');
            }
        }
    }

}
</style>
