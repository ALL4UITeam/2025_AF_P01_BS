<script setup>
import { ref, computed } from 'vue'
import Button from 'primevue/button'

const props = defineProps({
    totalCount: {
        type: Number,
        required: false,
        default: 0
    },
    publicAddressCount: {
        type: Number,
        default: 0
    },
    providedAddressCount: {
        type: Number,
        default: 0
    },
    resultType: {
        type: String,
        default: 'single',
        validator: (value) => ['single', 'public', 'provided', 'both', 'combined'].includes(value)
    },
    sortTypes: {
        type: Array,
        default: () => [
            { label: '관련도순', value: 'relevance' },
            { label: '최신순', value: 'latest' },
            { label: '인기순', value: 'popular' }
        ]
    },
    defaultSort: {
        type: String,
        default: 'relevance'
    },
    activeIndex: {
        type: Number,
        default: 0,
        validator: (value) => value >= 0 && value <= 2
    }
})

const emit = defineEmits(['sort'])

// activeIndex가 설정된 경우 해당 인덱스의 정렬 옵션을 우선적으로 활성화
const initialSort = computed(() => {
    if (props.activeIndex >= 0 && props.activeIndex < props.sortTypes.length) {
        return props.sortTypes[props.activeIndex].value
    }
    return props.defaultSort
})

const currentSort = ref(initialSort.value)

const handleSort = (sortValue) => {
    currentSort.value = sortValue
    emit('sort', sortValue)
}

const getResultText = () => {
    switch (props.resultType) {
        case 'single':
            return `검색 결과 <span class="searchResultHeader__count">${props.totalCount}</span>건`
        case 'public':
            return `공개하는 주소 <span class="searchResultHeader__count">${props.publicAddressCount}</span>건`
        case 'provided':
            return `제공하는 주소 <span class="searchResultHeader__count">${props.providedAddressCount}</span>건`
        case 'both':
            return `공개하는 주소 <span class="searchResultHeader__count">${props.publicAddressCount}</span>건, 제공하는 주소 <span class="searchResultHeader__count">${props.providedAddressCount}</span>건`
        case 'combined':
            return `검색 결과 <span class="searchResultHeader__count">${props.totalCount}</span>건 (공개: <span class="searchResultHeader__count">${props.publicAddressCount}</span>건, 제공: <span class="searchResultHeader__count">${props.providedAddressCount}</span>건)`
        default:
            return `검색 결과 <span class="searchResultHeader__count">${props.totalCount}</span>건`
    }
}
</script>

<template>
    <div class="searchResultHeader">
        <div class="searchResultHeader__result" v-html="getResultText()">
        </div>
        <div class="searchResultHeader__function">
            <strong class="searchResultHeader__title">정렬기준</strong>
            <ul class="searchResultHeader__filter">
                <li v-for="type in sortTypes" :key="type.value">
                    <Button 
                        class="searchResultHeader__button"
                        :class="{ active: currentSort === type.value }"
                        @click="handleSort(type.value)"
                    >
                        {{ type.label }}
                    </Button>
                </li>
            </ul>
        </div>
    </div>
</template>


<style lang="scss" scoped>
	@use '@/assets/scss/contents/search/searchResultHeader';
</style>