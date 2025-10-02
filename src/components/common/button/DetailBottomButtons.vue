<script setup>
const props = defineProps({
    // 'left', 'right', 'both', 'center'
    type: {
        type: String,
        default: 'right',
        validator: (value) => ['left', 'right', 'both', 'center'].includes(value)
    },
    leftButtons: {
        type: Array,
        default: () => []
    },
    rightButtons: {
        type: Array,
        default: () => []
    },
    centerButtons: {
        type: Array,
        default: () => []
    }
})
</script>

<template>
    <div class="detailBottom" :class="type">
        <div v-if="['left', 'both'].includes(type)" class="detailBottom__left">
            <button 
                v-for="(button, index) in leftButtons" 
                :key="index"
                class="button-krds"
                :class="button.class"
                @click="button.onClick"
            >
                {{ button.text }}
            </button>
        </div>
        
        <div v-if="type === 'center'" class="detailBottom__center">
            <button 
                v-for="(button, index) in centerButtons" 
                :key="index"
                class="button-krds"
                :class="button.class"
                @click="button.onClick"
            >
                {{ button.text }}
            </button>
        </div>

        <div v-if="['right', 'both'].includes(type)" class="detailBottom__right">
            <button 
                v-for="(button, index) in rightButtons" 
                :key="index"
                class="button-krds"
                :class="button.class"
                @click="button.onClick"
            >
                {{ button.text }}
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.detailBottom {
    display: flex;
    margin-top:40px;

    &.left {
        justify-content: flex-start;
    }

    &.right {
        justify-content: flex-end;
    }

    &.both {
        justify-content: space-between;
    }

    &.center {
        justify-content: center;
    }

    .detailBottom__left, .detailBottom__right, .detailBottom__center {
        display: flex;
        gap: 10px;
    }
}
</style> 