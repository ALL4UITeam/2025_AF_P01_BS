<script setup>
defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})
</script>

<template>
  <ul class="horizontal-board">
    <li v-for="item in items" :key="item.id">
      <div v-if="item.image" class="horizontal-board__imagesBox">
        <img :src="item.image" :alt="item.imageAlt" />
      </div>
      <p class="horizontal-board__title">{{ item.title }}</p>
      <p class="horizontal-board__description">{{ item.description }}</p>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.horizontal-board {
  display: flex;
  width: 100%;
  gap:0 24px;
  margin-top:24px;

  li {
    position: relative;
    width: 384px;
    height: 296px;
    padding:182px 31px 0;
    background: url('@images/common/bg_image_basic.gif') no-repeat 32px 32px;
    border:1px solid #c6c6c6;
    border-radius: 25px;
  }

  &__imagesBox {
    position: absolute;
    left:32px;
    top:32px;
    width: 320px;
    height: 120px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  &__title {
    overflow: hidden;
    text-overflow: ellipsis;
    font-size:19px;
    font-weight: 700;
    white-space: nowrap;
  }
  &__description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    margin-top:14px;
    color:#555555;
    font-size:17px;
  }
}
</style> 