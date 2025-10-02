<script setup>
import { ref, onMounted, watch } from 'vue'
import Button from 'primevue/button'

const props = defineProps({
  items: {
    type: Array,
    required: true,
    default: () => []
  }
})

const activeItem = ref(null)

onMounted(() => {
  if (props.items.length > 0) {
    activeItem.value = props.items[0].label
  }
})

const handleClick = (item) => {
  activeItem.value = item.label
  emit('click', item)
}

const emit = defineEmits(['click'])

watch(activeItem, (newVal) => {
  console.log('activeItem 변경됨:', newVal)
})
</script>

<template>
  <ul class="dataTabBox">
    <li 
      v-for="(item, index) in items" 
      :key="index"
      :class="['tabItem', { 'active': activeItem === item.label }]"
    >
      <Button 
        class="dataTabBox__button" 
        @click="handleClick(item)"
      >
        {{ item.label }} <span class="count">{{ item.count }}</span>
      </Button>
    </li>
  </ul>
</template>

<style lang="scss" scoped>
	@use '@/assets/scss/contents/tab/dataTabBox';
</style> 