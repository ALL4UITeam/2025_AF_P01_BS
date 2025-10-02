<script setup>
import { defineProps } from 'vue'

const props = defineProps({
    items: {
        type: Array,
        required: true,
        default: () => []
    }
})
</script>

<template>
    <ul class="basic-list">
        <li v-for="(item, index) in items" :key="index">
            <div class="basic-list__box">
                <div class="basic-list__image" v-if="item.image && item.image.trim()">
                    <img :src="item.image" :alt="item.imageAlt || item.title || '리스트 이미지'" />
                </div>
                <div class="basic-list__detail">
                    <p class="basic-list__title">[{{ item.category }}] {{ item.title }}</p>
                    <p class="basic-list__text">{{ item.description }}</p>
                    <div class="basic-list__other">
                        <div class="basic-list__dateBox">
                            <strong class="basic-list__dateTitle">기간:</strong>
                            <span class="basic-list__date">{{ item.date }}</span>
                        </div>
                        <ul class="basic-list__etc">
                            <li><span class="basic-list__view">{{ item.views }}</span></li>
                            <li><span class="basic-list__like">{{ item.likes }}</span></li>
                            <li><span class="basic-list__reply">{{ item.replies }}</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </li>
    </ul>
</template> 
<style lang="scss" scoped>
.basic-list {
    & > li {
        margin-top:24px;
    }
    &__box {
        display: flex;
        width: 100%;
        gap:28px;
        padding:32px 30px 32px 30px;
        border:1px solid #B1B8BE;
        border-radius: 12px;
    }
    
    &__detail {
        width: 100%;
    }
    &__image {
        overflow: hidden;
        width: 240px;
        min-width: 240px;
        height: 120px;
        background-color: #EEF1F6;

        & + .basic-list__detail {
            width: calc(100% - 268px);
        }

        img {
            width: 100%;
            height: 100%;
        }
    }
    &__title {
        overflow: hidden;
        color: #1D1D1D;
        font-size:19px;
        font-weight: 700;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    &__text {
        overflow: hidden;
        margin-top:22px;
        color: #1D1D1D;
        font-size:17px;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    &__other {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        margin-top:22px;
    }
    &__dateBox {
        display: flex;
        align-items: center;
        gap:8px;
    }
    &__dateTitle {
        font-size:17px;
        font-weight: 700;
    }
    &__date {
        font-size:17px;
    }
    &__etc {
        display: flex;
        align-items: center;

        li {
            padding-left:33px;
            background: url('@images/common/bg_line.png') no-repeat 16px 7px;

            &:first-child {
                background: none;
            }
        }
    }
    &__view {
        display: inline-block;
        padding-left:28px;
        background: url('@images/common/icon/icon_view.png') no-repeat 0 5px;
    }
    &__like {
        display: inline-block;
        padding-left:28px;
        background: url('@images/common/icon/icon_like.png') no-repeat 0 3px;
    }
    &__reply {
        display: inline-block;
        padding-left:28px;
        background: url('@images/common/icon/icon_reply.png') no-repeat 0 1px;
    }
}
</style>