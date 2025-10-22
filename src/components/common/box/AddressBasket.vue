<template>
    <!-- Complementary floating panel for selected addresses -->
    <aside v-if="modelValue" class="address-basket" role="complementary" aria-label="선택한 주소"
        @keydown.esc.prevent.stop="minimize">
        <header class="address-basket__header">
            <h2 id="ab-heading" class="address-basket__title">
                제공하는 주소 <span>장바구니</span>
            </h2>
            <button class="btn btn--mini" type="button" @click="minimize" aria-label="패널 닫기">
                
            </button>
        </header>

        <div class="address-basket__body" role="region" :aria-labelledby="'ab-heading'">
            <div class="address-basket__count">
                제공하는 주소 <span class="count" aria-live="polite" aria-atomic="true">{{ itemsLocal.length }}</span>건
            </div>
            <ul class="address-basket__list" role="list">
                <li v-for="(it, i) in itemsLocal" :key="it.id" class="address-basket__item">
                    <article class="address-basket__item-body">
                        <h3 class="address-basket__item-title">{{ it.title }}</h3>
                        <div class="address-basket__item-meta">
                            <div>
                                <span class="label">[전체]</span>{{ it.whole.join(', ') }}
                            </div>
                            <div v-if="it.change">
                                <span class="label">[변동]</span> {{ it.change }}
                            </div>
                        </div>
                    </article>
                    <button class="btn btn--icon" type="button" @click="remove(i)"
                        :aria-label="`항목 삭제: ${it.title}`">
                        ×
                    </button>
                </li>
            </ul>
            <p v-if="!itemsLocal.length" class="address-basket__empty" role="note">제공하는 주소가 없습니다.</p>
        </div>

        <footer class="address-basket__footer">
            <button class="btn btn--ghost" type="button" :disabled="!initialLen" @click="reset">
                초기화
            </button>
            <button class="btn btn--primary" type="button" :disabled="!itemsLocal.length" @click="apply">
                신청하기
            </button>
        </footer>
    </aside>

    <!-- Minimized cart button -->
    <button v-if="min" class="address-basket__mini" type="button" @click="expand"
        :aria-expanded="modelValue ? 'true' : 'false'" aria-controls="ab-panel" aria-label="장바구니 열기">
        <span class="badge" aria-live="polite" aria-atomic="true" :aria-label="`담긴 항목 수: ${itemsLocal.length}개`">
            {{ itemsLocal.length }}
        </span>
        <span class="sr-only">선택한 주소 장바구니</span>
    </button>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted, nextTick } from 'vue'

type Item = { id: string | number; title: string; whole: string[]; change?: string }

const props = defineProps<{ modelValue: boolean; items?: Item[] }>()
const emit = defineEmits<{
    (e: 'update:modelValue', v: boolean): void
    (e: 'update:items', v: Item[]): void
    (e: 'apply', v: Item[]): void
    (e: 'reset'): void
}>()

const itemsLocal = ref<Item[]>(props.items ? [...props.items] : [])
const initialLen = computed(() => props.items?.length ?? 0)
const min = ref(false) // minimized state
const panelRef = ref<HTMLElement | null>(null)

watch(
    () => props.items,
    v => {
        itemsLocal.value = v ? [...v] : []
    }
)

watch(
    () => props.modelValue,
    async v => {
        if (v) {
            // focus the panel when opened
            await nextTick()
            panelRef.value?.focus()
        }
    }
)

onMounted(() => {
    if (props.modelValue) {
        panelRef.value?.focus()
    }
})

function minimize() {
    min.value = true
    emit('update:modelValue', false)
}
function expand() {
    min.value = false
    emit('update:modelValue', true)
}
function remove(i: number) {
    itemsLocal.value.splice(i, 1)
    emit('update:items', [...itemsLocal.value])
}
function reset() {
    itemsLocal.value = []
    emit('update:items', [])
    emit('reset')
}
function apply() {
    emit('apply', [...itemsLocal.value])
}
</script>

<style scoped lang="scss">
    @use '@/assets/scss/contents/box/basket.scss';
</style>
